
<template>
  <div>
    <commonCard title="累计交易订单量" count="3,000,000">
      <template slot="chart">
        <div id="total-order-chart" style="width: 100%;height:100%;"></div>
      </template>
      <template slot="total">
        <span>昨日订单量</span>
        <span class="emphasis">
          55,000
        </span>
      </template>
    </commonCard>
  </div>
</template>

<script>
// import commonCard from './commonCard/index.vue'
//   export default {
//     components:{
//       commonCard
//     }  
//   }
import CardMixins from '@/components/TotalView/Sub/commonCard/commonCardMixins';
export default {
  mixins: [CardMixins],
  mounted() {
    var myChart = this.$echarts.init(document.getElementById('total-order-chart'))
    // 指定图表的配置项和数据
    var option = {
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {}, tooltip: {},
      series: [
        {
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
}
</script>

<style  scoped>
.emphasis {
  margin-left: 6px;
  font-weight: 700;
  color: #333;
}
</style>
