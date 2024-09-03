import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editProduct } from '../redux/actions/ActionProduct';

function Editproduct() {

    const product=useSelector(state=>state.ProductReducer.oneProduct)

    const disptach = useDispatch();
    const navigate=useNavigate()
    const [name, setName] = useState(product.name)
   const [description, setDescription] = useState(product.description)
   const [price, setprice] = useState(product.price)
    const [img, setimg] = useState();
    
    
    const handlesubmit = (e) => {
   
      e.preventDefault()
      const data= new FormData()
      data.append("name",name)
      data.append("description",description)
      data.append('price',price)
      data.append('file',img)

      disptach(editProduct(product._id,data,navigate))
    };
  
    return (
      <form onSubmit={handlesubmit}>
        <label>name</label>
        <input onChange={(e)=>setName(e.target.value)} placeholder={product.name}  />
        <label>description</label>
        <input onChange={(e)=>setDescription(e.target.value)} placeholder={product.description}   />
        <label>price</label>
        <input type="number" onChange={(e)=>setprice(e.target.value)}  placeholder={product.price}/>
        <label>photo</label>
        <input type="file" onChange={(e) => setimg(e.target.files[0])} />
      
        <button type="submit"   >save</button>
      </form>
    );
  }

export default Editproduct