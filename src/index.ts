import Vue from 'vue'
import Hello from './Hello.vue'

let  div=document.createElement('div')
div.id="app"
div.textContent='Hello'
document.body.appendChild(div)

new Vue({
    el:div,
    render:(h)=>h(Hello)
})
