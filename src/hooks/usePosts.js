import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const UsePosts = (idVal) =>{
    console.log(idVal);
    
    const fetchData =async () =>{
        if(idVal !== "all"){
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idVal}`)
    return res.data
        }
        else{
                const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    return res.data
        }
}
    const query = useQuery({
        queryKey: ["posts" , {idVal}],
        queryFn: fetchData,
        staleTime: 1000 * 10 // caching for 10s
    })
    return query
}

export default UsePosts