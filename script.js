// Object mapping keys to sounds
var keyData = {
    a: {
        sound: new Howl({ src: ['sounds/a.mpeg'] }),
        color: 'red'
    },
    s: {
        sound: new Howl({ src: ['sounds/s.mpeg'] }),
        color: 'orange'
    },
    d: {
        sound: new Howl({ src: ['sounds/d.mpeg'] }),
        color: 'yellow'
    },
    f: {
        sound: new Howl({ src: ['sounds/f.mpeg'] }),
        color: 'green'
    },
    g: {
        sound: new Howl({ src: ['sounds/g.mpeg'] }),
        color: 'blue'
    },
    h: {
        sound: new Howl({ src: ['sounds/h.mpeg'] }),
        color: 'purple'
    },
    j: {
        sound: new Howl({ src: ['sounds/j.mpeg'] }),
        color: 'pink'
    },
    k: {
        sound: new Howl({ src: ['sounds/k.mpeg'] }),
        color: 'cyan'
    }
};

var circles = [];

// Detect key press
function onKeyDown(event) {
    if (keyData[event.key]) {

        // Play sound
        keyData[event.key].sound.play();

        // Create random point
        var point = new Point(
            Math.random() * view.size.width,
            Math.random() * view.size.height
        );

        // Create circle
        var circle = new Path.Circle(point, 300);
        circle.fillColor = keyData[event.key].color;

        circles.push(circle);
    }
}

// Animation loop
function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].scale(0.9);
        circles[i].fillColor.hue += 1;

        if (circles[i].area < 1) {
            circles[i].remove();
            circles.splice(i, 1);
            i--;
        }
    }
}