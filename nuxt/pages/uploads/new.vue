<template>
  <form>
    <input @change="selectIcon" type="file">
    <button type="submit">submit</button>
  </form>
</template>


<script>
import firebase from "~/plugins/firebase.js"
import 'firebase/firestore'
import 'firebase/storage';
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    selectIcon (e) {
        const file = e.target.files[0]
        // refの中身が保存する場所のpathになる
        console.log(file.name);
        const storageRef = firebase.storage().ref(file.name)
        storageRef.put(file)
    },
  }
}
</script>