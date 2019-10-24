const dictionary = generateDictionary();

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

function generateDictionary(letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ)(-=?:%;№!\'\"\\,.*#@~`$% ", code = "[| ]", length = 4) {
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

    for (let i = 0; i < letters.length; i++) {
        let indexes = addZeros(i.toString(code.length), length);
        let str = "";
        for (let j = 0; j < indexes.length; j++) {
            str += code[parseInt(indexes[j])];
        }
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