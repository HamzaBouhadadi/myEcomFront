import React from 'react'
import MainLayout from '../layout/main';
import ProductsPage from '../components/products/AllProducts';

function ProductsView(){
    return (
        <>
        <MainLayout>
            <ProductsPage />
        </MainLayout>
        </>
    )
}

export default ProductsView;