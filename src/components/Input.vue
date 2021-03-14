<template>
   <div class="input-box validator" :class="{'pass':(isPass == 'true')?true:false,'fail':(isPass == 'false')?true:false}">
    <div>
      <label :for="id" v-show="state" >{{label}}</label>
      <input :type="type" :name="name" :id="id"  v-model="textareaVal" :required="required" :readonly="readonly" :minlength="minlength" :maxlength="maxlength" @focus="placeHoldFocus()" @blur="placeHoldBlur()" @keyup="onkeyup" @click="onclick"> 
      <p>{{ (this.isPass != undefined && this.isPass == 'true')? this.vaild : this.invaild }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type:{
      validator: function (value) {
        return ['text', 'password', 'tel','email','number','time'].indexOf(value) !== -1
      }
    },
    label:String,
    invaild:String,
    vaild:String,
    name:String,
    id:String,
    minlength:Number,
    maxlength:Number,
    required:String,
    readonly:String,
    isPass:String
  },
  data(){
    return {
      state:true,
      textareaVal:""
    }
  },
  methods:{
    placeHoldFocus:function(){
      this.state=false;
    },
    placeHoldBlur:function(){
      (this.textareaVal=="")?this.state=true:this.state=false;
    },
    onkeyup:function(e){
     this.$emit('keyup', e);
    },
    onclick:function(e){
     this.$emit('click', e);
    }
  }
}
</script>
