<template>
  <div >
    <div class="container-fluid ">
      <!-- select type -->
            <label>Vehicle Type</label>&nbsp;&nbsp;
            <Select class="select1">
                <option>All</option>
                <option>TAXI</option>
                <option>TAXI POOL</option>
            </select>
    </div>
    <br>
    <div class="container-fluid divback">
      <!-- select entries show -->
        <div>
            <label>Show</label>&nbsp;&nbsp;
            <Select class="select">
                <option>50</option>
                <option>20</option>
                <option>10</option>
            </select>&nbsp;&nbsp;
            <label>entries</label>
            <!-- search -->
        <span class="float-right">
        <label>Search</label>&nbsp;&nbsp;
        <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
        </span>
        </div>
        <br>
        <div>
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
export default {
  name: 'App',
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
          key: 'UserName', label: 'User Name', sortable: true, class: 'text-center',
        },
        {
          key: 'PhoneNo', label: 'Phone No', sortable: true, class: 'text-center',
        },
        {
          key: 'Driver ID', label: 'Driver ID', sortable: true, class: 'text-center',
        },
        {
          key: 'Pickup', label: 'Pickup', sortable: true, class: 'text-center',
        },
        {
          key: 'Drop', label: 'Drop', sortable: true, class: 'text-center',
        },
        {
          key: 'Pickup Time', label: 'Pickup Time', sortable: true, class: 'text-center',
        },
        {
          key: 'Driver Notes', label: 'Driver Notes', sortable: true, class: 'text-center',
        },
        {
          key: 'Status', label: 'Status', sortable: true, class: 'text-center',
        },
        {
          key: 'actions', label: 'Actions',
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
