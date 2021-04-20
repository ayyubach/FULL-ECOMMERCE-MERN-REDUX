import React from 'react'
import {Link} from 'react-router-dom'

const MobileMenu = ({clickBar}) => {

    return (
        <div>
            {clickBar?
            (        
            <div className='mobileMenu'>
            <ul className='mobile-nav-button'>
             <li><Link to='/cart' style={{ color:'#ffffff'}}>Cart  (0)</Link></li>    
             <li><Link to='/' style={{ color:'#ffffff'}}>Home</Link></li>    
             <li><button style={{background:'#2279c5' , border:'none'}}>Women <i className="fas fa-caret-right"></i></button></li>    
             <li><button style={{background:'#2279c5' , border:'none'}}>Men <i className="fas fa-caret-right"></i></button></li>    
             </ul>        
            </div>  ):
            (null )}
        </div>

    )
}

export default MobileMenu
