<template>
<div class="div-red-txt">
  This text from Test vue!
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

