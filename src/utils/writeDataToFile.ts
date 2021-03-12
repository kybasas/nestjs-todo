import * as fs from "fs";

export function writeDataToFile(filename, content) {
    return new Promise((resolve, reject) => {
        const writeStream = fs.createWriteStream(filename);

        writeStream.write(content, 'utf8');

        writeStream.on('end', function () {
            resolve(true)
        });
        writeStream.on('error', function (err) {
           reject(false)
        });
    })

}