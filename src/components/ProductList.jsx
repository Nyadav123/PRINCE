import "./productList.css";
import Product from "./Product";
import { products } from "../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">OUR PRODUCTS</h1>
     
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img}  title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
