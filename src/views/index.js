import React from 'react';
import MainCarousel from '../components/Carousel/main';
import HomeCategoriesLayout from '../layout/home/categories';
import CategoryCard from '../components/categories/categoryCard';
import HomeProductsLayout from '../layout/home/products';
import ProductCard from '../components/products/productCard';
import MainLayout from '../layout/main';
import Footer from '../components/footer/Footer';

function IndexView() {
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1.' },
    { id: 1, name: 'Product 1', description: 'Description of Product 1.' },
    { id: 1, name: 'Product 1', description: 'Description of Product 1.' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2.' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2.' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2.' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3.' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3.' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3.' },
    // Add more products as needed
  ];

  return (
    <>
      <MainLayout>
        <MainCarousel />
        <HomeCategoriesLayout>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </HomeCategoriesLayout>
        <HomeProductsLayout>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </HomeProductsLayout>
        <Footer />
      </MainLayout>
    </>
  );
}

export default IndexView;
