import './app.css'; // Import the external CSS file
import Category from './Category';

function Store({ products, tags }) {
  return (
    <section className="storeSection">
      <h2 className="sectionTitle">V Project Store</h2>
      <Category products={products} tags={tags} />
    </section>
  );
}

export default Store;
