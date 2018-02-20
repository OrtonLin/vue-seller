<template>
<div class="div-red-txt">
  <span class="icon-thumb_up"></span>This text from Test vue!
  {{msg}}
</div>
</template>
<<script>
export default {
  name:'Text',
  data() {
    return {
      msg : 'this message from data'
    }
  }
}
</script>

<style>
.div-red-txt {
  color:red;
}
</style>

