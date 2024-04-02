import {
    writeFileSync
} from 'fs';

import {
    fabric
} from 'fabric';

// Create a new fabric canvas
let canvas = new fabric.StaticCanvas(null, {
    width: 500,
    height: 300
});

// Create the base rectangle
let baseRect = new fabric.Rect({
    left: 0,
    top: 0,
    width: canvas.width,
    height: canvas.height,
    fill: '#174AAE'
});

// Add the base rectangle to the canvas
canvas.add(baseRect);

// Load the mask image
fabric.Image.fromURL('assets/mask.svg', function (maskImage) {
    // Set the size of the mask image
    maskImage.scaleToWidth(canvas.width);
    maskImage.scaleToHeight(canvas.height);

    // Add the mask image to the canvas
    canvas.add(maskImage);

    // Get the data URL of the canvas
    let dataUrl = canvas.toDataURL('nose.png');

    // Convert the data URL to a buffer
    let buffer = Buffer.from(dataUrl.split(',')[1], 'base64');

    // Write the buffer to a file
    writeFileSync('output.png', buffer);
});