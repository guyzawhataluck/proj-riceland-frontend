<template>
  <div id="table">
    <b-card no-body>

      <el-table
        class="table-responsive table"
        header-row-class-name="thead-light"
        :data="pagedTableData"
      >
        <el-table-column label="ลำดับ" :index="indexMethod" type="index" width="100px">
        </el-table-column>

        <el-table-column label="Brand En" prop="brand_name_en" min-width="200px">
        </el-table-column>

        <el-table-column label="Brand Ch" prop="brand_name_ch" min-width="200px">
        </el-table-column>
        <el-table-column
          label="จัดการ"
          prop="edit"
          min-width="190px"
          align="center"
        >
        <template v-slot="{ row }">
          <button type="button" class="btn" id="edit" data-toggle="modal" @click="editBrand(row.id)">
            แก้ไข
          </button>
        </template>
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
          @change="setPage"
          :per-page="perPage"
          :total="rows"
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
      perPage: 8,
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
    },
  setPage (val) {
        this.currentPage = val
        
      },
  editBrand(id) {
        this.$router.push(`/editBrand/${id}`)
    },
    re() {
      axios.get("http://localhost:3000/api/brands").then((response) => {
        this.list = response.data.data;
      });
    },
    deleteRow(id) {
      if(confirm('Are you sure you want to delete this item?')){
        axios
          .delete(`http://localhost:3000/api/brands/${id}`)
          .then((response) => {
            this.list.splice(id, 1),
            this.re();
        });
      }
    },   
  },
  computed: {
      rows() {
        
        return this.list.length
      },
      pagedTableData() {
        
       return this.list.slice(this.perPage * this.currentPage - this.perPage, this.perPage * this.currentPage)
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
