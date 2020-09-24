<template>
    <div>
        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>
        <form>
            <div class="form-group">
                <input list="products" autocomplete=off type="text" v-model="new_name" class="form-control" id="name" placeholder="name (required)">
                <datalist id="products">
                    <option v-for="p in all_products" v-bind:key="p">{{ p }}</option>
                </datalist>
            </div>
            <div class="form-group">
                <input type="number" min="0" step="1" v-model="new_quantity" class="form-control" id="quantity" placeholder="quantity (required)">
            </div>
            <div class="form-group">
                <input list="measurements" autocomplete=off type="text" v-model="new_measurement" class="form-control lowercase" id="measurement" placeholder="measurement" pattern="[a-z]*">
                <datalist id="measurements">
                    <option v-for="m in all_measurements" v-bind:key="m">{{ m }}</option>
                </datalist>
            </div>
            <button type="button" class="btn btn-primary btn-block" @click=add()>Add item</button>
        </form>
        <br />
        <br />
        <ul class="list-group">
            <li class="list-group-item d-flex border-0 my-1 p-0 align-text-bottom" v-for="item in shopping_items" v-bind:key="item.id">
                <button type="button" class="btn btn-light text-danger p-2" @click=remove(item)>❌</button>
                <div class="p-2">
                    {{ item.name }} - {{ parseFloat(item.quantity).toFixed(3) }}
                    <small v-if="item.measurement">{{ item.measurement }}</small>
                </div>
                <button type="button" class="btn btn-light text-success ml-auto p-2" @click=confirm(item)>✔</button>
            </li>
        </ul>
    </div>
</template>
<script>
const item_types = {
    DEFAULT: 'DEFAULT',
    REMOVED: 'REMOVED',
    CONFIRMED: 'CONFIRMED',
}

export default {
    name: 'Products',
    data() {
        let base_url = undefined;
        if (process.env.NODE_ENV === 'production') {
            base_url = 'http://zymud.pythonanywhere.com';
        } else {
            base_url = 'http://0.0.0.0:5000';
        }
        return {
            shopping_items: [],
            new_name: null,
            new_quantity: null,
            new_measurement: null,
            error: null,
            base_url,
            all_measurements: [],
            all_products: [],
            autocomplete: {},
        }
    },
    mounted() {
        this._fetch('/shopping_list')
        .then(response => response.json())
        .then(data => {
            this.shopping_items = data.map(item => {
                return {...item, type: item_types.DEFAULT};
            });
        });

        this._fetch('/product/autocomplete')
        .then(response => response.json())
        .then(data => {
            this.autocomplete = data;
            this.all_products = Object.keys(data);
            this.all_measurements = [...new Set(Object.values(data))];
        });
    },
    methods: {
        _fetch(path, options) {
            const url = `${this.base_url}${path}`;
            return fetch(url, {
                mode: 'cors',
                headers: new Headers({
                    'Access-Control-Allow-Origin': '*',
                }),
                ...options
            })
        },
        confirm(item) {
            item.type = item_types.CONFIRMED;
            const path = '/shopping_list/confirm_item';
            this._fetch(path, {
                method: 'POST',
                body: JSON.stringify({ shopping_item_id: item.id }),
            })
            .then(() => {
                this.shopping_items = this.shopping_items.filter(i => i.id !== item.id);
            })
        },
        remove(item) {
            item.type = item_types.REMOVED;
            const path = '/shopping_list/remove_item';
            this._fetch(path, {
                method: 'POST',
                body: JSON.stringify({ shopping_item_id: item.id }),
            })
            .then(() => {
                this.shopping_items = this.shopping_items.filter(i => i.id !== item.id);
            })
        },
        add() {
            this.error = null;
            if (!this.new_name || !this.new_quantity) {
                this.error = 'Quantity and name should be defined';
                return;
            }
            if (isNaN(this.new_quantity)) {
                this.error = 'Quantity should be a number';
                return;
            }
            const data = {
                name: this.new_name,
                quantity: this.new_quantity,
                measurement: this.new_measurement,
            }
            this._fetch('/shopping_list/add_item', {
                method: 'POST',
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                data.type = item_types.DEFAULT;
                this.shopping_items.push(data);
                this.new_name = null;
                this.new_quantity = null;
                this.new_measurement = null;
            })
        }
    }
}
</script>

<style scoped>
    .lowercase {
        text-transform: lowercase;
    }
</style>