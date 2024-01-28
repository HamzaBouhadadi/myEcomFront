import React from 'react'
import MainLayout from '../layout/main';
import CategoriesPage from '../components/categories/AllCategories';

function ProductsView(){
    return (
        <>
        <MainLayout>
            <CategoriesPage />
        </MainLayout>
        </>
    )
}

export default ProductsView;