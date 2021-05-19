const sassScript = document.createElement("script");
sassScript.src = "https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.9.12/sass.sync.min.js";
const ILUSScript = document.createElement("link");
ILUSScript.href = "./main.scss";

const head = sassScript + ILUSScript;

document.head.appendChild(head);

onload = () => {

    Sass.compile(document.querySelector("style[type='scss']").innerHTML, res => {
        let cssStyleTag = document.createElement("style");
        cssStyleTag.innerHTML = res.text;
        res.formatted&&console.error(res.formatted);
        res.text&&document.head.appendChild(cssStyleTag);
    });

}
