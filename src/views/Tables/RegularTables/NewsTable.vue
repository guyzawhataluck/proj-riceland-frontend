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

        <el-table-column label="Date" min-width="200px" prop="news_date">
        </el-table-column>

        <el-table-column label="Image" min-width="250px" prop="news_img_url">
          <template slot-scope="scope">
            <img :src="scope.row.news_img_url" width="61px" height="61px"/>
          </template>
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

        <el-table-column min-width="170px">
          <template v-slot="{ row }">
            <button
              type="button" class="btn" id="del" data-toggle="modal" @click="deleteRow(row.id)"
            >
              ลบ
            </button>
          </template>
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
      list: [],
      intPageSize: 8
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/news').then((response) => {
      this.list = response.data.data
    })
  },
  methods: {
    indexMethod(index) {
        return (this.currentPage - 1) * this.intPageSize + index + 1 
    },
    re() {
      axios.get("http://localhost:3000/api/news").then((response) => {
        this.list = response.data.data;
      });
    },
    deleteRow(id) {
      if(confirm('Are you sure you want to delete this item?')){
        axios
          .delete(`http://localhost:3000/api/news/${id}`)
          .then((response) => {
            this.list.splice(id, 1),
            this.re();
        });
      }
    },
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@200;300&family=Prompt:wght@200;300&display=swap");
#table {
  /* font-family: "Mitr", sans-serif; */
  font-family: "Prompt", sans-serif;
}

#del {
  color: red;
  border: 2px solid red;
  font-weight: 300;
  transition-duration: 0.4s;
}

#del:hover {
  color: white;
  background-color: red;
  border: 2px solid red;
}

</style>
