const converter = require('json-2-csv');
const fs = require('fs');

exports.convertCSV = (data) => {
  converter.json2csv(data, (err, csv) => {
    if (err) {
      throw err
    }
  
    // print CSV string
    console.log(csv)
  
    // write CSV to a file
    fs.writeFileSync('data.csv', csv)
  });
}

