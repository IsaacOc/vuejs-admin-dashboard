<template>
    <div>
        <button v-b-modal.modal-prevent-closing class="btn btn-info">Add vehicle Type</button><br><br>
        <!--modal-->
                <b-modal
                id="modal-prevent-closing"
                ref="modal"
                title="Add vehicle Type"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
                size="lg"
                ><!--modal form-->
                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <div class="form-group row">
                    <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>City<span style="color:red">*</span></b></span><br>
                        </div>
                        <div class="form-group col-md-8">
                        <Select class="custom-select">
                            <option></option>
                            <option>Kampala</option>
                        </select>
                        </div>
                    </div>
                    </div>
                <div class="form-group row">
                        <div class="col-sm-10 d-flex justify-content-between">
                            <div class="form-group col-md-2">
                            <span><b>VehicleType<span style="color:red">*</span></b></span>
                            </div>
                            <div class="form-group col-md-8">
                            <Select class="custom-select">
                                <option></option>
                                <option>Select Vehicle Type</option>
                                <option>Auto</option>
                                <option>Truck</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10 d-flex justify-content-between">
                            <div class="form-group col-md-2">
                            <span><b>RideType<span style="color:red">*</span></b></span>
                            </div>
                            <div class="form-group col-md-8">
                            <Select class="custom-select">
                                <option></option>
                                <option>DELIVERY</option>
                                <option>POOL</option>
                                <option>NORMAL</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10 d-flex justify-content-between">
                            <div class="form-group col-md-2">
                            <span><b>DisplayOrder<span style="color:red">*</span></b></span>
                            </div>
                            <div class="form-group col-md-8">
                        <input type="text" class="form-control" placeholder="">
                        </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10 d-flex justify-content-between">
                            <div class="form-group col-md-2">
                            <span><b>MaxPeople<span style="color:red">*</span></b></span>
                            </div>
                            <div class="form-group col-md-8">
                        <input type="password" class="form-control" placeholder="">
                        </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                        <span><b>Destination Mandatory<span style="color:red">*</span></b></span>
                        </div>
                            <div class="form-group col-md-8">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                            <label class="form-check-label" for="inlineRadio1">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                            <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>
                            </div>
                            </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                        <span><b>Fare Mandatory<span style="color:red">*</span></b></span>
                        </div>
                            <div class="form-group col-md-8">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                            <label class="form-check-label" for="inlineRadio1">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                            <label class="form-check-label" for="inlineRadio2">No</label>
                            </div>
                            </div>
                            </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10 d-flex justify-content-between">
                            <div class="form-group col-md-2">
                            <span><b>Commision<span style="color:red">*</span></b></span>
                            </div>
                            <div class="form-group col-md-8">
                        <input type="text" class="form-control" placeholder="">
                        </div>
                        </div>
                    </div>
                </form>
                </b-modal>
            <!-- form tab -->
         <div class="container-fluid divback" style="text-align:center">
            <div>
                 <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" @click="isShowDate = isShowDate">Enabled</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="isShowDate = isShowDate">Disabled</a>
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
                <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
                </span>
            <!-- table -->
            <b-table striped hover outlined :items="posts"></b-table>
            </div>
            <!-- pagination -->
            <div>
            <span>showing 0 to 0 of 0 entries</span>
                <p class="pagination justify-content-end">
            <b-pagination v-model="currentPage" :total-rows="rows" per-page="perPage" aria-controls="my-table"></b-pagination>
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
      perPage: 1,
      currentPage: 1,
      clcked: true,
      iderror: '',
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      name: '',
      nameState: null,
      submittedNames: [],
      posts: [
        {
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati',
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
        },
        {
          userId: 1,
          id: 3,
          title: 'ea molestias quasi exercitationem repellat qui',
        },
      ],
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
  computed: {
    rows() {
      return this.posts.length
    },
  },
}
</script>
