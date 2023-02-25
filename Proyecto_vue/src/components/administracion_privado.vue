<script setup>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase.js'
import { ref } from "vue";
import Ofimatica from './Ofimatica.vue'
import Programacion from './Programacion.vue'
import SOs from './SOs.vue'


var nombreUsuario=ref("");
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
        nombreUsuario.value=user.email;
      // ...
    } else {
      // User is signed out
      // ...

    }
  });

</script>

<template>

<h1>Administracion</h1>
    <h3>Bienvenido usuario: {{ nombreUsuario }}</h3>
    <Ofimatica></Ofimatica>
    <Programacion></Programacion>
    <SOs></SOs>
    <br><br><br><br>
</template>