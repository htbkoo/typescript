const https = require("https");
const fs = require('fs');
const stream = require('stream');

const url = "https://jsonplaceholder.typicode.com/posts/1";

for (let i = 1; i <= 6; ++i) {
    https.get(getUrl(i), res => {
        // new stream.PassThrough()
        // res.setEncoding("utf8");
        let file = fs.createWriteStream(`./page-${i}.jpg`);
        res.pipe(file);
        // let body = "";
        // res.on("data", data => {
        //     body += data;
        // });
        // res.on("end", () => {
        // body = JSON.parse(body);
        // console.log(`page data: ${i}`);
        // console.log(body);
        // });
    });
}

/*

https.get(getUrl(1), res => {
    // new stream.PassThrough()
    // res.setEncoding("utf8");
    let file = fs.createWriteStream(`./page-${1}.jpg`);
    res.pipe(file);
    // let body = "";
    // res.on("data", data => {
    //     body += data;
    // });
    // res.on("end", () => {
    // body = JSON.parse(body);
    // console.log(`page data: ${i}`);
    // console.log(body);
    // });
});

*/

function getUrl(page) {
    return `https://image.slidesharecdn.com/neversplitthedifference-170626190111/95/never-split-the-difference-cheatsheet-${page}-638.jpg?cb=1520023388`;
}