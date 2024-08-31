import React from "react";
import ProtoType from "prop-types";

function List(props) {
  const ItemList = props.items;
  const category = props.category;

  const listItems = ItemList.map((x) => (
    <li className="sublist" key={x.id}>
      {x.name} : ({x.calorie} calories)
    </li>
  ));

  return (
    <>
      <h2 className="heading">{category}</h2>
      <ol className="orderList">{listItems}</ol>
    </>
  );
}

List.defaultProps = {
  category: "category",
  items: [],
};
List.ProtoType = {
  category: ProtoType.string,
  items: ProtoType.arrayOf(
    ProtoType.shape({
      id: ProtoType.number,
      name: ProtoType.string,
      category: ProtoType.string,
    })
  ),
};
export default List;
