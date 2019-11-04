/**
 * Core basics for mtdef.
 * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
 * 
 * Needs the following files:
 * 
 * HTML files.
 * @file HTML/GetId.js
 * 
 * Basic files.
 * @file Basics/Browser.js
 * @file Basics/Debug.js (! Needs files !)
 */
var Behaviour = {
    /**
     * To run mtdef.
     * @author TessavWalstijn. GitHub: https://github.com/TessavWalstijn
     * @param {boolean} start Use the start function.
     * @param {boolean} debug Use the built in debug system.
     */
    Awake(start = true, debug = false, ) {
        let mtdef = GetId("mtdef");
        if (debug) {
            mtdef.innerHTML = '<canvas id="Debug" width="1" height="1"></canvas>' + mtdef.innerHTML;
            Debug.SetDebug();
            Debug.cvs = NewCanvas(GetId("Debug"), true);
        }
        Browser.Update(0);
        if (start)
            window.Start();
        window.AnimationFrame();
    },
    rendering: false,
    warnResp: false,
    rendering: false
}

var requestAnimation = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

//AnimationFrame is looping when you are on the page
function AnimationFrame(time) {
    Browser.Update(time);
    Update();
    if (Debug.dbug) {
        UpdateCvs(Debug.cvs);
        Debug.Draw();
    }
    Behaviour.rendering = false;
    requestAnimationFrame(AnimationFrame);
}

//let the script work if you don't add them
function Start() {
    let w = "You don't use Start(){} please set the parameter false",
        i = "Start(){} is the first function called for your program. You can add it in your main js file";
    Debug.Warn(w);
    Debug.Info(i);
}

function Update() {
    let w = "You don't use Update(){} please set the parameter false",
        i = "Update(){} is the function called while you are on the page of the program. You can add it in your main js file";
    Debug.Warn(w);
    Debug.Info(i);
}