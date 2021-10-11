<template>
    <div>
        <button v-b-modal.modal-prevent-closing class="btn btn-info">Referral Data</button><br><br>
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
                  <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Referral Message :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Facebook Caption :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Facebook Desription :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <textarea type="text" class="form-control"  placeholder=""></textarea>
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Referral Caption :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Referral Email Subject Caption :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Referral CashBack Text :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Invite and earn msg :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Invite and earn info :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <textarea type="text" class="form-control"  placeholder=""></textarea>
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Invite and earn msg :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Referral sharing msg :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Branch android url :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Branch desktop url :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Branch ISO url :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Branch fallback url :</b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                </form>
                </b-modal>
         <div class="container-fluid divback" >
            <div style="text-align:center">
            <!-- form details -->
                 <form @submit.prevent="UserDetails" >
                <label><u>Referree Benefit</u></label><br>
                            <!-- form radio -->
                            <b class="radio-inline" >
                            <input type="radio" name="required" checked >&nbsp;None
                            </b>
                            <b class="radio-inline" >
                            <input type="radio" name="required" >&nbsp;Cash
                            </b>
                            <b class="radio-inline" >
                            <input type="radio" name="required" >&nbsp;Coupons
                            </b>
                            <div v-if="iderror" class="error">{{iderror}}</div><br><br>
                            <div class="d-flex justify-content-end">
                            <button class="btn btn-info">Update</button>
                          </div>
                </form>
            </div>
        </div><br>
        <div class="container-fluid divback" style="text-align:center">
            <div>
            <!-- form details -->
                 <form @submit.prevent="UserDetails" >
                <label><u>REferrer Benefit</u></label><br>
                            <!-- form radio -->
                            <b class="radio-inline" >
                            <input type="radio" name="required" checked >&nbsp;None
                            </b>
                            <b class="radio-inline" >
                            <input type="radio" name="required" >&nbsp;Cash
                            </b>
                            <b class="radio-inline" >
                            <input type="radio" name="required" >&nbsp;Coupons
                            </b>
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
