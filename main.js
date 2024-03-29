// Get the canvas element and its context
var canvas = document.getElementById("signatureCanvas");
var ctx = canvas.getContext("2d");

// Set initial variables
var isDrawing = false;
var lastX = 0;
var lastY = 0;

// Event listeners for mouse movements
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// Function to start drawing
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to draw lines
function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to stop drawing
function stopDrawing() {
    isDrawing = false;
}

// Function to clear canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to save signature
function saveSignature() {
    var dataURL = canvas.toDataURL(); // Convert canvas to base64 image
    var link = document.createElement("a");
    link.href = dataURL;
    link.download = "signature.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
