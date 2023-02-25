<script setup>

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js'
import { signOut } from 'firebase/auth';
import { ref } from 'vue';


let username = ref('')
// Funcion que detecta si hay un usuario conectado
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        username.value = user.email;
    }
});

// cerrarsession
function cerrarSession(){
  signOut(auth).then(() => {
  // Sign-out successful.
    }).catch((error) => {
  // An error happened.
    });

}

</script>

<template>
    <header>
<!-- <RouterLink to="/">HelloWorld</RouterLink> | 
<RouterLink to="/Welcome/loza">Welcome</RouterLink> | -->
<RouterLink to="/Inicio">Inicio</RouterLink> | 
<RouterLink to="/Ofimatica">Ofimatica</RouterLink> |
<RouterLink to="/Programacion">Programacion</RouterLink> | 
<RouterLink to="/SOs">SOs</RouterLink>| 
<RouterLink to="/registro">Registro</RouterLink> |
<RouterLink v-if="username != ''" to="/Administracion">Administracion</RouterLink> 
<button @click="cerrarSession" v-if="username !=''" to="'/'">Salir</button>
<RouterLink v-if="username == ''" to="/registro"><button class="login">Login</button></RouterLink>

  </header>

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
</style>