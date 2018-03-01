<<template>
    <div class="header">
      <div class="top-wrapper">
        <div class="back-wrapper">
          <span class="icon-arrow_lift"></span>
        </div>
        <form class="search-wrapper">
          <span class="search-icon"></span>
          <input class="search-bar" type="text" placeholder="搜尋店內商品"/>
        </form>
        <div class="more-wrapper"></div>
      </div>
      <div class="content-wrapper">
        <a href="#" class="spelling-bt">拼單</a>
        <div class="more-bt"></div>
      </div>
      <div class="bulletin-wrapper">

      </div>
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
@import url('Header.css');
@import url('../../common/styles/icon-style.css');
</style>

