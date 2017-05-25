<template lang="html">
<div class="">
  <h1><i class="fa fa-th-list" aria-hidden="true"></i> Task List</h1>
  <div class="panel-group">
    <div class="panel panel-task">
      <div class="panel-heading"><i class="fa fa-calendar" aria-hidden="true"></i> Call To Mom <a href="#"><i class="fa fa-edit"></i></a></div>
      <div class="panel-body" v-html="taskCode"></div>
      <div class="panel-footer">
        <div class="row">
          <div class="tags col-md-9 text-left">
            <ul>
              <li>
                <i class="fa fa-tags" aria-hidden="true"></i>
              </li>
              <li>
                <a href="#">
                  <span class="badge">Homeworks</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="badge">Bored</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="info col-md-3">
            <ul>
              <li>
                <a href="#">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-task">
      <div class="panel-heading"><i class="fa fa-calendar" aria-hidden="true"></i> Buy Milk <a href="#"><i class="fa fa-edit"></i></a></div>
      <div class="panel-body" v-html="taskCode"></div>
      <div class="panel-footer">
        <div class="row">
          <div class="tags col-md-9 text-left">
            <ul>
              <li>
                <i class="fa fa-tags" aria-hidden="true"></i>
              </li>
              <li>
                <a href="#">
                  <span class="badge">Homeworks</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="badge">Bored</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="info col-md-3">
            <ul>
              <li>
                <a href="#">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-task">
      <div class="panel-heading"><i class="fa fa-check-square-o" aria-hidden="true"></i> Clean My Room <a href="#"><i class="fa fa-edit"></i></a></div>
      <div class="panel-body" v-html="taskCode">
      </div>
      <div class="panel-footer">
        <div class="row">
          <div class="tags col-md-9 text-left">
            <ul>
              <li>
                <i class="fa fa-tags" aria-hidden="true"></i>
              </li>
              <li>
                <a href="#">
                  <span class="badge">Homeworks</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="badge">Bored</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="info col-md-3">
            <ul>
              <li>
                <a href="#">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ul class="pager">
    <li class="previous"><a href="#">Previous</a></li>
    <li class="next"><a href="#">Next</a></li>
  </ul>
  <div id="editTask" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title"><i class="fa fa-sticky-note" aria-hidden="true"></i> New Task</h4>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <input type="text" class="form-control" id="title" placeholder="Task title" name="title">
        </div>
        <div class="form-group">
          <datepicker format="dd-MM-yyyy" placeholder="Task due date"></datepicker>
        </div>
        <div class="form-group">
          <input-tag :tags="tags" placeholder="Task's tags "></input-tag>
        </div>
        <div class="form-group">
          <textarea class="form-control" rows="3" placeholder="Task description"></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal">Save</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import {markdown} from 'markdown';
import Datepicker from 'vuejs-datepicker';
import InputTag from 'vue-input-tag';

export default {
  data(){
    return {
      taskDescription:"##Lorem ipsum dolor sit amet\n **Consectetuer adipiscing elit. Aenean commodo ligula eget dolor**. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. *Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate*.",
      tags:[]
    }
  },
  components: {
    Datepicker,
    InputTag
  },
  computed:{
    taskCode(){
       return markdown.toHTML(this.taskDescription);
    }
  }
}
</script>

<style lang="css">
</style>
