import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { postEmployee } from '../../api/httprequests';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const[newEmployee,setNewEmployee] = useState({});
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    newEmployee.id = uuidv4();
    await postEmployee(newEmployee);
    navigate('/admin/products');
  }
  function handleChange(e){
    setNewEmployee({...newProduct,[e.target.name]:e.target.value});
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input name='name' onChange={(e)=>handleChange(e)} placeholder='product name' type='text' required/>
      <input name='price' onChange={(e)=>handleChange(e)} placeholder='product price' type='number' min='0' required/>
      <button type='submit'>Add New Product</button>
    </form>
  )
}

export default AddProduct