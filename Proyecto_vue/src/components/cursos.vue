<script setup>
import {  collection } from '@firebase/firestore';
import { useCollection, useFirestore } from 'vuefire'

const db = useFirestore()
const todos = useCollection(collection(db, 'Ofimatica'))
const todos2 = useCollection(collection(db, 'Progrmacion'))
const todos3 = useCollection(collection(db, 'SOs'))

defineProps({
    msg: {
        type: String,
        required: true
    }
})



</script>

<template>
    <h1>Ofimática</h1>


    <tbody v-for="categorias in todos" :key="categorias.nombre">
        <tr>
            <li>
            {{ categorias.nombre }} |
            {{ categorias.horas }} |
            <img v-bind:src="'../src/img/' + categorias.img" v-bind:alt="'' + categorias.Imagen" width="50"> |
            <button>Incribirse</button>
        </li>
        </tr>
    </tbody>


    <h1>Programacion</h1>

<tbody v-for="categorias in todos2" :key="categorias.nombre">
    <tr>
        <li>
        {{ categorias.nombre }} |
        {{ categorias.horas }} |
        <img v-bind:src="'../src/img/' + categorias.img" v-bind:alt="'' + categorias.Imagen" width="50"> |
        <button>Incribirse</button>
    </li>
    </tr>
</tbody>

    <h1>SOs</h1>

    <tbody v-for="categorias in todos3" :key="categorias.nombre">
        <tr>
            <li>
            {{ categorias.nombre }} |
            {{ categorias.horas }} |
            <img v-bind:src="'src/img' + categorias.img" v-bind:alt="'' + categorias.Imagen" width="50"> |
            <button>Incribirse</button>
        </li>
        </tr>
    </tbody>
</template>