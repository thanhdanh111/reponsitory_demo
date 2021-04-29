import React,{useState,useEffect} from 'react'
import firebase from 'firebase/app';
import { useParams } from 'react-router-dom'
import ListCard from '../Form/ListCard'
import Footer from '../components/Footer';
export default function RoomAccept({user=null, db= null}) {
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
    <div style={{width:"100%",height:"100px",display:"flex",margin:"5rem 0"}}>
      <div>
      {cards.map(card => (
                  <div key={card.id}><ListCard {...card}/></div>
      ))}
      </div>
      
    </div>
    
    </>
  )
}
