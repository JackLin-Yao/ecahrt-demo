<template>
  <div>
    <commonCard title="累计交易额" count="￥ 3,000,000">
      <template slot="chart">
        <div class="compare-wrapper">
          <div class="compare">
            <span>
              日同比
            </span>
            <span class="emphasis">8.29%</span><div class="dec"></div>
          </div>
          <div class="compare"> <span>
              日同比
            </span>
            <span class="emphasis">8.29%</span><div class="inc"></div>
          </div>
        </div>
      </template>
      <template slot="total">
        <span>昨日销售额</span>
        <span class="emphasis">
          ￥ 55,000
        </span>
      </template>
    </commonCard>
  </div>
</template>

<script>
import CardMixins from '@/components/TotalView/Sub/commonCard/commonCardMixins';
export default {
  mixins: [CardMixins]
}
</script>

<style  scoped>
.compare-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.compare {
  display: flex;
  height: 50%;
  font-size: 20px;
  line-height: 27px;
}

.emphasis {
  font-weight: 700;
  color: #333;
  margin-left: 6px;
}
.dec{
width: 0;
height: 0;
border-width: 8px;
border-style:solid;
border-color:green transparent transparent transparent;
margin-top: 11px;
margin-left: 5px;
}
.inc{
width: 0;
height: 0;
border-width: 8px;
border-style:solid;
border-color: transparent transparent red transparent;
margin-top: -2spx;
margin-left: 5px;
}

</style>
