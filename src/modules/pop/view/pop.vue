<template>
  <div >
      <div class="container-fluid">
            <Select class="select1">
                <option>All City</option>
                <option>London</option>
            </select>
    </div>
        <br>
        <div class="container-fluid divf">
        <div><!--select-->
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
          <!-- table -->
          <table class="table table-responsive table-striped">
              <tr><th>DriverID<span></span></th><th>DriverName</th><th>city</th><th>Mobile</th><th>Email</th><th>Status</th><th>Registered On</th><th>Vehicle Number</th><th>Rides in Last 7 Days</th><th>Rides in Last 30 Days</th><th>Last Login</th><th>Last Ride On</th><th>Driver Ratings</th><th>OTP</th></tr>
              <tr><td colspan="5"><strong>No datain table:</strong></td></tr>
          </table>
        </div>
        <!-- pagination -->
        <div>
          <span>showing 0 to 0 of 0 entries</span>
          <p>
            <ul class="pagination justify-content-end">
              <li class="page-item"><a class="page-link" href="#">First</a></li>
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
              <li class="page-item"><a class="page-link" href="#">Last</a></li>
            </ul>
          </p>
        </div>
    </div>
  </div>
</template>

<script>
// import { BCard, BCardText } from 'bootstrap-vue'

export default {
  name: 'ToggleDiv',
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
      isShow: true,
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
