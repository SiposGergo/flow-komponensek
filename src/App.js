import Hello from "./Hello";
import HelloClass from "./HelloClass";
import Frame from "./Frame";

function App() {
  console.log('App component rendered!')
  const valtozo = "Teszt Elemér";
  return (
    <div>
      <Frame title="Hello keret">
        <Hello name={valtozo} />
        <HelloClass asd="valami" name="React Class" />
      </Frame>
      <Frame>
        Teszt
      </Frame>
    </div>
  )
}

export default App;
