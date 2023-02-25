<script setup>

import{auth} from '../firebase.js'
import {ref} from 'vue'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

var usuario=ref(""), contraseña=ref("");
 
//registro
function altaUsuario(){
    createUserWithEmailAndPassword(auth, usuario.value, contraseña.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential.user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.error(error.message);
    // ..
  });
    
}

//login
function login(){
  signInWithEmailAndPassword(auth, usuario.value, contraseña.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential.user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.error(error.message);
    // ..
  });
    
}
//login google
function logingoogle(){
  signInWithPopup(auth, new GoogleAuthProvider)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential.user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.error(error.message);
    // ..
  });
    
}


</script>


<template>
    Email: <input type="text" name="" id="" v-model="usuario">
    Contraseña:<input type="password" name="" id="" v-model="contraseña"><br><br>
    <button @click="login">Login</button> | 
    <button @click="logingoogle">Google</button> |
    <button @click="altaUsuario">Registro de Usuario</button><br>


</template>