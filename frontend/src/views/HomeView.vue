<template>
  <div class="home">
    <h1 class="title">Quality Guard interview test</h1>
    <div class="container">
      <v-combobox v-model="selected" multiple return-object @click="comboboxChanged" class="select" label="Select recipe"
        :item-props="itemProps" :items="recipes"></v-combobox>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { watch } from 'vue'

// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  computed: {
    ...mapGetters([
      'recipes'
    ])
  },
  data() {
    return { selectedRecipe: 0, selected: [] }
  },
  created() {
    this.$store.dispatch('GetAllRecieps')
  },
  watch:{
    selected(){
      console.log("hello")
    }
  },
  methods: {
    comboboxChanged() {
      console.log(this.selected[0].id)
    },
    itemProps(recipe) {
      return {
        title: recipe.name["nl-BE"],
        value: recipe.id
      }
    }
  }

};
</script>
<style>
.title {
  margin-bottom: 20px;
}

.select {
  margin: auto;
  width: 50%;

}
</style>
