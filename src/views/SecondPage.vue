<template>
  <div >
    <div class=" container-fluid divback">
       <div>
         <!-- search by date -->
            <form @submit.prevent="UserDetails" >
                <input type="date" required >
                <div v-if="iderror" class="error">{{iderror}}</div>&nbsp;&nbsp;
                <button class="btn btn-info">Search</button>
            </form>
        </div>
    </div><br>
    <div class="container-fluid divback">
        <div>
          <!-- search by entries -->
            <label>Show</label>&nbsp;&nbsp;
            <!-- select -->
            <Select class="select">
                <option>50</option>
                <option>20</option>
                <option>10</option>
            </select>&nbsp;&nbsp;
            <label>entries</label>
        <span class="float-right">
          <!-- search buttons -->
        <label>Search</label>&nbsp;&nbsp;
        <b-form-input v-model="filter" type="search" id="filterInput" placeholder=""></b-form-input>
        </span>
        </div>
          <!-- table -->
          <b-table striped hover outlined :items="posts" :filter="filter"></b-table>
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
export default {
  name: 'App',
  data() {
    return {
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
  computed: {
    rows() {
      return this.posts.length
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
    max-width: 100%;
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
  .submit1{
      width: 400px;
      display:inline-block;
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
  .table {
    padding: 0.5em;
    text-align: center;

  }
</style>
