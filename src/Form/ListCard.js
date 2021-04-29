import React from 'react'
import { formatRelative } from 'date-fns';
import Card from "react-bootstrap/Card";
const ListCard = ({

    name = '',
    url = '',
    email = '',
    gender = '',

}) => { 
    return (
        <Card style={{ width: '18rem',boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",margin:"1rem 0"}} >
            <Card.Img variant="top" src={url} style={{width:"100%",height:"100%"}} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{email}</Card.Text>
                <Card.Text>{gender}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ListCard;