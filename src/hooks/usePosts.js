import axios from "axios"
import { useQuery } from "@tanstack/react-query"
const fetchData =async () =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return res.data
}
const UsePosts = () =>{
    const query = useQuery({
        queryKey: ["posts"],
        queryFn: fetchData,
        staleTime: 1000 * 10 // caching for 10s
    })
    return query
}

export default UsePosts