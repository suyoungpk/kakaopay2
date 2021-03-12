<template>
   <div class="select-box">
      <input type="hidden" name="" title="선택된 옵션">
      <button type="button" class="selected-option">중성부 여부</button>
      <div class="option-list">
        <div>
          <ul>
            <li><button type="button" data-val="value1">했고</button></li>
            <li><button type="button" data-val="value2">하지 않았</button></li>
            <li><button type="button" data-val="value3">했고</button></li>
            <li><button type="button" data-val="value4">하지 않았</button></li>
          </ul>
        </div>
      </div>
    </div> 
</template>

<script>
export default {
  name: 'ComboBox',
  props: {
   
  }
}
</script>
