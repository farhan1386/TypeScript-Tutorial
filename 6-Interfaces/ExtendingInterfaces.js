var Mail = /** @class */ (function () {
    function Mail() {
    }
    Mail.prototype.send = function (email) {
        console.log("Sent email to " + email + " ms. ");
        return true;
    };
    Mail.prototype.later = function (email, after) {
        console.log("Send email to " + email + " in " + after + " ms.");
        return true;
    };
    Mail.prototype.queue = function (email) {
        console.log("Queue an email to " + email + ".");
        return true;
    };
    return Mail;
}());
var mail = new Mail();
console.log(mail.send("exampl@gmail.com"));
console.log(mail.queue("myemail@example.com"));
console.log(mail.later("example123@gmail.com", 10));
