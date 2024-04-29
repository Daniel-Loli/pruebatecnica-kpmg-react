import { BrowserRouter } from 'react-router-dom';
import AppContext, { AppProvider } from './context';
import './App.css';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
