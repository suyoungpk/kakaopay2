<template>
   <div class="select-box" ref="select">
      <label :for="id" class="selected-option">{{label}}</label>
      <select name="" :id="id"  @change="change">
        <option  v-for="(item,index) in items" 
          :key="index" 
          :value="(item.value == undefined)?item:item.value" 
          :selected="(item.selected == 'true')? true: false"
        >{{(item.text == undefined)?item:item.text}}</option>
      </select>
    </div>
</template>

<script>
export default {
  name: 'ComboBox',
    props: {
    label:String,
    items:Array,
    name:String,
    id:String,
    width:String,
    fill:String, 
  },
  data(){
    return {
    }
  },
  methods: {
    change:function(){
      const selectbox =this.$refs.select,
            select = selectbox.querySelector('select'),
            checkedOpt = select.querySelector('option:checked');
      if(select.value.length > 0){
          selectbox.classList.add('on');
          selectbox.querySelector('label').innerText = checkedOpt.innerText;
      }
    }
  },
  mounted() {
    this.change();
  },
}
</script>
