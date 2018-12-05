<template>
  <div>
    <v-container>
        <h1>About</h1>
        <v-btn large color="primary" @click="showMclaren = !showMclaren">Mclaren</v-btn>
        <v-btn large color="primary" @click="showTesla = !showTesla">Tesla</v-btn>

        <transition name="fade">
        <div v-if="showMclaren">
          <app-mclaren></app-mclaren>
        </div>
        </transition>

        <transition name="fade">
        <div v-if="showTesla">
          <app-tesla></app-tesla>
        </div>
        </transition>
      
  </v-container>
  </div>
</template>

<script>
import Mclaren from '../components/Mclaren'
import Tesla from '../components/Tesla'

export default {

  data() {
    return {
      showMclaren: false,
      showTesla: false,
    }
  },

  components: {
    'app-mclaren': Mclaren,
    'app-tesla': Tesla,
  }
}
</script>

<style scoped>

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-leave {
  /* opacity: 1; */
}

.fade-leave-active {
  transition: all 1s;
  opacity: 0;
}

</style>


