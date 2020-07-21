<template>
  <div>
    <v-row  v-if="pages">
      <v-col>
        <v-text-field
          style="max-width: 300px"
          v-model="search "
          label="Buscar"
          prepend-inner-icon="mdi-magnify"
          clearable
          :loading="loadingList"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="items"
          :server-items-length="total"
          :options.sync="options"
          :loading="loadingList"
          class="elevation-1"
          :items-per-page="perPage"
          :footer-props="{
            showFirstLastPage: true,
            itemsPerPageOptions: [10,15,30,100,-1]
    }"
        >
          <template v-slot:item.created_at="{ item }">{{ item.created_at | dateFormat }}</template>
          <template v-slot:item.status="{ item }">
            <v-chip v-if="item.second_training_assisted" color="green" dark>segundo trn</v-chip>
            <v-chip v-else-if="item.first_training_assisted" color="teal" dark>primera trn</v-chip>
            <v-chip v-else-if="item.hired" color="amber" dark>contratado</v-chip>
            <v-chip v-else-if="item.second_interview_assisted" color="warning" dark>segundo int</v-chip>
            <v-chip v-else color="red" dark>primera int</v-chip>
          </template>
          <template v-slot:item.action="{ item }">
            <div style="white-space: nowrap;">
              <v-btn
              icon
              @click="$router.push({name: 'recruitment_profile', params: { id: item.id }})"
            >
              <v-icon size="20" color="teal">mdi-pencil</v-icon>
            </v-btn>

            <v-btn icon @click="remove(item.id)">
              <v-icon size="20" color="red">mdi-delete</v-icon>
            </v-btn>
            </div>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
import ListMixin from "../mixins/ListTableMixin";
import SearchMixin from "../mixins/SearchMixin";

export default {
  mixins: [ListMixin, SearchMixin],
  data: () => ({
    headers: [
      { text: "Creado", value: "created_at" },
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "first_name"
      },
      { text: "Apellido", value: "last_name" },
      { text: "	Email", value: "email" },
      { text: "Teléfono", value: "phone" },
      { text: "Referido por", value: "referrer" },
      { text: "Estado", value: "status" },
      { text: "", value: "action", sortable: false }
    ]
  }),
  computed: {
    ...mapFields("recruitment", [
      "page",
      "items",
      "loadingList",
      "perPage",
      "pages",
      "total",
      "search"
    ])
  },
  methods: {
    ...mapActions({
      getItemsAction: "recruitment/getItems",
      getRemoveAction: "recruitment/remove"
    }),
    getItems() {
      this.getItemsAction("recruitment");
    },
    remove(id) {
      if (window.confirm("Seguro desea eliminar este usuario."))
      this.getRemoveAction(`recruitment/${id}`).then(response => {
        if (response.data == "deleted") this.getItems();
      });
    }
  }
};
</script>
