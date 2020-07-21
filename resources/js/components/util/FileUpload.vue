<template>
  <div>

    <v-avatar size="80" color="grey">
      <v-icon v-if="!(file && file.url)" dark size="60">{{icon || 'mdi-office-building'}}</v-icon>
      <img v-else
        :src="file.url"
      >
    </v-avatar>

    <v-btn small
                  rounded
                  color="primary"
                  dark
                  @click="clickFile"
                ><v-icon class="mr-1">mdi-upload</v-icon> Subir imagen</v-btn>

    <input type="file" id="files" name="files" v-show="false" />
  </div>
</template>
<script>
export default {
  props:['image', 'icon'],
  data: () => ({
    files: [],
    cont: 0,
    file: {}
  }),
  watch:{
    file(val){
      this.$emit("update:image", val);
    },
    image(val){
     this.file = this.image;
    }
  },
  methods: {
    clickFile() {
      document.getElementById("files").click();
    },
    readFile(file, index) {
      const reader = new FileReader();
      reader.addEventListener("load", event => {
        if (file.type && file.type.indexOf("image") !== -1) {
          this.file = {name: file.name, size: file.size};
          this.$set(this.file, "url", event.target.result);
        }
      });

      // reader.addEventListener("progress", event => {
      //   if (event.loaded && event.total) {
      //     const percent = (event.loaded / event.total) * 100;
      //     this.$set(this.files[index], "load", Math.round(percent));
      //   }
      // });
      reader.readAsDataURL(file);
    }
  },
  created(){this.file = this.image;},
  mounted() {

    const fileSelector = document.getElementById("files");
    fileSelector.addEventListener("change", event => {

      // this.file = event.target.files[0];
      this.readFile(event.target.files[0]);
      return;
      for (let i = 0; i < event.target.files.length; i++) {
        const length = this.files.length;

        this.$set(this.files, length, { file: event.target.files[i] });
        this.readFile(this.files[length].file, length);
      }
    });
  }
};
</script>