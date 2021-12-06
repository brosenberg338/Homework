(async function () {
    'use strict';

    let orderInfo = document.getElementById("orderInfo");
    let response = await fetch('orders.JSON');
    let output = await response.json();

    class Item {
        constructor(item, total, quantity) {
            this.item = item;

            // SL - not a problem but we dont need total in this class
            this.total = total;
            this.quantity = quantity;

            // SL - this is a problem, your making this a local variable - using let not this - its useless...
            let price = (total / quantity);


            // SL - not a problem but whats with all the random extra whitespace?
        }


    }



    class Order {
        constructor(customer, address, items) {
            this.customer = customer;
            this.address = address;

            // SL - so your converting the siple item objects into your class Item objects in place, ok - but then what do you do with items? you dont save them in order
            for (let x = 0; x < items.length; x++) {

                items[x] = new Item(items[x].item, items[x].total, items[x.quantity]);

                // SL - why would order ctor being adding things to html?
                orderInfo.append(`${"Name:"} ${customer} ${"Address:"} ${address} ${"Items:"} ${items[x].total}`);
            }
        }

        // SL - ?
        orderPrint() {

        }

        // SL - wheres the getter for total?
    }

    function createOrder(orders) {

        // SL - your creating each order but not saving them anywhere. I would have expected creating an array then looping through it to display them
        for (let i = 0; i < orders.length; i++) {
            let order = new Order(orders[i].customer, orders[i].address, orders[i].items);

        }
    }
    createOrder(output);

})();


// SL - As per our email discussion, aagree that looks like you need more practice.