<template>
  <div id="table">
    <b-card no-body>
      <el-table
        class="table-responsive table"
        header-row-class-name="thead-light"
        
      >
        <!-- <el-table-column label="ลำดับ" min-width="150px" prop="label">
          <template v-slot="{ row }">
            <b-media no-body class="align-items-center">
              <b-media-body>
                <span class="font-weight-600 name mb-0 text-sm">{{
                  row.title
                }}</span>
              </b-media-body>
            </b-media>
          </template>
        </el-table-column> -->
        <el-table-column
          label="ลำดับ"
          :index="indexMethod"
          type="index"
          width="100px"
        >
        </el-table-column>

        <el-table-column label="Name" prop="name" min-width="200px">
        </el-table-column>

        <el-table-column label="Email" min-width="200px" prop="email">
        </el-table-column>

        <!-- <el-table-column label="Users" min-width="190px">
          <div class="avatar-group">
            <a
              href="#"
              class="avatar avatar-sm rounded-circle"
              data-toggle="tooltip"
              data-original-title="Ryan Tompson"
            >
              <img alt="Image placeholder" src="img/theme/team-1.jpg" />
            </a>
            <a
              href="#"
              class="avatar avatar-sm rounded-circle"
              data-toggle="tooltip"
              data-original-title="Romina Hadid"
            >
              <img alt="Image placeholder" src="img/theme/team-2.jpg" />
            </a>
            <a
              href="#"
              class="avatar avatar-sm rounded-circle"
              data-toggle="tooltip"
              data-original-title="Alexander Smith"
            >
              <img alt="Image placeholder" src="img/theme/team-3.jpg" />
            </a>
            <a
              href="#"
              class="avatar avatar-sm rounded-circle"
              data-toggle="tooltip"
              data-original-title="Jessica Doe"
            >
              <img alt="Image placeholder" src="img/theme/team-4.jpg" />
            </a>
          </div>
        </el-table-column> -->

        <!-- <el-table-column label="Completion" prop="completion" min-width="240px">
          <template v-slot="{ row }">
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{ row.completion }}%</span>
              <div>
                <base-progress :type="row.statusType" :value="row.completion" />
              </div>
            </div>
          </template>
        </el-table-column> -->

        <el-table-column label="Telephone" prop="tel" min-width="200px">
        </el-table-column>

        <el-table-column
          label="Products"
          prop="orders.0.product.pd_title_en"
          min-width="200px"
        >
         
        </el-table-column>

        <el-table-column label="Size" prop="orders.0.size" min-width="200px">
        </el-table-column>

        <el-table-column
          label="Material of Bag"
          prop="orders.0.mat_bag"
          min-width="200px"
        >
        </el-table-column>

        <el-table-column label="Destination" prop="dest" min-width="200px">
        </el-table-column>

        <el-table-column label="Remark" prop="remark" min-width="200px">
        </el-table-column>

        <el-table-column
          label="Status"
          prop="contacted"
          :formatter="statusChecker"
          min-width="200px"
        >
        </el-table-column>

        <el-table-column label="จัดการ" prop="edit" min-width="170px" align="center">
          <button type="button" class="btn" id="edit" data-toggle="modal" @click="editStatus(id)">แก้ไข</button>
        </el-table-column>

        <el-table-column min-width="170px">
          <button type="button" class="btn" id="del" data-toggle="modal" @click="deleteRow(index)">ลบ</button>
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
// import axios from 'axios'
import axios from "axios";
import { Table, TableColumn } from "element-ui";
export default {
  name: "customer-table",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  data() {
    return {
      currentPage: 1,
      list: [],
      intPageSize: 10,
    };
  },
  created: function () {
    axios.get("http://localhost:3000/api/customers").then((response) => {
      this.list = response.data.data;
      console.log(response.data.data);
    });
  },
  methods: {
    statusChecker(row, column) {
      if (row.contacted === true) {
        return "ติดต่อเรียบร้อย";
      } else {
        return "รอดำเนินการ";
      }
    },
    indexMethod(index) {
      return (this.currentPage - 1) * this.intPageSize + index + 1;
    },
    deleteRow(index) {
      // axios.delete('https://localhost:3000/api/custumers/' + index).then(response => {
      //   this.list.splice(index, 1)
      // });
      this.$store.dispatch("deleteRow", index);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@200;300&family=Prompt:wght@200;300&display=swap");
#table {
  /* font-family: "Mitr", sans-serif; */
  font-family: "Prompt", sans-serif;
  color: black;
}

#del{
  color: red;
  border: 2px solid red;
  font-weight: 300;
  transition-duration: 0.4s;
}

#del:hover {
  color:white;
  background-color: red;
  border: 2px solid red;
}

#edit{
  color: gray;
  border: 2px solid gray;
  font-weight: 300;
  transition-duration: 0.4s;
}

#edit:hover {
  color:white;
  background-color: gray;
  border: 2px solid gray;
}
</style>
