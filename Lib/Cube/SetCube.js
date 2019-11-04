function SetCube() {
    Cube.vertices = [
        new Vector3(-1, 1, -1),
        new Vector3(1, 1, -1),
        new Vector3(1, -1, -1),
        new Vector3(-1, -1, -1),
        new Vector3(-1, 1, 1),
        new Vector3(1, 1, 1),
        new Vector3(1, -1, 1),
        new Vector3(-1, -1, 1)
    ];

    Cube.indices = [
        [0, 1, 2, 3],
        [1, 5, 6, 2],
        [5, 4, 7, 6],
        [4, 0, 3, 7],
        [0, 4, 5, 1],
        [3, 2, 6, 7]
    ];

    Cube.colors = [
        [228, 0, 255], //front
        [205, 0, 229], //left
        [57, 0, 64], //back
        [205, 0, 229], //right
        [191, 0, 191], //bot
        [255, 10, 255] //top
    ];

    Cube.angle = new Vector3(0, 0, 0);
}