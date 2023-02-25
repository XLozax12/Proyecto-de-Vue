import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import NotFound from './components/NotFound.vue'
import Inicio from './components/Inicio.vue'
import Ofimatica from './components/Ofimatica.vue'
import Programacion from './components/Programacion.vue'
import SOs from './components/SOs.vue'
import registro from './components/registro.vue'
import privado from './components/administracion_privado.vue'
import { firebaseApp } from './firebase.js'
import { VueFire, VueFireAuth } from 'vuefire'
// para area privada
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase.js'

import './assets/main.css'

// area privada
var estautenticado=false;
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      estautenticado=true;
      // ...
    } else {
      // User is signed out
      // ...
      estautenticado=false;
    //  Cuando le das a salir en administracion se va al inicio de la pagina y ya no te deja aceder a administracion
      router.push("/")
    }
  });
  




const routes = [
    // {
    //     path: '/',
    //     component:HelloWorld,
    //     props:{
    //         msg:'Titulo que paso al componente'
    //     }
    // },
    // {
       
    //     path: '/welcome/:nombre?',
    //     component:TheWelcome
    // },

     {
        path: '/',
        component:Inicio,
    },
    
    {
        //ruta inicio
        path: '/Inicio',
        component:Inicio,
        props:{
            msg:'Inicio'
        }
    },
    {
        //ruta Ofimatica
        path: '/Ofimatica',
        component:Ofimatica,
        props:{
            msg:'Ofimatica'
        }
    },
    {
        //ruta Programacion
        path: '/Programacion',
        component:Programacion,
        props:{
            msg:'Programacion'
        }
    },
    {
        //ruta SOs
        path: '/SOs',
        component:SOs,
        props:{
            msg:'SOs'
        }
    },
    {
        //ruta login
        path: '/registro',
        component:registro,

    },
    {
        //ruta login
        path: '/administracion',
        component:privado,
            beforeEnter: (to, from) => {
        // reject the navigation
         if(estautenticado)
            return true
         else
             return false
    },

    },
    {
        // si pones una ruta cualquiera que no sea las que hay te sale un mensaje
        path: '/:pathMatch(.*)*',
        name:"NotFound",
        component:NotFound
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

const miapp=createApp(App)
miapp.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  });
miapp.use(router)
miapp.mount('#app')