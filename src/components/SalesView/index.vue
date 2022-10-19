<template>
  <div class="sales-view">
    <el-card class="box-card">
      <template slot="header">
        <div class="menu-wrapper">
          <el-menu mode="horizontal" :default-active="activeIndex" @select="onMenuItemSelect">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">订单量</el-menu-item>

          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radio">
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="本年"></el-radio-button>
            </el-radio-group>
            <el-date-picker unlink-panels v-model="value2" :picker-options="pickerOptions" style="margin-left;15px"
              type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <v-chart :option="options" style="width: 100%;height:100%;"></v-chart>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value2: '',
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周', onClick(picker) {
              const end = new Date();
              const start = new Date();
              // debugger;
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);

            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }
        ]
      },
      radio: '本周', activeIndex: '1',
      options: {
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        tooltip: {},
        yAxis: {},
        tooltip: {},
        series: [{
          type: 'bar',
          data: [115, 200, 363, 104, 510, 620, 345, 678, 890, 985, 924, 567]
        }]
      },

    }
  },
  methods: {
    onMenuItemSelect(index) {
      console.log("🚀 ~ file: index.vue ~ line 49 ~ onMenuItemSelect ~ index", index)

    }
  },
}
</script>

<style lang="scss" scoped>
.sales-view {
  width: 100%;
  height: 450px;
  background-color: #fff;
  margin-top: 20px;
}

.menu-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.menu-right {
  position: absolute;
  right: 20px;
  top: 0;
  height: 50px;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.el-menu {
  width: 100%;
}
.el-card__body{
  height: 100%;
}
</style>
