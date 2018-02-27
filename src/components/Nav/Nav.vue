<<template>
<div class="nav">
    <router-link class="nav-item goods" to="/goods">選購</router-link>
    <router-link class="nav-item ratings" to="/ratings">評價</router-link>
    <router-link class="nav-item sellers" to="/sellers">商家</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav{
    display:flex;
    width:100%;
    height: 40px;
    line-height: 40px;
  }
  .nav .nav-item{
    flex:1;
    text-align: center;
  }
</style>
