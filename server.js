var app = require("express")();
var http = require("http").createServer(app);
const PORT = 8080;

const STATIC_CHANNELS = ["GLOBAL_NOTIFICATIONS", "GLOBAL_CHAT"]
var cors = require("cors")
var io = require("socket.io")(http);

const whitelist = ['http://localhost:3000', 'http://example2.com'];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
      return callback(null, true)

      callback(new Error('Not allowed by CORS'));
  }
}

app.use(cors(corsOptions));

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
})

io.on("connection", (socket) => {
    console.log("new client connected")
    socket.emit("connection", null)
})