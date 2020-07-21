<template>
   <v-snackbar :color="color ? color : 'primary'" top
      v-model="snackbar"
    >
      <div v-text="text" class="font-weight-bold subtitle-1"></div>

      <!-- <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template> -->
    </v-snackbar>
</template>
<script>
export default {
  props: {
    text:{
      required: true
    },
    color:{
      default: 'primary'
    }
  },
  data() {
    return {
      snackbar: false,
      date: null
    };
  },
  created(){
     if(this.text)this.snackbar = true;
  },
};
</script>
