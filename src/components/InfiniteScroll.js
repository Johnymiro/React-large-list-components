import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function InfiniteScrollExample() {
  const data = new Array(1000).fill().map((value, id) => ({
    id: id,
    title: "Title",
    body: "Any random text",
  }));

  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(data.slice(count.prev, count.next));
  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)));
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }));
  };

  return (
    <div className="content_body">
      <InfiniteScroll
        next={getMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        dataLength={current.length}
      >
        <div>
          {current &&
            current.map((item, index) => (
              <div key={index} className="post">
                <h3>{`${item.title}-${item.id}`}</h3>
                <p>{item.body}</p>
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
