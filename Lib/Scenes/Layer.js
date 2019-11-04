/**
 * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
 */
class Layer {
    constructor() {
        this.imgs = [];
    }

    /**
     * Adds a new Image to the layer.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {string} name Name of the image. (do not give the same name in one layer)
     * @param {string} imgSrc Source of the image.
     * @param {number} wx New x posistion or takes old posistion.
     * @param {number} wy New y posistion or takes old posistion.
     * @param {number} rot Rotation is in radians (set 0 for no rotation).
     * @param {number} width Width of rendering image.
     * @param {number} height Height of rendering image.
     * @param {string} renderPoint Give the render point for the image. 
     * @param {boolean} draw Set if the image needs to be drawn.
     */
    AddImg(name, imgSrc, wx, wy, rot, width, height, renderPoint, draw) {
        let _newImg = new Img(name, imgSrc, wx, wy, rot, width, height, renderPoint, draw);
        this.imgs.push(_newImg);
    }

    /**
     * Updates an image or all images.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {string} name Name of the image.
     * @param {number} wx New x posistion or takes old posistion.
     * @param {number} wy New y posistion or takes old posistion.
     * @param {number} rot Rotation is in radians.
     * @param {number} width Width of rendering image.
     * @param {number} height Height of rendering image.
     * @param {boolean} draw Set if the image needs to be drawn.
     */
    Update(name, wx, wy, rot, width, height, draw) {
        if (name == "all") {
            let m = this.imgs.length;
            for (let i = 0; i < m; i++) {
                this.UpdateImg(i, wx, wy, rot, width, height, draw);
            }
        } else {
            let i = this.FindImg(name);
            this.UpdateImg(i, wx, wy, rot, width, height, draw)
        }
    }

    UpdateImg(i, wx, wy, rot, width, height, draw = this.imgs[i].draw) {
        this.imgs[i].wx = wx || this.imgs[i].wx;
        this.imgs[i].wy = wy || this.imgs[i].wy;
        this.imgs[i].rot = rot || this.imgs[i].rot;
        this.imgs[i].width = width || this.imgs[i].width;
        this.imgs[i].height = height || this.imgs[i].height;
        this.imgs[i].RenderPoint(this.imgs[i].pos);
    }

    /**
     * Set for an image to render or not.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {string} name Name of the image.
     * @param {boolean} draw Set if the image needs to be drawn.
     */
    SetDraw(name, draw) {
        let i = this.FindImg(name);
        this.imgs[i].draw = draw;
    }

    /**
     * Set all images to nonrendering.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     */
    TurnOff() {
        let max = this.imgs.length;
        for (let i = 0; i < max; i++) {
            this.imgs[i].draw = false;
        }
    }

    /**
     * Render one image in the layer.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {string} name Name of the image.
     */
    TurnImgOn(name) {
        this.TurnOff();
        this.SetDraw(name, true);
    }

    /**
     * Gives you the locating of an image in a layer.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {string} name Name of the image.
     * @return {number}
     */
    FindImg(name) {
        let m = this.imgs.length;
        for (let i = 0; i < m; i++) {
            if (this.imgs[i].name == name) {
                return i;
            }
        }
        return 0;
    }
}