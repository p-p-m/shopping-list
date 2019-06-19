<template>
    <div>
        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>
        <form>
            <div class="form-group">
                <input type="text" v-model="new_name" class="form-control" id="name" placeholder="name (required)">
            </div>
            <div class="form-group">
                <input type="text" v-model="new_quantity" class="form-control" id="quantity" placeholder="quantity (required)">
            </div>
            <div class="form-group">
                <input type="text" v-model="new_measurment" class="form-control" id="measurment" placeholder="measurment">
            </div>
            <button type="button" class="btn btn-primary" @click=add()>Add item</button>
        </form>
        <br />
        <br />
        <ul class="list-group">
            <li class="list-group-item" v-for="item in shopping_items">
                <button type="button" class="btn btn-success" @click=done(item)>Done</button>
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Products',
    data() {
        return {
            shopping_items: [{ id: 1, name: 'test' }],
            new_name: null,
            new_quantity: null,
            new_measurment: null,
            error: null,
        }
    },
    mounted() {
        const url = 'http://0.0.0.0:5000/shopping_list';
        fetch(url, {
                mode: 'cors',
                headers: new Headers({
                    'Access-Control-Allow-Origin': '*',
                })
            })
            .then(response => response.json())
            .then(data => {
                this.shopping_items = data;
            })
    },
    methods: {
        done(item) {
            const url = 'http://0.0.0.0:5000/shopping_list/remove_item';
            fetch(url, {
                    mode: 'cors',
                    headers: new Headers({
                        'Access-Control-Allow-Origin': '*',
                    }),
                    method: 'POST',
                    body: JSON.stringify({ shopping_item_id: item.id }),
                })
                .then(data => {
                    this.shopping_items = this.shopping_items.filter(i => i.id !== item.id);
                })
        },
        add() {
            this.error = null;
            if (!this.new_name || !this.new_quantity) {
                this.error = 'Quantity and name should be defined';
                return;
            }
            if (!!isNaN(this.new_quantity)) {
                this.error = 'Quantity should be a number';
                return;
            }
            const url = 'http://0.0.0.0:5000/shopping_list/add_item';
            const data = {
                name: this.new_name,
                quantity: this.new_quantity,
                measurment: this.new_measurment,
            }
            fetch(url, {
                    mode: 'cors',
                    headers: new Headers({
                        'Access-Control-Allow-Origin': '*',
                    }),
                    method: 'POST',
                    body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(data => {
                    this.shopping_items.push(data);
                    this.new_name = null;
                    this.new_quantity = null;
                    this.new_measurment = null;
                })
        }
    }
}
</script>