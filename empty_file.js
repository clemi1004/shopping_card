var products = [{
        id: 1,
        car_type: "BMW",
        price: 100,
        qtty: 0
    }, {
        id: 2,
        car_type: "MERCEDES",
        price: 200,
        qtty: 0
    }];
for (var i = 0; i < products.length; i++) {
    document.getElementById("items").innerHTML += "<p>" + products[i].car_type + " " + products[i].price + " " + products[i].qtty + "</p>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"addToCart\"> <input type=\"submit\" class=\"btn_2 btn-secondary\" value=\"remove from Cart\">\n\t<hr>";
}
var cart = [];
function addToCart(obj) {
    if (obj.qtty == 0) {
        cart.push(obj);
        obj.qtty++;
        showcart();
    }
    else {
        obj.qtty++;
        showcart();
    }
}
function removeFromCart(obj) {
    if (obj.qtty == 1) {
        obj.qtty = obj.qtty - 1;
        cart.pop(obj);
        console.log("removed");
        console.table(cart);
        // console.log("removed");
    }
    else if (obj.qtty > 1) {
        obj.qtty = obj.qtty - 1;
        console.log("-1 kleiner");
        console.table(cart);
        // console.log("removed2");
        showcart();
    }
    else if (obj.qtty == 0) {
        console.log("stopp");
    }
}
var btn = document.getElementsByClassName("btn");
var btn_2 = document.getElementsByClassName("btn_2");
var _loop_1 = function (i) {
    btn[i].addEventListener("click", function () {
        addToCart(products[i]);
    });
};
for (var i = 0; i < btn.length; i++) {
    _loop_1(i);
}
var _loop_2 = function (i) {
    btn_2[i].addEventListener("click", function () {
        removeFromCart(products[i]);
        // if (cart[i].qtty == 0) {
        // 	document.getElementById(cart[i].id).innerHTML = "";
    });
};
for (var i = 0; i < btn_2.length; i++) {
    _loop_2(i);
}
;
function showcart() {
    document.getElementById("shopping_cart").innerHTML = "";
    for (var i = 0; i < cart.length; i++) {
        document.getElementById("shopping_cart").innerHTML += "<p id= " + cart[i].id + " > " + cart[i].car_type + " | " + cart[i].price + " | " + cart[i].qtty;
    }
}
