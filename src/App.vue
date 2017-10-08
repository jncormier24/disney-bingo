<template>
  <div id="app">
    <div id="newEntryArea">
      <label>New Entry Text: </label>
      <input type="text" name="newEntry" v-model="newEntry">
      <button @click="addEntry">Add Entry</button>
    </div>
    <div id="existingEntries">
      <ul>
        <li v-for="entry in entries">
          {{ entry }}
          <span @click="removeEntry(entry)">x</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      newEntry: '',
      entries: []
    }
  },
  methods: {
    addEntry () {
      this.entries.push(this.newEntry)
      this.newEntry = ''
    },
    removeEntry (entry) {
      this.entries.splice(this.entries.indexOf(entry), 1)
    }
  }
}
</script>