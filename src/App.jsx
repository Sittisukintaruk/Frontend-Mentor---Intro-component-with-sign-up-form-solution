import Form from "./components/Form";
import "./Reset.css";
import "./App.css";

function App() {
  return (
    <main>
      <div className="Container">
        <div className="learn">
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <Form />
      </div>
    </main>
  );
}

export default App;
