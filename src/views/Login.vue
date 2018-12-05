<template>
  <v-container>
    <v-form v-model="valid">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="20"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-btn large color="primary">Log In</v-btn>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    })
  }
</script>

<style scoped>
.v-form {
  max-width: 500px;
}
</style>
