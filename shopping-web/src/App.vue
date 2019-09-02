<template>
    <div class="container" id="app">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <Header :items="items" @itemActivated="activateItem" />
        <Products v-show="isItemActive('Shopping List')"/>
        <Recipes v-show="isItemActive('Recipes')"/>
    </div>
</template>
<script>
import Header from './components/Header.vue'
import Products from './components/Products.vue'
import Recipes from './components/Recipes.vue'

export default {
    name: 'app',
    components: {
        Header,
        Products,
        Recipes,
    },
    data() {
        return {
            items: [
                {name: 'Shopping List', isActive: true},
                {name: 'Recipes', isActive: false},
            ],
        }
    },
    methods: {
        activateItem(name) {
            this.items.forEach(item => {
                item.isActive = item.name === name;
            });
        },
        isItemActive(name) {
            return this.items.filter(item => item.name === name && item.isActive).length > 0;
        },
    },

}
</script>