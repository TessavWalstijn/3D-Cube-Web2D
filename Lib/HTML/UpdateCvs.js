/**
 * Updates the canvas width and hight.
 * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
 * @param {object} cvs NewCanvas() object.
 * @param {boolean} clear Change the canvas clear default true.
 */
function UpdateCvs(cvs, clear = true) {
    if (cvs.fullscreen) {
        //if the width is not the same resize the canvas width
        if (Browser.width != cvs.width) {
            cvs.width = Browser.width;
        }
        //if the height is not the same resize the canvas height
        if (Browser.height != cvs.height) {
            cvs.height = Browser.height;
        }
    } else {
        let rect = cvs.getBoundingClientRect();
        cvs.x = rect.left;
        cvs.y = rect.top;
    }
    if (cvs.dimension == "2d")
        if (clear)
            cvs.ctx.clearRect(0, 0, cvs.width, cvs.height);
}