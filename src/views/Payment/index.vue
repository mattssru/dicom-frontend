<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Payment</li>
    </ol>
  </nav>
  <div class="cardDashboard">
    <div class="d-flex align-items-center justify-content-between">
      <h2 class="topicCard">ค่าใช้จ่าย</h2>
      <button type="button" class="btn btnAdd" @click="addForm">Add</button>
    </div>
    <form action="" class="fieldSearch">
      <div class="row">
        <div class="col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">VN</label>
            <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your VN...">
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">Name</label>
            <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your Name...">
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">Type</label>
            <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your Type...">
          </div>
        </div>
      </div>
      <div class="btnGroup mt-3">
        <button type="button" class="btn btnCancle">Reset</button>
        <button type="button" class="btn btnSave">Search</button>
      </div>
    </form>
    <EasyDataTable
      :headers="headers"
      :items="items"
      :theme-color="themeColor"
      table-class-name="customize-table"
    >
      <template #item-operation="item">
        <div class="operation-wrapper">
          <span
            class="material-icons"
            @click="deleteItem(item)">
            note
          </span>
          <span
            class="material-icons"
            @click="editItem(item)">
            edit
          </span>
          <span
            class="material-icons"
            @click="deleteItem(item)">
            delete
          </span>
        </div>
      </template>
    </EasyDataTable>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import type { Header, Item } from "vue3-easy-data-table";

const router = useRouter()
const themeColor = "#f48225";

const addForm = () => {
  router.push('/patient/form')
}

const headers: Header[] = [
  { text: "No.", value: "no" },
  { text: "VN No.", value: "vnNo"},
  { text: "Name", value: "name"},
  { text: "Type", value: "type"},
  { text: "Owner Name", value: "ownerName"},
  { text: "Owner Phone", value: "ownerPhone"},
  { text: "Status", value: "status"},
  { text: "Updated Date", value: "updateDate"},
  { text: "Updated Name", value: "updateName"},
  { text: "Operation", value: "operation"},
];

const items: Item[] = [
  { no: "1", vnNo: "VN No", name: "Test Name", type: 'type', ownerName: "Owner Test", ownerPhone: "Owner Test", status: "Status", updateDate: "8/01/2024", updateName: "8/01/2024",},
  { no: "2", vnNo: "VN No", name: "Test Name", type: 'type', ownerName: "Owner Test", ownerPhone: "Owner Test", status: "Status", updateDate: "8/01/2024", updateName: "8/01/2024",},
  { no: "3", vnNo: "VN No", name: "Test Name", type: 'type', ownerName: "Owner Test", ownerPhone: "Owner Test", status: "Status", updateDate: "8/01/2024", updateName: "8/01/2024",},
  { no: "4", vnNo: "VN No", name: "Test Name", type: 'type', ownerName: "Owner Test", ownerPhone: "Owner Test", status: "Status", updateDate: "8/01/2024", updateName: "8/01/2024",},
];

  const deleteItem = (val: Item) => {

  };

  const editItem = (val: Item) => {
    
  };
</script>