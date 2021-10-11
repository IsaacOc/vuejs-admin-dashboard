<template>
    <div class="container-fluid divback ">
      <button @click="goBack()" class="btn btn-info">Back</button>
      <br><br>
      <div class="row">
        <div class="col-xs-6 col-md-6" >
        <!-- map -->
          <div class="sumbit1">
              <gmap-map
              :zoom="14"
              :center="center"
              style="width:100%;  height: 550px;"
              >
              <gmap-marker
              :key="index"
              v-for="(m, index) in locationMarkers"
              :position="m.position"
              @click="center=m.position"
              ></gmap-marker>
              </gmap-map>
          </div>
        </div>
        <!-- form -->
        <div class="col-xs-6 col-md-5">
              <div>
                    <form>
                        <!-- form phoNo -->
                      <span><b>UserPhoneNo</b></span><br>
                          <input type="text" class="form-control" placeholder=" Enter User phone number" required><br>
                      <div v-if="iderror" class="error">{{iderror}}</div>
                        <div class="divf1">
                            <!-- form user details -->
                            <span><b>UserName</b></span><br>
                            <input type="text" class="form-control" placeholder="First Name" required><br>
                            <input type="text" class="form-control" placeholder="Last Name" required>
                        </div>
                      <span>City</span><br>
                      <!-- select city -->
                      <Select class="select1">
                              <option>Kampala</option>
                              <option>City</option>
                              <option>Mbale</option>
                              <option>Gulus</option>
                      </select><br><br>
                      <span><b>Pickup Address</b></span><br>
                      <!-- pickup details -->
                      <p><input type="text" class="form-control" placeholder=" Enter pickup addres"></p>
                      <span><b>Distination</b></span><br>
                      <!-- destination details -->
                      <p><input type="text" class="form-control" placeholder=" Enter Distination"></p>
                      <span><b>Vehicle type</b></span><br>
                      <!-- vehicle details -->
                      <Select class="select1">
                              <option>Taxi</option>
                              <option>Taxi Pool</option>
                      </select><br><br>
                      <span><b>Driver Notes</b></span><br>
                      <!-- driver details -->
                      <p><input type="text" class="form-control" placeholder=" Enter notes to driver"></p>
                      </form>
              </div>
                      <!-- form button -->
                      <div style="text-align:center">
                      <button class="btn btn-info">Create</button>
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
    goBack() {
      this.$router.push('/dynamics-pricing')
    },
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
  .divback {
    background-color: white;
    border: 1px solid #ddd;
    padding: 0.5em;
  }
</style>
