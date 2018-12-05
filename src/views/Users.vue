<template>
  <div>
    <v-container>
        <h1>Users</h1>
        <p>View the users of this app</p>
        <ul class="user-info">
          <li v-for="user in users" :key="user.id">
            <strong>Name:</strong> {{ user.name }}<br>
            <strong>Email:</strong> {{ user.email }}<br>
            <strong>Phone:</strong> {{ user.phone }}<br>
            <strong>City:</strong> {{ user.address.city }}<br>
            <strong>Website: </strong> <a href="#">www.{{ user.website }}</a><br>
            <strong>Company:</strong> {{ user.company.name }}<br>
            <strong>Catch Phrase:</strong> {{ user.company.catchPhrase }}<br>
            <br><br>
          </li>
        </ul>
  </v-container>
  </div>
</template>

<script>

export default {

  data() {
    return {
      users: []
    }
  },

  created: function() {
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
      this.users = response.data;
    });
  }

}
</script>

<style scoped>
.user-info {
  list-style-type: none;
}
</style>
