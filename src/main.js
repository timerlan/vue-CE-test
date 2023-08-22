import * as Vue from 'vue';
import customElement from "./custom-element.ce.vue";
const defCustomElement = Vue.defineCustomElement(customElement);
customElements.define("custom-element", defCustomElement);