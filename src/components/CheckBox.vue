<template>
  <div :class="['chk-box',type]">
    <input type="checkbox" :id="id" :name="name" :checked="checked">
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
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
