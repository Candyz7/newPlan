import Vue from "vue";

Vue.filter('changeMsg',function(msg){
    return msg.replace('我的','你的')
  })
