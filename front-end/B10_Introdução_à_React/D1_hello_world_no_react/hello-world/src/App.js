const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const value = [ 'trybe', 'plants', 'criptoMine', 'criptoZooo', 'axie' ]
  const lista = value.map((tarefa) => {
   return Task(tarefa)
  })
  return (
    <div>
      {lista}
    </div>
  );
}

export default App;
