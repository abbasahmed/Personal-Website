<template>
  <div>
    <vue-particles
      style="margin: auto;"
      color="#ea00a6"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
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
    <v-btn
      outlined
      dark
      large
      id="resume"
      :to="{ name: 'resume' }"
    >
      Resume
      <v-icon>mdi-file-document-outline</v-icon>
    </v-btn>
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
    resume: "resume.pdf",
    name: ["Hi!", "Abbas Ahmed"],
    description: "Student. Engineer. Developer. Traveler."
  })
};
</script>

<style scoped>
#resume {
  position: fixed;
  margin-left: -4.5em;
  top: 60%;
  left: 50%;
  margin-top: 8em;
}

#avatar {
  top: 20%;
  left: 50%;
  position: fixed;
  margin-left: -6.7em;
  margin-right: -16em;
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
  margin-left: -8em;
  left: 50%;
  position: fixed;
  top: 60%;
  font-family: "Encode Sans", sans-serif;
}
</style>