<template>
  <div id="table">
    <b-card no-body>

      <el-table
        class="table-responsive table"
        header-row-class-name="thead-light"
        :data="list"
      >
        <el-table-column label="ลำดับ" min-width="150px" prop="label">
        </el-table-column>
        <el-table-column label="Date" min-width="200px" prop="news_date">
          
        </el-table-column>

        <el-table-column label="Image" min-width="200px" prop="news_img_url">
          
        </el-table-column>

        <el-table-column label="Title En" prop="news_title_en" min-width="200px">
        </el-table-column>
        <el-table-column label="Title Ch" prop="news_title_ch" min-width="200px">
        </el-table-column>
        <el-table-column label="Content En" prop="news_content_en" min-width="200px">
        </el-table-column>
        <el-table-column label="Content Ch" prop="news_content_ch" min-width="200px">
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
  name: "news-table",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      currentPage: 1,
      list: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/news').then((response) => {this.list = response.data})
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
