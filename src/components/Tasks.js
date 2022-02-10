function Tasks({ list, remoItem, checItem }) {
  return (
    <div>
      {list.map((e) => (
        <div key={e.id}>
          {e.text}
          <button onClick={() => remoItem(e.id)}>Delete</button>
          <input onClick={(event) => checItem(e, event)} type="checkbox" />
        </div>
      ))}
    </div>
  );
}
export default Tasks;
