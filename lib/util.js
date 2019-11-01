function utils(options) {
    var self = this;
    self._utils = {
        options
    };
    return self;
}

utils.prototype.logLevel = function() {
    var self = this;
    return self._utils.options.logLevel
}

utils.prototype.log = function(message){
    var self = this; 
    if (self._utils.options.logLevel == "debug") {
        console.log(message)
    }
}

utils.prototype.isEmptyObject = function(obj) {
    return (Object.entries(obj).length === 0 && obj.constructor === Object) ? true : false;
}

exports.utils = function(options) {
    return new utils(options);
}