<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-10 d-flex justify-content-between">
    <!-- form details -->
    <!-- form user details -->
          <div style="width:100%;" class="divback">
              <div class="scrol">
                    <h4>User Details</h4>
                    <form>
                        <!-- form phoNo -->
                      <label><b>UserPhoneNo</b></label><br>
                          <input type="text" class="form-control" placeholder=" Enter User phone number" required><br>
                        <div class="divf1">
                            <!-- form user details -->
                            <label><b>UserName</b></label><br>
                            <input type="text" class="form-control" placeholder="First Name" required><br>
                            <input type="text" class="form-control" placeholder="Last Name" required>
                        </div>
                      <label>City</label><br>
                      <!-- select city -->
                      <Select class="select1">
                              <option>Kampala</option>
                              <option>City</option>
                              <option>Mbale</option>
                              <option>Gulus</option>
                      </select><br><br>
                      <label><b>Pickup Address</b></label><br>
                      <!-- pickup details -->
                      <p><input type="text" class="form-control" placeholder=" Enter pickup addres"></p>
                      <label><b>Distination</b></label><br>
                      <!-- destination details -->
                      <p><input type="text" class="form-control" placeholder=" Enter Distination"></p>
                      <label><b>Vehicle type</b></label><br>
                      <!-- vehicle details -->
                      <Select class="select1">
                              <option>Taxi</option>
                              <option>Taxi Pool</option>
                      </select><br><br>
                      <label><b>Driver Notes</b></label><br>
                      <!-- driver details -->
                      <p><input type="text" class="form-control" placeholder=" Enter notes to driver"></p>
                      </form>
              </div>
                      <!-- form button -->
                      <div style="text-align:center">
                      <button class="btn btn-info">Get Fare Estimate</button>&nbsp;&nbsp;
                      <button class="btn btn-info">Book ride</button>
                      </div>
          </div>
              <!-- map display -->
              <div class="submit1">
                  <gmap-map
                      :zoom="14"
                      :center="center"
                      style="width:600px;  height: 600px;"
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
</div>
</template>

<script>
export default {
  name: 'AddGoogleMap',
  data() {
    return {
      center: {
        lat: 39.7837304,
        lng: -100.4458825,
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null,
    }
  },
  mounted() {
    this.locateGeoLocation()
  },
  methods: {
    initMarker(loc) {
      this.existingPlace = loc
    },
    // addLocationMarker() {
    //   if (this.existingPlace) {
    //     const marker = {
    //       lat: this.existingPlace.geometry.location.lat(),
    //       lng: this.existingPlace.geometry.location.lng()
    //     };
    //     this.locationMarkers.push({ position: marker }),
    //     this.locPlaces.push(this.existingPlace),
    //     this.center = marker,
    //     this.existingPlace = null
    //   }
    // },
    locateGeoLocation() {
      navigator.geolocation.getCurrentPosition(res => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        }
      })
    },
  },
}
</script>
<style>
</style>
