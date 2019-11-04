function Reaction() {
    if (!mouseOut) {
        Cube.angle.x = -((Browser.centerY - User.y) / 16);
        Cube.angle.y = ((Browser.centerX - User.x) / 16);
        look.x = User.x;
        look.y = User.y;
        if (ctrlOut) {
            ctrlOut = false;
        }
    } else {
        if (!firstOut && !ctrlOut) {
            firstOut = true;
            ctrlOut = true;
        }
        if (!looking && firstOut) {
            firstOut = false;
            Where();
        }
        if (look.x > where.x - 10 && look.x < where.x + 10 && look.y > where.y - 10 && look.y < where.y + 10) {
            Where();
        } else {
            step = new Vector2((where.x - look.x) / 20, (where.y - look.y) / 20);
            look.x += step.x;
            look.y += step.y;
        }

        Cube.angle.x = -((Browser.centerY - look.y) / 16) + Math.random() * Browser.tFraction;
        Cube.angle.y = ((Browser.centerX - look.x) / 16) + Math.random() * Browser.tFraction;
    }
}

function Where() {
    where.x = lost[l].x;
    where.y = lost[l].y;
    l = Math.floor(Math.random() * lost.length);

    step = new Vector2((where.x - look.x), (where.y - look.y));
}