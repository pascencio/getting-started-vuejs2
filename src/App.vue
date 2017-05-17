<template>
  <div id="app">
    <div class="jumbotron text-center">
      <h1>
        <i class="fa fa-sticky-note" aria-hidden="true"></i> TODO List with Vue.js 2
      </h1>
      <p>A simple project for learn Vue.js 2</p>
      <div class="tools">
        <div>
          <i class="fa fa-calendar" aria-hidden="true"></i>
          TODO
          <span class="badge">5</span>
        </div>
        <div>
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
          Completed
          <span class="badge">5</span>
        </div>
        <div>
          <i class="fa fa-star" aria-hidden="true"></i>
          Favorites
          <span class="badge">5</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="panel panel-duedate">
            <div class="panel-heading"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Due Date</div>
            <div class="panel-body">

            </div>
          </div>
        </div>
        <div class="col-md-8">
          <router-view></router-view>
        </div>
      </div>
      <button type="button" class="btn btn-circle">
        <i class="fa fa-cog" aria-hidden="true"></i>
        <ul class="options">
          <li>
            <a href="#" data-toggle="modal" data-target="#editTask">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    $('.btn-circle').click(function(){
      $('.btn-circle > .options').toggle();
    });
  }
}
</script>

<style>
</style>
