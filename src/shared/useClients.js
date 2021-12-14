import { useEffect, useState } from 'react';

const useClients = () => {
    const [clients,setClients]=useState([])
    useEffect(()=>{
        const url='https://mysterious-earth-88237.herokuapp.com/clients'
        fetch(url)
        .then(res =>res.json())
        .then(data =>setClients(data))
    },[])
    return [clients]
};

export default useClients;