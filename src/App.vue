<template>
  <v-app>
    <AppNavigation v-if="!$route.meta.hideNavigation">
    </AppNavigation>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>