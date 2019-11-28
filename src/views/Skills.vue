<template>
  <div id="skills">
    <span class="bg"></span>
    <h1>My Skills</h1>
    <v-divider
      dark
      color="white"
    >
    </v-divider>
    <p>
      Over the years I have acquired these skills and I look forward to mastering them and
      learning more!
    </p>
    <v-layout>
      <v-flex id="my-card">
        <v-card>
          <v-card-text>
            <p class="title text--primary">
              Languages
            </p>
            <v-simple-table
              dense
              id="my-table"
            >
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Experience</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in languages"
                    :key="item.name"
                  >
                    <td>{{ item.name }}</td>
                    <td>
                      <v-rating
                        color="#4124d1"
                        half-increments
                        readonly
                        :value="item.rating"
                      ></v-rating>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex id="my-card">
        <v-card>
          <v-card-text>
            <p class="title text--primary">
              Frameworks/Technologies
            </p>
            <v-simple-table
              dense
              id="my-table"
            >
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Experience</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in technologies"
                    :key="item.name"
                  >
                    <td>{{ item.name }}</td>
                    <td>
                      <v-rating
                        color="#4124d1"
                        half-increments
                        readonly
                        :value="item.rating"
                      ></v-rating>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex id="my-card">
        <v-card v-show="otherSkills">
          <v-card-text>
            <p class="title text--primary">
              Other Skills
            </p>
            <v-simple-table
              dense
              id="my-table"
            >
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Experience</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in others"
                    :key="item.name"
                  >
                    <td>{{ item.name }}</td>
                    <td>
                      <v-rating
                        color="#4124d1"
                        half-increments
                        readonly
                        :value="item.rating"
                      ></v-rating>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
        <v-btn
          rounded
          id="hide-button"
          @click="otherSkillsDisplay()"
        >
          <template v-if="otherSkills">
            Hide
          </template>
          <template v-else>
            Show Other Skills
          </template>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data: () => ({
    languages: [
      {
        name: "Python",
        rating: 4.5
      },
      {
        name: "Java",
        rating: 4.5
      },
      {
        name: "Javascript",
        rating: 4.5
      },
      {
        name: "HTML5/CSS3",
        rating: 4.5
      },
      {
        name: "Node.js/Express.js",
        rating: 4
      },
      {
        name: "C",
        rating: 4
      },
      {
        name: "SQL",
        rating: 4
      },
      {
        name: "Ruby",
        rating: 3
      },
      {
        name: "MATLAB",
        rating: 3
      }
    ],
    technologies: [
      {
        name: "Vue/Vuex",
        rating: 4.5
      },
      {
        name: "D3.js/Chart.js",
        rating: 4.5
      },
      {
        name: "Flask",
        rating: 4.5
      },
      {
        name: "ElasticSearch",
        rating: 4
      },
      {
        name: "Ajax",
        rating: 3
      },
      {
        name: "Sinatra",
        rating: 3
      },
      {
        name: "Redis",
        rating: 2.5
      },
      {
        name: "Postgres & MongoDB",
        rating: 2.5
      },
      {
        name: "Git",
        rating: 4.5
      }
    ],
    others: [
      {
        name: "Adobe Photoshop",
        rating: 4.5
      },
      {
        name: "Leadership",
        rating: 4.5
      },
      {
        name: "Communication",
        rating: 4.5
      },
      {
        name: "Creativitiy",
        rating: 4.5
      },
      {
        name: "Dedication",
        rating: 4.5
      },
      {
        name: "Attention to Detail",
        rating: 4.5
      }
    ],
    otherSkills: false
  }),
  methods: {
    otherSkillsDisplay() {
      if (this.otherSkills) {
        this.otherSkills = false;
      } else {
        this.otherSkills = true;
      }
    }
  }
};
</script>

<style scoped>
p {
  margin-top: 1em;
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
#skills {
  font-size: 2vw;
  padding: 5vw;
  margin-top: 1vh;
  color: rgb(255, 224, 248);
  overflow: scroll;
}
#my-card {
  padding: 1em;
  margin-bottom: 2em;
  text-align: center;
}
#my-table {
  font-size: 0.2em;
  text-align: initial;
}
#hide-button {
  top: 50%;
}
</style>