<template>
<v-container>
  <h1>Home</h1>
  <div class="title-break">

  </div>

  <v-card v-for="car in cars" :key="car.id">
        <v-img
          v-bind:src="car.image"
          aspect-ratio="1.5"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ car.make }} {{ car.model }}</h3>
            <div>
              <br>
              <p v-local-upper>Top Speed: {{ car.topSpeed }} mph</p>
              <p v-local-upper>Horsepower: {{ car.horsePower }}</p>
            </div>
          </div>
        </v-card-title>
      </v-card>

      </v-container>
</template>

<script>
  export default {

    data() {
      return {
        cars: [
          {
            make: 'Mclaren',
            model: '720s',
            topSpeed: 212,
            horsePower: 710,
            image: 'https://www.indigoautogroup.com/inventoryphotos/3232/sbm14dca6jw001616/ip/3.jpg',
          },
          {
            make: 'Mclaren',
            model: '675lt',
            topSpeed: 205,
            horsePower: 666,
            image: 'https://cdn.vox-cdn.com/thumbor/j7GsSLOthWgh8Vujt58I6wSz7lA=/0x0:3000x2000/1280x854/cdn.vox-cdn.com/uploads/chorus_image/image/47785391/mclaren-675lt-longtail-0822.0.0.png',
          },
          {make: 'Mclaren',
            model: '650s',
            topSpeed: 207,
            horsePower: 641,
            image: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/mclaren-650s.jpg?itok=VIFKtZiK',
          },
          {
            make: 'Mclaren',
            model: '570s',
            topSpeed: 204,
            horsePower: 562,
            image: 'http://www.hdcarwallpapers.com/walls/2016_mclaren_570s_track_pack_upgrade-HD.jpg',
          },
        ]
      }
    },

  directives: {
    'local-upper': {
      bind(el) {
        el.style.textTransform = 'uppercase';
      }
    }
  }
    
  }
</script>

<style scoped>

.container {
  max-width: 960px;
}

.title-break {
  height: 1px;
  background: #ccc;
  width: 100%;
  margin: 20px 0;
}

.v-card {
  width: 48%;
  margin: 0 1%;
  margin-bottom: 20px;
  display: inline-block;
}

</style>

