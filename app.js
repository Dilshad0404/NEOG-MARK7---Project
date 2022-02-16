let inputArea = document.querySelector("#input");
let button = document.querySelector(".btn");
let outputArea = document.querySelector("#output");


const serverURL = "https://api.funtranslations.com/translate/yoda.json"

function translationURL(text) {
    return  serverURL + "?" + "text=" + text
};

function counterError(error) {
    alert("something went wrong! please try after sometimes.")
    }

    function clickHandler() {
        var inputTxt = inputArea.value;

        fetch(translationURL(inputTxt))
            .then(response => response.json())
            .then(json => {
                var afterTranslation = json.contents.translated;
                outputArea.innerText = afterTranslation
            })
            .catch(counterError)
    };





    button.addEventListener("click", clickHandler);
