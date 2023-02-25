<script setup>

import { useFirestore, useCollection } from 'vuefire'
import { collection,addDoc,deleteDoc } from 'firebase/firestore'

const db = useFirestore()
// En todos tienes que poner el nombre que le has llamado a lo de la base de datos
const todos = useCollection(collection(db, 'todos'))
// pones la base de datos tuya donde poe todos
//lo que hace esto le metes el dato atraves del codigo en vez de que lo hagas de forma manual
//y lo puedes poner en una funcion pa meterlo en un botton... porq sino cada vez ue recargue te mete lla nueva nota
function nuevaNota(){
const docRef = addDoc(collection(db, "cities"), {
  titulo: "Tokyo",
  prioridad: "Japan"
});
}
//borrar las nota (los datos)que añadimos con el boton
function borrarNota(id){
  deleteDoc(doc(db, "cities", id));
}


defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h3 class="green">{{ msg }}</h3>
    <!-- mostrar los nuevos datos del codigo de la function nuevanota -->
    <button @click="nuevaNota">Nueva nota</button>
    <!-- Boton eliminar datos -->
    <button @click="borrarNota">Eliminar notas</button>
    <!-- Mostrar la base de datos -->
    <ul>
    <li v-for="todo in todos" :key="todo.id">
     <span>{{ todo.text }}</span>
    </li>
  </ul>

    
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
