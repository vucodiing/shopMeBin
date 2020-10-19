import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Blog from "./pages/Blog/Blog";
import Boy from "./pages/Boy/Boy";
import Girl from "./pages/Girl/Girl";
import Contact from "./pages/Contact/Contact";
import Sale from "./pages/Sale/Sale";
import Home from "./pages/Home/Home";
import Blog1 from "./pages/Blog/Blog1";
import DetailBoys from "./pages/Detail/DetailBoys";
import DetailGirls from "./pages/Detail/DetailGirl";
import Cart from "./pages/Cart/Cart";
import Header from "./Header/Header";
import DetailSale from "./pages/Detail/DetailSale";
import Modal from "./Modal/Modal";
import ModalOrder from "./Modal/ModalOrder";
import Order from "./pages/Order/Order";

function App() {
  const [isShowModal, setShowModal] = useState(false);
  const [isModalOrder, setModalOrder] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState({});
  const [id, setId] = useState([]);

  function confirmRemove(product, id) {
    setShowModal(true);
    setDeleteProduct(product);
    setId(id);
  }

  const [cart, setCart] = useState([]);

  let subTotal = 0;
  let quantity = 0;
  useEffect(() => {
    async function getCart() {
      const response = await fetch("https://data-shopmebin.herokuapp.com/cart");
      const itemCart = await response.json();

      setCart(itemCart);
    }

    getCart();
  }, []);

  for (let product of cart) {
    subTotal += Number(product.priceNew) * product.quantity * 1000;
    quantity += product.quantity;
  }

  function addCart(item) {
    fetch("https://data-shopmebin.herokuapp.com/cart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: item.name,
        image: item.image,
        imageZoom: item.imageZoom,
        content: item.content,
        priceNew: item.priceNew,
        priceOld: item.priceOld,
        freeShip: item.freeShip,
        slug: item.slug,
        percent: item.percent,
        topSale: item.topSale,
        tuyp: item.tuyp,
        age: item.age,
        quantity: item.quantity,
        select:9999
      }),
    });

    let _cart = [...cart];
 
    _cart.push(item);


    setCart(_cart);
  }

  async function removeCart() {
    const url = "https://data-shopmebin.herokuapp.com/cart/" + id;
    fetch(url, { method: "DELETE" });
    const newProducts = cart.filter(
      (product) => product.id !== deleteProduct.id
    );
    setCart(newProducts);

    setShowModal(false);
  }
 
 
  function handleChangeQuantity(id, event) {
    const newProduct = [...cart];
    if (parseInt(event.target.value) >= 1) {
      for (let product of newProduct) {
        if (product.id === id) {
          product.quantity = parseInt(event.target.value);
          fetch(`https://data-shopmebin.herokuapp.com/cart/${id}`, {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              quantity: product.quantity,
            }),
          });
        }
      }
      setCart(newProduct);
    }
  }
  function upItem(id) {
    const newProduct = [...cart];
    for (let product of newProduct) {
      if (product.id === id) {
        product.quantity += 1;
        fetch(`https://data-shopmebin.herokuapp.com/cart/${id}`, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quantity: product.quantity,
          }),
        });
      }
    }
    setCart(newProduct);
  }
  function downItem(id) {
    const newProduct = [...cart];

    for (let product of newProduct) {
      if (product.id === id && product.quantity > 1) {
        product.quantity -= 1;
        fetch(`https://data-shopmebin.herokuapp.com/cart/${id}`, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quantity: product.quantity,
          }),
        });
      }
    }
    setCart(newProduct);
  }
  function order() {
    setModalOrder(true);
  }
  async function closeOrder() {
    for (let item of cart){
      fetch(`https://data-shopmebin.herokuapp.com/cart/${item.id}`, { method: "DELETE" });
    }
    setCart([]);
    setModalOrder(false);
  }
  return (
    <div>
      <Router>
        <div>
          <Header quantity={quantity} />
          <Switch>
            <Route path="/order">
              <Order cart={cart} subTotal={subTotal} order={order} />
            </Route>
            <Route path="/cart">
              <Cart
                quantity={quantity}
                cart={cart}
                confirmRemove={confirmRemove}
                handleChangeQuantity={handleChangeQuantity}
                subTotal={subTotal}
                upItem={upItem}
                downItem={downItem}
              />
            </Route>
            <Route path="/sale/:slug">
              <DetailSale addCart={addCart} />
            </Route>
            <Route path="/boys/:slug">
              <DetailBoys addCart={addCart} />
            </Route>
            <Route path="/girls/:slug">
              <DetailGirls addCart={addCart} />
            </Route>
            <Route path="/boys">
              <Boy cart={cart}/>
            </Route>
            <Route path="/girls">
              <Girl />
            </Route>
            <Route path="/sale">
              <Sale />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/blog1/Nhung-luu-y-quan-trong-khi-mua-sam-do-so-sinh-cho-be">
              <Blog1 />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <ModalOrder
          isModalOrder={isModalOrder}
          cart={cart}
          subTotal={subTotal}
          closeOrder={closeOrder}
        />
      </Router>
      <Modal
        isVisible={isShowModal}
        handleCancel={() => setShowModal(false)}
        nameItem={deleteProduct.name}
        removeCart={removeCart}
      />
    </div>
  );
}

export default App;
