<template>
  <div class="container-fluid divback">
    <div class="row">
    <!-- form details -->
      <div class="col-xs-6 col-md-4 divform">
    <!-- form contact -->
    <div class="divf" >
      <h4>Message Type</h4><br><br>
      <form @submit.prevent="UserDetails" class="form1">
        <div v-if="iderror" class="error">{{iderror}}</div>
        <div class="clicked">
          <!-- message type -->
            <b class="radio-inline" >
              <input type="radio" name="required" checked >Push
            </b><br><br>
            <b class="radio-inline" >
              <input type="radio" name="required" >Sms
            </b><br><br>
            <b class="radio-inline" >
              <input type="radio" name="required" >Sms and Push
            </b><br><br>
            <div v-if="iderror" class="error">{{iderror}}</div>
        </div>
        <hr/>
        <h4>Send Push</h4><br>
        <label>To</label><br>
        <!-- form push  -->
        <Select class="form-control selec">
                <option>Custom csv</option>
                <option>Active Driver</option>
                <option>Deactived Drivers</option>
                <option>Free Drivers</option>
        </select><br><br>
        <!-- form file -->
        <p><input type="file" class="form-control" value="required"></p>
        <!-- file download -->
        <p><a href="/images/myw3schoolsimage.jpg" class="form-control" download="w3logo">Download Sample csv</a></p>
        <p>message</p>
        <!-- form textarea -->
        <textarea class="form-control" rows="4" col="20"></textarea><br><br>
        <!-- form button -->
        <div class="sumbit" style="text-align:center">
          <button class="btn btn-info">Send Push</button>
        </div>
      </form>
    </div>
    </div>
    <!-- form details -->
      <div class="col-xs-6 col-md-8">
    <!-- right div -->
    <div class="container-fluid divback" style="border:none">
        <div>
          <!-- form entries -->
            <b>Show</b>&nbsp;&nbsp;
            <Select class="select">
                <option>50</option>
                <option>20</option>
                <option>10</option>
            </select>&nbsp;&nbsp;
            <b>entries</b>
        <span class="float-right">
          <!-- form search -->
        <b>Search</b>&nbsp;&nbsp;
        <input type="search" v-modal="search" >
        </span>
        </div><br><br>
        <div>
          <!-- table -->
          <table class="table table-responsive table-striped">
              <tr><th>Select Driver<span></span></th><th>Driver ID</th><th>Driver Name</th><th>Driver Phone No</th></tr>
              <tr><td colspan="5"><strong>No datain table:</strong></td></tr>
          </table>
        </div>
        <!-- pagination -->
        <div>
          <span>showing 0 to 0 of 0 entries</span>
          <p><ul class="pagination justify-content-end">
              <li class="page-item"><a class="page-link" href="#">First</a></li>
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
              <li class="page-item"><a class="page-link" href="#">Last</a></li>
  </ul></p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { BCard, BCardText } from 'bootstrap-vue'

export default {
  components: {
    // BCard,
    // BCardText,
    // BLink,
  },
  data() {
    return {
      text: '',
      password: '',
      clcked: true,
      iderror: '',
    }
  },
  methods: {
    UserDetails() {

    },
    VehicleDetails() {

    },
    RideDetails() {
      this.iderror = this.text.length > 0 ? '' : 'id needed'
    },
  },
}
</script>

<style>
  .divfo {
    border-radius: 0px;
    border: 1px solid #ddd;;
    background:white;
    padding: 0.6em;
    display:inline-block;

    }
  .divf {
    border-radius: 0px;
    border: 1px solid #ddd;
    padding: 0.6em;
    display:inline-block;
  }
  .form1{
    max-width:4500px;
    margin: auto;
    padding: 0px;
    border-radius: 10px;
  }
  label{
    color: black;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing:1px;
    font-weight: bold;
  }
  .submit1{
      width: 400px;
      display:inline-block;
  }
  .select1 {
    display:inline-block;
    padding:10px 6px;
    width:200px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    color: #555;
  }
  input[type="search"] {
    display:block;
    padding:10px 6px;
    width:250px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    color: #555;
    display:inline-block;
  }
  .span{
      border: 1px solid #ddd;
      padding: 0.4em;
  }
</style>
