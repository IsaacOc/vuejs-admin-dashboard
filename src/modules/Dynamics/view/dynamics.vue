<template>
  <div>
    <div class="container-fluid divback">
        <!-- vehicle type -->
            <label>Vehicle Type</label>&nbsp;&nbsp;
            <Select class="form-control select1">
                <option>All</option>
                <option>TAXI</option>
                <option>TAXI POOL</option>
            </select>
            <button @click="goToHome()" class="float-right btn btn-info">Add</button>
    </div><br>
    <div class="container-fluid divback">
        <!-- map -->
        <div class="sumbit1">
            <gmap-map
            :zoom="14"
            :center="center"
            style="width:500px;  height: 550px;"
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
    goToHome(){
      this.$router.push('/addynamics'); 
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
