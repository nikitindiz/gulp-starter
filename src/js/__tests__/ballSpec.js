var Ball = require('../ball');


describe("Ball", function() {

    beforeEach(function() {

        myNewBall = new Ball();



        myNewBall.stopBouncing();
    });

    it("can bounce",function(){

        expect(myNewBall.status).toEqual('standing');

        myNewBall.startBouncing();

        expect(myNewBall.status).toEqual('bouncing');
    });

});