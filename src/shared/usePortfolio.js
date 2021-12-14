import { useEffect, useState } from 'react';

const usePortfolio = () => {
    const [portfolios,setPortfolio]=useState([])
    useEffect(()=>{
        const url='https://mysterious-earth-88237.herokuapp.com/Portfolio'
        fetch(url)
        .then(res =>res.json())
        .then(data =>setPortfolio(data))
    },[])
    return [portfolios]
};

export default usePortfolio;