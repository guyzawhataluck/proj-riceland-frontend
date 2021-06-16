<template>
  <div class="overflow-auto" id="table">
    <b-card no-body>
      <el-table
        class="table-responsive table"
        header-row-class-name="thead-light"
        :data="pagedTableData"
        id="my-table"
      >

        <el-table-column
          label="ลำดับ"
          :index="indexMethod"
          type="index"
          width="100px"
          align="center"
        >
        </el-table-column>

        <el-table-column label="Name" prop="name" min-width="200px">
        </el-table-column>

        <el-table-column label="Email" min-width="300px" prop="email">
        </el-table-column>

        <el-table-column label="Telephone" prop="tel" min-width="170px">
        </el-table-column>

        <el-table-column
          label="Products"
          prop="orders"
          min-width="200px"
          :formatter="displayProductName"
        >
        </el-table-column>

        <el-table-column 
          label="Size" 
          prop="orders" 
          min-width="100px"
          :formatter="displaySize"
        >
        </el-table-column>

        <el-table-column
          label="Material of Bag"
          prop="orders"
          :formatter="displayMatBag"
          min-width="200px"
        >
        </el-table-column>

        <el-table-column label="Destination" prop="dest" min-width="250px">
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

        <el-table-column
          label="จัดการ"
          prop="edit"
          min-width="190px"
          align="center"
        >
          <template v-slot="{ row }">
            <button
              type="button" class="btn" id="edit" data-toggle="modal" @click="editStatus(row.id)"
            >
              แก้ไขสถานะ
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
          aria-controls="my-table"
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
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      list: [],
      intPageSize: 8
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/customers").then(response => {
      this.list = response.data.data;
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
    re() {
      axios.get("http://localhost:3000/api/customers").then((response) => {
        this.list = response.data.data;
      });
    },
    deleteRow(id) {
      if(confirm('Are you sure you want to delete this item?')){
        axios
          .delete(`http://localhost:3000/api/customers/${id}`)
          .then((response) => {
            this.list.splice(id, 1),
            this.re();
        });
      }
    },
    async editStatus(id) {
      await axios
          .post(`http://localhost:3000/api/customers/${id}`)
          .then((response) => {
            this.contacted = !response.data.data.contacted,
            this.re();
      });
    },
    displayProductName(row) {
      const productName = [];
      const order = row.orders;
      // console.log(row.orders);
      if (order.length > 0) {
        for (let i = 0; i < order.length; i++) {
          // console.log(order[i].product);
          // console.log(i);
          // console.log(i.product);
          const name = order[i].product.pd_title_en;
          productName.push(name);
        }
        return productName.toString();
      }
    },
    displayMatBag(row) {
      const MatBag = [];
      const order = row.orders;

      if (order.length > 0) {
        for (let i = 0; i < order.length; i++) {
          const matbag = order[i].mat_bag;
          MatBag.push(matbag);
        }
        return MatBag.toString();
      }
    },
    displaySize(row) {
      const Size = [];
      const order = row.orders;
      if (order.length > 0) {
        for (let i = 0; i < order.length; i++) {
          const size = order[i].size;
          Size.push(size);
        }
        return Size.toString();
      }
    },
    setPage (val) {
        this.currentPage = val
        
      }
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
  color: black;
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