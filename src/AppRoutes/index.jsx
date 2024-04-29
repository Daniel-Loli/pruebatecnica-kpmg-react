import {useRoutes} from 'react-router-dom'

import Home from '../pages/Home'
import ArticlePage from '../pages/ArticlePage';
import NotFound from '../pages/NotFound'
import ResourcesPage from '../pages/ResourcesPage';
import NewsPage from '../pages/NewsPage';

const AppRoutes = () =>{
    let routes = useRoutes([
      {path: '/', element: <Home/>},
      {path: '/news', element: <NewsPage/>},
      {path:"/articles/:title", element:<ArticlePage apiKey={'0182acb9bf8749fa9d9d9468cdf8c896'}/>},
      {path: '/resources', element: <ResourcesPage/>},
      {path: '/*', element:<NotFound/>}
    ])
  
    return routes;
}
export default AppRoutes;