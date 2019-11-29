<template>
  <div id="contact">
    <span class="bg"></span>
    <h1>Contact Me!</h1>
    <v-divider
      dark
      color="white"
    >
    </v-divider>
    <div id="content">
      <p>
        I would love to meet up in person, if possible. Please feel free to contact me on these platforms otherwise!
      </p>
      <v-layout id="icons">
        <v-flex id="my-card">
          <v-card
            rounded
            raised
            href="https://linkedin.com/in/abbaszahmed"
          >
            <v-card-text>
              <v-icon
                id="size-icon"
                color="blue"
              >mdi-linkedin</v-icon>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex id="my-card">
          <v-card
            rounded
            raised
            href="mailto:abbaszahmed@gmail.com"
          >
            <v-card-text>
              <v-icon
                id="size-icon"
                color="red"
              >mdi-email</v-icon>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout id="icons">
        <v-flex id="my-card">
          <v-card
            rounded
            raised
            href="https://github.com/abbasahmed"
          >
            <v-card-text>
              <v-icon
                id="size-icon"
                color="rgb(62.1%, 0%, 90.9%)"
              >mdi-github-circle</v-icon>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex id="my-card">
          <v-card
            rounded
            raised
            href="https://twitter.com/ab_bas27"
          >
            <v-card-text>
              <v-icon
                id="size-icon"
                color="light-blue"
              >mdi-twitter</v-icon>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
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
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<style scoped>
#contact {
  font-size: 2vw;
  padding: 5vw;
  margin-top: 1vh;
  color: rgb(255, 224, 248);
}
#content {
  overflow: scroll;
}
#icons {
  text-align: center;
}
#my-card {
  /* padding: 2em; */
  margin: 1em;
  margin-left: 2em;
  margin-right: 2em;
}
#size-icon {
  font-size: 5em;
}
p {
  margin-top: 5vh;
  font-size: 2vh;
  color: antiquewhite;
}
.bg {
  width: 100%;
  height: 100%;
  transform: scale(1.4);
  filter: blur(2px);
  -webkit-filter: blur(2px);
  position: fixed;
  top: 0;
  background-size: cover;
  left: 0;
  opacity: 0.1;
  background-image: url("https://i.pinimg.com/originals/56/10/31/56103198919865385260c5bcfa404a3a.png");
}
#resume {
  position: fixed;
  margin-left: -4.5em;
  bottom: 23vh;
  left: 50%;
  margin-top: 8em;
}
</style>