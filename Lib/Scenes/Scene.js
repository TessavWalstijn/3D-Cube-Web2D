class Scene {
    /**
     * Sets up the scene.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {number} newLayers Add layer(s) to the scene
     */
    constructor(newLayers = 0) {
        this.layers = [];
        this.AddLayer(newLayers);
    }

    /**
     * Renders all layers at a canvas.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {object} cvs Give a canvas object.
     */
    Renderer(cvs) {
        if (!Behaviour.rendering) {
            Behaviour.rendering = true;
            let mi = this.layers.length;
            for (let i = 0; i < mi; i++) {
                let mj = this.layers[i].imgs.length;
                for (let j = 0; j < mj; j++) {
                    if (this.layers[i].imgs[j].draw) {
                        cvs.ctx.save();
                        cvs.ctx.translate(
                            this.layers[i].imgs[j].wx,
                            this.layers[i].imgs[j].wy
                        );
                        cvs.ctx.rotate(this.layers[i].imgs[j].rot);
                        cvs.ctx.drawImage(
                            this.layers[i].imgs[j].img,
                            this.layers[i].imgs[j].dx,
                            this.layers[i].imgs[j].dy,
                            this.layers[i].imgs[j].width,
                            this.layers[i].imgs[j].height
                        );
                        cvs.ctx.restore();
                    }
                }
            }
        }
    }

    /**
     * Add new layer(s).
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {number} newLayers Amount of layers to add
     */
    AddLayer(newLayers) {
        let l = this.layers.length,
            m = newLayers + l;
        for (let i = l; i < m; i++) {
            let j = new Layer();
            this.layers.push(j);
        }
    }

    /**
     * Slice the layers array.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {number} start The beginning of the specified portion of the array.
     * @param {number} end The end of the specified portion of the array.
     */
    SliceLayer(start, end) {
        this.layers.slice(start, end);
    }
}