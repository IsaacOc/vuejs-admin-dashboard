<template>
    <div>
        <!--modal-->
                <b-modal
                id="modal-prevent-closing"
                ref="modal"
                title="Edit Image"
                @show="resetModal"
                @ok="handleOk"
                size="lg"
                hide-footer="true"
                ><!--modal form-->
                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                        <input type="file" class="form-control" placeholder="">&nbsp;&nbsp;
                        <button class="btn btn-info" >submit</button>
                        </div>
                    </div>
                </form>
                </b-modal>
         <div class="container-fluid divback" >
            <div>
            <!-- form details -->
                <form @submit.prevent="UserDetails" >
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <span ><b>Operator Name</b></span><br><br>
                        <b-form-input type="text" class="form-control" placeholder="taxi"></b-form-input>
                        </div>
                        <div class="form-group col-md-6">
                        <span><b>Support Email</b></span><br><br>
                        <b-form-input type="password" class="form-control" placeholder="support@email.com"></b-form-input>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <span><b>Logo</b></span><br><br>
                        <button v-b-modal.modal-prevent-closing class="btn btn-info" >Add</button>
                        </div>
                        <div class="form-group col-md-6">
                        <span><b>Fav Icon</b></span><br><br>
                        <button v-b-modal.modal-prevent-closing class="btn btn-info">Add</button>
                    </div>
                    </div>
                            <div v-if="iderror" class="error">{{iderror}}</div><br><br>
                            <div class="d-flex justify-content-end">
                            <button class="btn btn-info">Update</button>
                          </div>
                </form>
            </div>
        </div><br>
        <div class="container-fluid divback">
            <span><b>Exercise your rights</b></span><br>
                <span>We take security seriously and are proud to exceed the industry standards when it comes to protecting your personal information.</span>
            <br><br>
            <div>
            <!-- form details -->
                 <form @submit.prevent="UserDetails" >
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <span><b>Select your Right</b></span>
                        <Select class="custom-select my-1 mr-sm-2">
                            <option>Select Right</option>
                            <option>Right to be deactivite</option>
                            <option>Right to be portible</option>
                            <option>Right to be forgeten</option>
                            <option>Right to be rectificate</option>
                        </select>
                        </div>
                        <div class="form-group col-md-6">
                        <span><b>Reason</b></span><br><br>
                        <textarea type="password" class="form-control" ></textarea>
                        </div>
                    </div>
                            <div v-if="iderror" class="error">{{iderror}}</div><br><br>
                            <div class="d-flex justify-content-end">
                            <button class="btn btn-info">submit</button>
                          </div>
                </form>
            </div>
        </div>
        <br>
        <div class="container-fluid divback" >
            <div>
            <!-- form details -->
                <form @submit.prevent="UserDetails" >
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <span><b>Autos Panel Theme Color</b></span><br>
                        <span><b>Main_olor</b></span><br><br>
                        <b-form-input type="text" class="form-control" placeholder="#c1c1c"></b-form-input>
                        <span><b>Secondary_olor</b></span><br>
                        <b-form-input type="text" class="form-control" placeholder="#02b3e4"></b-form-input>
                        </div>
                        <div class="form-group col-md-6">
                        <span><b>Enable/Disable Driver Debt Check</b></span><br>
                        <Select class="custom-select my-1 mr-sm-2">
                            <option>Disable</option>
                            <option>Enable</option>
                        </select>
                        <span><b>Customer Tip Values</b></span><br>
                        <div class="form-row">
                            <div class="form-group col-md-2">
                                <b-form-input type="text" class="form-control" placeholder="10"></b-form-input>
                                </div>
                                <div class="form-group col-md-2">
                                <b-form-input type="text" class="form-control" placeholder="20"></b-form-input>
                                </div>
                                <div class="form-group col-md-2">
                                <b-form-input type="text" class="form-control" placeholder="30"></b-form-input>
                            </div>
                            <div class="form-row">
                            <span><b>Commission Deduction</b></span><br>
                            <Select class="custom-select my-1 mr-sm-2">
                                <option>No Commission</option>
                                <option>Commission with no debt</option>
                                <option>Commission with debt</option>
                            </select>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <div class="d-flex justify-content-between">
                        <span><b>Invite Earn Screen Image Android</b></span>
                        <button class="btn btn-info" >Add</button>
                        </div>
                        <img src=".." class="img-fluid" alt="Responsive image">
                        </div>
                        <div class="form-group col-md-6">
                        <div class="d-flex justify-content-between">
                        <span><b>Invite Earn Screen Image iOS</b></span>
                        <button class="btn btn-info">Add</button>
                        </div>
                        <img src=".." class="img-fluid" alt="Responsive image">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6" >
                            <span><b>Wallet Cash T&C</b></span>
                        <select multiple class="form-control" height:2px >
                            <option>1. Wallet Cash if present would be the first source of deduction for your transaction.</option>
                            <option>2. Maximum of 20 wallet cash can be used in a single transaction.</option>
                            <option>3. Wallet cash will expire after 30 days of crediting.</option>
                            <option>4. Wallet cash added through payment gateway will continue to exist and will not expire.</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <b-form-input type="text" class="form-control" ></b-form-input><br>
                        <span><b>Maps Preference</b></span><br>
                        <Select class="custom-select my-1 mr-sm-2">
                                <option>Google</option>
                                <option>FlightMap</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <span><b>Wallet cash max Capping</b></span>
                        <b-form-input type="text" class="form-control"  placeholder="20"></b-form-input>
                        </div>
                        <div class="form-group col-md-6">
                        <b-form-input type="text" class="form-control" placeholder="0" ></b-form-input><br><br>
                        <b-form-input type="text" class="form-control"  placeholder="0"></b-form-input>
                        </div>
                    </div>
                            <div v-if="iderror" class="error">{{iderror}}</div><br><br>
                            <div class="d-flex justify-content-end">
                            <button class="btn btn-info">Update</button>
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
