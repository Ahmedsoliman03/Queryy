import { useState } from "react";
import UsePosts from "../hooks/usePosts";

const Home = () => {
  const [idVal, setIdVal] = useState("all");
  const { data, isLoading, error } = UsePosts(idVal);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;
console.log(data);

  return (
    <>
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

      {/* Check if data exists and handle both array/object responses */}
      {data ? (
        Array.isArray(data) ? (
          data.map((p) => (
            <div key={p.id} className="mt-2">
            <p>{p.id}{" "}{p.title}</p>
              <hr />
            </div>
          ))
        ) : (
          <div>
            <p>{data.id}{" "}{data.title}</p>
          </div>
        )
      ) : (
        <p>No data found.</p>
      )}
    </>
  );
};

export default Home;
