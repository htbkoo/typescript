import * as https from "https";
import * as fs from "fs";

const startPage = 1;
const endPage = 6;

for (let i = startPage; i <= endPage; ++i) {
    https.get(getUrl(i), res => {
        const file = fs.createWriteStream(`./page-${i}.jpg`);
        res.pipe(file);
        res.on("end", () => console.log(`downloaded page: ${i}`));
    });
}

function getUrl(page) {
    return `https://image.slidesharecdn.com/neversplitthedifference-170626190111/95/never-split-the-difference-cheatsheet-${page}-638.jpg`;
}