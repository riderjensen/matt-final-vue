<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <img v-bind:src="image"  class="car-image">
  </div>
</template>

<script>

export default {

  data() {
    return {
      title: 'Mclaren 650s',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat pharetra fermentum. Cras ac fermentum quam, et aliquam magna. Praesent et tortor arcu. Praesent maximus, tellus vitae porta aliquet, ipsum ex vestibulum sem, ut bibendum mauris tortor sodales lacus.',
      image: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/mclaren-650s.jpg?itok=VIFKtZiK',
    }
  }
}

</script>

<style>

</style>