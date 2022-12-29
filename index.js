const addItemToCart = (e) => {
    const parentDiv = e.target.parentElement;
    const childrenElements = [...parentDiv.children];
    const image = childrenElements[0].src;
    const name = childrenElements[1].innerHTML;
    const price = Number(childrenElements[2].innerHTML.split(" ")[1]);
    console.log({ image });
    insertCartItem({ image, price, name, quantity: 0 });
    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
  };
  
  const getCartItems = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) return [];
    return cart;
  };
  
  const insertCartItem = ({ image, name, quantity, price }) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    cart.push({ image, name, quantity, price, total: quantity * price });
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cartsearch").value = cart.length;
  };
  
  const deleteCartItem = (name) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.filter((item) => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  let addToCartButtons = document.getElementsByClassName("add-to-cart");
  addToCartButtons = [...addToCartButtons];
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addItemToCart);
  });