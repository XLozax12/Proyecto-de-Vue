<script setup>
import cabecera from './components/cabecera.vue'
import pie from './components/pie.vue'
// Ejercicio14
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  // Aquí obtén los datos
  // Cuando se hayan obtenido, establece loading en false después de 2 segundos
  setTimeout(() => {
    loading.value = false
  }, 2000)
})


</script>

<template>
  <header>
    
    <img alt="Vue logo" class="logo" src="./assets/logo2.png" width="125" height="125" />
<cabecera></cabecera>
<!-- Ejercicio14 -->
<div v-if="loading" class="preload"></div>

  </header>
  <pie></pie>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
} 

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
/* Ejercicio14 */

.preload {
  width: 60px;
  height: 60px;
  border: 8px solid #ffffff;
  border-top: 8px solid #e5f109;
  border-radius: 50%;
  animation: spin 0.8s ease-in-out infinite;
  margin: 0 auto;
  backdrop-filter: blur(100px);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
