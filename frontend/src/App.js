import {useEffect} from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import NavBar from './views/NavBar';
import MobileMenu from './views/MobileMenu'
import {useState} from 'react'
import Cart from './views/Cart';
import Login from './views/Login';
import Products from './views/Products';
import {productsList,productsListCategory} from './dataStore/actions/productsActions'
import {useDispatch} from 'react-redux';
import Footer from './views/Footer';
import Register from './views/Register';
import UserAccount from './views/UserAccount';
import Checkout from './views/Checkout';
import OrderThanks from './views/OrderThanks'
import MyOrders from './views/MyOrders';
import Admin from './views/Admin';
import ControlUsers from './views/ControlUsers';
import ControlProducts from './views/ControlProducts';
import ControlAddProduct from './views/ControlAddProduct';


function App() {

  const dispatch = useDispatch();
  const [clickBar,toggleClickBar ] = useState(false);
  const [clickWomen,toggleClickWomen] = useState(false);
  const [clickMen,toggleClickMen] = useState(false);
  const [showMenu,toggleShowMenu] = useState(true);
  
 useEffect(() => {
  
 dispatch(productsList());
 //dispatch(productsListCategory('men','sweater'));
 }, [])

  return (
    <Router>

    <NavBar clickBar={clickBar} toggleClickBar={toggleClickBar}  clickWomen={clickWomen}
     toggleClickWomen={toggleClickWomen } clickMen={clickMen} toggleClickMen={toggleClickMen}
     showMenu={showMenu} toggleShowMenu={toggleShowMenu}
    />
    <MobileMenu clickBar={clickBar} toggleClickBar={toggleClickBar} />

    <Route path='/' exact ><Products showMenu={showMenu} toggleShowMenu={toggleShowMenu}/></Route>
    <Route path='/cart' exact  ><Cart  toggleShowMenu={toggleShowMenu}/></Route>
    <Route path='/login' exact  ><Login  toggleShowMenu={toggleShowMenu} /></Route>
    <Route path='/register' exact  ><Register /></Route>
    <Route path='/account' exact  ><UserAccount /></Route>
    <Route path='/checkout' exact  ><Checkout /></Route>
    <Route path='/orderthanks' exact > <OrderThanks /></Route>
    <Route path='/myorders' exact > <MyOrders /></Route>
    <Route path='/admin' exact > <Admin /></Route>
    <Route path='/controlusers' exact > <ControlUsers /></Route>
    <Route path='/controlproducts' exact > <ControlProducts /></Route>
    <Route path='/controladdproduct' exact > <ControlAddProduct /></Route>
    <Footer />
    </Router>

  );
}

export default App;
