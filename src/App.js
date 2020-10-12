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

function App() {
  const [isShowModal, setShowModal] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState({});
  const [id, setId] = useState([]);
  function confirmRemove(product, id) {
    setShowModal(true);
    setDeleteProduct(product);
    setId(id);
  }

  const [cart, setCart] = useState([]);
  const [count, setCount] = useState([]);

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
      }),
    });
    async function getCount() {
      const response = await fetch("https://data-shopmebin.herokuapp.com/cart");
      const cart = await response.json();
      setCart(cart);
      setCount(cart.length);
    }
    getCount();
    console.log(count);
  }

  async function removeCart() {
    const url = "https://data-shopmebin.herokuapp.com/cart/" + id;
    fetch(url, { method: "DELETE" });
    // const removeCart = await response.json();

    // setCart(removeCart);
    // async function getCount() {
    //   const response = await fetch("https://data-shopmebin.herokuapp.com/cart");
    //   const cart = await response.json();
    //   setCart(cart);
    // }
    // getCount();
    const newProducts = cart.filter(
      (product) => product.id !== deleteProduct.id
    );
    setCart(newProducts);
    setShowModal(false); // hide modal
  }

  return (
    <div>
      <Router>
        <div>
          <Header count={count} />
          <Switch>
            <Route path="/cart">
              <Cart cart={cart} confirmRemove={confirmRemove} />
            </Route>
            <Route path="/sale/:slug">
              <DetailSale />
            </Route>
            <Route path="/boys/:slug">
              <DetailBoys addCart={addCart} />
            </Route>
            <Route path="/girls/:slug">
              <DetailGirls />
            </Route>
            <Route path="/boys">
              <Boy />
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
