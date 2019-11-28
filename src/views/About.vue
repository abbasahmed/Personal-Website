<template>
  <div id="about">
    <span class="bg"></span>
    <h1>About Me</h1>
    <v-divider
      dark
      color="white"
    >
    </v-divider>
    <div id="content">
      <p>
        Hi there! I'm Abbas and welcome to my website!
        I'm currently a senior at The <b>University of Pittsburgh</b> and I enjoy being a student here!
        I get to learn a lot new everyday and work on cool stuff. I enjoy Computer Science so much that it's
        hard to pin down which field I like the most, but I've mostly been enjoying working in <b>Front-End</b> and <b>Back-End
          development</b>. I gained interest in computer science when I first attended a workshop at CMU Qatar, where I built an Arduino remote
        controlled car and I also learnt about some of the algorithms used in search engines. After that, I bought some books right away
        and started to learn how to code!
      </p>
      <p>
        I've also been taking classes and working on projects in the fields of <b>Data Science, Artificial Intelligence, Computer Vision
          and Machine Learning </b> as I'm thoroughly interested in diving into these fields as well!
      </p>
      <p>
        I am very keen on attending and organizing <b>hackathons</b> as it helps me to stay connected and experiment with all the latest
        technologies and I get to meet a lot of amazing people. Apart from that, I like to <b>travel, take pictures and explore new cuisines</b>.
        So far, I've been to <b>9 countries</b> and I'm looking forward to traveling more with my friends and family!
        I also enjoy <b>graphic designing</b>, which really helps bring out my creative side in front-end development. I also play a lot of <b>Soccer</b> and
        I am a huge <b>Real Madrid fan</b>.
      </p>
      <p id="quote">
        <em>“<b>Self-reverence</b>, <b>self-knowledge</b>, <b>self control</b> — these three alone lead to <b>power</b>.” </em><br>
        – Alfred, Lord Tennyson
      </p>
    </div>
  </div>
</template>

<style scoped>
#about {
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
#quote {
  text-align: center;
}
</style>