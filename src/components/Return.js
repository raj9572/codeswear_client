/* eslint-disable no-unused-vars */
import axios from "axios";
import {  useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { axiosClient } from "../Utils/axiosClient";

const Return = () => {

  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const sessionId = urlParams.get('session_id');
  // Parse items if it's available

  const [status, setStatus] = useState(null);
  
  const [itemsLoaded, setItemsLoaded] = useState(false);

  useEffect(() => {
   
      // If items are already available in the URL params, set itemsLoaded to true
      setItemsLoaded(true);
    
  }, []);

  useEffect(() => {
    if (sessionId && itemsLoaded) {
      checkStatus(sessionId);
    }
  }, [sessionId, itemsLoaded]); // Trigger effect when sessionId or itemsLoaded changes




  async function checkStatus(sessionId) {
    try {
      const res = await axiosClient.get(`/orders/check-status?session_id=${sessionId}`);
    
      setStatus(res.data);
    } catch (error) {
      console.log('error in return', error);
    }
  }
  
    if (status === 'open') {
      return (
        <Navigate to="/" />
      )
    }
  
    if (status === 'complete') {
       return (
        <Navigate to="/orders"/>
       )
    }
  
    return null;
}

export default Return
