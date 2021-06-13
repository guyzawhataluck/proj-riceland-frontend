<script>
import { BPagination } from 'bootstrap-vue'
import ElTablePagination from 'el-table-pagination'
import axios from "axios";
Vue.component('b-pagination', BPagination)

</script>


<template>
  <div id="table" class="overflow-auto">                                      
    <b-card no-body>
      <b-table
      id="my-table"
      :items="list"
      :per-page="5"
      :current-page="currentPage"
      small
    ></b-table>
      <!-- <el-table
        id="cus-table"
        class="table-responsive table"
        header-row-class-name="thead-light"
        :data="list"
      > use ei sus -->

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

        <!-- <el-table-column label="ลำดับ" min-width="150px" prop="label">
        </el-table-column>
        <el-table-column label="Name" prop="name" min-width="200px">
        </el-table-column>

        <el-table-column label="Email" min-width="200px" prop="email">
        </el-table-column> use ei sus -->

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

        <!-- <el-table-column label="Telephone" prop="tel" min-width="200px">
        </el-table-column>
        <el-table-column label="Products" prop="product" min-width="200px">
        </el-table-column>
        <el-table-column label="Size" prop="size" min-width="200px">
        </el-table-column>
        <el-table-column
          label="Material of Bag"
          prop="material"
          min-width="200px"
        >
        </el-table-column>
        <el-table-column label="Destination" prop="dest" min-width="200px">
        </el-table-column>
        <el-table-column label="Remark" prop="remark" min-width="200px">
        </el-table-column>
        <el-table-column label="Status" prop="contacted" min-width="200px"> use ei sus-->

          <!-- <template v-slot="{ row }">
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{ row.completion }}%</span>
              <div>
                <base-progress :type="row.statusType" :value="row.completion" />
              </div>
            </div>
          </template> -->
        <!-- </el-table-column>
        <el-table-column label="จัดการ" prop="edit" min-width="200px">
        </el-table-column>
      </el-table> use ei sus-->

      <b-card-footer class="py-4 d-flex justify-content-end">
        <b-pagination
          v-model="currentPage"
          :per-page= "perPage"
          :total-rows="rows"
          aria-controls="my-table"
        ></b-pagination>
      </b-card-footer>
   </b-card>
  </div>
</template>
<script>
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
      perPage: 5
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/custumers').then((response) => {this.list = response.data})
  },
  computed: {
      rows() {
        return this.list.length
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
</style>
