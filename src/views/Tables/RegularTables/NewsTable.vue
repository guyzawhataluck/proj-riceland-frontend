<template>
  <div id="table">
    <!-- <div style="width:80vw">
      <button
        style="float:right"
        type="button"
        class="btn"
        id="re"
        data-toggle="modal"
        @click="re()"
      >
        refresh
      </button>
    </div> -->

    <b-card no-body>
      <el-table
        class="table-responsive table"
        header-row-class-name="thead-light"
        :data="pagedTableData"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          label="ลำดับ"
          :index="indexMethod"
          type="index"
          width="100px"
        >
        </el-table-column>

        <el-table-column 
        label="Date" 
        min-width="200px" 
        prop="news_date"
        
        v-slot="{ row }">
        <label>{{ format_date(row.news_date) }}</label>
        </el-table-column>

        <el-table-column label="Image" min-width="150px" prop="news_img_url">
          <template slot-scope="scope">
            <img :src="scope.row.news_img_url" width="61px" height="61px" />
          </template>
        </el-table-column>

        <el-table-column
          label="Title En"
          prop="news_title_en"
          min-width="200px"
          :formatter="nullnews_title_en"
        >
        </el-table-column>

        <el-table-column
          label="Title Ch"
          prop="news_title_ch"
          min-width="200px"
          :formatter="nullnews_title_ch"
        >
        </el-table-column>

        <el-table-column
          label="Content En"
          prop="news_content_en"
          min-width="200px"
          :formatter="nullnews_content_en"
        >
        </el-table-column>

        <el-table-column
          label="Content Ch"
          prop="news_content_ch"
          min-width="200px"
          :formatter="nullnews_content_ch"
        >
        </el-table-column>

        <el-table-column label="จัดการ" prop="edit" min-width="200px">
          <template v-slot="{ row }">
            <button
              type="button"
              class="btn"
              id="edit"
              data-toggle="modal"
              @click="editNews(row.id)"
            >
              แก้ไข
            </button>
          </template>
        </el-table-column>

        <el-table-column min-width="170px">
          <template v-slot="{ row }">
            <button
              type="button"
              class="btn"
              id="del"
              data-toggle="modal"
              @click="deleteRow(row.id)"
            >
              ลบ
            </button>
          </template>
        </el-table-column>
      </el-table>

      <b-card-footer class="py-4 d-flex justify-content-end">
        <base-pagination
          v-model="currentPage"
          @change="setPage"
          :per-page="perPage"
          :total="rows"
        ></base-pagination>
      </b-card-footer>
    </b-card>
  </div>
</template>
<script>
import moment from "moment";
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
      perPage: 5,
      list: [],
      intPageSize: 5
    };
  },
  created: async function() {
    await axios.get("http://localhost:3000/api/news").then(response => {
      this.list = response.data.data;
    });
  },
  methods: {
    indexMethod(index) {
      return (this.currentPage - 1) * this.intPageSize + index + 1;
    },
    setPage(val) {
      this.currentPage = val;
    },
    re() {
      axios.get("http://localhost:3000/api/news").then(response => {
        this.list = response.data.data;
      });
    },
    deleteRow(id) {
      if (confirm("Are you sure you want to delete this item?")) {
        axios.delete(`http://localhost:3000/api/news/${id}`).then(response => {
          this.list.splice(id, 1), this.re();
        });
      }
    },
    editNews(id) {
      this.$router.push(`/editNews/${id}`);
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
      else if (value === null || value === "") {
        return "-";
      }
    },
    nullnews_title_en(row, column) {
      if (row.news_title_en === null || row.news_title_en === "") {
        return "-";
      }
      else {
        return row.news_title_en;
      }
    },
    nullnews_title_ch(row, column) {
      if (row.news_title_ch === null || row.news_title_ch === "") {
        return "-";
      }
      else {
        return row.news_title_ch;
      }
    },
    nullnews_content_en(row, column) {
      if (row.news_content_en === null || row.news_content_en === "") {
        return "-";
      }
      else {
        return row.news_content_en;
      }
    },
    nullnews_content_ch(row, column) {
      if (row.news_content_ch === null || row.news_content_ch === "") {
        return "-";
      }
      else {
        return row.news_content_ch;
      }
    },  
  },
  computed: {
    rows() {
      return this.list.length;
    },
    pagedTableData() {
      return this.list.slice(
        this.perPage * this.currentPage - this.perPage,
        this.perPage * this.currentPage
      );
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

#edit {
  color: gray;
  border: 2px solid gray;
  font-weight: 300;
  transition-duration: 0.4s;
}

#edit:hover {
  color: white;
  background-color: gray;
  border: 2px solid gray;
}
</style>