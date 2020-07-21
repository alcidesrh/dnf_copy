<template>
  <v-container fluid v-if="item">
    <div>
      <v-row>
        <v-col>
          <v-form ref="form" lazy-validation>
            <v-row>
              <v-col cols="12" md="6">
                <FileUpload :image.sync="image" icon="mdi-account" />
              </v-col>
              <v-col cols="12" md="6" class="d-md-flex justify-md-end">
                <v-checkbox v-model="item.active" label="Activado"></v-checkbox>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-text-field v-model="item.name" label="Nombre" :rules="fieldRequire" required></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="item.email" label="Email" :rules="emailRequire" required></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="item.phone"
                  label="Número telefónico"
                  :rules="fieldRequire"
                  required
                  v-on:keyup="item.phone = isNumber($event, item.phone)"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="item.address"
                  label="Dirección"
                  :rules="fieldRequire"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <DatePicker
                  label="Fecha nacimiento"
                  birthday="true"
                  :date-param.sync="item.birthday"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-text-field v-model="item.title" label="Título"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="item.commission_rate"
                  label="Comisión"
                  v-on:keyup="item.commission_rate = isNumber($event, item.commission_rate)"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-checkbox v-model="item.licensed" label="Liscenciado"></v-checkbox>
              </v-col>
            </v-row>

            <div v-if="$can('assing', 'role')">
              <v-row>
                <v-col cols="12" md="5">
                  <v-select
                    v-model="item.role"
                    :items="roles"
                    label="Rol"
                    item-value="id"
                    item-text="name"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="5">
                  <v-select
                    v-model="item.company_id"
                    :items="companySelect"
                    label="Agencia"
                    item-value="id"
                    item-text="name"
                  ></v-select>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="7" md="5">
                  <UserSelect :user.sync="parent" :users="usersSelect" label="Padre" />
                </v-col>
                <v-col cols="5" md="3"></v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <UserSelectMultiple
                    :usersSelected.sync="children"
                    :usersRemoved.sync="childrenRemoved"
                    :users="childrenSelect"
                    label="Hijos"
                  />
                </v-col>
              </v-row>
            </div>

            <v-row v-if="!item.id">
              <v-col cols="12">
                <v-card-text>
                  <p>Usted va a pagar la membresía del nuevo representante. Una nueva cuenta será creada en el sistema y un correo será enviado al nuevo representante para que active su cuenta.</p>
                  <strong>Membresia: $80</strong>
                </v-card-text>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="item.card_number"
                  label="Número de tarjeta"
                  required
                  :rules="fieldRequire"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field v-model="item.card_cvc" label="CVC" required :rules="fieldRequire"></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-dialog
                  ref="dialog"
                  v-model="pickerDialog"
                  :return-value.sync="card.card_date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="item.card_date"
                      label="Vencimiento"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      required
                      :rules="fieldRequire"
                    ></v-text-field>
                  </template>
                  <v-date-picker ref="picker" v-model="item.card_date" scrollable type="month">
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="pickerDialog = false">Cancelar</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(item.card_date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="d-flex justify-end">
                <v-btn
                  rounded
                  color="primary"
                  dark
                  class="mr-3"
                  @click="$router.push({ name: 'representative_list' })"
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
import EditUserMixin from "../mixins/EditUserMixin";

export default {
  mixins: [EditUserMixin],
  computed: {
    ...mapFields("representative", ["items"])
  },
  ...mapActions({
    list: "representative/getItems"
  }),
  methods: {
    refreshList() {
      this.list({
        endpoint: "users"
      });
    },
    backToList() {
      this.$router.push({ name: "representative_list" });
    }
  }
};
</script>