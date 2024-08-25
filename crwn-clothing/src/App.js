import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';


const Shop  = () => {
  return(
    <h1> I am from the shop page</h1>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='/' element={<Home />}/>
        <Route path= '/shop' element ={<Shop/>} />
      </Route>
    </Routes>
  );
}

export default App;


//===routs does is that it allows this applicationto regiester these
// ---route level components and then it render a specific component what it matches this specific route