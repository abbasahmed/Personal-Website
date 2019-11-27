<template>
  <div>
    <v-img
      id="avatar"
      src="@/assets/Abbas.png"
      max-height="200"
      max-width="200"
    >
    </v-img>
    <NameTyper
      id="center"
      :strings="name"
    >
    </NameTyper>
    <p id="desc">
      {{description}}
    </p>
  </div>
</template>

<script>
import NameTyper from "@/components/NameTyper";
export default {
  name: "Home",
  components: {
    NameTyper
  },
  data: () => ({
    name: ["Hi!", "Abbas Ahmed"],
    description: "Student. Engineer. Developer. Traveler."
  })
};
</script>

<style scoped>
#avatar {
  top: 90%;
  margin-left: auto;
  margin-right: auto;
}

#center {
  position: fixed;
  color: antiquewhite;
  align-content: center;
  top: 50%;
  left: 50%;
  height: 18em;
  margin-top: -9em; /*set to a negative number 1/2 of your height*/
  margin-left: -16em; /*set to a negative number 1/2 of your width*/
}
#desc {
  font-size: 2em;
  color: lightpink;
  margin-left: -8.5em;
  left: 50%;
  position: fixed;
  top: 60%;
  font-family: "Encode Sans", sans-serif;
}
</style>