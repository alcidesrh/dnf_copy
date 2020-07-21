<template></template>
<script>
import { fieldRequire, emailRequire } from "../../util";
import { isNumber } from "../../util";

import UserSelect from "../util/UserSelect";
import FileUpload from "../util/FileUpload";
import UserSelectMultiple from "../util/UserSelectMultiple";
import DatePicker from "../util/DatePicker";

import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";

import EventBus from "../../event-bus";

export default {
  components: {
    UserSelect,
    FileUpload,
    UserSelectMultiple,
    DatePicker
  },
  data: () => ({
    emailRequire: emailRequire,
    fieldRequire: fieldRequire,
    image: null,
    parent: null,
    children: null,
    childrenRemoved: [],
    card: {},
    pickerDialog: null
  }),
  watch: {
    pickerDialog(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  computed: {
    ...mapFields("user", ["loadingItem", "usersSelect", "item"]),
    ...mapFields("role", { roles: "items" }),
    ...mapFields("company", ["companySelect"]),
    childrenSelect() {
      return this.usersSelect.filter(
        item => !this.parent || item.id != this.parent.id
      );
    }
  },
  methods: {
    isNumber(event, val) {
      return isNumber(event.keyCode) ? val : val.slice(0, -1);
    },
    ...mapActions({
      getItem: "user/getItemGeneric",
      getItems: "user/getItemsGeneric",
      getCompanies: "company/getItemsGeneric",
      getRoles: "role/getTableList",
      saveAction: "user/save",
      list: "elite/getItems"
    }),

    save() {
      if (!this.$refs.form.validate()) return;

      this.item.parent = this.parent;
      this.item.children = this.children ? this.children.map(i => i.id) : [];
      this.item.childrenRemoved = this.childrenRemoved;
      if (this.image && this.image.id) this.item.image = { id: this.image.id };
      else if (this.image)
        this.item.image = { url: this.image.url, name: this.image.name };

      this.saveAction("user").then(response => {
        if (typeof this.item.id != typeof undefined) {
          if (this.items.length) {
            let index = 0;
            this.items.filter((i, index2) => {
              if (i.id == this.item.id) {
                index = index2;
              }
            });
            if (index >= 0) {
              this.$set(this.items, index, response.data.data);
            }

            this.backToList();
          }
        } else {
          if (response.data.error)
            EventBus.$emit("alert", {
              text: response.data.error,
              color: "warning"
            });
          else {
            EventBus.$emit("alert", {
              text: response.data,
              color: "success"
            });
            this.paymentDialog = false;
          }
          // this.refreshList();
        }
      });
    }
  },

  created() {
    this.parent = {};
    const id = this.$route.params.id;

    if (this.roles.length == 0)
      this.getRoles({
        query: { table: "roles", fields: ["id", "name"] },
        saveState: true
      });

    if (this.companySelect.length == 0)
      this.getCompanies({
        endpoint: "company-dinamic-list",
        fields: ["id", "name", "image"]
      }).then(response => (this.companySelect = response.data.data));

    if (!this.usersSelect.length)
      this.getItems("users-select")
        .then(response => {
          if (response.data.data.length) this.usersSelect = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });

    if (id && id != "new")
      this.getItem({
        endpoint: "user/edit",
        query: { id: decodeURIComponent(id) }
      }).then(item => {
        if (item.parent) {
          this.parent = item.parent;
        }
        this.image = item.image;
        this.children = item.children;
        this.role = item.role.slug;
        this.item = item;
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