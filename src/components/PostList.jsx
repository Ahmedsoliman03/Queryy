const PostList = ({posts}) => {
    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default PostList