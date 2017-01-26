/**
 * Created by felix on 27.10.2016.
 */

class MakePrivate {
    constructor(value) {
        let _value="";

        this.setValue = function (value) {
            _value = value;
        };

        this.getValue = function () {
            return _value;
        };

        this.setValue(value);
    }

    info() {
        return "Wert: " + this.getValue();
    }
}

let test = new MakePrivate("Hello World");
console.log(test.getValue());
test.setValue("Hello Peeps");
console.log(test.getValue());
console.log(test.info());

