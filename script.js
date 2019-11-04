// Objects
var User = { x: 0, y: 0 },
    Cube = {},
    lost = [];

var feeling, Face, canvas, l = 0;

// Booleans
var firstOut = false,
    ctrlOut = false,
    looking = false,
    mouseOut = true;

// Vector2
var where, look, step;

// Controles if the mouse is moving.
window.addEventListener("mousemove", (e) => {
    User.x = e.clientX;
    User.y = e.clientY;
}, false);

function Start() {
    canvas = NewCanvas(GetId("canvas"), true);
    canvas.onmouseout = function(e) {
        mouseOut = true;
    }

    canvas.onmouseover = function(e) {
        mouseOut = false;
    }

    where = new Vector2(0, 0);
    look = new Vector2(0, 0);
    step = new Vector2(0, 0);

    SetImages();
    SetCube();
}

function Update() {
    UpdateCvs(canvas)
    LostPos();
    Mood();
    Reaction();
    DrawCube(canvas);
    DrawFace(canvas, feeling);
}

Behaviour.Awake();