import { useEffect, useState } from 'react';

const usePortfolio = () => {
    const [portfolios,setPortfolio]=useState([])
    useEffect(()=>{
        const url='/Portfolio.json'
        fetch(url)
        .then(res =>res.json())
        .then(data =>setPortfolio(data))
    },[])
    return [portfolios]
};

export default usePortfolio;