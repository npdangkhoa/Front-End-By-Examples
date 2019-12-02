import React from "react";
function ProductComponent(pros) {
  return (
    <div>
      <h3>Name: {pros.name}</h3>
      <h3>Price: {pros.price}</h3>
      <h3>Description: {pros.description}</h3>
    </div>
  );
}

export default ProductComponent;
