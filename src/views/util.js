const util = {
    log: (function () {
        let method = {};
        const logType = [
            {
                name: "def",
                style: {
                    color: "black"
                }
            }, {
                name: "info",
                style: {
                    color: "blue"
                }
            }, {
                name: "warn",
                style: {
                    color: "orange"
                }
            }, {
                name: "error",
                style: {
                    color: "red"
                }
            }];
        logType.map(o => {
            method[o.name] = function (s) {
                if (typeof s != "string") {
                    console.log("[" + o.name + "]" + arguments);
                }
                const styles = Object.getOwnPropertyNames(o.style).map(name => name + ":" + (o.style)[name]).join(";");
                window.console.log("%c" + s, styles);
            }
        });
        return method;
    } ())
};

module.exports = util;
