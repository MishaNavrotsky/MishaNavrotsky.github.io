let dictionary = {
    "0": "][  ",
    "1": "| []",
    "2": "|]|[",
    "3": "[]| ",
    "4": "|[||",
    "5": "]| ]",
    "6": "]]] ",
    "7": "||[]",
    "8": "[ ] ",
    "9": "]||]",
    " ": "[[[[",
    ")": "[]][",
    "^": "[[[]",
    "&": "][[]",
    "_": "][]]",
    "(": "[][]",
    "-": "]|[[",
    "=": "[[[|",
    "?": "][[[",
    ":": "[][ ",
    "%": "]]]|",
    ";": "[[|[",
    "№": "[|[[",
    "!": " []]",
    "'": "| ]]",
    "\"": "[[][",
    "\\": "[] ]",
    ",": "|[[[",
    ".": "][ [",
    "*": "][][",
    "#": "[[]]",
    "@": "|[[ ",
    "~": "[] [",
    "`": "[[ [",
    "$": "[[[ ",
    "\n": "[[  ",
    "[": " [[[",
    "]": "|]]]",
    "|": "[|[]",
    "+": "[|| ",
    "а": "[|][",
    "б": "|[[]",
    "в": "][] ",
    "г": "][|[",
    "д": "[[ ]",
    "е": "|][[",
    "ё": "[]]]",
    "ж": "[]] ",
    "з": "[[ |",
    "и": "|][]",
    "й": "]][[",
    "к": "]]][",
    "л": "[  [",
    "м": "| [[",
    "н": "[[] ",
    "о": "][ ]",
    "п": " ]]]",
    "р": "] []",
    "с": "[ ]|",
    "т": "[[||",
    "у": "] [|",
    "ф": "]]]]",
    "х": "][]|",
    "ц": "[[|]",
    "ч": "[ []",
    "ш": "|[][",
    "щ": "|]][",
    "ъ": "]] [",
    "ы": "][[|",
    "ь": " [[|",
    "э": "]||[",
    "ю": "[[]|",
    "я": " ][[",
    "А": "]|][",
    "Б": "|[|[",
    "В": "] [[",
    "Г": "[ ]]",
    "Д": "[][|",
    "Е": "][[ ",
    "Ё": " ][]",
    "Ж": "] ][",
    "З": " [[ ",
    "И": " [][",
    "Й": "[]|[",
    "К": "] ]]",
    "Л": "]|[ ",
    "М": " [[]",
    "Н": "[|]|",
    "О": " [|[",
    "П": "[]]|",
    "Р": "[ [|",
    "С": "] |[",
    "Т": " ]][",
    "У": "[|]]",
    "Ф": " ] ]",
    "Х": "|[]]",
    "Ц": "| ] ",
    "Ч": "  ][",
    "Ш": " |[ ",
    "Щ": "]|[|",
    "Ъ": "|[ [",
    "Ы": " ]|[",
    "Ь": "[|[ ",
    "Э": "  [[",
    "Ю": "]]|]",
    "Я": "]][ ",
    "a": " [ [",
    "b": "[ |[",
    "c": "][ |",
    "d": " ][ ",
    "e": "[|[|",
    "f": "[ ][",
    "g": "]]|[",
    "h": " |[[",
    "i": "]|]]",
    "j": "[]|]",
    "k": "|][|",
    "l": "]] ]",
    "m": "|  [",
    "n": "||][",
    "o": "]][|",
    "p": "] [ ",
    "q": "[| [",
    "r": " [ ]",
    "s": "  ]]",
    "t": "]| [",
    "u": " [] ",
    "v": "[| ]",
    "w": "[] |",
    "x": "][|]",
    "y": "]|[]",
    "z": "][||",
    "A": " ] [",
    "B": "[ [ ",
    "C": "|[[|",
    "D": "[|] ",
    "E": "|]|]",
    "F": "[]  ",
    "G": "[[| ",
    "H": "|[ ]",
    "I": "| ]|",
    "J": "[||]",
    "K": "[||[",
    "L": " ][|",
    "M": "|[|]",
    "N": " ]] ",
    "O": "|] ]",
    "P": "|]] ",
    "Q": "] ]|",
    "R": "|[] ",
    "S": "[   ",
    "T": "|[]|",
    "U": " |][",
    "V": "|][ ",
    "W": "] ] ",
    "X": "[ |]",
    "Y": "[]||",
    "Z": " | [",
    "/": "| ]["
}; //generateDictionary();
let dicCode = "[| ]";
let length = 4;

function encode(text) {
    let enStr = "";
    for (let i = 0; i < text.length; i++) {
        enStr += dictionary[text[i]];
    }
    return enStr;
}

function decode(text, length) {
    let result = "";
    for (let i = 0; i < text.length; i += length) {
        let str = "";
        for (let j = 0; j < length; j++) {
            str += text[i + j];
        }
        for (let k in dictionary) {
            if (dictionary[k] === str) {
                result += k;
                break;
            }
        }
    }
    return result;
}

function generateDictionary(letters = " )^&_(-=?:%;№!\'\"\\,.*#@~`$%\n[]|+-абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/", code = "[| ]", length = 4, chances = {
    "[": 0.4,
    "]": 0.4,
    " ": 0.1,
    "|": 0.1
}) {
    window.dicCode = code;
    window.length = length;
    window.letters = letters;
    let obj = {};
    let n = Math.ceil(Math.log(letters.length) / Math.log(code.length));
    if (n > length) throw "Количество возможных вариантов кодов меньше чем количество букв";

    function addZeros(str, n) {
        let nstr = str;
        for (let i = 0; i < n - str.length; i++)
            nstr = "0" + nstr;
        return nstr;
    }

    // {sym:0.1}
    function returnRandomSymbol(obj) {
        let sym = Object.keys(obj)[0];
        for (let i in obj) {
            if (obj[i] > obj[sym]) sym = i;
            if (~~(Math.random() * 100) / 100 <= obj[i]) {
                return i;
            }
        }
        return sym;
    }
    let usedCodes = [];
    for (let i = 0; i < letters.length; i++) {
        // let indexes = addZeros(i.toString(code.length), length);
        let str = "";


        while (true) {
            for (let j = 0; j < length; j++) {
                str += returnRandomSymbol(chances);
            }
            if (usedCodes.includes(str)) {
                str = "";
            } else {
                usedCodes.push(str);
                break;
            }
        }



        // for (let j = 0; j < indexes.length; j++) {
        //     // str
        //     // str += code[parseInt(indexes[j])];
        // }
        obj[letters[i]] = str;
    }
    return obj;
}


window.onload = () => {
    const dataInput = document.getElementById("dataInput"),
        dataOutput = document.getElementById("dataOutput"),
        popup = document.getElementById("popup");

    dataOutput.addEventListener("click", () => {
        navigator.clipboard.writeText(dataOutput.value).then(() => {
            popup.style.display = "block";
            setTimeout(() => {
                popup.style.display = "none";
            }, 1000)
        })
    })
    dataInput.addEventListener("dblclick", () => {
        dataInput.value = "";
        dataOutput.value = "";
    })
    dataInput.addEventListener("input", () => {
        let isSkoba = dataInput.value[0] === "[" && dataInput.value[dataInput.value.length - 1] === "]";
        for (let i = 0; i < dataInput.value.length; i++) {
            if (!dicCode.includes(dataInput.value[i])) isSkoba = false;
        }

        try {
            if (!isSkoba) {
                if (dataInput.value.length > 0)
                    dataOutput.value = "[" + encode(dataInput.value) + "]";
                else
                    dataOutput.value = "";
            } else {
                dataOutput.value = decode(dataInput.value.substring(1, dataInput.value.length - 1), length);
            }
        } catch (e) {
            dataOutput.value = "Error";

        }
    })



}