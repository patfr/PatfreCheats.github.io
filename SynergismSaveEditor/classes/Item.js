class Item {
    constructor(Values, Current) {
        this.Name = Values.Name;
        this.Index = Values.Index;
        this.Type = Values.Type;
        this.Current = Current;

        this.CV = document.getElementById(`${this.Index}EditCV`);
        this.Input0 = document.getElementById(`${this.Index}Input0`);
        this.Input1 = document.getElementById(`${this.Index}Input1`);
        
        this.Update();
    }

    Update(UpdateOnly=false) {
        if (loaded) {
            this.Current = jsonData[this.Index];
        }

        switch(this.Type) {
            case "number":
                let strs = this.Current.toString().split("e+");
                if (strs.length == 2) {
                    this.CV.innerHTML = `Current: ${strs[0]}e+${Number(strs[1])}`;
                    if (!UpdateOnly) {
                        this.Input0.value = strs[0];
                        if (this.Input1 != undefined) {
                            this.Input1.value = strs[1];
                        }
                    }
                } else if (strs.length == 1) {
                    let length = this.Current.toString().length - 1;
                    this.CV.innerHTML = `Current: ${this.Current / Math.pow(10, length)}e+${length}`;
                    if (!UpdateOnly) {
                        this.Input0.value = this.Current / Math.pow(10, length);
                        if (this.Input1 != undefined) {
                            this.Input1.value = length;
                        }
                    }
                }
                break;
            default:
                break;
        }
    }
}
