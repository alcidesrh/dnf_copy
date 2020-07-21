import axios from "axios";
import { getField, updateField } from "vuex-map-fields";
import ItemState from "../../states/state_item";
import * as actionsItem from "../../actions/action_item";
import { getItemsGeneric } from "../../actions/action_list";
import { AbilityBuilder, Ability } from "@casl/ability";

function getAbilityRule(user) {
    const { can, cannot, rules } = new AbilityBuilder(Ability);

    switch (user.role) {
        case "admin": {
            can("manage", "all");
            cannot('list', 'representative');
            break;
        }
        case "agency": {
            can("list", "agency");
        }
        default: {
            can("list", "representative");
            can("list", "recruitment");
        }
    }

    

    return rules;
}
export default {
    namespaced: true,
    state: {
        ...ItemState,
        user: null,
        error: null,
        ability: new Ability(),
        usersSelect: []
    },
    getters: {
        getField
    },
    mutations: {
        updateField
    },
    actions: {
        getItemsGeneric,
        ...actionsItem,

        authenticate({ rootState, state }, param) {
            const endpoint = rootState.util.entrypoint + "authenticate";
            return axios
                .post(endpoint, param)
                .then(response => {
                    state.user = response.data.data;
                    state.ability.update(getAbilityRule(state.user));
                    return true;
                })
                .catch(e => {
                    console.log(e.response);
                    state.error = e.response;
                    return e.response;
                });
        },

        logout({ rootState, state }, param) {
            const endpoint = rootState.util.entrypoint + "logout";
            return axios
                .post(endpoint, param)
                .then(response => {})
                .catch(e => {
                    console.log(e.response);
                    return e.response;
                });
        },

        getUser({ rootState, state }, id = null) {
            const endpoint = rootState.util.entrypoint + "user";
            return axios
                .get(endpoint)
                .then(response => {
                    state.user = response.data.data;
                    state.ability.update(getAbilityRule(state.user));
                })
                .catch(e => {
                    console.log(e.response);
                    return e.response;
                });
        },

        reset({ state }) {
            state.user = null;
            state.error = null;
            state.ability = new Ability();
            state.usersSelect = [];
        }
    }
};
