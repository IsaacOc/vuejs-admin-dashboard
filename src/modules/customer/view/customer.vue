<template>
  <div >
    <div class="container-fluid">
      <!-- button -->
      <div>
        <form @submit.prevent="UserDetails" >
            <button class="btn btn-info">All Customer</button>&nbsp;&nbsp;
            <button class="btn btn-secondary">Customer With Doc</button>
        </form>
      </div><br>
      <div>
        <form @submit.prevent="UserDetails" >
            <button class="btn btn-info">View OTP</button>
        </form>
      </div>
    </div><br>
    <div class="container-fluid divback">
      <!-- entry select -->
        <div>
            <label>Show</label>&nbsp;&nbsp;
            <Select class="select">
                <option>50</option>
                <option>20</option>
                <option>10</option>
            </select>&nbsp;&nbsp;
            <label>entries</label>
        <span class="float-right">
        <label>Search</label>&nbsp;&nbsp;
        <input type="search" v-modal="search" >
        </span>
        </div>
        <div>
          <!-- table -->
          <table class="table table-responsive table-striped">
              <tr><th>UserID<span></span></th><th>UserName</th><th>PhoneNumber</th><th>Email</th><th>Email</th><th>Last Login</th><th>Last Ride On</th><th>Total Rides</th><th>View OTP</th></tr>
              <tbody><tr><td colspan="6"><strong>No datain table:</strong></td></tr></tbody>
          </table>
        </div>
        <!-- pagination -->
        <div>
          <span>showing 0 to 0 of 0 entries</span>
          <p>
            <nav aria-label="Search results pages">
              <ul class="pagination justify-content-end">
                <li class="page-item"><a class="page-link" href="#">First</a></li>
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                <li class="page-item"><a class="page-link" href="#">Last</a></li>
              </ul>
          </nav></p>
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
  .divf {
    border-radius: 0px;
    border: 1px solid #ddd;;
    background:white;
    padding: 0.6em;
  }
  .form{
    max-width:320px;
    margin: auto;
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
  .select {
    display:inline-block;
    padding:10px 6px;
    width:80px;
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
