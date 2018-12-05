<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Matt Final Vue</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <span class="mr-2">
          
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/users">Users</router-link> |
          <router-link to="/login">Login</router-link>
          
          </span>
    </v-toolbar>
    <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {

    }
  }
}
</script>

<style scoped>
.mr-2 a {
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  color: #1088f2;
}

</style>

