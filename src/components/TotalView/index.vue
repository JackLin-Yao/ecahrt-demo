<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalOrders></TotalOrders>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalSales></TotalSales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalStates></TotalStates>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalUser></TotalUser>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalOrders from '@/components/TotalView/Sub/TotalOrders.vue'
import TotalSales from '@/components/TotalView/Sub/TotalSales.vue'
import TotalStates from '@/components/TotalView/Sub/TotalStates.vue';
import TotalUser from '@/components/TotalView/Sub/TotalUser.vue';
export default {
  components: {
    TotalUser,
    TotalStates,
    TotalSales,
    TotalOrders
  }
}
</script>

<style lang="scss" scoped>

</style>
