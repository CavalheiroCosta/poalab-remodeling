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
              <h1 class="title">POALAB</h1>
    
                <v-toolbar>
                  <template>
                    <v-tabs  v-model="tab">
                      <v-tabs-slider color="yellow"></v-tabs-slider>

                      <v-tab
                        v-for="item in tabs"
                        :key="item"
                      >
                        {{ item.tab }}
                      </v-tab>
                    </v-tabs>
                  </template>
                </v-toolbar>
                <v-tabs-items v-model="tab">
                  <v-tab-item
                    v-for="item in tabs"
                    :key="item"
                  >
                    <v-card flat>
                      <div class="card-tab">
                                <p class="card-tittle">{{item.tittle}} </p>
                                <p class="card-tittle-content">{{item.tittlecontent}} </p>
                                <p class="card-subtittle">{{item.subtittle}} </p>
                                <p class="card-subtittle-content">{{item.subtittlecontent}}</p>
                                <p class="card-observation">{{item.observation}}</p>
                          </div>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-card>
</template>

<script>
  
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
        tab: null,
        tabs: [{ tab:'Sobre', tittle:'POALAB Laboratório de fabricação digital', 
                 tittlecontent:'\n\nConectado à rede mundial de fab labs.\nOpera como um programa de extensão do\nIFRS campus Porto Alegre.',
                 subtittle:'\n\nNossa missão',
                 subtittlecontent:'\n\nTemos como missão popularizar o acesso\ne letramento na fabricação digital,\nfuncionando como uma plataforma de criatividade,\naprendizagem e invenção.'+
                                  '\n\nSer um Fab Lab significa estar conectado\na uma comunidade mundial de alunos, educadores,\ntécnicos, pesquisadores e inovadores e desenvolver\natividades dentro da filosofia do conhecimento aberto.',
                 observation:'\n\nConheça a FAB CHARTER\nA Carta de Intenções que regra os Fab Labs'},
               { tab:'Open Day', tittle:'Open Day [6as feiras das 14h-18h ] iniciando em breve', 
                 tittlecontent:'\n\nOs open days são um dos requisitos para a existência de um fab lab.\nNestes dias, a comunidade externa têm a possibilidade de conhecer\nas ferramentas existentes no lab e aprender sobre fabricação digital.\nCada fab lab possui suas regras de open day', 
                 subtittle:'\n\nEssas são as regras do PoaLab:', 
                 subtittlecontent:'\n\n- Não existe custo para acessar o lab ou utilizar as máquinas; (subtitulo conteudo)\n- Não existe reserva de equipamento;\n- Os usuários são convidados a cadastrar os seus\n- projetos no sistema de projetos do PoaLab para compartilhamento com a comunidade;'+
                                  '\n- Os usuários devem trazer os insumos necessários para os projetos;\n- Temos material, equipamento, pessoal e disposição para atender a todos, independente de conhecimento;\n- Em 2 anos de funcionamento a faixa etária de usuários variou entre 5 e 76 anos... queremos avançar nos dois limites;\n- O objetivo do lab é o de disseminar conhecimento',
                 observation:'\n\nse você não tem nenhum conhecimento sobre fabricação digital, o lab foi feito pra você.\nContinua com dúvidas? Mande mensagem via email ou via página do facebook!'},],
      }
    },
  }
  
</script>

<style scoped>
.title{
    font-size: 600%;
    color: red;
}

.card-tittle {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-size: 250%;
  color: green;
  text-align: left;
  line-height: 1.2;
  font-family: 'Gruppo';
  padding-left: 1%;
  padding-top: 1%;
}

.card-tittle-content {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-size: 125%;
  text-align: left;
  line-height: 1;
  font-family: 'Gruppo';
  padding-left: 1%;
}

.card-subtittle {
  white-space: pre-wrap; 
  word-wrap: break-word;
  color: green;
  font-size: 180%;
  text-align: left;
  line-height: 1.2;
  font-family: 'Gruppo';
  padding-left: 1%;
}

.card-subtittle-content {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-size: 125%;
  text-align: left;
  line-height: 1.2;
  font-family: 'Gruppo';
  padding-left: 1%;
}

.card-observation {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-size: 150%;
  color:red;
  text-align: left;
  line-height: 1.2;
  font-family: 'Gruppo';
  padding-left: 1%;
  padding-bottom: 5%;
}


</style>
