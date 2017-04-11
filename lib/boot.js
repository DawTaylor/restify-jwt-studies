module.exports = server => {
	server.listen(server.port, () => console.log("Listening on http://localhost:%s", server.port))
}