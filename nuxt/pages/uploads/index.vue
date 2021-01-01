<template>
　<div>
　　 <div style="position:relative; height:500px; overflow: hidden;">
        <img id="myimg" width="500" height="500" style="position:absolute; clip:rect(0px 500px 250px 0px);" src="">
        <img id="myimg" width="500" height="500" style="position: absolute; clip: rect(250px, 500px, 500px, 0px);" src="">
    </div>
    <div @click="hogehoge">FOO</div>
  </div>
</template>

<script>
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
        var httpsReference = storage.ref('martin.png');

        const storageRef = storage.ref();
        storageRef.child('martin.png').getDownloadURL().then(function(url) {

            // This can be downloaded directly:
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function(event) {
                var blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();

            // Or inserted into an <img> element:
            var img = document.getElementById('myimg');
            img.src = url;
            }).catch(function(error) {
            // Handle any errors
        });
    }
  }
}
</script>