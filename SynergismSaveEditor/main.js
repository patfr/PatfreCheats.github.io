const Field = document.getElementById("Field");
const SupportedVersions = ["2.1.2", "2.7.0"];
const Data = [
    {Name: "Coins", Index: "coins", Type: "number"},
    {Name: "Coins this Prestige", Index: "coinsThisPrestige", Type: "number"},
    {Name: "Coins this Transcension", Index: "coinsThisTranscension", Type: "number"},
    {Name: "Coins this Reincarnation", Index: "coinsThisReincarnation", Type: "number"},
    {Name: "Total coins", Index: "coinsTotal", Type: "number"},
    {Name: "Diamonds", Index: "prestigePoints", Type: "number"},
    {Name: "Mythos", Index: "transcendPoints", Type: "number"},
    {Name: "Particals", Index: "reincarnationPoints", Type: "number"},
    {Name: "Crystals", Index: "prestigeShards", Type: "number"},
    {Name: "Mythos shards", Index: "transcendShards", Type: "number"},
    {Name: "Atoms", Index: "reincarnationShards", Type: "number"},
    {Name: "Obtainium", Index: "researchPoints", Type: "number"},
    {Name: "Offerings", Index: "runeshards", Type: "number"},
];

for (let i = 0; i < Data.length; i++) {
    document.getElementById(`${Data[i]["Index"]}EditTitle`).innerHTML = Data[i]["Name"];
}

let Items = [];
let loaded = false;
let jsonData = {};

function ListSupportedVersions() {
    let str = "Supported versions\n\n";
    for (let i = SupportedVersions.length - 1; i > -1; i--) {
        if (i == 0)
            str += `v${SupportedVersions[i]}`;
        else 
            str += `v${SupportedVersions[i]}\n`;
    }
    console.log(str);
}

function Submit() {
    let save = Field.value;
    let pe = "";
    try {
        pe = "Incorrect save file format. Error #100";
        let decoded = atob(save);
        pe = "Could not decode due to data not being a dictionary. Error #101";
        let json = JSON.parse(decoded);
        pe = "Could not find game version. Error #102";
        let version = json["version"];
        if (version == undefined) throw "Not found.";
        pe = `Version v${version} of Synergism is not currently supported. Error #103`;
        if (!SupportedVersions.includes(version)) throw "Unsupported.";
        Items = [];
        for (let i = 0; i < Data.length; i++) {
            let d = Data[i]
            pe = `Cannot find value at index "${d["Index"]}" of type "${d["Type"]}". Error #104`;
            let val = json[d["Index"]];
            if (val == undefined) throw "Not found";
            pe = "Unknown problem. Error #105";
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
                break;
            case "coinsThisPrestige":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                break;
            case "coinsThisTranscension":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                break;
            case "coinsThisReincarnation":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                break;
            case "coinsTotal":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                break;
            case "prestigePoints":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                break;
            case "transcendPoints":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                break;
            case "reincarnationPoints":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                break;
            case "prestigeShards":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                break;
            case "transcendShards":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                break;
            case "reincarnationShards":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                break;
            case "researchPoints":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                break;
            case "runeshards":
                in0 = document.getElementById(`${Value}Input0`);
                in1 = document.getElementById(`${Value}Input1`);
                val = ConvertNumber(Number(in0.value), in1.value, in0 == undefined || in1 == undefined);
                jsonData[Value] = val;
                break;
            default:
                break;
        }

        for (let i = 0; i < Items.length; i++) {
            Items[i].Update(true);
        }
    }
}

function ConvertNumber(in0, in1Str, isUndefined=false) {
    let in1 = Number(in1Str);
    if (isUndefined) { return 0; };
    if (!isFinite(in0) || isNaN(in0) || !isFinite(in1) || isNaN(in1)) { return 0; };
    if (in0 < 0 || in0 >= 10 || in1 < 0 || in1 > 1e307) { return 0; };
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
