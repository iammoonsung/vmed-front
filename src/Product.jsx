import './app.css'; // Import the external CSS file

export default function Product({ product }) {
  if (product) {
    return (
      <div key={product.productId} className="card">
        <img src={product.picture} alt={product.name} className="planImage" />
        <h3 className="planTitle">{product.name}</h3>
        <p className="planPrice">
          <span className="originalPrice">{product.price}원</span>
          <span className="discountedPrice">{product.discountedPrice}원</span>
        </p>
        <p className="discountRate">{product.discountRate} 할인</p>
      </div>
    );
  }
}

// export default function Product({ plans }) {
//   return (
//     <div key={plans.productId} className="card">
//       <div className="planLabel" style={{ backgroundColor: labelColor }}>
//         {duration}
//       </div>
//       <img src={picture} alt={name} className="planImage" />
//       <h3 className="planTitle">{name}</h3>
//       <p className="planPrice">
//         <span className="originalPrice">{originalPrice}원</span>
//         <span className="discountedPrice">{discountedPrice}원</span>
//       </p>
//       <p className="discountRate">{discountRate} 할인</p>
//     </div>
//   );
