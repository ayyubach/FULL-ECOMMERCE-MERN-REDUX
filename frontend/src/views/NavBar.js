import React from 'react'
import {Link} from 'react-router-dom'
import {productsListCategory, productsList} from '../dataStore/actions/productsActions'
import {useDispatch,useSelector} from 'react-redux';
import { logOut } from '../dataStore/actions/userActions';

const NavBar = ({clickBar , toggleClickBar,clickWomen,toggleClickWomen,clickMen,toggleClickMen,showMenu,toggleShowMenu }) => {

    const dispatch = useDispatch();
    const cart =  useSelector(state => state.cart.cartItems);
    const user = useSelector(state=>state.userInfo.userInfo)

    return (
        <div className='navbar'>
         <div className='logo'><Link to='/' onClick={()=>dispatch(productsList())} style={{ color:'#ffffff'}}>WebShop</Link> </div>
         <div className='nav-buttons'>
         <ul className='nav-button'>
         <li><Link to='/' onClick={()=>dispatch(productsList())} style={{ color:'#ffffff'}}>Home</Link></li>    
         {showMenu ?(<>
                      <li><button onClick={()=>toggleClickWomen(!clickWomen)} style={{background:'#0275d8' ,color:'#ffffff', border:'none'}}>Women  {clickWomen?(<i className="fas fa-caret-up"></i>):(<i className="fas fa-caret-down"></i>)} </button>
                      <ul className={clickWomen?'nav-button2 show':'nav-button2'}>
                          <li><button onClick={()=>{dispatch(productsListCategory('women','shirts'));toggleClickWomen(!clickWomen)}} style={{background:'#0275d8' , border:'none'}}>T-Shirt</button></li>
                          <li><button onClick={()=>{dispatch(productsListCategory('women','jeans'));toggleClickWomen(!clickWomen)}} style={{background:'#0275d8' , border:'none'}}>Jeans</button></li>
                          <li><button onClick={()=>{dispatch(productsListCategory('women','sweater'));toggleClickWomen(!clickWomen)}} style={{background:'#0275d8' , border:'none'}}>Sweater</button></li>
                      </ul>
                      </li>
                               <li><button onClick={()=>toggleClickMen(!clickMen)} style={{background:'#0275d8',color:'#ffffff' , border:'none'}}>Men {clickMen?(<i class="fas fa-caret-up"></i>):(<i className="fas fa-caret-down"></i>)} </button>
                               <ul className={clickMen?'nav-button2 show':'nav-button2'}>
                                   <li><button onClick={()=>{dispatch(productsListCategory('men','shirts'));toggleClickMen(!clickMen)}} style={{background:'#0275d8' , border:'none'}}>T-Shirt</button></li>
                                   <li><button onClick={()=>{dispatch(productsListCategory('men','jeans'));toggleClickMen(!clickMen)}} style={{background:'#0275d8' , border:'none'}}>Jeans</button></li>
                                   <li><button onClick={()=>{dispatch(productsListCategory('men','sweater'));toggleClickMen(!clickMen)}} style={{background:'#0275d8' , border:'none'}}>Sweater</button></li>
                               </ul>
                               </li>
                               </>
         ):(null)}    
    
         </ul>    
         </div>
         <div className='nav-right'>
         {user.email?(<div className="login" ><button onClick={()=>dispatch(logOut())} style={{background:'#0275d8' , border:'none'}}><i class="fas fa-sign-out-alt" title='Logout'></i></button><Link to='/account' style={{ color:'#ffffff'}}> {user.name} <i className="far fa-user-circle"></i></Link></div>)
         :
         (<div className="login"><Link to='/login' style={{ color:'#ffffff'}}>Log in <i className="far fa-user-circle"></i></Link></div>)}

         <div><Link to='/cart' style={{ color:'#ffffff'}}>Cart <i className="fas fa-cart-plus"></i> ({cart.length})</Link></div>
         
        </div> 
        <div className='m-menu'>
        {clickBar ? 
        ( <button onClick={()=>toggleClickBar(!clickBar)} style={{background:'#0275d8' , border:'none'}}><i className="fas fa-times"></i></button>)
        :
        (<button onClick={()=>toggleClickBar(!clickBar)} style={{background:'#0275d8' , border:'none'}}><i className="fas fa-bars"></i></button>)}
        
        
       
        </div>  
        </div>
    )
}

export default NavBar
