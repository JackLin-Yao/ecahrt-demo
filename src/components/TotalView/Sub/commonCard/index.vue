<template>
  <div>
    <div class="common-card">
      <div class="title">
        {{title}}
      </div>
      <div class="count">{{count}}</div>
      <div class="chart">
        <slot name="chart"></slot>
      </div>
      <div class="line"></div>
      <div class="total">
        <slot name="total"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    count: String,
  }
}
</script>

<style  scoped>
.title {
  font-size: 14px;
  color: #999
}

.count {
  height: 30px;
  font-size: 25px;
  line-height: 30px;
  color: #424242;
  margin-top: 5px;
  letter-spacing: 1px;

}

.chart {
  height: 90px;
}

.line {
  border-top: 1px solid #eee;
  margin: 10px 0;
}
</style>
