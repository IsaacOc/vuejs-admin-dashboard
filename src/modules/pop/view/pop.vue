<template>
  <div >
      <div class="container-fluid">
            <Select class="select1">
                <option>All City</option>
                <option>London</option>
            </select>
    </div>
        <br>
        <div class="container-fluid divf">
        <div><!--select-->
                <label>Show</label>&nbsp;&nbsp;
                <Select class="select">
                    <option>50</option>
                    <option>20</option>
                    <option>10</option>
                 </select>&nbsp;&nbsp;
                <label>entries</label>
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
  },
  data() {
    return {
      text: '',
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
          key: 'S.No', label: 'S.No', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Promo Type', label: 'Promo Type', sortable: true, class: 'text-center',
        },
        {
          key: 'City', label: 'City', sortable: true, class: 'text-center',
        },
        {
          key: 'Latitude', label: 'Driver Phone No', sortable: true, class: 'text-center',
        },
        {
          key: 'Longitude', label: 'Longitude', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Radius(in meters)', label: 'Radius(in meters)', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Allowed Vehicle', label: 'Allowed Vehicle', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Start From', label: 'Start From', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'End On', label: 'End On', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Maximum User Allowed', label: 'Maximum User Allowed', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'Per User Coupon Limit', label: 'Per User Coupon Limit', sortable: true, sortDirection: 'desc',
        },
      ],
    }
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
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
}
</script>
