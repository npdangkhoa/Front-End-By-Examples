import React from "react";
import "./App.css";
import ProductComponent from "./Component/ProductComponent";
import ProductData from "./Component/vsschoolProduct";
function App() {
  const ProductRender = ProductData.map(item => {
    return (
      <ProductComponent
        key={item.id}
        name={item.name}
        price={item.price}
        description={item.description}
      />
    );
  });

  return <div>{ProductRender}</div>;
}

export default App;
