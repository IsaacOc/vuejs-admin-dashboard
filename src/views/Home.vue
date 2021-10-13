<template>
  <div class="container-fluid">
    <div class="row">
    <!-- form details -->
      <div class="col-xs-6 col-md-4 divform">
        <form @submit.prevent="UserDetails">
          <label>User Detail</label>
          <b-form-input type="text" required v-modal="text" placeholder="Enter User details"></b-form-input>
          <div v-if="iderror" class="error">{{iderror}}</div><br/>
          <div>
            <!-- form radio -->
            <b class="radio-inline" >
              <input type="radio" name="required" checked >User ID
            </b>
            <b class="radio-inline" >
              <input type="radio" name="required" >Email
            </b>
            <b class="radio-inline" >
              <input type="radio" name="required" >Phone
            </b>
            <div v-if="iderror" class="error">{{iderror}}</div>
            </div>
            <!-- form button -->
          <div class="sumbit">
            <button class="btn btn-info">User Details</button>
          </div>
        </form>
      </div>
      <!-- form details -->
      <div class="col-xs-6 col-md-4 divform">
        <form @submit.prevent="VehicleDetails" >
          <label>Driver Detail</label>
          <b-form-input type="text" required v-modal="text" placeholder="Enter Driver details"></b-form-input><br>
          <div>
            <!-- form radio -->
            <b class="radio-inline" >
              <input type="radio" name="required" checked >Driver ID
            </b>
            <b class="radio-inline" >
              <input type="radio" name="required" >Phone
            </b>
            <b class="radio-inline" >
              <input type="radio" name="required" >Vehicle No
            </b>
            <div v-if="iderror" class="error">{{iderror}}</div>
            </div>
            <!-- form button -->
          <div class="sumbit">
            <button class="btn btn-info">Driver Details</button>
          </div>
        </form>
      </div>
      <!-- form details -->
      <div class="col-xs-6 col-md-4" style="text-align: center">
        <form @submit.prevent="RideDetails" >
          <label>Ride Detail</label>
          <b-form-input type="text" required v-modal="text" placeholder="Enter Ride details"></b-form-input><br>
          <div>
            <!-- form radio -->
            <b class="radio-inline" >
              <input type="radio" name="Ride_ID" checked >Ride ID
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
  .divform {
    border-right: 1px solid #ddd;
    text-align: center;
  }
  span{
    color: black;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 1em;
    letter-spacing:1px;
    font-weight: bold;
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
  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top:20px;
    color: white;
    border-radius: 2px;
  }
  submit {
    text-align: center;
  }
  .error {
    color: red;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>
