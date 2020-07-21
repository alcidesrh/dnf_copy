<template>
  <v-container fluid v-if="item">
    <div>
      <v-row>
        <v-col>
          <v-form ref="form" lazy-validation>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field v-model="item.name" label="Nombre" :rules="fieldRequire" required></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-treeview v-if="items.length" v-model="categories" selectable open-all :items="items" activatable open-on-click>
                  <template v-slot:label="{ item }">
                    <v-hover v-slot:default="{ hover }">
                      <div>
                        {{item.name}}
                        <v-btn
                          @click="$router.push({name: 'edit', params: { id: item.id }})"
                          v-if="hover"
                          small
                          color="teal"
                          icon
                        >
                          <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                      </div>
                    </v-hover>
                  </template>
                </v-treeview>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="d-flex justify-end">
                <v-btn
                  rounded
                  color="primary"
                  dark
                  class="mr-3"
                  @click="$router.push({ name: 'category_list' })"
                >Cancelar</v-btn>
                <v-btn rounded color="primary" dark @click="save()" :loading="loadingItem">Guardar</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
import { fieldRequire } from "../../util";

export default {
  data: () => ({
    fieldRequire: fieldRequire,
    categories: []
  }),
  computed: {
    ...mapFields("category", ["item", "items", "loadingItem"])
    // ...mapFields("user", ["usersSelect"]),
  },
  methods: {
    ...mapActions({
      getItem: "category/getItem",
      saveAction: "category/save",
      getItems: "category/getItems"
    }),
    save() {
      if (!this.$refs.form.validate()) return;
      this.item.owner = this.owner;
      this.item.personal = this.personal.map(i => i.id);
      this.item.personalRemoved = this.personalRemoved;
      if (this.image && this.image.id) this.item.image = { id: this.image.id };
      else if (this.image)
        this.item.image = { url: this.image.url, name: this.image.name };

      this.saveAction("company").then(item => {
        if (this.items.length) {
          let index = 0;
          this.items.filter((i, index2) => {
            if (i.id == this.item.id) {
              index = index2;
            }
          });
          if (index) {
            this.item.staff = this.item.personal.length;
            if (this.owner) this.item.staff++;
            this.$set(this.items, index, this.item);
          } else this.getCompanies("companies");
        }
        this.$router.push({ name: "list" });
      });
    },
    getChildren(childs){
      let children = [];
      childs.forEach(i => {
        children.push(i);
        if(i.children.length) children.push(...this.getChildren(i.children));
      });
      return children;
    }
  },
  watch:{
    categories(val){
      console.log(val);
    }
  },
  created() {
    if(!this.items.length) this.getItems('categories');
    const id = this.$route.params.id;
    if (id && id != "new")
      this.getItem({
        endpoint: "category",
        query: { id: decodeURIComponent(id) }
      }).then(() => {
        this.categories = this.getChildren(this.item.children).map(i => i.id);

        console.log(this.categories);
      });
    else {
      this.item = {};
    }
  },
  destroyed() {
    this.item = null;
  }
};
</script>