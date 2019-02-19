'use strict';

class ValidationContract {
    constructor(){
        this._errors = [];
    }
    isNotArrayOrEmpty(value, message){
        if(!value && value.length == 0)
            this._errors.push({ message: message });
    }
}
