import { useState } from "react";
import UsePosts from "../hooks/usePosts";
import SearchQuery from "./SearchQuery";
import PostList from "./PostList";

const Search = () => {
    const [query, setQuery] = useState('')

    const { searchData , allData } = UsePosts();
    const {data : allPostsData , isLoading : isLoadingAll , error : errorAll} = allData();

    const {data : dataSearch , isLoading : isLoadingSearch , error : errorSearch} = searchData(query);

    return (<>
          <SearchQuery setQuery={setQuery} query={query} />
          {query && query.length > 0 ? (
  isLoadingSearch ? (
    <p>Searching...</p>
  ) : errorSearch ? (
    <p>Error: {errorSearch.message || "Something went wrong"}</p>
  ) : dataSearch && dataSearch.length > 0 ? (
    <PostList posts={dataSearch} />

  ) : (
    <p>No data found.</p>
  )
) : (
 allPostsData && allPostsData.length > 0 ? (
    <PostList posts={allPostsData} />

  ) : (
    <p>No data found.</p>
  )
)}
    </>)
}
export default Search