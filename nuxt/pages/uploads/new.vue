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
      imageName: '',
      imageURL: ''
    }
  },
  methods: {
    async selectIcon (e) {
        const file = e.target.files[0]
        // refの中身が保存する場所のpathになる
        const storageRef = firebase.storage().ref(file.name)
        const snapshot = await storageRef.put(file)
        const imageURL = await snapshot.ref.getDownloadURL();

        var docDataImages = {
            imageName: file.name,
            imageURL: imageURL,
        };
        var db = firebase.firestore()
        db.collection('images').add(docDataImages)
    },
  }
}
</script>