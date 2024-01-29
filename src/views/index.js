import React, {useState , useEffect} from 'react';
import MainCarousel from '../components/Carousel/main';
import HomeCategoriesLayout from '../layout/home/categories';
import CategoryCard from '../components/categories/categoryCard';
import HomeProductsLayout from '../layout/home/products';
import ProductCard from '../components/products/productCard';
import MainLayout from '../layout/main';
import Footer from '../components/footer/Footer';
import axios  from 'axios';

function IndexView() {

  const [data, SetData]  = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then((res) => {
      if(res){
        console.log(res.data.products)
        SetData(res.data.products);
      }else{
        console.log('can\'t retreive data')
      }
    })
    .catch(() => {
      console.log("Error")
    })
  }, [])

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
          {data.map(data => (
            <ProductCard key={data.id} title={data.title} description={data.description} images ={data.images}/>
          ))}
        </HomeProductsLayout>
        <Footer />
      </MainLayout>
    </>
  );
}

export default IndexView;

