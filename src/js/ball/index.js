var Ball = function(size) {

    this.size = ((size === undefined) || (size <= 0))
                ? 1
                : size;

    this.status = 'standing';

    return this;

};

Ball.prototype.startBouncing = function startBouncing() {

    this.status = 'bouncing';

};

Ball.prototype.stopBouncing = function stopBouncing() {

    this.status = 'standing';

};

module.exports = Ball;
