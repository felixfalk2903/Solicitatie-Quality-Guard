<template>
  <div class="home">
    <h1 class="title">Quality Guard interview test</h1>
    <div class="container">
      <v-combobox v-model="selected" multiple return-object  class="select" label="Select recipe"
        :item-props="itemProps" :items="recipes"></v-combobox>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from '@/router';


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
      this.$store.commit("change_currentIdRecipe", this.selected[0].id)
      this.$store.dispatch("GetSpecificRecipe")
      this.$store.dispatch("GetAlergensForRecipe")
      router.push("/ingredients")
    }
  },
  methods: {
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
