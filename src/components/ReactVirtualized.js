import React from "react";
import { List } from "react-virtualized";

export default function ReactVirtualizedExample() {
  const data = new Array(1000).fill().map((value, id) => ({
    id: id,
    title: "Title",
    body: "react-virtualized",
  }));

  const renderRow = ({ index, key, style }) => (
    <div>
      <div key={key} style={style} className="post">
        <h3>{`${data[index].title}-${data[index].id}`}</h3>
        <p>{data[index].body}</p>
      </div>
    </div>
  );
  return (
      <List
        width={800}
        height={700}
        rowRenderer={renderRow}
        rowCount={data.length}
        rowHeight={120}
      />
  );
}
