<template>
  <div >
    <div class="container-fluid ">
      <!-- select type -->
            <label>Vehicle Type</label>&nbsp;&nbsp;
            <Select class="select1">
                <option>All</option>
                <option>TAXI</option>
                <option>TAXI POOL</option>
            </select>
    </div>
    <br>
    <div class="container-fluid divback">
      <!-- select entries show -->
        <div>
            <label>Show</label>&nbsp;&nbsp;
            <Select class="select">
                <option>50</option>
                <option>20</option>
                <option>10</option>
            </select>&nbsp;&nbsp;
            <label>entries</label>
            <!-- search -->
        <span class="float-right">
        <label>Search</label>&nbsp;&nbsp;
        <input type="search" v-modal="search" >
        </span>
        </div>
        <br>
        <div>
          <!-- table -->
          <table class="table table-responsive table-striped">
              <tr><th>EngagementID<span></span></th><th>DriverName</th><th>UserName</th><th>UserPhoneNo</th><th>PickUp</th><th>Drop</th></tr>
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
    margin-bottom: 50px;
    padding: 0.6em;
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
  input[type="date"]{
    display:inline-block;
    padding: 10px 6px;
    width: 350px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    text-align: center;
  }
  .select1 {
    padding:10px 6px;
    width:250px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    color: #555;
    display:inline-block;
  }
  /* input[type="search"] {
    display:block;
    padding:10px 6px;
    width:250px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    color: #555;
    display:inline-block;
  } */
  .span{
      border: 1px solid #ddd;
      padding: 0.4em;
  }
</style>
