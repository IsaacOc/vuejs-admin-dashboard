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
        <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
        </span>
        </div><br><br>
        <div>
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
      iderror: '',
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
