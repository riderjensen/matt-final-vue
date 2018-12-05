<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <img v-bind:src="image">
  </div>
</template>

<script>

export default {

  data() {
    return {
      title: 'Tesla',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat pharetra fermentum. Cras ac fermentum quam, et aliquam magna. Praesent et tortor arcu. Praesent maximus, tellus vitae porta aliquet, ipsum ex vestibulum sem, ut bibendum mauris tortor sodales lacus.',
      image: 'https://ecomento.de/wp-content/uploads/2018/08/Tesla-Roadster-Batterie-740x425.jpg',
    }
  }
}

</script>

<style>

</style>