import  {createBrowserRouter} from 'react-router-dom'
import AppLayOUt from '../components/AppLayOUt'
import Home from '../pages/home/Home'
import Shop from '../pages/shop/Shop'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Blog from '../pages/blog/Blog'
import SucessURl from '../components/SucessURl'
import Cancel from '../components/Cancel'

const router = createBrowserRouter([
    {
        path:"/",
        element: <AppLayOUt/>,
        children:[
            {
                index:true,element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
           
        ]
    },
    
        {
            path:"/checkout-success",
            element:<SucessURl/>
        },
        {
            path:"/checkout-cancel",
            element:<Cancel/>
        },
    
])

export default router