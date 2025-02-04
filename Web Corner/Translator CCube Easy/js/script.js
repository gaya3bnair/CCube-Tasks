const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchageIcon = document.querySelector(".exchange"),
selectTag = document.querySelectorAll("select"),
icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button"),


translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim(),
    translateFrom = selectTag[0].value,
    translateTo = selectTag[1].value;
    if(!text) return;
    toText.setAttribute("placeholder", "Translating...");
    
    // Todo: add api fetch from https://mymemory.translated.net/doc/spec.php
    let myurl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(myurl).then(res => res.json()).then(data =>{
        console.log(data);
        toText.value= data.responseData.translatedText;
    });
    
});

icons.forEach(icon => {
    icon.addEventListener("click", ({target}) => {
        if(!fromText.value || !toText.value) return;
        
        // TODO: add code to copy to Clipboard for the icon with class fa-copy
        if (target.getAttribute("class") == "fas fa-copy") {
            if (target.id == "from") {
              navigator.clipboard.writeText(fromText.value);
            } else {
              navigator.clipboard.writeText(toText.value);
            }
          } else {
            let talk;
            if (target.id == "from") {
              talk = new SpeechSynthesisUtterance(fromText.value);
              talk.lang = selectTag[0].value;
            } 
        // TODO: add code for speechSynthesis for icon with classname fa-volume-up (text to speech)
        else {
            talk = new SpeechSynthesisUtterance(toText.value);
            talk.lang = selectTag[1].value;
          }
          speechSynthesis.speak(talk);
        }
    });
});

selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "hi-IN" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

fromText.addEventListener("keyup", () => {
    if(!fromText.value) {
        toText.value = "";
    }
});


exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});