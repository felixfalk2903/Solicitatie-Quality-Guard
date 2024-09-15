<template>
    <div class="div">
        <h1>ingredients</h1>
        <v-card class="v-card" v-for="(ingredient) in currentRecipe.retailproducts" :key="ingredient" width="300px">
            {{ ingredient.name["nl-BE"]}}
        </v-card>
        <!-- <h1>Alergies</h1> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "ingredientView",
    computed: {
        ...mapGetters([
            'currentRecipe'
        ])
    },
}
</script>

<style>
.div {
    text-align: center;
    display: flex;
    align-content: center;
    text-justify: center;
    flex-direction: column;
    
}
.v-card{
    align-self: center;
    margin: 10px;
    padding: 5px;
}
</style>