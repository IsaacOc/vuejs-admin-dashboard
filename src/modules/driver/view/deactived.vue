<template>
  <div >
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
          key: 'Select', label: 'Driver', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Driver ID', label: 'Driver ID', sortable: true, class: 'text-center',
        },
        {
          key: 'Driver Name', label: 'Driver Name', sortable: true, class: 'text-center',
        },
        {
          key: 'Driver PhoneNo', label: 'Driver Phone No', sortable: true, class: 'text-center',
        },
        {
          key: 'Mobile', label: 'Mobile', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Vehicle Number', label: 'Select Driver', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Registered On', label: 'Registered On', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Last Deactivated On', label: 'Last Deactivated On', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Last Log', label: 'Last Log', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Total Rides', label: 'Total Rides', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Last Ride On', label: 'Last Ride On', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Deactivation Reason', label: 'Last Ride On', sortable: true, sortDirection: 'desc',
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
  },
}
</script>

<style>
  </style>
