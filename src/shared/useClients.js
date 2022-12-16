import { useEffect, useState } from 'react';

const useClients = () => {
    const [clients,setClients]=useState([])
    useEffect(()=>{
        const url='/Clients.json'
        fetch(url)
        .then(res =>res.json())
        .then(data =>setClients(data))
    },[])
    return [clients]
};

export default useClients;