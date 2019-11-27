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
      x-large
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
  bottom: 23vh;
  left: 50%;
  margin-top: 8em;
}

#avatar {
  bottom: 57vh;
  left: 35vw;
  height: 18vh;
  margin-left: 8vw;
  position: fixed;
  height: auto;
  width: 15vw;
}

#center {
  position: fixed;
  color: antiquewhite;
  align-content: center;
  top: 50%;
  left: 50vw;
  height: 18vh;
  margin-top: -9vh; /*set to a negative number 1/2 of your height*/
  margin-left: -24vw; /*set to a negative number 1/2 of your width*/
}

#desc {
  font-size: 3vw;
  color: lightpink;
  margin-left: -8em;
  left: 50vw;
  position: fixed;
  top: 60%;
  font-family: "Encode Sans", sans-serif;
}
</style>