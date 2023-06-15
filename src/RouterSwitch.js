import { HashRouter,Routes,Route } from "react-router-dom";
import { HomePage, CatalogPage, ContactUs, ProductPage } from "./pages/"
import { CartProvider } from "./context/cart";
const RouteSwitch = () => {
    return (
        <CartProvider>
            <HashRouter>
                 <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/our-story" element={<CatalogPage/>}/>
                    <Route path="/shop-catalog" element={<CatalogPage/>}/>
                    <Route path='/shop-catalog/:id'element={<ProductPage/>} />
                    <Route path='/contact-us' element={<ContactUs/>} />
                 </Routes>
            </HashRouter>
        </CartProvider>
    )
}

export default RouteSwitch