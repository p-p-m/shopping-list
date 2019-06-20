<template>
    <div class="container" id="app">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <Products />
    </div>
</template>
<script>
import Products from './components/Products.vue'

export default {
    name: 'app',
    components: {
        Products
    }
}
</script>