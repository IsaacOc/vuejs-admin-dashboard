<template>
    <div>
        <button v-b-modal.modal-prevent-closing class="btn btn-info">Add Manager</button><br><br>
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
                        <div class="col-lg-10 d-flex justify-content-between">
                            <div class="form-group col-md-2">
                            <span><b>Name<span style="color:red">*</span></b></span>
                            </div>
                            <div class="form-group col-md-8">
                            <input type="text" class="form-control" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-10 d-flex justify-content-between">
                            <div class="form-group col-md-2">
                            <span><b>Business Name<span style="color:red">*</span></b></span>
                            </div>
                            <div class="form-group col-md-8">
                        <input type="text" class="form-control" placeholder="">
                        </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-10 d-flex justify-content-between">
                            <div class="form-group col-md-2">
                            <span><b>Email<span style="color:red">*</span></b></span>
                            </div>
                            <div class="form-group col-md-8">
                        <input type="email" class="form-control" placeholder="">
                        </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Confirm Password<span style="color:red">*</span></b></span>
                            </div>
                            <div class="form-group col-md-8">
                        <input type="password" class="form-control" placeholder="">
                        </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-10 d-flex justify-content-between">
                            <div class="form-group col-md-2">
                            <span><b>Phone Number<span style="color:red">*</span></b></span>
                            </div>
                            <div class="form-group col-md-8">
                            <input type="password" class="form-control" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-lg-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                        <span><b>City<span style="color:red">*</span></b></span>
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
                        <div class="col-lg-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Password<span style="color:red">*</span></b></span>
                            </div>
                            <div class="form-group col-md-8">
                        <input type="password" class="form-control" placeholder="">
                        </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-10 d-flex justify-content-between">
                        <div class="form-group col-md-2">
                            <span><b>Confirm Password<span style="color:red">*</span></b></span>
                            </div>
                            <div class="form-group col-md-8">
                        <input type="password" class="form-control" placeholder="">
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
                    <a class="nav-link active" aria-current="page" @click="isShowDate = isShowDate">Deactive</a>
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
          key: 'Driver ID', label: 'Driver ID', sortable: true, class: 'text-center',
        },
        {
          key: 'Driver Name', label: 'Driver Name', sortable: true, class: 'text-center',
        },
        {
          key: 'City', label: 'City', sortable: true, class: 'text-center',
        },
        {
          key: 'Mobile', label: 'Mobile', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Email', label: 'Email', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Status', label: 'Status', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Registered On', label: 'Registered On', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Vehicle Number', label: 'Select Driver', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Rides in Last 7 Days', label: 'Select Driver', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Rides in Last 30 Days', label: 'Select Driver', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Last Login', label: 'Last Login', sortable: true, sortDirection: 'desc',
        },
      ],
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
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
