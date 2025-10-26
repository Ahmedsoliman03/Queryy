import UsePosts from "../hooks/usePosts"

const Home =()=>{
    const {data , isLoading , error} = UsePosts()
    
    return(
       <>
       
       {data?.map((p)=>{
       return (
    <div key={p.id}>
      <p>{p.title}</p>
    </div>
  )
       })}
       </>
    )
}

export default Home 