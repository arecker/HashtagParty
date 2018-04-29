var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    dynamicMessage: 'You loaded this page on ' + new Date().toLocaleString()
  }
});
