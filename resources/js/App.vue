<template>
  <v-app>
    <login v-if="!user && !loading" :new-password="newPassword" />

    <v-layout :class="{'bg-blur': !user && $vuetify.breakpoint.mdAndUp}">
      <headerBar />

      <v-main>
        <div class="w-100 pa-5 pa-md-10 mx-auto">
          <router-view :key="$route.path"></router-view>
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import headerBar from "./components/layout/Header";
import login from "./components/user/Login";
export default {
  components: {
    headerBar,
    login
  },
  props: {
    source: String
  },

  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    loading: false
  }),
  computed: {
    ...mapFields("user", ["user", "error"]),
    newPassword() {
      if (typeof route == typeof "string") {
        const user = JSON.parse(route);
        return typeof user.email != typeof undefined ? user.email : false;
      }
      return false;
    }
  },
  async created() {
    this.$vuetify.lang.current = 'es'
    if (this.newPassword) return;
    this.loading = true;
    await this.$store.dispatch("user/getUser").then(() => {
      this.loading = false;
      if (this.error) {
        this.$store.dispatch("user/reset");
      }
    });
  }
};
</script>

<style scoped>
.bg-blur {
  filter: blur(8px);
  -webkit-filter: blur(8px);
  z-index: 10;
}
.bg-text {
  filter: blur(0px);
  -webkit-filter: blur(0px);

  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>