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
              <h1 class="title">Equipamentos</h1>
            </v-card>
            <v-card>
              <v-subheader></v-subheader>
              <v-row>
                <v-col
                  v-for="image in images"
                  :key="image.key"
                  cols="6"
                >
                  <v-card class="card-content">
                          <div class="card-tool">
                               <img class="card-image" :src="image.path">
                          </div>
                          <div class="card-tool">
                                <p class="card-details">{{image.tittle}} </p>
                                <p class="card-info"><b>MODELO:</b> {{image.model}} </p>
                                <p class="card-info"><b>QUANTIDADE:</b> {{image.quantity}} </p>
                                <p class="card-info"><b>DETALHES:</b> {{image.details}}</p>
                          </div>
                  </v-card>
                     
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
  import image1 from '../assets/poalab/wanhao.png';
  import image2 from '../assets/poalab/printrbot.png';
  import image3 from '../assets/poalab/cma6040.png';
  import image4 from '../assets/poalab/plottersaga.png';
  import image5 from '../assets/poalab/fresa1.png';
  import image6 from '../assets/poalab/filabot.png';
  import image7 from '../assets/poalab/plotterhp.png';
  import image8 from '../assets/poalab/bancada.png';

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
          {key: '1', path: image1 , tittle:'IMPRESSORAS 3D WANHOA', model: 'Duplicator 4', quantity: '2', 
          details: '\n- 2 extrusores \n- filamento 1.75mm \n- camada entre 0.1 e 0.5mm \n- área: 225mm x 145mm x 150mm \n- base aquecida'},
          {key: '2', path: image2 , tittle:'IMPRESSORA 3D PRINTRBOT', model: 'Simple Metal', quantity: '1', 
          details: '\n- filamento de 1.75mm\n- resolução de camada entre 0.1 e 0.5mm\n- área de trabalho: 152mm x 152mm x 152mm	' },
          {key: '3', path: image3 , tittle:'CORTADORA LASER', model: 'CMA6040', quantity: '1', 
          details: '\n- área de corte de 60cm x 40cm\n- potência do laser: 70-80W\n- Espessura do corte: 0-25mm para acrílico\n- Precisão < 0.01mm'},
          {key: '4', path: image4 , tittle:'PLOTTER DE RECORTE', model: 'SAGA 720i', quantity: '1', 
          details: '\n- largura máxima da mídia: 72cm\n- largura máxima de corte: 62cm\n- laser point\n- velocidade: 600mm/s\n- precisão de repetição: 0.082mm	'},
          {key: '5', path: image5 , tittle:'FRESADORA MTC-200×250', model: '(não operacional)', quantity: '1', 
          details: '\n- área: 200mm x 250mm\n- eixo z: 150mm\n- refrigeração do motor a ar\n- velocidade de rotação programável'},
          {key: '6', path: image6 , tittle:'EXTRUSORA DE FILAMENTO', model: 'filabot wee', quantity: '1', 
          details: '\n- bico de extrusão de 1.75mm\n- adequado para ABS e PLA\n- taxa de extrusão entre 13 e 51 cm/minuto'},
          {key: '7', path: image7 , tittle:'PLOTTER DE IMPRESSÃO', model: 'HP T520 (não operacional)', quantity: '1', 
          details: '\n- alimentação por rolo ou folha\n- largura de impressão: 61cm\n- espessura: até 11.8 milésimos de polegada\n- resolução de impressão: 2400 x 1200 dpi'},
          {key: '8', path: image8 , tittle:'BANCADA DE ELETRÔNICA', model: '', quantity: '1', 
          details: '\n- osciloscópio\n- fonte de bancada\n- estação de solda\n- componentes eletrônicos diversos'},
        ]
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

.card-content{
    width: 800px;
    height: 350px;
    margin-left: 1%;
    margin-right: 0;
}

.card-tool{
    width: 50%;
    height: 100%;
    float: left;
    padding: 20px;
}

.card-image{
    width: 100%;
    height: 100%;
    margin: 0;
}

.card-from-divs{
    border: 3px solid #fff;
    padding: 20px;
}

.card-details {
  text-align: left;
  font-weight: bold;
  font-size: 150%;
  line-height: 1;
  font-family: 'Gruppo';
  color: green;
}

.card-info {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-size: 100%;
  text-align: left;
  line-height: 1.2;
  font-family: 'Gruppo';
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid transparent;
}
</style>

