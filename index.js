import dictionary from "./dictionary.js";
import translate from "./translate.js";

const string = `
${translate(dictionary.hello)} 
${translate(dictionary.myNameIs)("John Doe")} 
${translate(dictionary.age)("21")}`;

console.log(string);