const fs = require('fs');

const generateReadMe = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile('dist/README.md', data, err => {
      //if error send to catch() method
      if(err){
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'README generated!'
      });
    });
  });
};

module.exports = generateReadMe;
