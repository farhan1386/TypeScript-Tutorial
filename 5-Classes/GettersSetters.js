var Player = /** @class */ (function () {
    function Player() {
    }
    Object.defineProperty(Player.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.getFullName = function () {
        return this._firstName + " " + this._lastName;
    };
    return Player;
}());
var player = new Player();
console.log(player.age = 10);
