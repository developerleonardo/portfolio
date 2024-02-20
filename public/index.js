const selectOptions = document.getElementById("select-language");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`../languages/${language}.json`);
    const texts = await requestJson.json();
    
    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        
        textToChange.innerHTML = texts[section][value]
    }
};

selectOptions.addEventListener("change", (e) => {
    changeLanguage(e.currentTarget.value);
})