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
          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
          Important
          <span class="badge">5</span>
        </div>
      </div>
    </div>
    <div class="container">
      <ul class="nav nav-tabs">
        <li class="active">
          <a data-toggle="tab" href="#home">Home</a>
        </li>
        <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
        <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
      </ul>
      <div class="tab-content">
        <div id="home" class="tab-pane fade in active">
          <h3>HOME</h3>
          <p>Some content.</p>
        </div>
        <div id="menu1" class="tab-pane fade">
          <h3>Menu 1</h3>
          <p>Some content in menu 1.</p>
        </div>
        <div id="menu2" class="tab-pane fade">
          <h3>Menu 2</h3>
          <p>Some content in menu 2.</p>
        </div>
      </div>
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
  }
}
</script>

<style>
</style>
