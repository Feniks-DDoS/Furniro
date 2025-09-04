import Shop from "@/pages/Shop.jsx"
import Cart from "@/pages/Cart.jsx"
import Checkout from "@/pages/Checkout.jsx"
import SingleProduct from "@/pages/SingleProduct.jsx"
import Blog from "@/pages/Blog.jsx"
import Contact from "@/pages/Contact.jsx"
import ProductComparison from "@/pages/ProductComparison.jsx"
import Home from "@/pages/Home.jsx"
import Dashboard from "@/pages/Dashboard.jsx"
import Wishlist from "@/pages/Wishlist.jsx"
import Error from "@/pages/Error.jsx"


export const route = [
    {path: '/shop', component: Shop, },
    {path: '/cart', component: Cart, },
    {path: '/checkout', component: Checkout, },
    {path: '/product/:id', component: SingleProduct, },
    {path: '/blog', component: Blog, },
    {path: '/wishlist', component: Wishlist, },
    {path: '/dashboard', component: Dashboard, },
    {path: '/contact', component: Contact, },
    {path: '/', component: Home, },
    {path: '/error', component: Error, },
    {path: '/product_comparison', component: ProductComparison, },
]