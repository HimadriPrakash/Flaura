var cartitems = JSON.parse(localStorage.getItem("cart"));
console.log("cartitems : ", cartitems);

displayCart(cartitems);

function displayCart(cartitems) {
  document.querySelector("tbody").textContent = "";
  cartitems.map(function (data, index) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var img = document.createElement("img");
    console.log(data.image);
    img.setAttribute("src", data.image);
    td1.append(img);

    var td2 = document.createElement("td");
    td2.textContent = data.name;

    var td3 = document.createElement("td");
    td3.textContent = "1";

    var td4 = document.createElement("td");
    td4.textContent = "RS" + " " + data.price + ".00";

    var td5 = document.createElement("td");
    td5.textContent = "RS" + " " + data.price + ".00";

    var td6 = document.createElement("td");
    td6.innerHTML = "Delete";
    td6.addEventListener("click", function () {
      deleteItems(index);
    });

    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
  });
  document.getElementById("cartsearch").value = cartitems.length;
}

// Delete Items here

function deleteItems(index) {
  cartitems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartitems));
  displayCart(cartitems);
}

// show total Price
var total = cartitems.reduce(function (acc, cv) {
  return acc + Number(cv.price);
}, 0);

document.querySelector("#subtotal").textContent = `Sub-Total: RS ${total}.00`;
document.querySelector("#total").textContent = `Total: RS ${total}.00`;

// Apply Coupon here

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var coupon_no = document.querySelector("#Coupon").value;
  if (coupon_no == "masai30") {
    total = Math.floor((30 / 100) * total);
    document.querySelector(
      "#subtotal"
    ).textContent = `Sub-Total: RS ${total}.00`;
    document.querySelector("#total").textContent = `Total: RS ${total}.00`;
    alert("Coupon Applied Successfully");
  } else {
    alert("Please enter correct coupon no.");
  }
});