const restify = require('restify')
const consign = require('consign')

const server = restify.createServer({
    name: 'restify-jwt-base'
})

consign()
	.include('lib/config.js')
	.then('routes')
	.then('lib/boot.js')
	.into(server)

	