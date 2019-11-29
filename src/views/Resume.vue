<template>
  <div id="container">
    <v-btn
      fixed
      dark
      fab
      top
      left
      color="black"
      :to="{ name: 'home' }"
    >
      <v-icon>mdi-arrow-left-bold</v-icon>
    </v-btn>
    <iframe
      src="https://docs.google.com/gview?url=https://github.com/abbasahmed/Personal-Website/raw/master/src/assets/resume.pdf&embedded=true"
      style="width:100%; height:100%;"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Resume"
};
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
}
</style>
