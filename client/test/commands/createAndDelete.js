import it from '../helpers/driver'

it('should create and delete an action, and then quit without error', (name) => [
    `create ${name} nodejs function main(params) { return { message: "Hello " + params.name } }`,
    `delete ${name}`
])
