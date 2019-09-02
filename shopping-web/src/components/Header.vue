<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav mr-auto">
            <li v-for="item in items" :key="item.name" class="nav-item" v-bind:class="{ active: item.isActive }">
                <a class="nav-link" href="#" @click="activateItem(item)">{{ item.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            items: Array,
        },
        methods: {
            activateItem(item) {
                this.$emit('itemActivated', item.name);
            },
        }
    }
</script>
