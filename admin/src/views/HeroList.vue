<template>
  <div id="HeroList">
    <h1>英雄列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="name" label="英雄名称"></el-table-column>
      <el-table-column prop="title" label="称号"></el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" style="height:3rem" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template v-slot="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/heroes/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
    
<script>
export default {
  name: "HeroList",
  components: {},
  data() {
    return {
      items: []
    };
  },

  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/heroes");
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`是否确定要删除分类 "${row.name}"?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/heroes/${row._id}`);
        if (res.data.success) {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        }
        this.fetch();
      });
    }
  }
};
</script>
    
<style >
</style>
