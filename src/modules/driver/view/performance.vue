<template>
  <div >
      <div class="container-fluid divback">
            <button class="btn btn-info" @click="isShow = !isShow" role="button">Filter By Date</button>
            <span class="container-fluid">OR</span>
            <button class="btn btn-info float-right" @click="isShow1 = !isShow1" role="button">Filter By Time</button><br><br>
            <div v-if="isShow">
                <input class="form-control" type="search" v-model="search" >&nbsp;&nbsp;
                <button class="btn btn-info">Search</button>
            </div >
            <div v-if="isShow1">
                <input class="form-control" type="date" v-modal="search" >&nbsp;&nbsp;
                <input class="form-control" type="date" v-modal="search" >&nbsp;&nbsp;
                <input class="form-control" type="search" v-modal="search" >&nbsp;&nbsp;
                <button class="btn btn-info">Search</button>
            </div>
    </div><br/>
      <div class="container-fluid divback">
            <p>
            <ul class="" style="list-style:none">
                <li class="page-item">- This report lists down only those drivers who have taken rides in specified date range</li>
                <li class="page-item">- Successfull Rides are the successfully completed rides by driver</li>
                <li class="page-item">- Cancelled Rides include requests cancelled by customer, requests cancelled by driver after accepting</li>
                <li class="page-item">- Missed Rides include requests rejected by driver and timedout requests</li>
            </ul>
          </p>
    </div><br/>
        <div class="container-fluid divback">
            <div>
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
  name: 'ToggleDiv',
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
          key: 'Select Driver', label: 'Select Driver', sortable: true, sortDirection: 'desc',
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
