<template>
  <vue-typed-js
    :strings="['Hi!', 'Nice to meet ya!', 'I am Abbas Ahmed!']"
    :showCursor="false"
    :typeSpeed="70"
  >
    <h1 class="typing"></h1>
  </vue-typed-js>
</template>

<script>
export default {
  name: "NameTyper",
  props: {
    strings: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.typing {
  font-family: "Encode Sans", sans-serif;
  font-size: 6vw;
  text-align: center;
}
</style>