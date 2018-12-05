<template>
  <div>
    <v-container>
        <h1>About</h1>
        <v-btn large color="primary" @click="showCar1 = !showCar1">720s</v-btn>

        <v-btn large color="primary" @click="showCar2 = !showCar2">675lt</v-btn>

        <v-btn large color="primary" @click="showCar3 = !showCar3">650s</v-btn>

        <v-btn large color="primary" @click="showCar4 = !showCar4">570s</v-btn>

        <transition name="slide" type="animation">
        <div v-if="showCar1">
          <app-car1></app-car1>
        </div>
        </transition>

        <transition name="slide" type="animation">
        <div v-if="showCar2">
          <app-car2></app-car2>
        </div>
        </transition>

        <transition name="slide" type="animation">
        <div v-if="showCar3">
          <app-car3></app-car3>
        </div>
        </transition>

        <transition name="slide" type="animation">
        <div v-if="showCar4">
          <app-car4></app-car4>
        </div>
        </transition>
      
  </v-container>
  </div>
</template>

<script>
import Car1 from '../components/Car1'
import Car2 from '../components/Car2'
import Car3 from '../components/Car3'
import Car4 from '../components/Car4'

export default {

  data() {
    return {
      showCar1: false,
      showCar2: false,
      showCar3: false,
      showCar4: false,
    }
  },

  components: {
      'app-car1': Car1,
      'app-car2': Car2,
      'app-car3': Car3,
      'app-car4': Car4,
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
}

.fade-leave-active {
  transition: all 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in .5s ease-out forwards;
  transition: opacity .5s;
}

.slide-leave {

}

.slide-leave-active {
  animation: slide-out .5s ease-out forwards;
  transition: opacity .5s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateX(200px);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-200px);
  }
}

</style>


