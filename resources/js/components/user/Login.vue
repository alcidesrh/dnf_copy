<template>
  <v-dialog content-class="z-index-20" v-model="dialog" width="500" persistent>
    <v-card>
      <v-card-title class="headline primary white--text" primary-title>{{!newPassword ? 'DNF Dashboard' : 'Welcome to DNF'}}</v-card-title>

      <v-card-text>
        <v-alert v-if="error" type="error" class="my-3">{{error.data.error || error.data.message}}</v-alert>

        <v-form ref="form" v-model="valid" :lazy-validation="lazy" class="my-5">
          <v-text-field :disabled="newPassword != ''"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            prepend-icon="mdi-email"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :label="newPassword ? 'Crear contraseña' : 'Contraseña'"
            prepend-icon="mdi-lock"
            type="password"
            required
          ></v-text-field>

          <v-text-field v-if="newPassword"
            v-model="password2"
            :rules="passwordRules"
            label="Repetir contraseña"
            prepend-icon="mdi-lock"
            type="password"
            required
          ></v-text-field>

          <v-checkbox v-if="!newPassword" v-model="remember" label="Recordar contraseña?" required></v-checkbox>

          <v-layout class="d-flex justify-end">
            <v-btn
              @click="authenticate"
              color="primary"
              class="float-right"
              :loading="loading"
            >{{'Iniciar sessión'}}</v-btn>
          </v-layout>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import EventBus from "../../event-bus";
import { mapFields } from "vuex-map-fields";
export default {
  props: ['newPassword'],
  data: () => ({
    dialog: true,
    valid: true,
    password: "",
    password2: "",
    passwordRules: [v => !!v || "Password is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    remember: false,
    lazy: false,
    loading: false
  }),

  computed: {
    ...mapFields("user", ["error"])
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    authenticate() {
      if (this.$refs.form.validate()) {
        if(this.newPassword && this.password != this.password2){
          this.error = {data: {error: 'Passwords must be equal.'}};
          return;
        }
        this.loading = true;
        this.$store
          .dispatch("user/authenticate", {
            email: this.email,
            password: this.password,
            remember: this.remember,
            newPassword: this.newPassword ? true : false
          })
          .then(() => {
            this.loading = false;
          })
          .catch(e => {
            console.log(e);
            this.error = e;
          });
      }
    }
  },
  created(){
    this.email = this.newPassword || "";
  }
};
</script>