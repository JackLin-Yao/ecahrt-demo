<template>
  <div>
    <commonCard title="用户好评率" count="3,000,000">
    <template slot="chart">
      <div id="total-order-like" style="width: 100%;height:100%;"></div>
    </template>
    <template slot="total">
      <span>昨日好评率</span>
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
  mounted() {
    var myChart = this.$echarts.init(document.getElementById('total-order-like'))
    // 指定图表的配置项和数据
    var option = {
      xAxis: {
       type:'value'
      },
      yAxis: {
        type:'category'
      }, tooltip: {},
      series: [
        {
          type:'bar',
          data: [ 20]
        },
        {
          type:'bar',
          data: [5]
        },
        {
          type:'bar',
          data: [15]
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
