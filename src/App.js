import './App.css';
import Header from './components/Header/Header';
import  Footer from './components/Footer/footer';
// import Tab from './components/nav/Tab';
// import Trending from './views/TrendingScreen/Trending';

//  importing routes
import {Route,  BrowserRouter as Router,Routes,NavLink} from 'react-router-dom';
import AllRoutes from './router/allRoute'





const  App = ()  => {
  return (
    <>
    <Header/> 
    <Router>
      <Routes>
        {AllRoutes.map((route, index) => (
        <Route 
        exact
        path={route.path}
        element={<route.component/>}
        />
        ))}
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
