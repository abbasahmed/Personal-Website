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
          <v-btn
            text
            href="https://github.com/abbasahmed"
          >
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
          <v-btn
            text
            href="https://linkedin.com/in/abbaszahmed"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            text
            href="https://twitter.com/ab_bas27"
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            text
            href="mailto:abbaszahmed@gmail.com"
          >
            <v-icon>mdi-email</v-icon>
          </v-btn>
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