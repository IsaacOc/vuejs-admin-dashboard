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
            <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      show-empty
      small
      responsive
      @filtered="onFiltered"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
            </div>
            <!-- pagination -->
            <div>
            <span>showing {{ currentPage }} to {{ perPage }} of {{ totalRows }} entries</span>
                <p class="pagination justify-content-end">
            <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
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
      isShowDate: true,
      iderror: '',
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      name: '',
      nameState: null,
      submittedNames: [],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: 'Show a lot' }],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: '',
      },
      items: [
      ],
      fields: [
        {
          key: 'S.No', label: 'S.No', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Coupon ID', label: 'Coupon ID', sortable: true, class: 'text-center',
        },
        {
          key: 'Promo Type', label: 'Promo Type', sortable: true, class: 'text-center',
        },
        {
          key: 'Title', label: 'Title', sortable: true, class: 'text-center',
        },
        {
          key: 'Sub Title', label: 'Sub Title', sortable: true, class: 'text-center',
        },
        {
          key: 'Latitude', label: 'Latitude', sortable: true, class: 'text-center',
        },
        {
          key: 'Longitude', label: 'Longitude', sortable: true, class: 'text-center',
        },
        {
          key: 'Radius', label: 'Radius', sortable: true, class: 'text-center',
        },
        {
          key: 'Benefit Type', label: 'Benefit Type', sortable: true, class: 'text-center',
        },
        {
          key: 'Discount Type', label: 'Discount Type', sortable: true, class: 'text-center',
        },
        {
          key: 'Value', label: 'Value', sortable: true, class: 'text-center',
        },
        {
          key: 'Maximum Value', label: 'Maximum Value', sortable: true, class: 'text-center',
        },
        {
          key: 'No of Coupons', label: 'No of Coupons', sortable: true, class: 'text-center',
        },
        {
          key: 'Allowed Vehicles', label: 'Allowed Vehicles', sortable: true, class: 'text-center',
        },
        {
          key: 'Action', label: 'Action',
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
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
}
</script>
