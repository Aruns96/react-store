import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'

const ProductPage = () => {
    const {id} = useParams()
  
     const history = useHistory()
     const [produt,setProduct] = useState(null)
     useEffect(()=>{
     if(id){
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(response=>{
            
            setProduct(response.data)
        }
        )
        .catch(e=>console.log(e))
     }
     },[id])
     if(!produt){
        return <h1>loading...</h1>
     }
     //console.log(produt)
  return (
    <div className='p-5 w-[60%]'>
      <button onClick={()=>history.goBack()}>back</button>
      <img src={produt.images[0]} alt={produt.title} className='w-[50%] h-auto mb-5'/>
      <h1 className='text-2xl mb-4 font-bold'>{produt.title}</h1>
      <p className='mb-4 text-gray-800 w-[70%]'>{produt.description}</p>
      <div className='flex'>
          <p>Price: ${produt.price}</p>
          <p className='ml-10'>Rating: {produt.rating}</p>
      </div>
    </div>
  )
}

export default ProductPage