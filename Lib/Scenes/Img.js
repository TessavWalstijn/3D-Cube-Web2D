/**
 * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
 */
class Img {
    constructor(name, imgSrc, wx, wy, rot, width, height, renderPoint = "c", draw = true) {
        this.img = new Image();
        this.name = name;
        this.img.src = imgSrc;
        this.wx = wx;
        this.wy = wy;
        this.rot = rot;
        this.width = width;
        this.height = height;
        this.pos = renderPoint;
        this.draw = draw;
        this.RenderPoint(this.pos);
    }

    RenderPoint(renderPoint) {
        let _renderPoint = renderPoint || this.pos;
        _renderPoint = _renderPoint.toLowerCase();
        switch (_renderPoint) {
            case "tl":
            case "topleft":
            case "top-left":
                this.dx = 0;
                this.dy = 0;
                break;
            case "tc":
            case "topcenter":
            case "top-center":
                this.dx = 0 - this.width / 2;
                this.dy = 0;
                break;
            case "tr":
            case "topright":
            case "top-right":
                this.dx = 0 - this.width;
                this.dy = 0;
                break;
            case "cl":
            case "centerleft":
            case "center-left":
                this.dx = 0;
                this.dy = 0 - this.height / 2;
                break;
            case "c":
            case "center":
                this.dx = 0 - this.width / 2;
                this.dy = 0 - this.height / 2;
                break;
            case "cr":
            case "centerright":
            case "center-right":
                this.dx = 0 - this.width;
                this.dy = 0 - this.height / 2;
                break;
            case "bl":
            case "botleft":
            case "bot-left":
                this.dx = 0;
                this.dy = 0 - this.height;
                break;
            case "bc":
            case "botcenter":
            case "bot-center":
                this.dx = 0 - this.width / 2;
                this.dy = 0 - this.height;
                break;
            case "br":
            case "botright":
            case "bot-right":
                this.dx = 0 - this.width;
                this.dy = 0 - this.height;
                break;
        }
    }
}