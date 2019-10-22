var products = [{
	id: 1
	car_type : "BMW",
	price : 100,
	qtty : 0
	},{
	id : 2
	car_type : "MERCEDES",
	price : 200,
	qtty : 0
}];

for (let i = 0; i < products.length; i++) {
	document.getElementById("items").innerHTML += `<p>${products[i].car_type} ${products[i].price} ${products[i].qtty}</p>
	<input type="submit" class="btn btn-primary" value="addToCart"> <input type="submit" class="btn_2 btn-secondary" value="remove from Cart">
	<hr>`;
}

var cart = []

function addToCart(obj) {
	if(obj.qtty == 0) {
		cart.push(obj);
		obj.qtty++;
		showcart();
	}else{
		obj.qtty++;
		showcart();
	}
}

function removeFromCart(obj) {
	if(obj.qtty == 1) {
		obj.qtty = obj.qtty - 1
		cart.pop(obj);
		console.log("removed")
		console.table(cart);
		// console.log("removed");
	}else if(obj.qtty > 1) {
		obj.qtty = obj.qtty - 1
		console.log("-1 kleiner")
		console.table(cart);
		// console.log("removed2");
		showcart();
		}
	else if(obj.qtty == 0) {
		console.log("stopp")
		}
	}
}

var btn = document.getElementsByClassName("btn")
var btn_2 = document.getElementsByClassName("btn_2")


for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener("click", function() {addToCart(products[i]);
	});
}

for (let i = 0; i < btn_2.length; i++) {
	btn_2[i].addEventListener("click", function() {removeFromCart(products[i]);
	// if (cart[i].qtty == 0) {
	// 	document.getElementById(cart[i].id).innerHTML = "";
	}
	});
}

function showcart() {
	document.getElementById("shopping_cart").innerHTML = "";
	for (let i = 0; i < cart.length; i++) {
		document.getElementById("shopping_cart").innerHTML += `<p id= ${cart[i].id} > ${cart[i].car_type} | ${cart[i].price} | ${cart[i].qtty}`
	}
}