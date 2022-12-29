// Only images

var flowerImage = JSON.parse(localStorage.getItem("flowersImage"))
flowerImage.map(function(elem) {
    var div1 = document.createElement("div"); //div1 - append(image,name)
    div1.setAttribute("class", "div1"); //class - div1

    div1.onmouseover = addevent;

    function addevent() {
        name.style.color = "white";
        div1.style.backgroundColor = "#2eb990";
        div1.style.border = "3px solid #2eb990";
    }
    div1.onmouseout = endevent;

    function endevent() {
        name.style.color = "";
        div1.style.border = "";
        div1.style.backgroundColor = "";
    }
    //img creation
    var onlyimage = document.createElement("img");
    onlyimage.setAttribute("src", elem.image); // image display

    var name = document.createElement("p");
    name.textContent = elem.name; // name display

    div1.append(onlyimage, name); //appending to div1

    productcontainer.append(div1); //appending div1 to container
});




//Buy products image & data started


var saleitems = JSON.parse(localStorage.getItem("gridImage"))

var cartArr = JSON.parse(localStorage.getItem("CartItems")) || []

displayData(saleitems)


// Sorting By Price here

function sortPrice() {
    var selected = document.querySelector("#sortbyprice").value;

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



function displayData(saleitems) {
    document.querySelector("#salescontainer").textContent = ""

    saleitems.map(function(data) {
        var div = document.createElement("div")

        var img = document.createElement("img")
        img.setAttribute("src", data.image)


        var p = document.createElement("p");
        p.textContent = data.name
        p.setAttribute("id", "name")


        var p2 = document.createElement("p")
        p2.textContent = "RS" + " " + data.price


        var button = document.createElement("button")
        button.textContent = "Add to Cart"
        button.addEventListener("click", function() { //adding eventlisterner to "Add to cart button"
            addtoCart(data)
        })

        div.append(img, p, p2, button)
        document.querySelector("#salescontainer").append(div)
    })

    // Adding to cart here

    function addtoCart(data) {
        cartArr.push(data)
        alert(data.name + "  " + "Added")
        localStorage.setItem("CartItems", JSON.stringify(cartArr))

    }


}