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
              <h1 class="title">Canais e Links Úteis</h1>
              <span>Coordenação: André Peres <b>andre.peres@poa.ifrs.edu.br</b></span>
              <v-subheader></v-subheader>
              <v-row>
                <v-col
                  v-for="image in images"
                  :key="image.key"
                  cols="3"
                >
                  <div class="card-tool">
                  <a :href="image.redirect"><img class="card-image" :src="image.path"></a>
                  </div>
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
import facebook from '../assets/poalab/facebook.png';
import youtube from '../assets/poalab/youtube.png';
import braile from '../assets/poalab/braille.png';
import thingverse from '../assets/poalab/thingiverse.png';
import instructables from '../assets/poalab/InstructablesRobot.png';
import opendesk from '../assets/poalab/opendesk.png';
import fabacademy from '../assets/poalab/fabacademy.png';
import fabfoundation from '../assets/poalab/fabfoundation.png';
import fabcity from '../assets/poalab/fabcity.png';
import make from '../assets/poalab/make.png';
import tinkercad from '../assets/poalab/tinkercad.png';
import inkscape from '../assets/poalab/inkscape.png';
import makercase from '../assets/poalab/makercase.png';
import rbac from '../assets/poalab/rbac.png';
import makerpoa from '../assets/poalab/makepoa.png';
import nativos from '../assets/poalab/nativos.svg';

  export default {
    data () {
      return {
        drawer: false,
        mini: true,
        items: [
          { title: 'Inicio', redirect: '/', icon: 'mdi-home-city' },
          { title: 'Sobre(Open Day)', redirect: '/openday', icon: 'mdi-brain' },
          { title: 'Espaço', redirect: '/place', icon: 'mdi-map-marker' },
          { title: 'Equipamentos', redirect: '/machinary', icon: 'mdi-hammer-wrench' },
          { title: 'Canais e Links', redirect: '/channels', icon: 'mdi-tag-faces' },
          { title: 'Calendário', redirect: '/calendar-month', icon: 'mdi-calendar' },
        ],
        images:[
          {key: '01', path: facebook, redirect:'https://www.facebook.com/poalab'  },
          {key: '02', path: youtube, redirect:'https://www.youtube.com/channel/UCWZzR8M4KKD6l7hpOZb9viA' },
          {key: '03', path: braile, redirect:'https://cta-ifrs.github.io/Text2Braille3d/'},
          {key: '04', path: thingverse, redirect:'https://www.thingiverse.com/'  },
          {key: '05', path: instructables, redirect:'https://www.instructables.com/' },
          {key: '06', path: opendesk, redirect:'https://www.opendesk.cc/' },
          {key: '07', path: fabacademy, redirect:'http://fabacademy.org/'  },
          {key: '08', path: fabfoundation, redirect:'http://www.fabfoundation.org/'  },
          {key: '09', path: fabcity, redirect:'https://fab.city/' },
          {key: '10', path: make, redirect:'https://makezine.com/' },
          {key: '11', path: tinkercad, redirect:'https://www.tinkercad.com/'  },
          {key: '12', path: inkscape, redirect:'https://inkscape.org/pt-br/'  },
          {key: '13', path: makercase, redirect:'http://www.makercase.com/' },
          {key: '14', path: rbac, redirect:'http://aprendizagemcriativa.org/' },
          {key: '15', path: makerpoa, redirect:'https://portoalegre.makerfaire.com/'  },
          {key: '16', path: nativos, redirect:'https://www.poalab.net.br/fabbernatives/' },
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
    max-width: 100%;
    max-height: 100%;
    text-align: center;
    padding-left: 10%;
}

.card-tool{
    width: 50%;
    height: 50%;
    float: left;
    font-size: 1rem;
    font-family: 'Gruppo';
    flex:1;
    margin-left: 15%;
    text-align: center;
    align-self: center;

}
</style>
