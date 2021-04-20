import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {addProduct} from '../dataStore/actions/productsActions'


const ControlAddProduct = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state=>state.userInfo);
    const listProducts = useSelector(state=>state.products.products);

    const [newProduct,setNewProduct] = useState({
        name:'',
        imgpath:'',
        price:'',
        description:'',
        brand:'',
        quantity:'',
        countinstock:'',
        rating:'',
        numreviews:'',
        category2:'',
        category:[]

    })

    const token = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')).token:'';

    const headers= {
       "Content-Type":"application/json",
       authorization:`Bearer ${token}`
     }

    const onSubmit = (e)=>{
        e.preventDefault();
        newProduct.category = newProduct.category2.split(' ');
        dispatch(addProduct(newProduct,headers));
        history.push('/controlproducts')
        }

    useEffect(() => {
        if(!user.userInfo.isAdmin){
          history.push('/account')
        }
      }, [])

    return (
        <div>
            <h6 style={{textAlign:'center',marginTop:'10px'}}>Control Add Product</h6>
            <form className='form' onSubmit={onSubmit}>

                <label htmlFor='name'>Product Name</label>
                <input onChange={(e)=>setNewProduct({...newProduct,[e.target.name]:e.target.value})} name='name' type='text' placeholder='Enter the product name' required/>

                <label htmlFor='description'>Product Description</label>
                <input onChange={(e)=>setNewProduct({...newProduct,[e.target.name]:e.target.value})} name='description' type='text' placeholder='Enter the product description' required/>

                <label htmlFor='imgpath'>Category</label>
                <input onChange={(e)=>setNewProduct({...newProduct,[e.target.name]:e.target.value})} name='category2' type='text' placeholder='Enter the product categories' required/>

                <label htmlFor='imgpath'>Image Path</label>
                <input onChange={(e)=>setNewProduct({...newProduct,[e.target.name]:e.target.value})} name='imgpath' type='text' placeholder='Enter the product image path' required/>

                <label htmlFor='brand'>Product Brand</label>
                <input onChange={(e)=>setNewProduct({...newProduct,[e.target.name]:e.target.value})} name='brand' type='text' placeholder='Enter the product brand' required/>

                <label htmlFor='price'>Product price</label>
                <input onChange={(e)=>setNewProduct({...newProduct,[e.target.name]:e.target.value})} name='price' type='text' placeholder='Enter the product price' required/>

                <label htmlFor='quantity'>Product Quantity</label>
                <input onChange={(e)=>setNewProduct({...newProduct,[e.target.name]:e.target.value})} name='quantity' type='text' placeholder='Enter the product quantity' required/>

                <label htmlFor='countinstock'>Product Count In Stock</label>
                <input onChange={(e)=>setNewProduct({...newProduct,[e.target.name]:e.target.value})} name='countinstock' type='text' placeholder='Enter the product Count In Stock' required/>

                <label htmlFor='rating'>Product rating</label>
                <input onChange={(e)=>setNewProduct({...newProduct,[e.target.name]:e.target.value})} name='rating' type='text' placeholder='Enter the product name' required/>

                <label htmlFor='numreviews'>Product NumReviews</label>
                <input onChange={(e)=>setNewProduct({...newProduct,[e.target.name]:e.target.value})} name='numreviews' type='text' placeholder='Enter the product NumReviews' required/>

              <button type='submit' style={{marginBottom:'35px'}}>Save</button>
            </form>
        </div>
    )
}

export default ControlAddProduct
