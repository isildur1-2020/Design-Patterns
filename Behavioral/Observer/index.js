var Publisher = /** @class */ (function () {
    function Publisher() {
        var _this = this;
        this.suscribers = [];
        this.state = {
            showModal: false
        };
        this.suscribe = function (suscriber) {
            _this.suscribers.push(suscriber);
            console.log("Alguien se ha suscrito!");
        };
        this.unsuscribe = function (suscriber) {
            _this.suscribers = _this.suscribers.filter(function (sus) { return sus !== suscriber; });
        };
        this.notify = function () {
            _this.suscribers.forEach(function (el) { return el.update(_this.state); });
        };
        this.bussinesLogic = function () {
            _this.state = {
                showModal: true
            };
            _this.notify();
        };
    }
    return Publisher;
}());
var ConcreteSuscriber = /** @class */ (function () {
    function ConcreteSuscriber() {
        this.otraMierda = false;
        console.log(this.otraMierda);
    }
    ConcreteSuscriber.prototype.update = function (state) {
        var showModal = state.showModal;
        this.otraMierda = showModal;
        console.log("NEW STATE", this.otraMierda);
    };
    return ConcreteSuscriber;
}());
// CLIENTE
var publisher = new Publisher();
var suscriber1 = new ConcreteSuscriber();
var suscriber2 = new ConcreteSuscriber();
publisher.suscribe(suscriber1);
publisher.suscribe(suscriber2);
publisher.bussinesLogic();
