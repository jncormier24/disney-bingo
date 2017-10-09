<template>
  <div id="app">
    <div id="newEntryArea">
      <label>New Entry Text: </label>
      <input type="text" name="newItem" v-model="newItem.text">
      <button @click="addEntry">Add Entry</button>
    </div>
    <div id="existingEntries">
      <ul>
        <li v-for="entry in items">
          {{ entry.text }}
          <span @click="removeEntry(entry)">x</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyAX5rARgskRapTBeFfEQyWFbwmYsHfnu-8',
  authDomain: 'dsny-bingo.firebaseapp.com',
  databaseURL: 'https://dsny-bingo.firebaseio.com',
  projectId: 'dsny-bingo',
  storageBucket: 'dsny-bingo.appspot.com',
  messagingSenderId: '200961931056'
}
let firebaseapp = firebase.initializeApp(config)
let db = firebaseapp.database()
let itemsRef = db.ref('items')
export default {
  name: 'app',
  firebase: {
    items: itemsRef
  },
  data () {
    return {
      newItem: {
        text: ''
      }
    }
  },
  methods: {
    addEntry () {
      itemsRef.push(this.newItem)
      this.newItem.text = ''
    },
    removeEntry (entry) {
      itemsRef.child(entry['.key']).remove()
      // itemsRef.splice(itemsRef.indexOf(entry), 1)
    }
  }
}
</script>