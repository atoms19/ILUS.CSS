import fs from "fs";
import path from "path";
import sass from "node-sass";

const compileSass =() =>{
    sass.render({
        file: path.join(__dirname, "scss/main.scss"),
        outputStyle: "compressed"
    },  (err, result) => {
        if (err) {
            console.log(err);
        } else {
            fs.writeFileSync(
                path.join(__dirname + "/dist/css", "main.min.css"),
                result.css
            );
        }
    });
};

compileSass();
console.log("scss complied");