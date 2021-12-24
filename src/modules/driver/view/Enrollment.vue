<template>
  <div >
    <div class="container-fluid">
      <!-- Add Document -->
            <button v-b-modal.modal-prevent-closing class="float-right btn btn-info">All Document</button><br>
       <!--modal-->
                <b-modal
                id="modal-prevent-closing"
                ref="modal"
                title="Referral Data"
                @show="resetModal"
                @hidden="resetModal"
                size="lg"
                hide-footer
                ><!--modal form-->
                <h3>All Document</h3>
                <b>Driver Image</b>
                <ul>
                  <li>* Mandatory for Registration: These are the documents a driver has to upload before registering as a driver.</li>
                  <li>* Mandatory for Driving: These are the documents that are mandatory for a driver to upload before he/she starts taking rides.</li>
                  <li>* Required: These are the documents a driver needs to upload within a week.</li>
                </ul>
                </b-modal>
      </div><br>
      <div class="container-fluid">
            <label>Vehicle Type</label>&nbsp;&nbsp;
            <Select class="select1">
                <option>All</option>
                <option>TAXI</option>
                <option>TAXI POOL</option>
            </select>
    </div><br/>
      <!-- entry tab nav -->
        <div class="container-fluid divback">
            <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" @click="isShow = isShow">Drivers - Not Uploaded Document</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="isShow = isShow">Drivers - Uploaded Documents</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="isShow = !isShow">Drivers - Active</a>
                </li>
            </ul>
        </div><br/>
        <div v-if="isShow" class="container-fluid">
      <!--Export button -->
            <button class="btn btn-info">Export csv</button>
        </div>
        <br>
        <div v-if="isShow" class="container-fluid divf">
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
  name: 'ToggleDiv',
  components: {
    // BCard,
    // BCardText,
    // BLink,
  },
  data() {
    return {
      isShow: true,
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
          key: 'Phone Number', label: 'Phone Number', sortable: true, class: 'text-center',
        },
        {
          key: 'Registered On', label: 'Registered On', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Last Updated', label: 'No of docs uploaded', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Select Driver', label: 'Select Driver', sortable: true, sortDirection: 'desc',
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
    resetModal() {
      this.name = ''
      this.nameState = null
    },
  },
}
</script>

<style>
</style>
