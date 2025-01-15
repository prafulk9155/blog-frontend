import React from 'react'
import config from '../../config';
import axios from 'axios';
import { useState,useEffect } from 'react';

const Testing = () => {
    const [msg,setMsg]=useState("No data found !");

    console.log(config.API_URL);

    useEffect(() => {
        axios.get(`${config.API_URL}/api-test`).then((response) => {
            setMsg(response.data.message);
        });
    }, [])


  return (
    <div>
      <h1>Testing for route</h1>
      <p>{msg}</p>
    </div>
  )
}

export default Testing
