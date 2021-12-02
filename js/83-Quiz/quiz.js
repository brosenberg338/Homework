(async function () {
    'use strict';

    let orderInfo = document.getElementById("orderInfo");
    let response = await fetch('orders.JSON');
    let output = await response.json();

    class Item {
        constructor(item, total, quantity) {
            this.item = item;
            this.total = total;
            this.quantity = quantity;
            let price = (total / quantity);



        }


    }



    class Order {
        constructor(customer, address, items) {
            this.customer = customer;
            this.address = address;
            for (let x = 0; x < items.length; x++) {

                items[x] = new Item(items[x].item, items[x].total, items[x.quantity]);

                orderInfo.append(`${"Name:"} ${customer} ${"Address:"} ${address} ${"Items:"} ${items[x].total}`);
            }
        }
        orderPrint() {

        }
    }

    function createOrder(orders) {

        for (let i = 0; i < orders.length; i++) {
            let order = new Order(orders[i].customer, orders[i].address, orders[i].items);

        }
    }
    createOrder(output);

})();
