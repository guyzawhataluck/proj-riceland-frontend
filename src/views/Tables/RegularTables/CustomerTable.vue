<template>
  <div id="table">
    <b-card no-body>
      <el-table
        class="table-responsive table"
        header-row-class-name="thead-light"
        :data="customers"
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
        <el-table-column label="ลำดับ" min-width="150px" prop="label">
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

        <el-table-column label="Telephone" prop="telephone" min-width="200px">
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
        <el-table-column label="Status" prop="status" min-width="200px">
          <template v-slot="{ row }">
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{ row.completion }}%</span>
              <div>
                <base-progress :type="row.statusType" :value="row.completion" />
              </div>
            </div>
          </template>
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
import customers from "../customers";
import { Table, TableColumn } from "element-ui";
export default {
  name: "customer-table",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      customers,
      currentPage: 1
    };
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
