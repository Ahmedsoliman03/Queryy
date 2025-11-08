import { useState } from "react";
import UsePosts from "../hooks/usePosts";

import { Link } from "react-router-dom";
import PostList from "./PostList";

const Home = () => {
  const [idVal, setIdVal] = useState("all");

  const { allData , singleData  } = UsePosts();
  const {data : oneData , isLoading : singleLoading , error: singleError} = singleData(idVal);
const {data : allPostsData , isLoading : isLoadingAll , error : errorAll} = allData();

  return (
    <>
    <Link to="/search">Search</Link>
      <select
        onChange={(e) => setIdVal(e.target.value)}
        value={idVal}
        className="border p-1 rounded"
      >
        <option value="all">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      {idVal === "all" ? (
        isLoadingAll ? (
          <p>Loading all posts...</p>):
          allPostsData && allPostsData.length > 0 ? (
            <PostList posts={allPostsData} />
          
          ) : (
            <p>No posts found.</p>
          )
      ) : singleLoading ? (
        <p>Loading post...</p>
      ) : singleError ? (
        <p>Error: {singleError.message || "Something went wrong"}</p>
      ) : oneData ? (
        <div>
          <p>{oneData.id}{" "}{oneData.title}</p>
          </div>) : (
        <p>No post found.</p>
      )}
      

   
    </>
  );
};

export default Home;
