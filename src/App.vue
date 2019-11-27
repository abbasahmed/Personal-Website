<template>
  <v-app>
    <AppNavigation>
    </AppNavigation>
    <router-view />
    <AppFooter>
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