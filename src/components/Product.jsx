import "./product.css";

const Product = ({img,title}) => {
  return (
    <div className="p">
      <a title={title} target="_blank" rel="noreferrer">
        <img src={img}  alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
