/*
let strDic = JSON.stringify(dic);
console.log(btoa(strDic));
Encode */
const Field = document.getElementById("Field");
const SupportedVersions = ["2.7.0"];
const Data = [
    {Name: "Coins", Index: "coins", Type: "number"},
    {Name: "Diamonds", Index: "prestigePoints", Type: "number"},
];

let Items = [];
let loaded = false;
let jsonData = {};

function Submit() {
    let save = Field.value;
    let pe = "";
    try {
        pe = "Incorrect save file format";
        let decoded = atob(save);
        pe = "Could not decode due to data not being a dictionary.";
        let json = JSON.parse(decoded);
        pe = "Could not find game version.";
        let version = json["version"];
        if (version == undefined) throw "Not found.";
        pe = "This version of Synergism is not supported."
        if (!SupportedVersions.includes(version)) throw "Unsupported.";
        Items = [];
        for (let i = 0; i < Data.length; i++) {
            let d = Data[i]
            pe = `Cannot find value at index "${d["Index"]}" of type "${d["Type"]}"`;
            let val = json[d["Index"]];
            if (val == undefined) throw "Not found";
            Items[i] = new Item(d, val);
        }
        loaded = true;
        jsonData = json;
    } catch (error) {
        console.log(pe);
        loaded = false;
    }
}

function OutSubmit() {
    if (loaded) {
        let dataStr = JSON.stringify(jsonData);
        document.getElementById("OutField").value = btoa(dataStr);
    } else {
        document.getElementById("OutField").value = "No save file loaded";
    }
}

function SubmitChange(Value) {
    if (loaded) {
        let in0,in1,val;
        switch(Value) {
            case "coins":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                for (let i = 0; i < Items.length; i++) {
                    Items[i].Update();
                }
                break;
            case "prestigePoints":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                for (let i = 0; i < Items.length; i++) {
                    Items[i].Update();
                }
                break;
            default:
                break;
        }
    }
}

function ConvertNumber(in0, in1Str, isUndefined=false) {
    let in1 = Number(in1Str);
    if (isUndefined) { return 0; };
    if (!isFinite(in0) || isNaN(in0) || !isFinite(in1) || isNaN(in1)) { return 0; };
    if (in0 < 0 || in0 >= 10 || in1 < 0) { return 0; };
    if (in1Str.length > 307) { return 0; };
    let splited = in1Str.split("e+");
    if (splited.length == 2) {
        let man = Math.floor(Number(splited[0])).toString();
        let exp = "0".repeat(Math.round(Number(splited[1])));
        return `${in0}e+${man + exp}`;
    } else if (splited.length == 1) {
        if (in1 < 308) {
            return Number(`${in0}e+${in1}`);
        } else {
            return `${in0}e+${in1}`;
        }
    } else {
        return 0;
    }
}
