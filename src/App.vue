<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link :to="{ name: 'items' }">Items</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <!--<li><a href="#">Link</a></li>-->
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Count from './components/Count';

import store from './store';

export default {
  name: 'app',
  store,
  components: {
    Hello,
    Welcome,
    Count,
  },
};
</script>

<style>
#app {
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5);
  background: #FFF;
  border-radius: 4px;
  border: 1px solid #DDD;
  margin: 36px auto;
  padding: 12px;
}
</style>
