<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped :mini-variant.sync="mini"
      :permanent="$vuetify.breakpoint.mdAndUp">
      <v-container class="mb-3" v-if="!mini">
        <v-icon @click.stop="mini = !mini" class="rotate180 float-right">mdi-exit-to-app</v-icon>
      </v-container>

      <v-list dense v-if="user">
        <v-list-item
          v-if="$can('list', 'agency')"
          link
          @click="menuClick('agencies')"
          id="agencies"
        >
          <v-list-item-action>
            <v-icon>mdi-office-building</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <div>Agencias</div>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="$can('list', 'representative_elite')"
          link
          @click="menuClick('elite')"
          id="elite"
        >
          <v-list-item-action>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <div>Representantes élites</div>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="$can('list', 'representative_broker')"
          link
          @click="menuClick('broker')"
          id="broker"
        >
          <v-list-item-action>
            <v-icon>mdi-account-tie-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <div>Representantes</div>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="$can('list', 'representative')"
          link
          @click="menuClick('representative')"
          id="representative"
        >
          <v-list-item-action>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <div>Representantes</div>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="$can('list', 'recruitment')"
          link
          @click="menuClick('recruitment')"
          id="recruitment"
        >
          <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <div>Reclutamiento</div>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="$can('list', 'category')"
          link
          @click="menuClick('category')"
          id="category"
        >
          <v-list-item-action>
            <v-icon>mdi-sitemap</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <div>Categorías</div>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item link v-if="$can('list', 'client')">
          <v-list-item-action>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <div>Clientes</div>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-right clipped-left color="primary" dark>
      <v-icon v-show="!drawer" @click.stop="drawer = !drawer" class="mr-5">mdi-exit-to-app</v-icon>

      <!-- <v-toolbar-title>
        <v-img :src="host + '/images/logo.png'" width="120" aspect-ratio="2.5" contain></v-img>
      </v-toolbar-title> -->

      <v-spacer></v-spacer>

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon> -->
    </v-app-bar>

    <!-- <v-navigation-drawer v-model="drawerRight" app clipped right>
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="left" fixed temporary></v-navigation-drawer> -->

    <snackBar :text="snackBarText" :color="snackBarColor" :key="showSnackBar" />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapGetters } from "vuex";
import snackBar from "../util/Snackbar";
import EventBus from "../../event-bus";

export default {
  components: {
    snackBar
  },
  data: () => ({
    drawer: true,
    // drawerRight: false,
    // left: false,
    loading: false,
    snackBarText: null,
    snackBarColor: null,
    showSnackBar: false,
    mini:false
  }),
  computed: {
    ...mapGetters({
      host: "util/host"
    }),
    ...mapFields("user", ["user", "error"])
  },
  methods: {
    logout() {
      this.loading = true;
      this.$store.dispatch("user/logout").then(() => {
        this.loading = false;
        window.location.href = "/"
      });
    },
    menuClick(path, params) {
      if (params) this.$router.push({ name: path, params }, () => {});
      else {
        this.$router.push({ name: path }, () => {});
      }
      this.selectMenuLink(path);
    },

    selectMenuLink(id) {
      let element = document.getElementsByClassName("section-active");
      if (element.length) {
        [].forEach.call(element, function(el) {
          el.classList.remove("section-active");
        });
      }

      element = document.getElementById(id);
      element.classList.add("section-active");
    }
  },
  watch: {
    user(val) {
      if (val) {
        this.$nextTick(function() {
          if (typeof route == typeof "string")
            route = Object.values(JSON.parse(route));

          if (typeof route != typeof undefined && route.length) {
            if (route.length == 1) {
              // this.$router.push( route[0], () => {});
              this.selectMenuLink(route[0]);
            } else if (route.length == 2) {
              // if(route[0] = 'users' + '/' + route[1])
              // this.$router.push(route[0] + '/' + route[1]);
              // if ((route[0] = "analytic")) this.analytic = true;
              // this.$router.push(
              //   { name: route[0], params: { section: route[1] } },
              //   () => {}
              // );
              // this.selectMenuLink(route[0] + "/" + route[1]);
            }
          } else {
            if (this.$can("list", "agency")) {
              this.$router.push({ name: "agencies" }, () => {});
              this.selectMenuLink("agencies");
            } else if (this.$can("list", "representative")) {
              this.$router.push({ name: "broker" }, () => {});
              this.selectMenuLink("broker");
            }
          }
        });
      }
    }
  },
  created() {
    this.drawer = this.$vuetify.breakpoint.mdAndUp;

    EventBus.$on("alert", payload => {
      if (payload.color) this.snackBarColor = payload.color;

      this.snackBarText = payload.text;

      this.showSnackBar = !this.showSnackBar;
    });
  }
};
</script>

<style scoped>
.rotate180 {
  transform: rotate(180deg);
}
.section-active {
  background-color: #E53935;
}
.section-active.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled),
.section-active .mdi {
  color: white !important;
}
</style>