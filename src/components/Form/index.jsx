import "./index.css";

const Form = ({ handleAddItemToList, handleChangeInput, task }) => {
  return (
    <div id="formulario">
      <form onSubmit={handleAddItemToList}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={handleChangeInput}
          value={task}
        />

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default Form;
