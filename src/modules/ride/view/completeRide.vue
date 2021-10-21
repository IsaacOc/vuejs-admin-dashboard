<template>
  <div class="container-fluid divback">
    <div class="row divback">
      <!-- form deta -->
        <div>
            <form @submit.prevent="UserDetails" >
                <input type="date" required >
                <button class="btn btn-info">Search</button>
            </form>
        </div>
    </div><br>
    <div class="row divback">
      <!-- show entries -->
        <div>
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
          key: 'EngagementID', label: 'Engagement ID', sortable: true, sortDirection: 'desc',
        },
        {
          key: 'DriverName', label: 'Driver Name', sortable: true, class: 'text-center',
        },
        {
          key: 'UserName', label: 'User Name', sortable: true, class: 'text-center',
        },
        {
          key: 'UserPhoneNo', label: 'User Phone No', sortable: true, class: 'text-center',
        },
        {
          key: 'Pickup', label: 'Pickup', sortable: true, class: 'text-center',
        },
        {
          key: 'Drop', label: 'Drop', sortable: true, class: 'text-center',
        },
        {
          key: 'Drop Time', label: 'Drop Time', sortable: true, class: 'text-center',
        },
        {
          key: 'VehicleType', label: 'Vehicle Type', sortable: true, class: 'text-center',
        },
        {
          key: 'Status', label: 'Status', sortable: true, class: 'text-center',
        },
        {
          key: 'Rating', label: 'Rating', sortable: true, class: 'text-center',
        },
        {
          key: 'Feedback Comments', label: 'Feedback Comments', sortable: true, class: 'text-center',
        },
        {
          key: 'Feedback Reasons', label: 'Feedback Reasons', sortable: true, class: 'text-center',
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
  .divf {
    border-radius: 0px;
    border: 1px solid #ddd;;
    background:white;
    margin-bottom: 50px;
    padding: 0.6em;
  }
  .form{
    max-width:320px;
    margin: 30px auto;
    text-align: center;
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
  input[type="date"]{
    display:inline-block;
    padding: 10px 6px;
    width: 350px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    text-align: center;
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
