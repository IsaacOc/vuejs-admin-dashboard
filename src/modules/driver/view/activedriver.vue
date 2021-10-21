<template>
  <div >
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
    <div class="container-fluid">
      <!-- Add button -->
            <button v-b-modal.modal-prevent-closing class="btn btn-info">Add Driver</button><br><br>
            <h3>Note: You cannot add driver in the demo mode. Use the driver credentials given in demo email only.</h3>
      </div><br>
      <div class="container-fluid divback">
            <div class="input-group">
              <input type="search" class="form-control" aria-describedby="basic-addon2">
              <span class="input-group-addon" id="basic-addon2"><button class="btn btn-info">Search</button></span>&nbsp;<button class="btn btn-info">See All</button>
            </div>
      </div><br/>
      <!-- entry tab nav -->
        <div class="container-fluid divback">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">All Drivers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Taxi Drivers</a>
                </li>
            </ul>
        </div><br/>
        <div class="container-fluid">
      <!--Export button -->
            <button class="btn btn-info">Export</button>
        </div>
        <br>
        <div class="divf">
        <div>
            <span class="float-right">
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
    // BCard,
    // BCardText,
    // BLink,
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
        {
          key: 'Last Ride On', label: 'Last Ride On', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Driver Ratings', label: 'Select Driver', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'OTP', label: 'Select Driver',
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
}
</script>

<style>
  .divf {
    border-radius: 0px;
    border: 1px solid #ddd;;
    background:white;
    padding: 0.6em;
  }
  .divback {
    background-color: white;
    border: 1px solid #ddd;
    padding:0.5em;
  }
  .form{
    max-width:320px;
    margin: auto;
    padding:40px;
    border-radius: 10px;
  }
  label{
    color: black;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing:1px;
    font-weight: bold;
  }
  .select {
    display:inline-block;
    padding:10px 6px;
    width:80px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    color: #555;
  }
  input[type="search"] {
    display:block;
    padding:10px 6px;
    width:250px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    color: #555;
    display:inline-block;
  }
  .span{
      border: 1px solid #ddd;
      padding: 0.4em;
  }
</style>
