const dotenv = require('dotenv');
const fs = require('fs');

module.exports.templateTags = [
  {
    displayName: 'SystemEnv',
    name: 'systemenv',
    description: 'Pull data from system variables',
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
    run(context, path, sysvar) {
      fs.stat(path, function(err) {
        if (err && err.code === 'ENOENT')
          console.log('File or directory not found');
      });

      dotenv.config({ path: path });
      if (process.env[sysvar] === undefined) {
        throw new Error('Variable not found!');
      }

      return process.env[sysvar];
    }
  }
];
