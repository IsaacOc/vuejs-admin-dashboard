<template>
<div>
<!--modal-->
                <b-modal
                id="modal-prevent-closing"
                ref="modal"
                title="Add vehicle Type"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
                size="lg"
                hide-header="true"
                hide-footer="true"
                ><!--modal form-->
                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <div class="container-fluid" style="text-align:center">
                        <span><b>Follow the given steps in the app to enable custom order and delivery.</b></span><br><br>
                        <div class="form-row">
                            <div class="form-group col-sm-6">
                                <span><b>Driver App</b></span><br><br>
                                <div style="display:inline">
                                <img src=".." class="img-fluid" alt="Responsive image">
                                <img src=".." class="img-fluid" alt="Responsive image">
                                </div>
                            </div>
                                <div class="form-group col-sm-6">
                                <span><b>Customer App</b></span><br><br>
                                <div style="display:inline">
                                <img src=".." class="img-fluid" alt="Responsive image">
                                <img src=".." class="img-fluid" alt="Responsive image">
                                </div>
                            </div>
                        </div>
            <div>
            <!-- form details -->
                            <div class="vertical-center">
                            <button class="btn btn-info">Got it</button>
                          </div>
            </div>
        </div>
                </form>
                </b-modal>
            <!-- form tab -->
            <div class="container-fluid divback">
            <!-- form details -->
            <div style="text-align:center">
                    <span><b>Place Custom Order from the Customer App to get any item delivered to doorsteps. The order will be received onthe Driver App and can be monitored via the Admin Panel.</b></span><br><br>
                    <img src=".." class="img-fluid" alt="Responsive image"><br><br>
                        <button  v-b-modal.modal-prevent-closing class="btn btn-link">How to Use</button>
                        </div><br>
                            <div class="vertical-center">
                            <button class="btn btn-info">Enable Delivery</button>
                          </div>
            </div>
        </div>
</template>
<script>
// import { BCard, BCardText } from 'bootstrap-vue'

export default {
  components: {

  },
  data() {
    return {
      text: '',
      password: '',
      clcked: true,
      iderror: '',
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      name: '',
      nameState: null,
      submittedNames: [],
    }
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
  },
}
</script>
