<template>
  <div >
<!-- entry form -->
      <div class="container-fluid" >
          <form ref="form" @submit.stop.prevent="handleSubmit">
                 <div class="form-group">
                        <span >Select City:</span><br>
                        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Select City">
                    </div>
                    <div class="form-group">
                        <span >Select Offering:</span><br>
                        <input type="text" class="form-control" placeholder="Select Offering">
                    </div>
                    <div class="form-group">
                        <span >Minimum App Version:</span><br>
                        <input type="text" class="form-control" placeholder="Minimum App Version">
                    </div>
                    <div class="form-group">
                        <span >Redirect URL:</span><br>
                        <input type="text" class="form-control" placeholder="Redirect URL">
                    </div>
                    <div class="form-check">
                        <span class="form-check-label" >Pop Status:</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="checkbox" class="form-check-input" >&nbsp;&nbsp;
                        <span class="form-check-label" >Disable</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="checkbox" class="form-check-input" >&nbsp;&nbsp;
                        <span class="form-check-label">abled</span>
                    </div><br>
                    <button type="submit" class="btn btn-info">Create Popup</button>
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
