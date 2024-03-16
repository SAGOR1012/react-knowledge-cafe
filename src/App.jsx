// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    // console.log("add t bookmark");
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    console.log(blog);
  };

  const handleMarkAsRead = (time, id) => {
    // console.log("marking as read", time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    /* Remove bookmark */
    // console.log("remove bookmark ", id);
    const remainingBookMarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookMarks);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
