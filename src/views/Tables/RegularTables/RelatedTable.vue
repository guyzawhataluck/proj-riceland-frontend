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

        <el-table-column label="Image" min-width="250px" prop="pd_img_url" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.pd_img_url" width="200px" height="200px"/>
          </template>
        </el-table-column>

        <el-table-column label="Title En" prop="pd_title_en" min-width="200px">
        </el-table-column>

        <el-table-column label="Title Ch" prop="pd_title_ch" min-width="200px">
        </el-table-column>

        <el-table-column label="Content En" prop="pd_content_en" min-width="200px">
        </el-table-column>

        <el-table-column label="Content Ch" prop="pd_content_ch" min-width="200px">
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
  name: "brand-table",
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
    axios.get('http://localhost:3000/api/relatedProducts').then((response) => {
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
