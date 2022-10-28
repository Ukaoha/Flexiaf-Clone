import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const TestingAxios = () => {
    let url = "https://randomuser.me/api/?page=3&results=10&seed=abc ";
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    setIsLoading(true)
    axios.get(url).then(response => {
        const results = response.data.results
        console.log(results);
        setUsers(results);
        setIsLoading(false)
    })
  
    
    return ( 
        <></>
     );
}
 
export default TestingAxios;