var fertilizeritem = JSON.parse(localStorage.getItem("fertilizerData"));

var cartArr = JSON.parse(localStorage.getItem("CartItems")) || []

displayData(fertilizeritem)


// Sorting By Price here

function sortPrice() {
    var selected = document.querySelector("#sortprice").value;

    //Decending order
    if (selected == "high") {
        fertilizeritem.sort(function(a, b) {
            return b.price - a.price;
        })
    }

    //Ascending order
    if (selected == "low") {
        fertilizeritem.sort(function(a, b) {
            return a.price - b.price;
        })
    }
    displayData(fertilizeritem)
    console.log(fertilizeritem)
}




// Mapping fertilizeritem here

function displayData(fertilizeritem) {
    document.querySelector("#container").textContent = ""



    fertilizeritem.map(function(data) {

        var div = document.createElement("div");

        var img = document.createElement("img");
        img.setAttribute("src", data.image);

        var p1 = document.createElement("p")
        p1.textContent = data.name
        p1.setAttribute("id", "name")

        var p2 = document.createElement("p")
        p2.textContent = "RS" + " " + data.price + ".00";

        var button = document.createElement("button")
        button.textContent = "Add to Cart"
        button.addEventListener("click", function() { //addding event listener to cart button
            addtoCart(data)
        })


        div.append(img, p1, p2, button);
        document.querySelector("#container").append(div)
    });

    //Adding to cart here

    function addtoCart(data) {
        cartArr.push(data)
        alert(data.name + "  " + "Added")
        localStorage.setItem("CartItems", JSON.stringify(cartArr))

    }

}