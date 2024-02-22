import fastify from "fastify";
import Cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";
import { cratePoll } from "./routes/create_polls";
import { getPoll } from "./routes/get_poll";
import { voteOnPoll } from "./routes/vote_on_poll";
import { pollResults } from "./ws/poll-results";


const app = fastify()

app.register(Cookie, {
  secret: "polls-app-zck",
  hook: 'onRequest', 
})
  
app.register(websocket)

app.register(cratePoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(pollResults)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running')
})