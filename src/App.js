import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import Home from "./pages/Home"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import ForgetPassword from "./pages/ForgetPassword"
 import Header from "./components/Header"
function App() {
  return ( 



    <Router>
      <Header/>
      <Routes>
    <Route path = "/" element= {<Home/>}/>
    <Route path = "/profile" element= {<Profile/>}/>
    <Route path = "/sign-in" element= {<SignIn/>}/>
    <Route path = "/sign-up" element= {<SignUp/>}/>
    <Route path = "/offers" element= {<Offers/>}/>
    <Route path = "/forget-password" element= {<ForgetPassword/>}/>
      </Routes>
    </Router>
 
   
  );
}

export default App;
