import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
const [data, setData] = useState({})
    // Here, using useEffect because we have to call a functionality (in this case fetch data from an api) every time when the currency variable changes
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())  // as we know that fetch() returns  a promise
        .then((res)=> setData(res[currency])) //in this way we'll just send currency property from the object that api is going to return 
    }, [currency])

    
return data
}

export  {useCurrencyInfo}