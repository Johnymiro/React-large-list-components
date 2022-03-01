import { useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import InfiniteScrollExample from "./components/InfiniteScroll";
import ReactVirtualizedExample from "./components/ReactVirtualized";

const data = new Array(10000).fill().map((value, index) => ({
  id: index,
  title: `Title`,
  body: `Random text ${index}`,
}));

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  const getClass = (option) =>
    `${selectedTab === option ? "btn-success" : "btn-primary"} btn`;

  return (
    <div className="main_container">
      <div className="header_nav">
        {["pagination", "Infinite scroll", "react-virtualized"].map((el, i) => (
          <button
            key={el + i}
            onClick={() => setSelectedTab(el)}
            className={getClass(el)}
          >
            {el}
          </button>
        ))}
      </div>

      {selectedTab === "pagination" && <Pagination />}
      {selectedTab === "Infinite scroll" && <InfiniteScrollExample />}
      {selectedTab === "react-virtualized" && <ReactVirtualizedExample />}
    </div>
  );
}

export default App;
