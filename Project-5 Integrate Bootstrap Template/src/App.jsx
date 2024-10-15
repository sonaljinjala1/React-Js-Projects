
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/all.min.css';
import Banner from "./banner/banner";
import './css/stylesheet.css';
import Header from './Header/header';
import Catagary from './Catagary/catagary';
import Product from './Product/product';
import Fresh from './Fresh/fresh';





function App() {
  return (
    <>
        <Header/>
        <Banner/> 
        <Catagary/>
        <Product/>
        <Fresh/>
      
    </>
    
  );
}

export default App;
