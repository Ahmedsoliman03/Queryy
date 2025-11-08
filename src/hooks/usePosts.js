import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

const usePosts = () => {
  // Fetch all posts
  const allData = useCallback(() => {
    return useQuery({
      queryKey: ["postsAll"],
      queryFn: async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return res.data;
      },
      staleTime: 1000 * 10, // cache for 10s
    });
  }, []); // empty deps → function reference stays the same

  // Fetch single post by ID
  const singleData = useCallback((idVal) => {
    return useQuery({
      queryKey: ["postsSingle", { idVal }],
      queryFn: async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idVal}`);
        return res.data;
      },
      staleTime: 1000 * 10,
      enabled: !!idVal && idVal !== "all",
    });
  }, []); // function reference stays stable

  // Search posts
  const searchData = useCallback((q) => {
    return useQuery({
      queryKey: ["postsSearch", { q }],
      queryFn: async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const allPosts = res.data;
        if (q && q.trim().length > 0) {
          const searchTerm = q.toLowerCase().trim();
          return allPosts.filter(
            (post) =>
              post.title.toLowerCase().includes(searchTerm) ||
              post.body.toLowerCase().includes(searchTerm)
          );
        }
        return [];
      },
      staleTime: 1000 * 10 * 5,
      enabled: Boolean(q && typeof q === "string" && q.trim().length > 0),
    });
  }, []);

  return { allData, singleData, searchData };
};

export default usePosts;
