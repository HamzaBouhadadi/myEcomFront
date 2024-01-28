import React from 'react'
import MainLayout from '../layout/main';
import Cart from '../components/Cart/Cart';

function CartView(){
    return (
        <>
        <MainLayout>
            <Cart />
        </MainLayout>
        </>
    )
}

export default CartView;