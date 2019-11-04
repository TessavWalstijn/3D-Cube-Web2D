/**
 * Sets the canvas properties
 * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
 * @param {object} cvs Give the html canvas Id
 * @param {boolean} fullscreen Change the canvas fullscreen default false
 * @param {string} dimension Change the canvas dimension default "2d"
 * @return {object}
 */
function NewCanvas(cvs, fullscreen = false, dimension = "2d") {
    let playing = !!(cvs.getContext && cvs.getContext(dimension)),
        ctx = cvs.getContext(dimension);
    if (fullscreen) {
        cvs.style.position = "fixed";
        cvs.style.left = cvs.x = 0;
        cvs.style.top = cvs.y = 0;
    } else {
        let rect = cvs.getBoundingClientRect();
        cvs.x = rect.left;
        cvs.y = rect.top;
    }
    cvs.ctx = ctx;
    cvs.playing = playing;
    cvs.dimension = dimension;
    cvs.fullscreen = fullscreen;
    return cvs;
}