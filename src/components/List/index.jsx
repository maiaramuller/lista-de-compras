import "./index.css";

const List = ({ itemsList }) => {
  return (
    <div id="lista">
      <ul className="todo-list">
        {itemsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
