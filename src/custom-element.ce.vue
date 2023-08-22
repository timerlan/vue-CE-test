<script setup>
import './style.css'
import HelloWorld from './components/HelloWorld.vue'
import {ref} from 'vue'
import MySelect from "./components/MySelect.vue";

defineProps({
  title: String,
})

const books = ref(0)
books.value = [
  {title: "Old Man's War"},
  {title: "The Lock Artist"},
  {title: "HTML5"},
  {title: "Right Ho Jeeves"},
  {title: "The Code of the Wooster"},
  {title: "Thank You Jeeves"}
];

</script>
<template>
  <h1>{{title}}</h1>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue"/>
  <my-select></my-select>
  <textarea>{{books}}</textarea>
  <div>
    11111111111
  </div>
</template>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>