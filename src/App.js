import { useState, useEffect } from "react";
export default function App() {
  const [list, setlist] = useState([]);
  const [cart, setcart] = useState([]);
  async function getdata() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    setlist(data);
  }
  useEffect(() => {
    getdata();
  }, []);

  const addtocart = (e) => {
    list.map((elem) => {
      if (elem.title === e) return setcart([...cart, elem]);
    });
  };
  const remove = (e) => {
    const up = cart.filter((elem) => {
      return elem.title !== e;
    });
    setcart(up);
  };
  return (
    <>
      <div>
        <h1>Hello</h1>
        {list.map((elem) => {
          return (
            <p>
              {elem.title}
              <button onClick={() => addtocart(elem.title)}>add</button>
            </p>
          );
        })}
      </div>
      <div>
        <h1>cart</h1>
        {cart.map((elem) => {
          return (
            <p>
              {elem.title}
              <button onClick={() => remove(elem.title)}>remove</button>
            </p>
          );
        })}
      </div>
    </>
  );
}
