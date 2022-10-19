<template>
  <div class="home">
    <total-view></total-view>
    <sales-view></sales-view>
    <el-button>button</el-button>
  </div>
</template>


<script>
import TotalView from '@/components/TotalView/index.vue'
import SalesView from '@/components/SalesView/index.vue';
export default {
  components:{
    TotalView,
    SalesView
  },
  mounted(){
    console.log(this.$echarts);
    console.log(this);
  }
}
</script>

<style scoped>
.home{
width: 100%;
height: 100%;
}
</style>
