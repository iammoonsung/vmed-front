import { useEffect, useState } from 'react';
import axios from 'axios';
import './app.css'; // Import the external CSS file
import Header from './Header';
import Search from './Search';
import Tag from './Tag';
import Store from './Store';

function App() {
  const [products, setProducts] = useState();
  const [tags, setTags] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:8080/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8080/tags')
      .then(response => setTags(response.data))
      .catch(error => console.log(error));
  }, []);

  console.log(tags);

  return (
    <div className="container">
      {/* Header Section */}
      <Header />

      {/* Search Section */}
      <Search />

      {/* Tags Section */}
      <Tag />

      {/* Store Section */}
      <Store products={products} tags={tags} />
    </div>
  );
}

const plans = [
  {
    duration: '2주',
    title: '##슈가케어 2주 플랜 (Trial)',
    image: 'https://via.placeholder.com/150',
    originalPrice: '159,500',
    discountedPrice: '129,195',
    discountRate: '19%',
    labelColor: '#cfc6f0',
  },
  {
    duration: '4주',
    title: '슈가케어 4주 플랜 (Basic)',
    image: 'https://via.placeholder.com/150',
    originalPrice: '319,000',
    discountedPrice: '199,375',
    discountRate: '38%',
    labelColor: '#b5e4f9',
  },
  {
    duration: '8주',
    title: '슈가케어 8주 플랜 (Pro)',
    image: 'https://via.placeholder.com/150',
    originalPrice: '638,000',
    discountedPrice: '398,750',
    discountRate: '38%',
    labelColor: '#d9f5e5',
  },
  {
    duration: '12주',
    title: '슈가케어 12주 플랜 (Premium)',
    image: 'https://via.placeholder.com/150',
    originalPrice: '957,000',
    discountedPrice: '574,200',
    discountRate: '40%',
    labelColor: '#b8e5e6',
  },
  {
    duration: '24주',
    title: '슈가케어 24주 플랜 (Total care)',
    image: 'https://via.placeholder.com/150',
    originalPrice: '1,914,000',
    discountedPrice: '1,071,840',
    discountRate: '44%',
    labelColor: '#f8dada',
  },
];

export default App;
