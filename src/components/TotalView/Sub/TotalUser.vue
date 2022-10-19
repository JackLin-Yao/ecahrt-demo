<template>
  <div>
    <commonCard title="累计用户量" count="3,000,000">
    <template slot="chart">
      <div id="total-order-user" style="width: 100%;height:100%;"></div>
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
import CardMixins from '@/components/TotalView/Sub/commonCard/commonCardMixins';
export default {
  mixins: [CardMixins],
  mounted () {
    var myChart = this.$echarts.init(document.getElementById('total-order-user')) 
    // 指定图表的配置项和数据
    var option = {
        xAxis: {
          type:'category',
          data:['1月','2月','3月','4月','5月','6月']
        },
        yAxis: {},
        tooltip:{},
        series: [
          {
            type: 'bar',
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

</style>
