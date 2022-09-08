import en from "./en.js";
import ro from "./ro.js";

export default function translate(adress) {
    const language = "EN";

    let obj;
    switch(language) {
        case "RO": {
            obj = ro;
            break;
        }

        case "EN": {
            obj = en;
            break;
        }
    }

    const adresses = adress.split(".");
    let result = obj;

    adresses.forEach(adress => {
        result = result[adress];
    })

    return result;
}