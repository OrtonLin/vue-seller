<<template>
    <div class="header">
      {{poiInfo.name}}
  </div>
</template>

<<script>
export default {
  props:{
    poiInfo:{
      type:Object,//as Type, start with Capital!!!
      default:{}
    }
  }
}
</script>

<<style>

</style>

