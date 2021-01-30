const dotenv = require('dotenv');
const untildify = require('untildify');
const dotenvExpand = require('dotenv-expand');

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
      const expandedPath = untildify(path);
    
      fs.stat(expandedPath, function(err) {
        if (err && err.code === 'ENOENT')
          console.log('File or directory not found');
      });

      const config = dotenv.config({ path: expandedPath });
      dotenvExpand(config);


      if (!config || config.error) {
        throw new Error('We could not parse the config..what have you done 😃', config.error);
      }
      
      if (config.parsed[varName] === undefined) {
        throw new Error('Variable not found!');
      }

      return config.parsed[varName];
    }
  }
];
