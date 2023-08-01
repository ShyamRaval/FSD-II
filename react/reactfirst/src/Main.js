import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Contact from 'Contact'
function Main() {
    return (
        <div>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Product">Product</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Contact' element={<Contact />}></Route>
                    <Route path='/Product' element={<Product />}></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default Main