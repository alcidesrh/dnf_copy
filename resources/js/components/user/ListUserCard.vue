<template>
  <v-card max-width="100%" min-height="100%" class="d-inline-block" outlined elevation="3">
    <v-list-item three-line>
      <v-list-item-avatar size="80" color="grey">
        <v-icon v-if="!item.image" dark size="60">mdi-account</v-icon>
        <img v-else :src="item.image.url" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-row no-gutters>
          <v-col cols="12" class="headline">
            <label>{{item.name}} ({{item.number_account}})</label>
            <div class="d-inline-block float-md-right">
              <v-btn
              icon
              class="float-right"
              @click="$emit('remove', item.id)"
            >
              <v-icon size="20" color="red">mdi-delete</v-icon>
            </v-btn>
            <v-btn
              icon
              class="float-right"
              @click="$router.push({name: role + '_edit_profile', params: { id: item.id }})"
            >
              <v-icon size="20" color="teal">mdi-pencil</v-icon>
            </v-btn>
            </div>
          </v-col>
        </v-row>

        <v-list-item-subtitle v-if="item.email" class="mt-2">
          <v-icon size="14">mdi-email</v-icon>
          {{item.email}}
        </v-list-item-subtitle>
        <v-list-item-subtitle v-if="item.phone" class="mt-1">
          <v-icon size="14">mdi-phone</v-icon>
          {{item.phone}}
        </v-list-item-subtitle>

        <v-list-item-title class="my-3">
          <div class="mb-2">Ascendencia: {{item.parent}} <span>({{item.parent_number}})</span></div>
          <div>Agencia: {{item.company}}</div>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <div style="height: 90px;" class="d-flex align-end">
      <div style="bottom: 0px; position: absolute; width: 100%;">
        <div class="px-5">
          <v-divider class="my-2"></v-divider>
        </div>
        <div
          class="d-flex justify-space-between px-5 py-2 font-weight-bold font-12"
          style="color:#757575"
        >
          <div>Comisión: $0</div>

          <div>Ventas: $0</div>

          <v-btn
            small
            color="teal"
            icon
            @click="$router.push({name: role + '_profile', params: { id: item.id }})"
          >
            <v-icon>mdi-eye</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["item", "role"]
};
</script>
