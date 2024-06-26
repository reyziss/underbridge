import { createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/home'
import SignInPage from '@/pages/sign-in'
import SignUpPage from '@/pages/sign-up'
import Shop from '@/pages/shop'
import Favourites from '@/pages/favourites'
import Cart from '@/pages/cart'
import About from '@/pages/about'
import FAQ from '@/pages/faq'
import Contacts from '@/pages/contacts'
import Brands from '@/pages/brands'
import Delivery from '@/pages/delivery'
import Admin from '@/pages/admin'
import AddProduct from '@/pages/addProduct'
import { AdminGuard } from './AdminGuard'
import CheckoutPage from '@/pages/checkout'
import Product from '@/pages/product'
import NotFound from '@/pages/404'
import Layout from '@/layout/layout'

const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: '/',
        errorElement: <div>404</div>
      },
      {
        element: <SignInPage />,
        path: '/sign-in',
        errorElement: <div>404</div>
      },
      {
        element: <SignUpPage />,
        path: '/sign-up',
        errorElement: <div>404</div>
      },
      {
        element: <Shop />,
        path: '/shop',
        errorElement: <div>404</div>
      },
      {
        element: <Favourites />,
        path: '/favourites',
        errorElement: <div>404</div>
      },
      {
        element: <Cart />,
        path: '/cart',
        errorElement: <div>404</div>
      },
      {
        element: <About />,
        path: '/about',
        errorElement: <div>404</div>
      },
      {
        element: <FAQ />,
        path: '/faq',
        errorElement: <div>404</div>
      },
      {
        element: <Contacts />,
        path: '/contacts',
        errorElement: <div>404</div>
      },
      {
        element: <Delivery />,
        path: '/delivery',
        errorElement: <div>404</div>
      },
      {
        element: <Brands />,
        path: '/brands',
        errorElement: <div>404</div>
      },
      {
        element: (
          <AdminGuard>
            <Admin />
          </AdminGuard>
        ),
        path: '/admin',
        errorElement: <div>404</div>
      },
      {
        element: <AddProduct />,
        path: '/AddProduct',
        errorElement: <div>404</div>
      },

      {
        element: <Product />,
        path: '/product/:id',
        errorElement: <div>404</div>
      },
      {
        element: <NotFound />,
        path: '*',
        errorElement: <div>404</div>
      }
    ]
  },
  {
    element: <CheckoutPage />,
    path: '/checkout',
    errorElement: <div>404</div>
  }
])

export default appRouter
