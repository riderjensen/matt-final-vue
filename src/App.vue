<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Matt Vue Final</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
      <Test/>
      <app-home></app-home>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test,
    'app-home': Home,
  },
  data () {
    return {
      //
    }
  }
}
</script>
