function DrawCube(cvs) {
    var t = [];

    var grd = cvs.ctx.createRadialGradient(Browser.centerX, Browser.centerY, 100 * Browser.tFraction, Browser.centerX, Browser.centerY, 500 * Browser.tFraction);
    grd.addColorStop(0, "#243B53");
    grd.addColorStop(1, "#0C0C20");
    cvs.ctx.fillStyle = grd;
    cvs.ctx.fillRect(0, 0, cvs.width, cvs.height);

    for (var i = 0; i < Cube.vertices.length; i++) {
        var v = Cube.vertices[i];
        // Rotate eatch vertex.
        var r = v.RotateX(Cube.angle.x).RotateY(Cube.angle.y).RotateZ(Cube.angle.z);
        var p = r.Project(cvs.width, cvs.height, Browser.fraction * 3, 4);
        t.push(p);
    }

    var avg_z = [];

    for (var i = 0; i < Cube.indices.length; i++) {
        var f = Cube.indices[i];
        if (Cube.indices[i] == Cube.indices[0]) {}
        avg_z[i] = { "index": i, "z": (t[f[0]].z + t[f[1]].z + t[f[2]].z + t[f[3]].z) / 4.0 };
    }

    avg_z.sort(function(a, b) {
        return b.z - a.z;
    });

    // Draw the cube.
    for (var i = 0; i < Cube.indices.length; i++) {
        var f = Cube.indices[avg_z[i].index];
        cvs.ctx.fillStyle = ArrayToRGB(Cube.colors[avg_z[i].index]);
        cvs.ctx.beginPath();
        cvs.ctx.moveTo(t[f[0]].x, t[f[0]].y);
        cvs.ctx.lineTo(t[f[1]].x, t[f[1]].y);
        cvs.ctx.lineTo(t[f[2]].x, t[f[2]].y);
        cvs.ctx.lineTo(t[f[3]].x, t[f[3]].y);
        cvs.ctx.closePath();
        cvs.ctx.fill();
    }
}

function ArrayToRGB(arr) {
    if (arr.length == 3) {
        return "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
    }
    return "rgb(0,0,0)";
}