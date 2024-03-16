// import { space } from "postcss/lib/list";
import PropTypes from "prop-types";
import { IoBookmarksOutline } from "react-icons/io5";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  //   console.log(blog);
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />

          <div className="ml-6 ">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <small>{reading_time} min</small>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-5 text-2xl">
            <IoBookmarksOutline />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="text-purple-600 font-bold ">
        mark as read
      </button>
    </div>
  );
};

export default Blog;
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
