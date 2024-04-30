import {useRoutes} from 'react-router-dom'

import Home from '../pages/Home'
import ArticlePage from '../pages/ArticlePage';
import NotFound from '../pages/NotFound'
import ResourcesPage from '../pages/ResourcesPage';
import NewsPage from '../pages/NewsPage';
const apiKey =  import.meta.env.VITE_API_KEY;
const AppRoutes = () =>{
    let routes = useRoutes([
      {path: '/', element: <Home/>},
      {path: '/news', element: <NewsPage/>},
      {path:"/articles/:title", element:<ArticlePage apiKey={apiKey }/>},
      {path: '/resources', element: <ResourcesPage/>},
      {path: '/*', element:<NotFound/>}
    ])
  
    return routes;
}
export default AppRoutes;