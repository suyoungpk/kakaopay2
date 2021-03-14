<template>
  <div :class="['radio-box',type]">
    <input type="radio" :id="id" :name="name" :checked="checked">
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: 'Radio',
    props: {
    label:String,
    name:String,
    id:String,
    type:String,
    checked:Boolean
   },
  data(){
    return {
     
    }
  },
}
</script>
