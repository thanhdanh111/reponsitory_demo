import logo from './logo.svg';
import react , {useState, useEffect} from 'react'
import {auth,db} from './chat/firebase'
import LoginDemo from './Logindemo/LoginDemo';
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import "./App.css";
import Navbar from "./components/Navbar";
import CreateCard from './pages/CreateCard'
import RoomAccept from './pages/RoomAccept'
function App() {
    const [user , setUser] = useState(auth)
    const [initializing , setInitializing] = useState(true)
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
          if(user){
              setUser(user);
              
          } else{

              setUser(null);
          }
          if(initializing){
              setInitializing(false)
          }
      })
      return unsubscribe;
  },[]);
    console.log("sa",user);
  return (
    <>
   {
     user ? (
       <>
        <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/rooms/:slug/create-card" children={<CreateCard user={user} db={db} />} />
        <Route exact path="/rooms/:slug/:nameProcard" children={<RoomAccept user={user} db={db} />} />
        <Route component={Home} />
      </Switch>
    </>
       </>
     )
     :
     <>
     <Switch>
     <Route exact path="/" component={LoginDemo} />
     <Route  component={LoginDemo} />
     </Switch>
     </>
   }
    </>
  );
}

export default App;
