<template>
  <div id="app">
      <ul class="nav nav-pills nav-justified">
        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Settings</a></li>
        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Message</a></li>
      </ul>
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="home">...</div>
        <div role="tabpanel" class="tab-pane" id="profile">..</div>
        <div role="tabpanel" class="tab-pane" id="messages">.......</div>
      </div>
      <div class="app-body">
        <hello></hello>
        <welcome></welcome>
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
