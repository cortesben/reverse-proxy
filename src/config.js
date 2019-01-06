/**
 * config module
 * What’s the value in this technique?
 *  it is easy
 *  clarity on how all environment variables are being mapped
 *  you can rename variables to more readable properties
 *  you can add other configuration properties from non-environment variables
 */
const dotenv = require('dotenv');
const fs = require('fs');

let result = dotenv.config();
const defaultValues =
`# these are default values written in place of your own .env file
# to use new values simple delete these below and add your own
NODE_ENV=development
PORT=80
`;

if (result.error) {
    if(result.error.errno === -2){
        fs.writeFileSync('.env', defaultValues);
    }
}

result = dotenv.config();
const { parsed: envs } = result;

module.exports = envs;
