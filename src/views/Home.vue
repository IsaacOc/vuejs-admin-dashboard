<template>
  <div class="container-fluid">
    <div class="row">
    <!-- form details -->
      <div class="col-xs-6 col-md-4 divform">
        <form v-on:submit.prevent="UserDetails" method="post">
          <label>User Detail</label>
          <b-form-input type="text" required v-model="usertext" name="usertext" placeholder="Enter User details"></b-form-input>
          <div v-if="iderror" class="error">{{iderror}}</div><br/>
          <div>
            <!-- form radio -->
            <b class="radio-inline" >
              <input type="radio" v-model="userradio" value="UserID" name="Userdetail" checked >User ID
            </b>
            <b class="radio-inline" >
              <input type="radio" v-model="userradio" value="Email" name="Userdetail" >Email
            </b>
            <b class="radio-inline" >
              <input type="radio" v-model="userradio" value="Phone" name="Userdetail" >Phone
            </b>
            <div v-if="iderror" class="error">{{iderror}}</div>
            </div>
            <!-- form button -->
          <div class="sumbit">
            <button class="btn btn-info" >User Details</button>
          </div>
        </form>
      </div>
      <!-- form details -->
      <div class="col-xs-6 col-md-4 divform">
        <form @submit.prevent="VehicleDetails" method="post">
          <label>Driver Detail</label>
          <b-form-input type="text" required v-model="drivertext" placeholder="Enter Driver details"></b-form-input><br>
          <div>
            <!-- form radio -->
            <b class="radio-inline" >
              <input type="radio" value="Driver_ID" v-model="driverradio" name="Driver" checked >Driver ID
            </b>
            <b class="radio-inline" >
              <input type="radio" value="Phone" v-model="driverradio" name="Driver" >Phone
            </b>
            <b class="radio-inline" >
              <input type="radio" value="Vehicle_No" v-model="driverradio" name="Driver" >Vehicle No
            </b>
            <div v-if="iderror" class="error">{{iderror}}</div>
            </div>
            <!-- form button -->
          <div class="sumbit">
            <button class="btn btn-info" >Driver Details</button>
          </div>
        </form>
      </div>
      <!-- form details -->
      <div class="col-xs-6 col-md-4" style="text-align: center">
        <form v-on:submit.prevent="RideDetails" method="post">
          <label>Ride Detail</label>
          <b-form-input type="text" required v-model="Ridetext" placeholder="Enter Ride details"></b-form-input><br>
          <div>
            <!-- form radio -->
            <b class="radio-inline" >
              <input type="radio" value="RideID" v-model="rideradio" name="Ride" >Ride ID
            </b>
            <div v-if="iderror" class="error">{{iderror}}</div>
            </div>
            <!-- form button -->
          <div class="sumbit">
            <button class="btn btn-info">Ride Details</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { BCard, BCardText } from 'bootstrap-vue'
import apiService from '@/Network/NetworkService'

export default {
  components: {
    // BCard,
    // BCardText,
    // BLink,
  },
  data() {
    return {
      events: [],
      clcked: true,
      iderror: '',
      usertext: '',
      userradio: '',
      drivertext: '',
      Ridetext: '',
      driverradio: '',
      rideradio: '',
    }
  },
  methods: {
    UserDetails() {
    // api to post userdetails
      apiService.PostUserDetails(this.userradio, this.usertext)
        .then(response => {
          this.events = response.data
        })
        . catch(error => {
          console.log('There ws an error:', error.response)
        })
    },
    VehicleDetails() {
    // api to post vehicledetails
      apiService.PostVehicleDetails(this.driverradio, this.drivertext)
        .then(response => {
          this.events = response.data
        })
        . catch(error => {
          console.log('There ws an error:', error.response)
        })
    },
    RideDetails() {
    // api to post userdetails
      apiService.PostRideDetails(this.Ridetext, this.rideradio)
        .then(response => {
          this.events = response.data
        })
        . catch(error => {
          console.log('There ws an error:', error.response)
        })
    },
  },
}
</script>

<style>
  .divform {
    border-right: 1px solid #ddd;
    text-align: center;
  }
  .divback {
    background-color: white;
    border: 1px solid #ddd;
    padding:0.5em;
  }
  .divfo {
    border-radius: 0px;
    border: 1px solid #ddd;;
    background:white;
    padding: 0.6em;
    display:inline-block;
    }
  .divf1 {
    border-radius: 0px;
    border: 1px solid #ddd;
    padding: 0.6em;
  }
  .divf {
    border-radius: 0px;
    border: 1px solid #ddd;;
    background:white;
    padding: 0.6em;
  }
  .divf {
    border-radius: 0px;
    border: 1px solid #ddd;
    padding: 0.6em;
    display:inline-block;
  }
  .divf {
    border-radius: 0px;
    border: 1px solid #ddd;;
    background:white;
    margin-bottom: 50px;
    padding: 0.6em;
  }
  .divf {
    border-radius: 0px;
    border: 1px solid #ddd;;
    background:white;
    margin-bottom: 50px;
    padding: 0.6em;
    max-width: 100%;
  }
  input{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    text-align: center;
  }
  input[type="radio"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  input, select {
    display:block;
    padding:10px 6px;
    width:100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  .select {
    display:inline-block;
    padding:10px 6px;
    width:80px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    color: #555;
  }
  .select1 {
    display:inline-block;
    padding:10px 6px;
    width:200px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    color: #555;
  }
  .select1 {
    display:inline-block;
    padding:10px 6px;
    width:250px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    color: #555;
  }
  .span{
      border: 1px solid #ddd;
      padding: 0.4em;
  }
  input[type="date"]{
    display:inline-block;
    padding: 10px 6px;
    max-width: 350px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    text-align: center;
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
.vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
  .form{
    max-width:320px;
    margin: auto;
    padding:40px;
    border-radius: 10px;
  }
  .form1{
    margin: auto;
    padding: 0px;
    border-radius: 10px;
  }
  .form{
    max-width:320px;
    margin: 30px auto;
    text-align: center;
    padding:40px;
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
  .error {
    color: red;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
  .submit1{
      width: 400px;
      display:inline-block;
  }
  .submitv1{
      width: 400px;
  }
  .scrol{
    height: 550px;
    overflow-y: scroll;
    overflow-x: auto;
  }
  .table {
    padding: 0.5em;
    text-align: center;

  }
</style>
