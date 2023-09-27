import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CreateBlog from './pages/CreateBlog';
// import CreateUser from './pages/CreateUser';
import EditBlog from './pages/EditBlog';
import Navbar from './components/Navbar';
import CreateUser from "./pages/CreateUser"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar  />
        <Routes>
          <Route
            path='/'
            element={<Homepage />}
          />
         <Route
          path='/add-blog'
          element={<CreateBlog />}
          />
           <Route
          path='/:id'
          element={<EditBlog />}
          />
           <Route
          path='/add-user'
          element={<CreateUser />}
          />
        </Routes>
     
       
      </BrowserRouter>
     
    </div>
  );
  }

export default App;