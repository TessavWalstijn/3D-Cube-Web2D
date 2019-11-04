/** 
 * Keeps track of the browser info.
 * @author TessavWalstijn.GitHub: https://github.com/TessavWalstijn 
 */
var Browser = {
    runTime: -1,
    deltaTime: 0,
    //Updates Browser Info
    Update(time) {
        if (this.runTime === -1) this.deltaTime = time;
        //Calulates Elapsed time from last call
        else this.deltaTime = time - this.runTime;
        this.runTime = time;

        //get the width of the browser
        this.width = window.innerWidth;
        //get the height of the browser
        this.height = window.innerHeight;

        //the center of the browser
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        //the calculation of the width and height.
        this.fraction = this.width / 15;
        this.bFraction = this.fraction * 100;
        this.tFraction = this.fraction * 0.01;
    }
}