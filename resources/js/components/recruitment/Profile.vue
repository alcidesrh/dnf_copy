<template>
  <v-container fluid v-if="item">
    <v-row>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12" class="py-0">
            <DatePicker label="Segunda Entrevista" :date-param.sync="item.second_interview_date" />
          </v-col>
          <v-col cols="12" class="d-flex py-0">
            <v-checkbox v-model="item.second_interview_assisted" label="Atendida"></v-checkbox>
            <v-checkbox v-model="item.hired" class="ml-3" label="Contratado"></v-checkbox>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12" class="py-0">
            <DatePicker label="Primer Entrenamiento" :date-param.sync="item.first_training_date" />
          </v-col>
          <v-col cols="12" class="d-flex py-0">
            <v-checkbox v-model="item.first_training_assisted" label="Atendido"></v-checkbox>
            <v-checkbox v-model="oxygen" :disabled="oxygenDisabled" class="ml-3" label="Oxígeno"></v-checkbox>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12" class="py-0">
            <DatePicker label="Segundo Entrenamiento" :date-param.sync="item.second_training_date" />
          </v-col>
          <v-col cols="12" class="d-flex py-0">
            <v-checkbox v-model="item.second_training_assisted" label="Atendido"></v-checkbox>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn
          rounded
          color="primary"
          dark
          class="mr-3"
          @click="$router.push({ name: 'recruitment' })"
        >Cancelar</v-btn>
        <v-btn rounded color="primary" dark @click="save('recruitment')" :loading="loadingItem">Guardar</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn rounded @click="showMore = !showMore" color="green" dark min-width="100%">
          <span v-if="!showMore">Mostrar mas</span>
          <span v-else>Mostrar menos</span>
        </v-btn>
      </v-col>
    </v-row>

    <div v-if="showMore">
      <v-row>
        <v-col>
          <v-form ref="form" lazy-validation>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="item.referrer" label="Referido por" disabled></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="item.number" label="Número de referencia" disabled></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="item.first_name"
                  label="Nombre"
                  :rules="fieldRequire"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="item.last_name"
                  label="Apellido"
                  :rules="fieldRequire"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="item.email" label="Email" :rules="emailRequire" required></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="item.phone"
                  label="Númerico telefónico"
                  :rules="fieldRequire"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="8">
                <v-text-field v-model="item.address" label="Dirección" :rules="fieldRequire" required></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="item.citizenship"
                  label="Ciudadanía"
                  :rules="fieldRequire"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="item.city" label="Ciudad" :rules="fieldRequire" required></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="item.zip_code" label="Código postal" :rules="fieldRequire" required></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="item.profession"
                  label="Profesión"
                  :rules="fieldRequire"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="item.likejob" label="Trabajo preferido" :rules="fieldRequire" required></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="item.dislikejob"
                  label="Trabajo menospreciado"
                  :rules="fieldRequire"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="item.desireincome"
                  label="Ingresos deseables"
                  :rules="fieldRequire"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="8">
                <v-radio-group row v-model="item.attractivestatus">
                  <v-radio label="Dueño(a) de negocio" value="1"></v-radio>
                  <v-radio label="Empleado(a)" value="2"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-textarea
                  rows="4"
                  v-model="item.bigachievement"
                  outlined
                  label="Logro más grande"
                  placeholder=" "
                  required
                ></v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-select
                  label="¿Dónde escuchó de nosotros?"
                  v-model="item.knowfrom"
                  :items="[
                          {text: 'Web', value: 'website'},
                          {text: 'Facebook', value: 'facebook'},
                          {text: 'Instagram', value: 'instagram'},
                          {text: 'LinkedIn', value: 'linkedin'},
                          {text: 'E-Mail', value: 'email'},
                          {text: 'TV', value: 'tv'},
                          {text: 'Radio', value: 'radio'},
                          {text: 'Folleto', value: 'brochure'},
                          {text: 'Periódico', value: 'newspaper'},
                          {text: 'Amigos o familia', value: 'friend'},
                          {text: 'Otros', value: 'other'},
                          ]"
                ></v-select>
              </v-col>
              <v-col cols="12" md="8">
                <v-radio-group
                  label="¿Cuál es su mayor interés con nosotros?"
                  row
                  v-model="item.interested_us"
                  required
                  :rules="fieldRequire"
                >
                  <v-radio label="Ventas" value="1"></v-radio>
                  <v-radio label="Equipo" value="2"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="pb-0">Disponibilidad</v-col>
              <v-col cols="12" class="pt-0">
                <v-row>
                  <v-col class="d-flex align-center">Lunes</v-col>
                  <v-col>
                    <TimePicker label="Desde" :time.sync="item.monday1" />
                  </v-col>
                  <v-col>
                    <TimePicker label="Hasta" :min="item.monday1" :time.sync="item.monday2" />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex align-center">Martes</v-col>
                  <v-col>
                    <TimePicker label="Desde" :time.sync="item.tuesday1" />
                  </v-col>
                  <v-col>
                    <TimePicker label="Hasta" :min="item.tuesday1" :time.sync="item.tuesday2" />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="d-flex align-center">Miércoles</v-col>
                  <v-col>
                    <TimePicker label="Desde" :time.sync="item.wednesday1" />
                  </v-col>
                  <v-col>
                    <TimePicker label="Hasta" :min="item.wednesday1" :time.sync="item.wednesday2" />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="d-flex align-center">Jueves</v-col>
                  <v-col>
                    <TimePicker label="Desde" :time.sync="item.thursday1" />
                  </v-col>
                  <v-col>
                    <TimePicker
                      label="Hasta"
                      :min="item.thursday1 | timeFormat"
                      :time.sync="item.thursday2"
                    />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="d-flex align-center">Viernes</v-col>
                  <v-col>
                    <TimePicker label="Desde" :time.sync="item.friday1" />
                  </v-col>
                  <v-col>
                    <TimePicker label="Hasta" :min="item.friday1" :time.sync="item.friday2" />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="d-flex align-center">Sábado</v-col>
                  <v-col>
                    <TimePicker label="Desde" :time.sync="item.saturday1" />
                  </v-col>
                  <v-col>
                    <TimePicker label="Hasta" :min="item.saturday1" :time.sync="item.saturday2" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">Tres personas recomendadas</v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="item.referred_one_name" label="Nombre"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="item.referred_one_email" label="Email"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="item.referred_one_phone" label="Número telefónico"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="item.referred_two_name" label="Nombre"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="item.referred_two_email" label="Email"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="item.referred_two_phone" label="Número telefónico"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="item.referred_three_name" label="Nombre"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="item.referred_three_email" label="Email"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="item.referred_three_phone" label="Número telefónico"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn
            rounded
            color="primary"
            dark
            class="mr-3"
            @click="$router.push({ name: 'recruitment' })"
          >Cancelar</v-btn>
          <v-btn
            rounded
            color="primary"
            dark
            @click="save('recruitment')"
            :loading="loadingItem"
          >Save</v-btn>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="paymentDialog" width="600" persistent>
      <v-card>
        <v-card-text class="py-5">
          <v-card-title class="headline" primary-title>Pago de Membresia</v-card-title>
          <v-card-text>
            <p>Usted va a pagar la membresía del nuevo representante. Una nueva cuenta será creada en el sistema y un correo será enviado al nuevo representante para que active su cuenta.</p>
            <strong>Membresia: $80</strong>
          </v-card-text>

          <v-form ref="formPayment" lazy-validation>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="card.number"
                  label="Número de tarjeta"
                  required
                  :rules="fieldRequire"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field v-model="card.cvc" label="CVC" required :rules="fieldRequire"></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-dialog
                  ref="dialog"
                  v-model="pickerDialog"
                  :return-value.sync="card.date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="card.date"
                      label="Vencimiento"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      required
                      :rules="fieldRequire"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="card.date"
                    scrollable
                    type="month"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="pickerDialog = false">Cancelar</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(card.date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="oxygen = false; paymentDialog = false">Cancelar</v-btn>
          <v-btn text color="primary" @click="sendCard" :loading="loadingItem">Confirmar & Pagar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
import DatePicker from "../util/DatePicker";
import { fieldRequire, emailRequire } from "../../util";
import TimePicker from "../util/TimePicker";
import moment from "moment";
import EventBus from "../../event-bus";

export default {
  components: {
    DatePicker,
    TimePicker
  },
  data: () => ({
    emailRequire: emailRequire,
    fieldRequire: fieldRequire,
    showMore: false,
    oxygen: null,
    paymentDialog: null,
    card: { payment: true },
    pickerDialog: null,
    paymentLoading: null,
    oxygenDisabled: true
  }),
  filters: {
    timeFormat(val) {
      return val ? moment(val, "hh:mm A").format("hh:mm") : null;
    }
  },
  computed: {
    ...mapFields("recruitment", ["item", "items", "loadingItem"]),
    computedDateFormattedMomentjs() {
      return this.date ? this.$options.filters.dateFormat(this.date) : "";
    },
    oxygenDisabledCheck() {
      if(
        this.item.second_interview_assisted &&
          this.item.second_interview_date &&
          this.item.hired &&
          this.item.first_training_assisted &&
          this.item.first_training_date
      ) return false; return true;
    }
  },
  watch: {
    oxygen(val) {
      this.item.oxygen = val;
      if (val) this.paymentDialog = true;
    },
    pickerDialog(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
    paymentDialog(val) {
      if (val && this.$refs.formPayment) this.$refs.formPayment.reset();
    }
  },
  methods: {
    ...mapActions({
      getItem: "recruitment/getItem",
      saveAction: "recruitment/save"
    }),
    sendCard() {
      if (!this.$refs.formPayment.validate()) return;

      this.card.recruitment = this.item.id;
      this.saveAction({
        endpoint: "recruitment",
        data: this.card
      }).then(response => {
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
      });
    },
    save() {
      this.saveAction("recruitment").then(item => {
        let index = 0;
        this.items.filter((i, index2) => {
          if (i.id == item.data.data.id) {
            index = index2;
          }
        });
        this.$set(this.items, index, item.data.data);
        this.oxygenDisabled = this.oxygenDisabledCheck;console.log(this.oxygenDisabledCheck);
      });
    }
  },
  created() {
    this.getItem({
      endpoint: "recruitment-item",
      query: { id: decodeURIComponent(this.$route.params.id) }
    }).then(() => {
      this.oxygenDisabled = this.oxygenDisabledCheck;
    });
  },
  destroyed() {
    this.item = null;
  }
};
</script>