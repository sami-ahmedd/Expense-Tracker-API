const notFound = (request,response) => {
    response.status(404).send('route does not exist')
}

module.exports = notFound