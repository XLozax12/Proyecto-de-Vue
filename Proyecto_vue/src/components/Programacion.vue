<script setup>
import {  collection } from '@firebase/firestore';
import { useCollection, useFirestore } from 'vuefire'

const db = useFirestore()
const todos = useCollection(collection(db, 'Programacion'))

defineProps({
    msg: {
        type: String,
        required: true
    }
})

</script>

<template>
    <h1>Programacion</h1>

    <div v-for="categorias in todos" :key="categorias.nombre">

            <li>
            {{ categorias.nombre }} |
            {{ categorias.horas }} |
            <img v-bind:src="'../src/img/' + categorias.Imagen" v-bind:alt="'' + categorias.Imagen" width="50"> |
            <button>Incribirse</button>
        </li>
    </div>
</template>

<style scoped>

</style>