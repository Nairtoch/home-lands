import { Routes, Route } from 'react-router-dom';
import { Home } from '../../Pages/Home/Home';
import { Login } from '../../Pages/Login/Login';
import { ProductDetails } from '../../Pages/Products/ProductDetails';
import { ProductList } from '../../Pages/Products/ProductList';
import { Search } from '../../Pages/Search/Search';

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/products">
                <Route index element={<ProductList />}></Route>
                <Route path=":product_id" element={<ProductDetails />}></Route>
            </Route>

            <Route path="/search" element={<Search />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
}