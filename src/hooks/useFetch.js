import { useCallback, useEffect, useState } from "react"

export const useFetch =(url)=>{
    const [data, setData] = useState([])
    const [error, setError]= useState(null)
    const [loading, setLoading] = useState(false)

    const getData = useCallback(async()=>{
        try {
            setLoading(false)
            const response = await fetch(url)
            if(!response.ok){
                throw new Error("Error fetching data")
            }
            const data = await response.json()
            setData(data)
        } catch (error) {
            setError(error.message)
        } finally{
            setLoading(false)
        }
    })
    useEffect(()=>{
        getData()
    },[getData])
    return {data, loading, error}

}