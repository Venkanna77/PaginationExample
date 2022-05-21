export const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li
          key={post.id}
          className="list-group-item-warning list-group-item text-body list-group-item-action"
        >
          Id: {post.id} <br /> Title: {post.title} <br /> Descriptions:{" "}
          {post.body}
        </li>
      ))}
    </ul>
  );
};
