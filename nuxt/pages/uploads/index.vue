<template>
　<div>
　　 <div>
        <img src="https://firebasestorage.googleapis.com/v0/b/good-bad-1f1f3.appspot.com/o/martin.png" alt="">
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase.js"
import 'firebase/firestore'
import 'firebase/storage';
export default {
  data () {
    return {
      name: '',
    }
  },
  async asyncData({ params }) {
    var storage = firebase.storage();
    var pathReference = storage.ref('martin.png');
    console.log(pathReference);
  }
}