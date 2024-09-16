<template>
    <div class="div">
        <h1>ingredients</h1>
        <v-card class="v-card" v-for="(ingredient) in currentRecipe.retailproducts" :key="ingredient" >
            {{ ingredient.name["nl-BE"]}}
        </v-card>
        <h1>Alergies</h1>
        <!-- Only show legally required allergies -->
        <div class="div" v-for="(allergen) in allergens" :key="allergen">
            <v-card class="v-card"  v-if="allergen.legalAllergen">
                    {{ allergen.name["nl-BE"] }} {{ allergen.presence }}
            </v-card>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "ingredientView",
    computed: {
        ...mapGetters([
            'currentRecipe',
            'allergens'

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
    
    width: 300px;
    align-self: center;
    margin: 10px;
    padding: 5px;
}
</style>