<template>
  <button type="button" :class="['btn btn-orange',(type=='small')? 'small':'big'] " :disabled="disabled" :id="id">{{text}}</button>
</template>

<script>
export default {
  name: 'Button',
   props: {
    text:String,
    id:String,
    disabled:Boolean,
    type:String
  },
  data(){
    return {
    }
  },
}
</script>
