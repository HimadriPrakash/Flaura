var saleitems = JSON.parse(localStorage.getItem("salesData"))

var cartArr = JSON.parse(localStorage.getItem("CartItems")) || []

displayData(saleitems)


// Sorting By Price here

function sortPrice() {
    var selected = document.querySelector("#sortprice").value;

    //Decending order

    if (selected == "high") {
        saleitems.sort(function(a, b) {
            return b.price - a.price;
        })
    }

    //Ascending order
    if (selected == "low") {
        saleitems.sort(function(a, b) {
            return a.price - b.price;
        })
    }

    displayData(saleitems)

    // console.log(saleitems)
}


// Maping salesitems here 

function displayData(saleitems) {
    document.querySelector("#container").textContent = ""

    saleitems.map(function(data) {
        var div = document.createElement("div")

        var img = document.createElement("img")
        img.setAttribute("src", data.image)


        var p = document.createElement("p");
        p.textContent = data.name
        p.setAttribute("id", "name")


        var div2 = document.createElement("div")


        var p1 = document.createElement("p")
        p1.textContent = "RS" + " " + data.strikedpriced
        p1.setAttribute("id", "strikedpriced")

        var p2 = document.createElement("p")
        p2.textContent = "RS" + " " + data.price

        div2.append(p1, p2)

        var button = document.createElement("button")
        button.textContent = "Add to Cart"
        button.addEventListener("click", function() { //adding eventlisterner to "Add to cart button"
            addtoCart(data)
        })

        div.append(img, p, div2, button)
        document.querySelector("#container").append(div)
    })

    // Adding to cart here

    function addtoCart(data) {
        cartArr.push(data)
        alert(data.name + "  " + "Added")
        localStorage.setItem("CartItems", JSON.stringify(cartArr))

    }


}