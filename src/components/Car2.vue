<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <img v-bind:src="image" class="car-image">
  </div>
</template>

<script>

export default {

  data() {
    return {
      title: 'Mclaren 675lt',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat pharetra fermentum. Cras ac fermentum quam, et aliquam magna. Praesent et tortor arcu. Praesent maximus, tellus vitae porta aliquet, ipsum ex vestibulum sem, ut bibendum mauris tortor sodales lacus.',
      image: 'https://cdn.vox-cdn.com/thumbor/j7GsSLOthWgh8Vujt58I6wSz7lA=/0x0:3000x2000/1280x854/cdn.vox-cdn.com/uploads/chorus_image/image/47785391/mclaren-675lt-longtail-0822.0.0.png',
    }
  }
}

</script>

<style>

.car-image {
  max-width: 500px;
}

</style>