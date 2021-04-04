<template>
 <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      app
      permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="../assets/poalab/logo.svg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>POALAB</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.redirect"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col>
            <v-card>
              <h1 class="title">Nosso Espaço</h1>
              <span>
                R. Cel. Vicente, 281
                Sala 1016 - Torre Sul
                Centro Histórico
                Porto Alegre - RS
                CEP: 90030-041
              </span>
            </v-card>
            <v-card>
              <v-subheader></v-subheader>
              <v-row>
                <v-col
                  v-for="image in images"
                  :key="image.key"
                  cols="4"
                >
                  <v-card><img class="card-image" :src="image.path"></v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-card>
</template>

<script>
  import image1 from '../assets/poalab/DSC_4914.png';
  import image2 from '../assets/poalab/DSC_4915.png';
  import image3 from '../assets/poalab/DSC_4916.png';
  import image4 from '../assets/poalab/DSC_4917.png';
  import image5 from '../assets/poalab/DSC_4918.png';
  import image6 from '../assets/poalab/DSC_4920.png';
  import image7 from '../assets/poalab/DSC_4921.png';
  import image8 from '../assets/poalab/DSC_4922.png';
  import image9 from '../assets/poalab/DSC_4923.png';
  import image10 from '../assets/poalab/DSC_4924.png';
  import image11 from '../assets/poalab/DSC_4925.png';
  import image12 from '../assets/poalab/DSC_4940.png';
  import image13 from '../assets/poalab/DSC_4942.png';
  import image14 from '../assets/poalab/DSC_4943.png';
  import image15 from '../assets/poalab/DSC_4944.png';
  import image16 from '../assets/poalab/DSC_4946.png';
  import image17 from '../assets/poalab/DSC_4947.png';

  export default {
    data () {
      return {
        drawer: false,
        mini: true,
        items: [
          { title: 'Inicio', redirect: '/', icon: 'mdi-home-city' },
          { title: 'Espaço', redirect: '/place', icon: 'mdi-map-marker' },
          { title: 'Equipamentos', redirect: '/machinary', icon: 'mdi-hammer-wrench' },
          { title: 'Open Day', redirect: '/openday', icon: 'mdi-brain' },
          { title: 'Calendário', redirect: '/calendar-month', icon: 'mdi-calendar' },
          { title: 'Canais e Links', redirect: '/channels', icon: 'mdi-tag-faces' },
        ],
        images:[
          {key: '1', path: image1 },
          {key: '2', path: image2 },
          {key: '3', path: image3 },
          {key: '4', path: image4 },
          {key: '5', path: image5 },
          {key: '6', path: image6 },
          {key: '7', path: image7 },
          {key: '8', path: image8 },
          {key: '9', path: image9 },
          {key: '10', path: image10 },
          {key: '11', path: image11 },
          {key: '12', path: image12 },
          {key: '13', path: image13 },
          {key: '14', path: image14 },
          {key: '15', path: image15 },
          {key: '16', path: image16 },
          {key: '17', path: image17 },
        ],
      }
    },
  }
</script>

<style scoped>
.title{
    background-color: white;
    font-size: 600%;
    color: red;
}

.card-image{
    width: 100%;
    height: 100%;
}
</style>

