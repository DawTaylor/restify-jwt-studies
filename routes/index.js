module.exports = server => {
	server.get('/', (req, res, next) => {
		res.send(200, { 'server' : server.name } )
		return next()
	})
}