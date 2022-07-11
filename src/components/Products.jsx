import React, { useContext } from 'react'
import ReduxContext from '../contexts/ReduxContext'
import Product from './Product'
export default function Products() {
    const { state } = useContext(ReduxContext)

    const _products = state?.products

    return (
        <div className='flex flex-wrap gap-10 mt-5 h-[75vh] overflow-auto'>
            {_products.map((x, i) => <Product key={i} {...x} />)}
        </div>
    )
}
