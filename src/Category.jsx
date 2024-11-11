import './app.css'; // Import the external CSS file
import Product from './Product';

export default function Category({ products, tags }) {
  console.log('!!@@@@@!!!!!!');
  console.log(tags);
  //const [plan1] = plans;
  //console.log(plan1);

  // tags.array.forEach(tag => {
  //   tag.
  // });

  var bodyParts = [];

  for (const idx in tags) {
    if (tags[idx].tagField == 'bodyPart') {
      bodyParts.push(tags[idx].tagValue);
    }
  }

  console.log(bodyParts);

  if (products && bodyParts) {
    return (
      <div className="storeContainer">
        {bodyParts.map(bodyPart => (
          <div key={bodyPart} className="categoryContainer">
            <h5 className="categoryTitle">{bodyPart}</h5>
            <div className="cardContainer">
              {products.map(product => (
                <div key={product.productId}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
