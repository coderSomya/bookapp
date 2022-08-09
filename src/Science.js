import React from 'react'
import './index.css'; 
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Book } from './Book';

export const Science = () => {

    const [bookData, setData]= useState([]);

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=science&key=AIzaSyCysjbO76q9zk1_RHPeW-try62IoqDf9Yo')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
    })

  return ( <>
<div className='container'>
 
 {
<Book book={bookData}/>
 }

</div>

  </>
  )
}



