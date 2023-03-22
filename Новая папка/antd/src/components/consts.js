import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {HomeOutlined, InfoOutlined, LinkOutlined} from '@ant-design/icons'

export const navL = [
    {
        element: <Home/>,
        path: '/',
        title: 'Home',
        id: 1,
        icon: <HomeOutlined/>
    },
    {
        element: <About/>,
        path: '/about',
        title: 'About',
        id: 2,
        icon: <InfoOutlined/>
    },
    {
        element: <Contact/>,
        path: '/contact',
        title: 'Contact',
        id: 3,
        icon: <LinkOutlined/>
    },
]