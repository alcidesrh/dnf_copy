<template>
  <div>
    <v-row>
      <v-col v-if="pages">
        <v-text-field
          style="max-width: 300px"
          v-model="search "
          label="Buscar"
          prepend-inner-icon="mdi-magnify"
          clearable
          :loading="loadingList"
        ></v-text-field>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn
          rounded
          color="primary"
          @click="$router.push({name: 'broker_edit_profile', params: { id: 'new', role: 'broker' }})"
        >
          <v-icon size="20" class="mr-1">mdi-plus</v-icon>Crear Usuario
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="items.length">
      <v-col cols="12" md="4" class="pa-1" v-for="(item, index) in items" :key="index">
        <ListUserCard :item="item" role="broker" v-on:remove="remove" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <Alert text="No se encontraron representantes" />
      </v-col>
    </v-row>

    <v-pagination
      class="mt-5"
      v-show="!loadingList && pages"
      v-model="page"
      :length="pages"
      :total-visible="pages - perPage > 5 ? 5 : pages"
    ></v-pagination>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
import ListUserCard from "./ListUserCard";
import Alert from "../util/Alert";
import EventBus from "../../event-bus";
import SearchMixin from "../mixins/SearchMixin";
import ListMixin from "../mixins/ListMixin";

export default {
  mixins:[SearchMixin, ListMixin],
  components: {
    ListUserCard,
    Alert
  },
  computed: {
    ...mapFields("broker", [
      "page",
      "items",
      "loadingList",
      "perPage",
      "pages",
      "search"
    ])
  },
  methods: {
    ...mapActions({
      removeUser: "user/remove",
      getItemsAction: "broker/getItems"
    }),
    getItems(){
      this.getItemsAction({
        endpoint: "users",
        query: { role: "broker" }
      });
    },
    remove(id) {
      if (window.confirm("Seguro desea eliminar este usuario.")) {
        this.removeUser("users/" + id).then(response => {
          if (response.data == "deleted") {
            EventBus.$emit("alert", {
              text: "Se ha eliminado el usuario",
              color: "success"
            });
            this.getItems();
          }
        });
      }
    }
  },
};
</script>
