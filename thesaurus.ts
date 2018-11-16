
const fs = require('fs')
if (process.argv.length <= 2) {
    console.log("Please specify words");
} else {
    fs.readFile('./openthesaurus.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        for (let k = 2; k < process.argv.length; k++) {


            if (data.indexOf(process.argv[k]) < 0) {
                return console.log("no matches found");
            }
            let arr = data.split("\n");
            let pos;
            for (let i = 0; i < arr.length; i++) {
                let arr2 = arr[i].split(";");
                let help = -1;
                for (let j = 0; j < arr2.length; j++) {

                    if (arr2[j].indexOf(process.argv[k]) > -1) {
                        help = j;
                        break;
                    }


                }
                if (help != -1) {
                    console.log(arr2[help]+":");
                    for (let j = 0; j < arr2.length; j++) {
                        if (j != help) {
                            console.log("\t",arr2[j]);
                        }
                    }
                }
            }
        }
    });
}
