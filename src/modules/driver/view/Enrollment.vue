<template>
  <div >
    <div class="container-fluid">
      <!-- Add Document -->
            <button v-b-modal.modal-prevent-closing class="float-right btn btn-info">All Document</button><br>
       <!--modal-->
                <b-modal
                id="modal-prevent-closing"
                ref="modal"
                title="Referral Data"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
                size="lg"
                hide-footer="true"
                ><!--modal form-->
                <h3>All Document</h3>
                <b>Driver Image</b>
                <ul>
                  <li>* Mandatory for Registration: These are the documents a driver has to upload before registering as a driver.</li>
                  <li>* Mandatory for Driving: These are the documents that are mandatory for a driver to upload before he/she starts taking rides.</li>
                  <li>* Required: These are the documents a driver needs to upload within a week.</li>
                </ul>
                </b-modal>
      </div><br>
      <div class="container-fluid">
            <label>Vehicle Type</label>&nbsp;&nbsp;
            <Select class="select1">
                <option>All</option>
                <option>TAXI</option>
                <option>TAXI POOL</option>
            </select>
    </div><br/>
      <!-- entry tab nav -->
        <div class="container-fluid divback">
            <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" @click="isShow = isShow">Drivers - Not Uploaded Document</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="isShow = isShow">Drivers - Uploaded Documents</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="isShow = !isShow">Drivers - Active</a>
                </li>
            </ul>
        </div><br/>
        <div v-if="isShow" class="container-fluid">
      <!--Export button -->
            <button class="btn btn-info">Export csv</button>
        </div>
        <br>
        <div v-if="isShow" class="container-fluid divf">
        <div>
            <span class="float-right">
        <label>Search</label>&nbsp;&nbsp;
        <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
        </span>
          <!-- table -->
          <b-table striped hover outlined :items="posts"></b-table>
        </div>
        <!-- pagination -->
        <div>
          <span>showing 0 to 0 of 0 entries</span>
          <p class="pagination justify-content-end">
            <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
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
      isShow: true,
      perPage: 1,
      currentPage: 1,
      filter: '',
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
  computed: {
    rows() {
      return this.posts.length
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
