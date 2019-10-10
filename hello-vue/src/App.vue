<template>
  <v-app id ="app">
  <v-navigation-drawer v-model="drawer" app>
    <!-- -->
  </v-navigation-drawer>
  <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title to="/">Application</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link to="/todo" >ToDo</router-link> 
        |
      <router-link to="/scanner">Scanner</router-link>

    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  //components: { Vuetify  },
  data: () => ({
    drawer:false//d=
  }),
};
</script>
