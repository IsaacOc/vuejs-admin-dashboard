<template>
  <div >
<!-- entry form -->
      <div class="container-fluid" style="text-align:center">
          <form ref="form" @submit.stop.prevent="handleSubmit">
                <div class="form-group row">
                        <span class="col-md-2 col-md-offset-4 col-form-label">City level</span>
                        <div class="col-md-6">
                        <Select class="custom-select my-1 mr-sm-2">
                            <option>City Level</option>
                            <option>User Level</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <span class="col-md-2 col-md-offset-4 col-form-label">Select City</span>
                        <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Select City">
                        </div>
                    </div>
                    <div class="form-group row">
                        <span class="col-md-2 col-md-offset-4 col-form-label">Select Offering</span>
                        <div class="col-md-6">
                        <Select class="custom-select my-1 mr-sm-2">
                            <option>Ride</option>
                            <option>Market</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <span class="col-sm-2 col-md-offset-4 col-form-label">Select Popup</span>
                        <div class="col-sm-6">
                        <Select class="custom-select my-1 mr-sm-2">
                            <option>Select Popup</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <span class="col-md-2 col-md-offset-4 col-form-label">Select Event</span>
                        <div class="col-md-6">
                        <Select class="custom-select my-1 mr-sm-2">
                            <option>Select Event</option>
                            <option>Login</option>
                        </select>
                        </div>
                    </div>
                    <button class="btn btn-info">Schedule popup</button>
                </form>
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
      clcked: true,
      iderror: '',
      isShow: true,
    }
  },
  methods: {
    RideDetails() {
      this.iderror = this.text.length > 0 ? '' : 'id needed'
    },
  },
}
</script>
