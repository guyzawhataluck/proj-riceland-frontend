<template>
  <div>
    <base-header class="pr-8 pb-5 pt-2">
      <!-- Card stats -->
    </base-header>
    
    <b-container fluid class="mt--7 pt-md-8">
        <div class="pb-2">
            <Button text="ADD PRODUCT" :onclick="redirectAddOurBrands"/>
        </div>
      <b-row>
        <b-col>
          <brand-table/>
        </b-col>
      </b-row>
      <div class="mt-5"></div>
      <dark-table></dark-table>
    </b-container>
  </div>
</template>
<script>
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import BrandTable from "./Tables/RegularTables/BrandTable";
  // import DarkTable from "./Tables/RegularTables/DarkTable";
  // import CusList from "./Tables/RegularTables/CusList"
  import Button from "./Button/Button"

  export default {
    components: {
      BrandTable,
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
      redirectAddOurBrands(){
        this.$router.push("/addourbrands");
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
