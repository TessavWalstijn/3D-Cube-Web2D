function LostPos() {
    lost = [
        //top line
        new Vector2(10, 10),
        new Vector2(Browser.width * 0.25, 10),
        new Vector2(Browser.width * 0.5, 10),
        new Vector2(Browser.width * 0.75, 10),
        //right line
        new Vector2(Browser.width - 10, 10),
        new Vector2(Browser.width - 10, Browser.height * 0.25),
        new Vector2(Browser.width - 10, Browser.height * 0.5),
        new Vector2(Browser.width - 10, Browser.height * 0.75),
        //bottom line
        new Vector2(Browser.width - 10, Browser.height - 10),
        new Vector2(Browser.width * 0.25, Browser.height - 10),
        new Vector2(Browser.width * 0.5, Browser.height - 10),
        new Vector2(Browser.width * 0.75, Browser.height - 10),
        //left line
        new Vector2(10, Browser.height - 10),
        new Vector2(10, Browser.height * 0.25),
        new Vector2(10, Browser.height * 0.5),
        new Vector2(10, Browser.height * 0.75)
    ];
}