import React, {useState, useEffect} from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './smallComponents/ProductCard'; 
//redux 
import { fetchProducts } from '../features/catalog/catalogSlice';
import { store } from '../app/store';

const ProductsList = () => {
// const {products, loading} = useSelector((state) => state.catalog)
const products =useSelector((state) => state.catalog.products); 
const loading = useSelector((state) => state.catalog.loading)
const dispatch = useDispatch(); 



useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

//     const [data, setData] = useState([]); 
//     const [loading, setLoading] = useState(true); 

// const fetchData = async () => {
//     try {
//         const response = await fetch('http://localhost:3002/api/products'); 
//         const items = await response.json();
          
//        setData(items);
//        setLoading(false); 
//     return items; 
//     }
//     catch (error){
//         console.log(error)
//     }
    
// }

//     useEffect( () => {
//         fetchData(); 
       
//     }, [])
if (loading==='fulfilled'){  
    
    return (
        <>
        <div className='list'>
        {products.map((item) =>
        ( <ProductCard 
        title={item.title} 
        key={item.id} 
        id={item.id}
        price_big={item.price_big}
        picture={item.picture}
        contents={item.contents}
        
        
        />) )}
        
        </div>
        </>

    )
} else {
    return (
        <>
        <div className='list'>
        loading...
        </div>
        </>

    )
}
 
};


export default ProductsList; 