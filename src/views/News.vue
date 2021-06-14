<template>
  <div>
    <base-header class="pr-8 pb-5 pt-2">
      <!-- Card stats -->
    </base-header>
    
    <b-container fluid class="mt--7 pt-md-8">
      <div class="pb-3">
            <Button text="CREATE NEW POST"  :onclick="redirectCreatePost"/>
        </div>
      <b-row>
        <b-col>
          <news-table/>
        </b-col>
      </b-row>
      <div class="mt-5"></div>
      <dark-table></dark-table>
    </b-container>
  </div>
</template>
<script>
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import NewsTable from "./Tables/RegularTables/NewsTable";
  // import DarkTable from "./Tables/RegularTables/DarkTable";
  // import CusList from "./Tables/RegularTables/CusList"
  import Button from "./Button/Button"

  export default {
    components: {
      NewsTable,
      Button,
      // // DarkTable,
      // CusList,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {

      };
    },
    methods:{
      redirectCreatePost(){
        this.$router.push("/newspost");
      }
    }
  };
</script>
<style>
.el-table.table-dark{
  background-color: #172b4d;
  color: #f8f9fe;
}

.el-table.table-dark th,
.el-table.table-dark tr{
  background-color: #172b4d;
}

.el-table.table-dark td,
.el-table.table-dark th.is-leaf{
  border-bottom: none;
}
</style>
