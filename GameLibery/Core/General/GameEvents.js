(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../Core/GameCreation", "./Enums"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameCreation_1 = require("../../Core/GameCreation");
    var Enums_1 = require("./Enums");
    var GameEvents = /** @class */ (function () {
        // tslint:disable-next-line:no-empty
        function GameEvents() {
        }
        GameEvents.prototype.ManageEvents = function (keyCode) {
            this.ProccessDirectionEvent(keyCode);
        };
        GameEvents.GetDirection = function (keyCode) {
            // tslint:disable-next-line:typedef
            var directionString = Enums_1.Direction[keyCode];
            if (directionString == null) {
                throw new Error("keyCode is wrong!");
            }
            var direction = Enums_1.Direction[directionString];
            return direction;
        };
        GameEvents.prototype.ProccessDirectionEvent = function (keyCode) {
            // tslint:disable-next-line:typedef
            var direction = GameEvents.GetDirection(keyCode);
            GameCreation_1.GameCreation.HumanPlayer.Move(direction);
        };
        return GameEvents;
    }());
    exports.GameEvents = GameEvents;
});
//# sourceMappingURL=GameEvents.js.map