const foodOrder = document.getElementById('foodOrder');
const msg = foodOrder.querySelector('.msg');
const food = foodOrder.querySelectorAll('input[name="food"]');


food.forEach((item) => {

    item.onchange = (e) => {

        const foods = foodOrder.querySelectorAll('input[name="food"]:checked');
        let selectedFood = [];
        let total = 0;

        foods.forEach((selectedItem) => {

            selectedFood.push(selectedItem.value);
            total += Number(selectedItem.getAttribute('price'));

        });

        msg.innerHTML = `Sir, You Order ${ selectedFood.join(', ')} and it's Total Bill = ${ total } Tk. Please wait for this. Thanks for with us.`

    };

});


