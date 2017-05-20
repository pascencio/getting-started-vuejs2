<template>
<div id="app">
  <div class="jumbotron text-center">
    <h1>
        <i class="fa fa-sticky-note" aria-hidden="true"></i> TODO List with Vue.js 2
      </h1>
    <p>A simple project for learn Vue.js 2</p>
    <div class="tools">
      <div>
        <i class="fa fa-calendar" aria-hidden="true"></i> TODO
        <span class="badge">5</span>
      </div>
      <div>
        <i class="fa fa-check-square-o" aria-hidden="true"></i> Completed
        <span class="badge">5</span>
      </div>
      <div>
        <i class="fa fa-star" aria-hidden="true"></i> Favorites
        <span class="badge">5</span>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="panel panel-oldertasks">
          <div class="panel-heading"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Top 5 - Older Tasks</div>
          <div class="panel-body">
            <ol class="oldertasks">
              <li>Do My Homework <a href="#">...See more</a></li>
              <li>Feed My Cat <a href="#">...See more</a></li>
              <li>Take My Pills <a href="#">...See more</a></li>
              <li>Watch a Horror Movie <a href="#">...See more</a></li>
              <li>Learn Vue.js 2 <a href="#">...See more</a></li>
            </ol>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
    </div>
    <button type="button" class="btn btn-circle">
        <i id="gear" class="fa fa-cog" aria-hidden="true"></i>
    </button>
    <ul class="options">
      <li>
        <a href="https://github.com/pascencio/getting-started-vuejs2" target="_blank" class="btn btn-option github">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/patricio-ascencio-arevena-1b472a142/" target="_blank" class="btn btn-option linkedin">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/pascencioa" target="_blank" class="btn btn-option twitter">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <button class="btn btn-option create" data-toggle="modal" data-target="#editTask">
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </li>
    </ul>
  </div>
  <a href="https://github.com/pascencio"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67"
      alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"></a>
</div>
</template>

<script>
import logger from 'loglevel';

const OPTION_CSS_SELECTOR = '.options';
const BTN_OPTION_CSS_SELECTOR = '.btn-option';
const BTN_CIRCLE_CSS_SELECTOR = '.btn-circle';
const GEAR_ID_SELECTOR = '#gear';
const ROTATE_CCS_CLASS = 'rotate';
const DIV_TOOL_CSS_SELECTOR = '.tools';
const DIV_JUMBOTRON_CSS_SELECTOR = '.jumbotron';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    function rotateGear() {
      let option = $(OPTION_CSS_SELECTOR);
      let gear = $(GEAR_ID_SELECTOR);
      gear.toggleClass('rotate');
      option.slideToggle('fast');
    }
    $(BTN_OPTION_CSS_SELECTOR).click(() => {
      rotateGear();
    });
    $(BTN_CIRCLE_CSS_SELECTOR).click(() => {
      rotateGear();
    });
    let jumbotronHeight = $(DIV_JUMBOTRON_CSS_SELECTOR).height();
    logger.debug('Jumbotron height: ',jumbotronHeight);
    $(window).scroll(() => {
      let windowScrollTop = $(window).scrollTop();
      if (windowScrollTop >= jumbotronHeight) {
        $(DIV_TOOL_CSS_SELECTOR).addClass('fixed');
      } else if ($(DIV_TOOL_CSS_SELECTOR).hasClass('fixed')) {
        $(DIV_TOOL_CSS_SELECTOR).removeClass('fixed');
      }
    });
  }
}
</script>

<style>
</style>
