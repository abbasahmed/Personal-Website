<template>
  <v-app>
    <AppNavigation v-if="!$route.meta.hideNavigation">
    </AppNavigation>
    <router-view />
    <AppFooter v-if="!$route.meta.hideNavigation">
    </AppFooter>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import AppFooter from "@/components/AppFooter";
export default {
  name: "App",
  components: {
    AppNavigation,
    AppFooter
  },
  data: () => ({
    name: ["Hi!", "Abbas Ahmed"]
  })
};
</script>