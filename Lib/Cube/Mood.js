function Mood() {
    if (!mouseOut) {
        if (Browser.height / 5 * 4 < User.y) {
            feeling = "ohh";
        } else if (Browser.width / 5 * 4 < User.x) {
            feeling = "happyR";
        } else if (Browser.width / 5 > User.x) {
            feeling = "happyL";
        } else {
            feeling = "happy";
        }
    } else {
        feeling = "sad";
    }
}