<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="#">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/patient">Patient</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Meducal Imaging</li>
    </ol>
  </nav>
  <div class="cardDashboard">
    <h2 class="topicCard">Medical Imaging</h2>
    <form action="">
      <div class="row">
        <div class="col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">VN No.</label>
            <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your VN No...">
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">Pet Name.</label>
            <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your Pet Name...">
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">Pet Type.</label>
            <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your Pet Type...">
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">Date</label>
            <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your Date...">
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">File Type.</label>
            <input type="text" class="form-control" id="" aria-describedby="" placeholder="type your File Type...">
          </div>
        </div>
      </div>
      <div class="imageDicom">
        <img src="/src/assets/dicom.jpeg" alt="">
      </div>
      <div class="btnGroup">
        <button type="button" class="btn btnCancle">Back</button>
        <button type="button" class="btn btnSave">Save</button>
      </div>
    </form>
  </div>  
</template>