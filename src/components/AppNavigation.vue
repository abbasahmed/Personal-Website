<template>
  <v-app-bar
    app
    color="black"
    dark
    id="toolbar"
  >
    <v-img
      class="mx-2"
      max-height="40"
      max-width="40"
      src="@/assets/memoji.jpg"
    ></v-img>
    <v-toolbar-title>
      <router-link
        :to="{ name: 'home' }"
        tag="span"
        style="cursor: pointer"
      >
        <v-btn text>Abbas Ahmed</v-btn>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link
      :to="{ name: 'about' }"
      tag="span"
      style="cursor: pointer"
    >
      <v-btn text>About</v-btn>
    </router-link>
    <router-link
      :to="{ name: 'skills' }"
      tag="span"
      style="cursor: pointer"
    >
      <v-btn text>Skills</v-btn>
    </router-link>
    <router-link
      :to="{ name: 'work' }"
      tag="span"
      style="cursor: pointer"
    >
      <v-btn text>Work</v-btn>
    </router-link>
    <router-link
      :to="{ name: 'contact' }"
      tag="span"
      style="cursor: pointer"
    >
      <v-btn text>Contact</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppNavigation"
};
</script>

<style scoped>
#toolbar {
  font-family: "Fira Sans", sans-serif;
}
</style>