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
      title: 'Mclaren 570s',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat pharetra fermentum. Cras ac fermentum quam, et aliquam magna. Praesent et tortor arcu. Praesent maximus, tellus vitae porta aliquet, ipsum ex vestibulum sem, ut bibendum mauris tortor sodales lacus.',
      image: 'http://www.hdcarwallpapers.com/walls/2016_mclaren_570s_track_pack_upgrade-HD.jpg',
    }
  }
}

</script>

<style>

</style>