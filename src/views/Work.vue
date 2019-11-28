<template>
  <div id="work">
    <span class="bg"></span>
    <h1>My Work</h1>
    <v-divider
      dark
      color="white"
    >
    </v-divider>
    <div id="content">
      <p>
        Work in Progress!
        As much as I love working on my website, I'm currently a little busy with
        my coursework so as soon as I get the chance this will be updated!
      </p>
    </div>
  </div>
</template>

<style scoped>
#work {
  font-size: 2vw;
  padding: 5vw;
  margin-top: 1vh;
  color: rgb(255, 224, 248);
}
#content {
  overflow: scroll;
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
</style>