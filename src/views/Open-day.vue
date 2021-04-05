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
      }
    },
  }
</script>

