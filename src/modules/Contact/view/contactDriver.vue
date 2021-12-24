<template>
  <div class="container-fluid divback">
    <div class="row">
    <!-- form details -->
      <div class="col-xs-6 col-md-4 ">
    <!-- form contact -->
    <div class="divf" >
      <h4>Message Type</h4><br><br>
      <form @submit.prevent="UserDetails" class="form1">
        <div class="clicked">
          <!-- message type -->
            <b class="radio-inline" >
              <input type="radio" name="required" checked >Push
            </b><br><br>
            <b class="radio-inline" >
              <input type="radio" name="required" >Sms
            </b><br><br>
            <b class="radio-inline" >
              <input type="radio" name="required" >Sms and Push
            </b><br><br>
        </div>
        <hr/>
        <h4>Send Push</h4><br>
        <label>To</label><br>
        <!-- form push  -->
        <Select class="form-control selec">
                <option>Custom csv</option>
                <option>Active Driver</option>
                <option>Deactived Drivers</option>
                <option>Free Drivers</option>
        </select><br><br>
        <!-- form file -->
        <p><input type="file" class="form-control" value="required"></p>
        <!-- file download -->
        <p><a href="/images/myw3schoolsimage.jpg" class="form-control" download="w3logo">Download Sample csv</a></p>
        <p>message</p>
        <!-- form textarea -->
        <textarea class="form-control" rows="4" col="20"></textarea><br><br>
        <!-- form button -->
        <div class="sumbit" style="text-align:center">
          <button class="btn btn-info">Send Push</button>
        </div>
      </form>
    </div>
    </div>
    <!-- form details -->
      <div class="col-xs-6 col-md-8">
    <!-- right div -->
    <div class="container-fluid divback" style="border:none">
        <div>
          <!-- form entries -->
            <b>Show</b>&nbsp;&nbsp;
            <Select class="select">
                <option>50</option>
                <option>20</option>
                <option>10</option>
            </select>&nbsp;&nbsp;
            <b>entries</b>
        <span class="float-right">
          <!-- form search -->
        <b>Search</b>&nbsp;&nbsp;
        <b-form-input v-model="filter" class="form-control" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
        </span>
        </div><br><br>
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
