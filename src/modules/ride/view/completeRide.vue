<template>
  <div >
    <div class="container-fluid divback">
      <!-- form deta -->
        <div>
            <form @submit.prevent="UserDetails" >
                <input type="date" required >
                <div v-if="iderror" class="error">{{iderror}}</div>&nbsp;&nbsp;
                <button class="btn btn-info">Search</button>
            </form>
        </div>
    </div><br>
    <div class="container-fluid divback">
      <!-- show entries -->
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
        <br>
        <div>
          <!-- table -->
          <table class="table table-responsive table-striped">
              <tr><th>Engagement ID<span></span></th><th>Driver Name</th><th>User Name</th><th>User Phone No</th><th>Pick Up</th><th>Drop</th><th>Pickup Time</th><th>Drop Time</th><th>Vehicle Type</th></tr>
              <tr><td colspan="9"><strong>No datain table:</strong></td></tr>
          </table>
        </div>
        <div>
          <span>showing 0 to 0 of 0 entries</span>
          <p><ul class="pagination justify-content-end">
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
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
