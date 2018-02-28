<<template>
<div class="nav">
    <router-link class="nav-item goods" to="/goods">選購
    <i class="line"></i>
    </router-link>
    <router-link class="nav-item ratings" to="/ratings">評價
    <i class="line"></i>
    </router-link>
    <router-link class="nav-item sellers" to="/sellers">商家
    <i class="line"></i>
    </router-link>
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
    border-bottom:1px solid #e4e4e4;
  }
  .nav .nav-item{
    flex:1;
    text-align: center;
    font-size:13px;
    text-decoration:none;
    color:#666666;
    position: relative;
  }
  .nav .active{
    color:#FFBB22;
  }
  .nav .active .line{
    width:30px;
    height:2px;
    display:inline-block;
    background: #FFBB22;
    position: absolute;
    bottom:0px;
    left:50%;
    margin-left: -15px;
  }
</style>
