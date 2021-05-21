async function Library (url) {
    lib = await fetch(url);
    data = await lib.text();
    libLink = document.createElement("style");
    libLink.setAttribute("fetched", "true");
    libLink.innerHTML = data;
    await document.head.appendChild(libLink);
}

Library ("https://cdn.jsdelivr.net/gh/assassinaguilar/ILUS.CSS/ILUS5-SCSS/main.scss")
Library ("https://cdn.jsdelivr.net/gh/atoms19/ILUS.CSS/ILUS5-SCSS/_variables.scss");
Library ("https://cdn.jsdelivr.net/gh/atoms19/ILUS.CSS/ILUS5-SCSS/_mixins.scss");
Library ("https://cdn.jsdelivr.net/gh/atoms19/ILUS.CSS/ILUS5-SCSS/_functions.scss");
Library ("https://cdn.jsdelivr.net/gh/atoms19/ILUS.CSS/ILUS5-SCSS/_resets.scss");
Library ("https://cdn.jsdelivr.net/gh/atoms19/ILUS.CSS/ILUS5-SCSS/_elements.scss");
Library ("https://cdn.jsdelivr.net/gh/atoms19/ILUS.CSS/ILUS5-SCSS/_forms.scss");
Library ("https://cdn.jsdelivr.net/gh/atoms19/ILUS.CSS/ILUS5-SCSS/_specials.scss");
Library ("https://cdn.jsdelivr.net/gh/atoms19/ILUS.CSS/ILUS5-SCSS/_utilities.scss");
Library ("https://cdn.jsdelivr.net/gh/atoms19/ILUS.CSS/ILUS5-SCSS/_responsiveness.scss");

const sassScript = document.createElement("script");
sassScript.src = "https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.9.12/sass.sync.min.js";

document.head.appendChild(sassScript);

onload = () => {
   var scss = ""; document.querySelectorAll("style[fetched]").forEach(file => {
        scss += file.innerText;
    });
    Sass.compile(scss, res => {
        let cssStyleTag = document.createElement("style");
        cssStyleTag.innerHTML = res.text;
         res.formatted&&console.error(res.formatted);
         res.text&&document.head.appendChild(cssStyleTag);
    });
}
