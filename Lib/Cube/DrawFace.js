function SetImages() {
    Face = new Scene(3);
    Face.layers[0].AddImg("happyLM", "./Img/face/happyL.png", 0, 0, 0, 0, 0, "topleft"); // Mouth Left
    Face.layers[0].AddImg("happyRM", "./Img/face/happyR.png", 0, 0, 0, 0, 0, "topleft"); // Mouth Right
    Face.layers[0].AddImg("happyM", "./Img/face/happyM.png", 0, 0, 0, 0, 0, "topleft"); // Mouth Middle
    Face.layers[0].AddImg("ohhM", "./Img/face/ohhM.png", 0, 0, 0, 0, 0, "topleft"); // Mouth Ohh
    Face.layers[0].AddImg("sadM", "./Img/face/sadM.png", 0, 0, 0, 0, 0, "topleft"); // Mouth Sad

    Face.layers[1].AddImg("happyE", "./Img/face/happyE.png", 0, 0, 0, 0, 0, "topleft"); // Eyes Happy
    Face.layers[1].AddImg("ohhE", "./Img/face/ohhE.png", 0, 0, 0, 0, 0, "topleft"); // Eyes Ohh
    Face.layers[1].AddImg("sadE", "./Img/face/sadE.png", 0, 0, 0, 0, 0, "topleft"); // Eyes Sad

    Face.layers[2].AddImg("dots", "./Img/face/dots.png", 0, 0, 0, 0, 0, "topleft"); // Pupils
}

function DrawFace(cvs, feeling) {
    Face.layers[0].TurnImgOn(feeling + "M");
    if (feeling != "happyL" || feeling != "happyR")
        Face.layers[1].TurnImgOn(feeling + "E");

    let xPos = 100,
        yPos = 0,
        xMove = 1.4,
        yMove = 1.8;
    Face.layers[0].Update(feeling + "M",
        Browser.centerX - (xPos * Browser.tFraction) - Cube.angle.y * xMove,
        Browser.centerY - (yPos * Browser.tFraction) + Cube.angle.x * yMove,
        0,
        200 * Browser.tFraction,
        100 * Browser.tFraction);

    if (feeling != "happyL" || feeling != "happyR")
        Face.layers[1].Update(feeling + "E",
            Browser.centerX - (xPos * Browser.tFraction) - Cube.angle.y * xMove,
            Browser.centerY - ((100 + yPos) * Browser.tFraction) + Cube.angle.x * yMove,
            0,
            200 * Browser.tFraction,
            100 * Browser.tFraction);

    xPos = 100;
    yPos = 100;
    xMove = 1.8;
    yMove = 2.3;
    Face.layers[2].Update("dots",
        Browser.centerX - (xPos * Browser.tFraction) - Cube.angle.y * xMove,
        Browser.centerY - (yPos * Browser.tFraction) + Cube.angle.x * yMove,
        0,
        200 * Browser.tFraction,
        100 * Browser.tFraction);

    Face.Renderer(cvs)
}