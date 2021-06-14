<template>
  <div id="table">
    <b-card no-body>

      <el-table
        class="table-responsive table"
        header-row-class-name="thead-light"
        :data="list"
      >
        <el-table-column label="ลำดับ" :index="indexMethod" type="index" width="100px">
        </el-table-column>
        <el-table-column label="Brand En" prop="brand_name_en" min-width="200px">
        </el-table-column>
        <el-table-column label="Brand Ch" prop="brand_name_ch" min-width="200px">
        </el-table-column>
        <el-table-column label="จัดการ" prop="edit" min-width="200px">
            
        </el-table-column>
      </el-table>

      <b-card-footer class="py-4 d-flex justify-content-end">
        <base-pagination
          v-model="currentPage"
          :per-page="10"
          :total="50"
        ></base-pagination>
      </b-card-footer>
    </b-card>
  </div>
</template>
<script>
import axios from "axios";
import { Table, TableColumn } from "element-ui";
export default {
  name: "settingbrand-table",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      currentPage: 1,
      list: [],
      intPageSize: 8
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/brands').then((response) => {
      this.list = response.data.data
    })
  },
  methods: {
    indexMethod(index) {
        return (this.currentPage - 1) * this.intPageSize + index + 1 
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@200;300&family=Prompt:wght@200;300&display=swap");
#table {
  /* font-family: "Mitr", sans-serif; */
  font-family: "Prompt", sans-serif;
}
</style>
