<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="#">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/patient">Patient</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Patient Form</li>
    </ol>
  </nav>
  <div class="row">
    <div class="col-xl-8">
      <div class="cardDashboard">
        <h2 class="topicCard">Patient Form</h2>
        <form action="">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="" class="form-label">VN No.</label>
                <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your VN No...">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="" class="form-label">Pet Name.</label>
                <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your Pet Name...">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="" class="form-label">Pet Type.</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>select your Pet Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="" class="form-label">Birthday</label>
                <input type="date" class="form-control" id="" aria-describedby="" placeholder="type your Date...">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label for="" class="form-label">Age</label>
                <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your Age...">
              </div>
            </div>
            <div class="col-lg-6"></div>
            <div class="col-xs-12">
              <div class="form-group">
                <label for="" class="form-label">Medication Records and Instruction</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder=""></textarea>
              </div>
            </div>
          </div>
        </form>
      </div> 
    </div>
    <div class="col-xl-4">
      <div class="cardDashboard">
        <h2 class="topicCard">Owner Information</h2>
        <form action="">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">First Name</label>
                <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your First name...">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your Last name...">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">Phone</label>
                <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your Phone...">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="" aria-describedby="" placeholder="type your E-mail...">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">Address</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-12">
      <div class="cardDashboard">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h2 class="topicCard mb-0">Medical History</h2>
          <button type="button" class="btn btnAdd" @click="addForm">Add</button>
        </div>
        <EasyDataTable
          :headers="headersHistory"
          :items="itemsHistory"
          :theme-color="themeColor"
          table-class-name="customize-table"
        >
          <template #item-operation="item">
            <div class="operation-wrapper">
              <span
                class="material-icons"
                @click="viewDicom">
                note
              </span>
              <span
                class="material-icons"
                @click="addForm">
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
    </div>
    <div class="col-12">
      <div class="cardDashboard">
        <h2 class="topicCard mb-4">Medical Imaging</h2>
        <EasyDataTable
        :headers="headersImaging"
        :items="itemsImaging"
        table-class-name="customize-table"
      >
        <template #item-operation="item">
          <div class="operation-wrapper">
            <span
              class="material-icons"
              @click="viewDicom">
              note
            </span>
          </div>
        </template>
      </EasyDataTable>
      </div>
    </div>
  </div>
   
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import type { Header, Item } from "vue3-easy-data-table";

const router = useRouter()

const viewDicom = () => {
  router.push('/patient/view-dicom')
}
const addForm = () => {
  router.push('/patient/form')
}

const headersHistory: Header[] = [
  { text: "No.", value: "no" },
  { text: "Date", value: "date"},
  { text: "Detail", value: "detail"},
  { text: "Updated Date", value: "updateDate"},
  { text: "Updated Name", value: "updateName"},
  { text: "Operation", value: "operation"},
];

const itemsHistory: Item[] = [
  { no: "1", date: "8/01/2024", detail: "Lorem ipsum dolor sit amet", updateDate: "8/01/2024", updateName: "8/01/2024",},
  { no: "2", date: "8/01/2024", detail: "Lorem ipsum dolor sit amet", updateDate: "8/01/2024", updateName: "8/01/2024",},
  { no: "3", date: "8/01/2024", detail: "Lorem ipsum dolor sit amet", updateDate: "8/01/2024", updateName: "8/01/2024",},
  { no: "4", date: "8/01/2024", detail: "Lorem ipsum dolor sit amet", updateDate: "8/01/2024", updateName: "8/01/2024",},
];

const headersImaging: Header[] = [
  { text: "No.", value: "no" },
  { text: "Date", value: "date"},
  { text: "File", value: "file"},
  { text: "Type", value: "type"},
  { text: "Updated Date", value: "updateDate"},
  { text: "Updated Name", value: "updateName"},
  { text: "Operation", value: "operation"},
];

const itemsImaging: Item[] = [
  { no: "1", date: "8/01/2024", file: "File", type: "MRI,X-Ray,CT-Scan,Ultarsound", updateDate: "8/01/2024", updateName: "8/01/2024",},
  { no: "2", date: "8/01/2024", file: "File", type: "MRI,X-Ray,CT-Scan,Ultarsound", updateDate: "8/01/2024", updateName: "8/01/2024",},
  { no: "3", date: "8/01/2024", file: "File", type: "MRI,X-Ray,CT-Scan,Ultarsound", updateDate: "8/01/2024", updateName: "8/01/2024",},
  { no: "4", date: "8/01/2024", file: "File", type: "MRI,X-Ray,CT-Scan,Ultarsound", updateDate: "8/01/2024", updateName: "8/01/2024",},
];

const deleteItem = (val: Item) => {
};
</script>