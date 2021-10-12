<template>
    <div>
        <button v-b-modal.modal-prevent-closing class="btn btn-info">Add Coupons</button><br><br>
        <!--modal-->
        <div class="container-fluid">
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
                    <div class="row">
                        <div class="col-sm-12 d-flex justify-content-between">
                            <div class="col-md-2 float-right">
                            <span>Title<span style="color:red">*</span></span>
                            </div>
                            <div  class="form-group col-md-4">
                            <textarea class="form-control"></textarea>
                            </div>
                            <div class="col-md-2 float-right">
                            <span>Subtitle<span style="color:red">*</span></span>
                            </div>
                            <div class="form-group col-md-4">
                            <textarea class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="col-sm-12 d-flex justify-content-between">
                            <div class="col-md-2 float-right">
                            <span>Benefit Type<span style="color:red">*</span></span>
                            </div>
                            <div  class="form-group col-md-4">
                            <Select class="custom-select my-1 mr-sm-2">
                                <option>Discount</option>
                            </select>
                            </div>
                            <div class="col-md-2 float-right">
                            <span>Description<span style="color:red">*</span></span>
                            </div>
                            <div class="form-group col-md-4">
                            <textarea class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="col-sm-12 d-flex justify-content-between">
                            <div class="col-md-2 float-right">
                            <span>Promo Type<span style="color:red">*</span></span>
                            </div>
                            <div  class="form-group col-md-4">
                            <Select class="custom-select my-1 mr-sm-2">
                                <option>Location Insensitive</option>
                                <option>Pickup Based</option>
                                <option>Drop Based</option>
                            </select>
                            </div>
                            <div class="col-md-2 float-right">
                            <!-- <span>Allowed vehicle<span style="color:red">*</span></span> -->
                            </div>
                            <div class="form-group col-md-4">
                            <!-- <input type="text" class="form-control" placeholder=""> -->
                            </div>
                        </div>
                        <div class="col-sm-12 d-flex justify-content-between">
                            <div class="col-md-2 float-right">
                            <span>Discount Type<span style="color:red">*</span></span>
                            </div>
                            <div  class="form-group col-md-4">
                            <Select class="custom-select my-1 mr-sm-2">
                                <option>Percentage</option>
                                <option>Flat</option>
                                <option>Drop Based</option>
                            </select>
                            </div>
                            <div class="col-md-2 float-right">
                            <span>No of coupons<span style="color:red">*</span></span>
                            </div>
                            <div class="form-group col-md-4">
                            <input type="text" class="form-control" placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-12 d-flex justify-content-between">
                            <div class="col-md-2 float-right">
                            <span>Discount Percentage<span style="color:red">*</span></span>
                            </div>
                            <div  class="form-group col-md-4">
                            <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="col-md-2 float-right">
                            <span>Allowed vehicle<span style="color:red">*</span></span>
                            </div>
                            <div class="form-group col-md-4">
                            <input type="text" class="form-control" placeholder="">
                            </div>
                        </div>
                        <div class="col-sm-12 d-flex justify-content-between">
                            <div class="col-md-2 float-right">
                            <span>Discount Maximum<span style="color:red">*</span></span>
                            </div>
                            <div  class="form-group col-md-4">
                            <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="col-md-2 float-right">
                            <!-- <span>Allowed vehicle<span style="color:red">*</span></span> -->
                            </div>
                            <div class="form-group col-md-4">
                            <!-- <input type="text" class="form-control" placeholder=""> -->
                            </div>
                        </div>
                    </div>
                </form>
                </b-modal>
        </div>
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
                <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
                </span>
            <!-- table -->
            <b-table striped hover outlined :items="posts"></b-table>
            </div>
            <!-- pagination -->
            <div>
            <span>showing 0 to 0 of 0 entries</span>
                <p class="pagination justify-content-end">
            <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
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
      clcked: true,
      iderror: '',
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      name: '',
      nameState: null,
      submittedNames: [],
      perPage: 1,
      currentPage: 1,
      filter: '',
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
