# Environment Loader/Reader

## Usage

    const env = new Env([ string path = .env ])

    // Getting variables
    const databaseHost = env.get('DB_HOST')

    // Getting variables with a default
    const endpoint = env.get('ENDPOINT', 'https://localhost')

    // Setting variables
    env.set('MY_ENV_VAR', 'value')

## Notes

Truthy or falsey envrionment variables are converted to boolean values. For
example

    FOO=true // bool true
    FOO=1 // bool true
    FOO=false // bool false
    FOO=0 // bool false

