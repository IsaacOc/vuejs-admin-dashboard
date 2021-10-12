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
          <b-table striped hover outlined :items="posts"></b-table>
        </div>
        <!-- pagination -->
        <div>
          <span>showing 0 to 0 of 0 entries</span>
          <p class="pagination justify-content-end">
            <b-pagination
          v-model="currentPage"
          :total-rows="rows"
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
      text: '',
      isShow: true,
      perPage: 1,
      currentPage: 1,
      filter: '',
      posts: [
        {
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati',
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
        },
        {
          userId: 1,
          id: 3,
          title: 'ea molestias quasi exercitationem repellat qui',
        },
      ],
    }
  },
  methods: {
    UserDetails() {

    },
    VehicleDetails() {

    },
    RideDetails() {
      this.iderror = this.text.length > 0 ? '' : 'id needed'
    },
  },
  computed: {
    rows() {
      return this.posts.length
    },
  },
}
</script>
