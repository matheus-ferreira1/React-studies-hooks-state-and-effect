const { useEffect } = React;
const {useState} = React;

function Counter() {

  let [counter, setCounter] = useState(0);
  let [calculo, setCalculo] = useState(0);
  let [cubo, setCubo] = useState(0);

  function increment() {
    setCounter(counter + 1)
  };

  useEffect( () => {
    setCalculo(Math.pow(counter, 2))
    setCubo(Math.pow(counter, 3))
  }, [counter]);

  function clearAll() {
    setCounter(counter = 0)
  }

  return (
    <div >
      <h2>Nesse exemplo, a variavel counter é alterada ao clicar no botão, e devido ao useState, a interface é atualizada mostrando o novo valor. </h2>
      <h2>Já a variável cálculo também possui useState para monitorar seu estado, mas é atualizada quando o Counter muda (referencia utilizada no segundo parametro na função useEffect).</h2>
      <div>
        <p>Contador: {counter}</p>
        <button onClick={increment}>Incrementar</button>
        <button onClick={clearAll}>Limpar</button>
        <p>Quadrado: {calculo}</p>
        <p>Cubo: {cubo}</p>
      </div>
    </div>
  )
}


function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));