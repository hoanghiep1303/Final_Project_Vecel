module.exports = {
    counterUnRead: function (arr) {
        var result = arr.filter((arr) => arr.isRead == false).length;
        return result;
    },
    counter: (a) => a.length,
    sum: (a, b) => a + b,
    sale: (a, b) => {
        var result = (a * (100 - b)) / 100;
        if (result <= 0) return "$1";
        return result.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    },
    each_upto: function (ary, max, options) {
        if (!ary || ary.length == 0) return options.inverse(this);

        var result = [];
        for (var i = 0; i < max && i < ary.length; ++i)
            result.push(options.fn(ary[i]));
        return result.join("");
    },
    dateNow: new Date(),
    ifeq: function (a, b, options) {
        if (a == b) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },
    ifCond: function (v1, operator, v2, options) {
        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '!=':
                return (v1 != v2) ? options.fn(this) : options.inverse(this);
            case '!==':
                return (v1 !== v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    },
}