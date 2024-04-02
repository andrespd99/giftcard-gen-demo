// Create the base canvas and set its size and color
let baseCanvas = new fabric.StaticCanvas('baseCanvas');
let width = 361;
let height = 190;
baseCanvas.setWidth(width); // Replace with your desired width
baseCanvas.setHeight(height); // Replace with your desired height
let baseRect = new fabric.Rect({
    left: 0,
    top: 0,
    width: baseCanvas.width,
    height: baseCanvas.height,
    fill: '#174AAE' // Replace with your color
});
baseCanvas.add(baseRect);

// Create the mask canvas and set its size
let maskCanvas = new fabric.StaticCanvas('maskCanvas');
maskCanvas.setWidth(width); // Replace with your desired width
maskCanvas.setHeight(height); // Replace with your desired height

// Load the mask image
fabric.Image.fromURL('assets/mask.svg', function (maskImage) {
    // Set the size of the mask image
    maskImage.scaleToWidth(maskCanvas.width);
    maskImage.scaleToHeight(maskCanvas.height);

    // Add the mask image to the mask canvas
    maskCanvas.add(maskImage);
});