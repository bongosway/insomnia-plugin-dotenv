const dotenv = require('dotenv');
const fs = require('fs');

module.exports.templateTags = [
  {
    displayName: 'dotenv',
    name: 'dotenv',
    description: 'Pull data from .env',
    args: [
      {
        displayName: 'Choose .Env File',
        help: 'Path to .env file',
        type: 'file'
      },
      {
        displayName: 'Variable Name',
        description: 'Name of the variable',
        type: 'string'
      }
    ],
    run(context, path, varName) {
      fs.stat(path, function(err) {
        if (err && err.code === 'ENOENT')
          console.log('File or directory not found');
      });

      const config = dotenv.config({ path: path });
      if (!config || config.error) {
        throw new Error('Unexpected error occured when parsing the config file', config.error);
      }
      
      if (config.parsed[varName] === undefined) {
        throw new Error('Variable not found!');
      }

      return config.parsed[varName];
    }
  }
];
