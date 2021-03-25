import socketClient from "socket.io-client"

const SERVER = "http://localhost:8080"

function App() {
  var socket = socketClient(SERVER)
  socket.on("connection", ()=> {
    console.log("I'm connected with the back-end")
  })

  return (
    <div className="App">
    </div>
  );
}

export default App;
