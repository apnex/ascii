Array.closest = (function () {
    function dist(s, t) {
        if (!s.length || !t.length) return 0;
        return dist(s.slice(2), t.slice(2)) +
            Math.abs(parseInt(s.slice(0, 2), 16) - parseInt(t.slice(0, 2), 16));
    }

    return function (arr, str) {
        var min = 0xffffff;
        var best, current, i;
        for (i = 0; i < arr.length; i++) {
            current = dist(arr[i], str)
            if (current < min) {
                min = current
                best = arr[i];
            }
        }
        return best;
    };
}());
