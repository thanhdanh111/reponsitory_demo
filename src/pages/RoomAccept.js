import React,{useState,useEffect} from 'react'
import firebase from 'firebase/app';
import { useParams } from 'react-router-dom'
import ListCard from '../Form/ListCard'
import './RoomsAccept.css'
import Footer from '../components/Footer';
import {auth , db} from '../chat/firebase'
export default function RoomAccept() {
  const [user , setUser] = useState(() => auth.currentUser)
  const getPath  =  useParams()
  const proCardName = getPath.nameProcard;
  console.log(proCardName);
  const [cards, setCard] = useState();
  useEffect(() =>{
    if(db){
        const unsubscribe = db.collection(proCardName).orderBy('createdAt').limit(100).onSnapshot(
            querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                setCard(data)
            })
            return unsubscribe
    }
},[])
 if(!cards){
   return(
    <h1>Loading</h1>

    )
 }
  return (
    <>
    <div className="Room-Accpect" >
   
      {cards.map(card => (
                  <div key={card.id}><ListCard {...card}/></div>
      ))}
      
      
    </div>
    <Footer />
    
    </>
  )
}
