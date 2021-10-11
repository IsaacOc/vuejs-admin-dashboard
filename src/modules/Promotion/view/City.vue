<template>
    <div>
        <button v-b-modal.modal-prevent-closing class="btn btn-info">Add Promotion</button><br><br>
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
                            <span><b>Referral Message<span style="color:red">*</span></b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Facebook Caption<span style="color:red">*</span></b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Facebook Desription<span style="color:red">*</span></b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Referral Caption<span style="color:red">*</span></b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Referral Email Subject Caption<span style="color:red">*</span></b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Referral Email Subject Caption<span style="color:red">*</span></b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Referral Email Subject Caption<span style="color:red">*</span></b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Referral Email Subject Caption<span style="color:red">*</span></b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <input type="text" class="form-control"  placeholder="">
                        </div>
                    </div>
                    </div>
                </form>
                </b-modal>
         <div class="container-fluid divback" style="text-align:center">
            <div>
            <!-- form tab -->
                 <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" @click="isShowDate = isShowDate">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="isShowDate = isShowDate">Inactive</a>
                </li>
            </ul>
            </div>
        </div><br>
        <div class="container-fluid divback">
            <div><!--select-->
                <label>Show</label>&nbsp;&nbsp;
                <Select class="select">
                    <option>50</option>
                    <option>20</option>
                    <option>10</option>
                 </select>&nbsp;&nbsp;
                <label>entries</label>
                <span style="float:right">
                <label>Search</label>&nbsp;&nbsp;
                <input type="search" v-modal="search" >
                </span>
            <!-- table -->
            <table class="table table-responsive table-striped">
                <tr><th>DriverID<span></span></th><th>DriverName</th><th>Phone Number</th><th>city</th><th>Rides</th><th>Rank</th></tr>
                <tr><td colspan="5"><strong>No datain table:</strong></td></tr>
            </table>
            </div>
            <!-- pagination -->
            <div>
            <p>
                <span>showing 0 to 0 of 0 entries</span>
                <ul class="pagination justify-content-end">
                    <li class="page-item"><a class="page-link" href="#">First</a></li>
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    <li class="page-item"><a class="page-link" href="#">Last</a></li>
                </ul>
            </p>
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
