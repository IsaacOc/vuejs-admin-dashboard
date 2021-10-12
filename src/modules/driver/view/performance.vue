<template>
  <div >
      <div class="container-fluid divback">
            <button class="btn btn-info" @click="isShow = !isShow" role="button">Filter By Date</button>
            <span class="container-fluid">OR</span>
            <button class="btn btn-info float-right" @click="isShow1 = !isShow1" role="button">Filter By Time</button><br><br>
            <div v-if="isShow">
                <input class="form-control" type="search" v-modal="search" >&nbsp;&nbsp;
                <button class="btn btn-info">Search</button>
            </div >
            <div v-if="isShow1">
                <input class="form-control" type="date" v-modal="search" >&nbsp;&nbsp;
                <input class="form-control" type="date" v-modal="search" >&nbsp;&nbsp;
                <input class="form-control" type="search" v-modal="search" >&nbsp;&nbsp;
                <button class="btn btn-info">Search</button>
            </div>
    </div><br/>
      <div class="container-fluid divback">
            <p>
            <ul class="" style="list-style:none">
                <li class="page-item">- This report lists down only those drivers who have taken rides in specified date range</li>
                <li class="page-item">- Successfull Rides are the successfully completed rides by driver</li>
                <li class="page-item">- Cancelled Rides include requests cancelled by customer, requests cancelled by driver after accepting</li>
                <li class="page-item">- Missed Rides include requests rejected by driver and timedout requests</li>
            </ul>
          </p>
    </div><br/>
        <div class="container-fluid divback">
            <div>
                <label>Show</label>&nbsp;&nbsp;
                <Select class="select">
                    <option>50</option>
                    <option>20</option>
                    <option>10</option>
                 </select>&nbsp;&nbsp;
                <label>entries</label>
                <span style="float:right">
                <label>Search</label>&nbsp;&nbsp;
                <input type="search" v-modal="search" >
                </span>
            <!-- table -->
            <b-table striped hover outlined :items="posts"></b-table>
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
      isShow1: false,
      posts: [
        {
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati',
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
        },
        {
          userId: 1,
          id: 3,
          title: 'ea molestias quasi exercitationem repellat qui',
        },
      ],
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
  .divback {
    background-color: white;
    border: 1px solid #ddd;
    padding:0.5em;
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
