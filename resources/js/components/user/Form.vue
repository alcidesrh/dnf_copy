<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="municipality_name"
        class="form-control-label">name</label>
        <input
          id="municipality_name"
          v-model="item.name"
          :class="['form-control', !isValid('name') ? 'is-invalid' : 'is-valid']"
          type="text"
          placeholder="">
      <div
        v-if="!isValid('name')"
        class="invalid-feedback">{{ violations.name }}</div>
    </div>
    <div class="form-group">
      <label
        for="municipality_coord"
        class="form-control-label">coord</label>
        <input
          id="municipality_coord"
          v-model="item.coord"
          :class="['form-control', !isValid('coord') ? 'is-invalid' : 'is-valid']"
          type="text"
          placeholder="">
      <div
        v-if="!isValid('coord')"
        class="invalid-feedback">{{ violations.coord }}</div>
    </div>
    <div class="form-group">
      <label
        for="municipality_province"
        class="form-control-label">province</label>
        <select
          v-model="item.province"
          id="municipality_province"
          class="form-control"
        >
          <option v-for="selectItem in provinceSelectItems"
                  :key="selectItem['@id']"
                  :value="selectItem['@id']"
                  :selected="isSelected('province', selectItem['@id'])">{{ selectItem.name }}
          </option>
        </select>
      <div
        v-if="!isValid('province')"
        class="invalid-feedback">{{ violations.province }}</div>
    </div>

    <button
      type="submit"
      class="btn btn-success">Submit</button>
  </form>
</template>

<script>
  import { find, get, isUndefined } from 'lodash';
  import { mapFields } from 'vuex-map-fields';
  import { mapActions } from 'vuex';

  export default {
  props: {
    handleSubmit: {
      type: Function,
      required: true,
    },

    values: {
      type: Object,
      required: true,
    },

    errors: {
      type: Object,
      default: () => {},
    },

    initialValues: {
      type: Object,
      default: () => {},
    }
  },

  mounted() {
    this.provinceGetSelectItems();
  },

  computed: {
    ...mapFields('province/list', {
      'provinceSelectItems': 'selectItems',
    }),

    // eslint-disable-next-line
    item() {
      return this.initialValues || this.values;
    },

    violations() {
      return this.errors || {};
    },
  },

  methods: {
    ...mapActions({
        provinceGetSelectItems: 'province/list/getSelectItems',
    }),

    isSelected(collection, id) {
      return find(this.item[collection], ['@id', id]) !== undefined;
    },

    isValid(key) {
      return isUndefined(get(this.violations, key));
    },
  },
};
</script>
