const fetchTodos = async () => {
  const todosURL = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=14'
  );
  const todosList = await todosURL.json();

  return todosList;
};

export default async function Home() {
  const todoListData = await fetchTodos();

  return (
    <div>
      <p>
        <h1 className="text-center mt-8 mb-6 text-4xl">
          Todo List With JSON Placeholder and React Server Component
        </h1>
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {todoListData.map((todo: any) => (
          <div
            key={todo.id}
            className="card bg-white shadow-md rounded-sm p-4 max-w-sm flex flex-col justify-center items-center"
          >
            <p
              className="text-2xl font-semibold drop-shadow-2xl"
              style={{ textShadow: '#333 .2px .1px' }}
            >
              {todo.title}
            </p>
            <small
              className={`text-sm text-white p-1 rounded font-bold ${
                todo.completed ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {todo.completed ? 'Completed' : 'Not Completed'}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
