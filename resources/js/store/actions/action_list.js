import axios from "axios";
import { objectToGetParameters } from "../../util";

export const getItems = ({ rootState, state }, params) => {
    state.loadingList = true;

    let endpoint, query;

    ({ endpoint, query } = params);

    let uri = "";
    if (endpoint) {
        uri =
            rootState.util.entrypoint +
            endpoint +
            `?page=${state.page}&perPage=${state.perPage}`;
        if (query) uri = uri + "&" + objectToGetParameters(query);
    } else {
        uri =
            rootState.util.entrypoint +
            params +
            `?page=${state.page}&perPage=${state.perPage}`;
    }

    if (state.search) uri = uri + "&search=" + state.search;

    return axios
        .get(uri)
        .then(response => {
            console.log(response);

            state.loadingList = false;

            state.items = response.data.data;

            if (response.data.meta && response.data.meta.total) {
                if (response.data.meta.total > state.perPage)
                    state.pages = Math.ceil(
                        parseFloat(response.data.meta.total / state.perPage)
                    );
                else state.pages = 0;

                state.total = response.data.meta.total;

                return response.data.meta.total;
            }

            return response;
        })
        .catch(e => {
            console.log(e);
            state.loadingList = false;
        });
};

export const getItemsGeneric = ({ rootState, state }, params) => {
    let endpoint, query, page, perPage, fields;

    ({ endpoint, query, page, perPage, fields } = params);

    let uri = rootState.util.entrypoint;
    if (endpoint) {
        uri = uri + endpoint;
        if (page && perPage) {
            uri =
                rootState.util.entrypoint +
                endpoint +
                `?page=${state.page}&perPage=${state.perPage}`;
            if (query) uri = uri + "&" + objectToGetParameters(query);
        }
    } else {
        uri = uri + params;
    }

    return axios
        .post(uri, { ...query, fields: fields })
        .then(response => {
            return response;
        })
        .catch(e => {
            console.log(e);
        });
};

export const getTableList = ({ rootState, state }, params) => {
    let endpoint = "generic/list",
        query,
        page,
        perPage,
        saveState;

    ({ query, saveState } = params);

    let uri = rootState.util.entrypoint + endpoint;

    return axios
        .post(uri, query)
        .then(response => {
            if (!saveState) return response;

            if (!(page && perPage)) {
                state.items = response.data.data;
                return response;
            }

            state.items = response.data.data;

            if (response.data.meta.total > state.perPage)
                state.pages = Math.ceil(
                    parseFloat(response.data.meta.total / state.perPage)
                );

            state.total = response.data.meta.total;

            return response.data.meta.total;
        })
        .catch(e => {
            console.log(e);
        });
};
