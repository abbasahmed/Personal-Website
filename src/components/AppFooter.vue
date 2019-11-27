<template>
  <v-footer
    dark
    color="black"
    absolute
  >
    <v-card
      flat
      tile
      width="100%"
      class="black text-center"
    >
      <v-card-text>
        Contact Me!
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <v-row justify="space-around">
          <v-icon>mdi-github-circle</v-icon>
          <v-icon>mdi-linkedin</v-icon>
          <v-icon>mdi-twitter</v-icon>
          <v-icon>mdi-email</v-icon>
        </v-row>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped>
#toolbar {
  font-family: "Encode Sans", sans-serif;
}
</style>