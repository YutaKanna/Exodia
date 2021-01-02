<template>
　<div>
　　 <div style="position:relative; height:500px; overflow: hidden;">
        <img id="upImg" width="500" height="500" style="position:absolute; clip:rect(0px 500px 250px 0px);" src="">
        <img id="downImg" width="500" height="500" style="position: absolute; clip: rect(250px, 500px, 500px, 0px);" src="">
    </div>
    <div @click="hogehoge">FOO</div>
  </div>
</template>

<script>
import axios from 'axios';
import firebase from "~/plugins/firebase.js"
import 'firebase/firestore'
import 'firebase/storage';
export default {
  data () {
    return {
      downRef: ''
    }
  },
  methods: {
    hogehoge () {
        var storage = firebase.storage();

        // 上半分
        var storageRef = storage.ref();
        storageRef.child('good.png').getDownloadURL().then(function(url) {
            console.log(url);
            // This can be downloaded directly:
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function(event) {
                var blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
            // Or inserted into an <img> element:
            var img = document.getElementById('upImg');
            img.src = url;
            }).catch(function(error) {
            // Handle any errors
        });

        storageRef.child('bad.png').getDownloadURL().then(function(url) {
            console.log(url);
            // This can be downloaded directly:
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function(event) {
                var blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
            // Or inserted into an <img> element:
            var img = document.getElementById('downImg');
            img.src = url;
            }).catch(function(error) {
            // Handle any errors
        });
    }
  }
}
</script>