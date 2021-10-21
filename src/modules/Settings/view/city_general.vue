<template>
    <div>
        <!--modal-->
                <b-modal
                id="modal-prevent-closing"
                ref="modal"
                title="Referral Data"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
                size="lg"
                ><!--modal form-->
                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <div class="form-group">
                        <span ><b>Type</b></span>
                        <Select class="custom-select my-1 mr-sm-2">
                            <option></option>
                            <option>On Station</option>
                            <option>OnDemand</option>
                            <option>Rental</option>
                        </select>
                    </div>
                </form>
                </b-modal>
         <div class="container-fluid divback" >
            <div>
            <!-- form details -->
                    <span><b>General Settings</b></span>
                            <div class="vertical-center">
                            <button v-b-modal.modal-prevent-closing class="btn btn-info">Add</button>
                          </div>
            </div>
        </div><br>
        <div class="container-fluid divback">
            <div>
            <!-- form details -->
                 <form @submit.prevent="UserDetails" >
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <span><b>Chat Enabled</b></span><br><br>
                            <!-- form radio -->
                            <div>
                            <span class="radio-inline" >
                            <input type="radio" name="required" checked >&nbsp;Enabled
                            </span><br><br>
                            <span class="radio-inline" >
                            <input type="radio" name="required" >&nbsp;Disabled
                            </span>
                            </div>
                            <br><br>
                            <div>
                            <span><b>Show Region Specific Fare</b></span><br><br>
                            <!-- form radio -->
                            <span class="radio-inline" >
                              <input type="radio" name="required" >&nbsp;Enabled
                            </span><br><br>
                            <span class="radio-inline" >
                            <input type="radio" name="required" checked >&nbsp;Disabled
                            </span>
                            </div>
                            <br><br>
                            <span><b>Mandatory Fare Capping Threhold</b></span><br><br>
                            <b-form-input type="text" class="form-control" placeholder="10"></b-form-input>
                            <span><b>Theme Color</b></span><br>
                            <b-form-input type="text" class="form-control"></b-form-input>
                            <span><b>Onboarding Info</b></span><br><br>
                            <textarea class="form-control" ></textarea>
                            <a href="/images/myw3schoolsimage.jpg" download="w3logo">Download Sample html</a><br><br>
                            <span><b>Splash screen</b></span><br><br>
                            <input type="file" class="form-control"/>
                            <span><b>Home screen Background Image</b></span><br><br>
                            <input type="file" class="form-control"/>
                            <span><b>Customer Login Otp Message</b></span><br>
                            <b-form-input type="text" class="form-control"></b-form-input>
                            <span><b>Customer Rate Card Info</b></span><br><br>
                            <textarea class="form-control" ></textarea>
                        </div>
                        <div class="form-group col-md-6">
                            <span><b>Emergency No.</b></span><br>
                            <b-form-input type="text" class="form-control" placeholder="911"></b-form-input>
                            <span><b>Driver Support No.</b></span><br>
                            <b-form-input type="text" class="form-control" placeholder=""></b-form-input>
                            <span><b>Customer Support No.</b></span><br>
                            <b-form-input type="text" class="form-control" placeholder=""></b-form-input>
                            <span><b>Advertise Credits</b></span><br>
                            <b-form-input type="text" class="form-control" placeholder="0"></b-form-input>
                            <span><b>Support Email</b></span><br>
                            <b-form-input type="text" class="form-control" placeholder="support@email.com"></b-form-input>
                            <span><b>Operational Name</b></span><br>
                            <b-form-input type="text" class="form-control" ></b-form-input>
                            <span><b>Operational Info</b></span><br>
                            <textarea class="form-control" ></textarea><br>
                            <span>Please save html here</span><br><br>
                            <span><b>Logo Url</b></span><br><br>
                            <input type="file" class="form-control"/>
                            <span><b>Customer Login Otp Message IOS</b></span><br>
                            <b-form-input type="text" class="form-control" ></b-form-input>
                        </div>
                    </div>
                            <div v-if="iderror" class="error">{{iderror}}</div><br><br>
                            <div class="d-flex justify-content-end">
                            <button class="btn btn-info">submit</button>
                          </div>
                </form>
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
<style>
.vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
