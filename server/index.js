import http from "http";
import express from "express";
import bdyParser from "body-parser";
//import apiRoutes from "./routes/index.js";
const { urlencoded: bodyParserUrlEncoded, json: bodyParserJson } = bdyParser;

let server = express();
server.use(bodyParserUrlEncoded({ extended: false }));
server.use(bodyParserJson());
//server.use("/api", apiRoutes);

let app = http.createServer(server);

app.listen("8082", () => {
	const { address, port } = app.address();
	console.log(`\nServer running http://${address == "::" ? "127.0.0.1" : address}:${port}`);
});
