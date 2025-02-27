function calculateAreaOfCircle(radius) {
    const area = Math.PI * radius * radius;
    return area;
}


let radius = 10;


let area = calculateAreaOfCircle(radius);

console.log("The area of the circle with radius " + radius + " is: " + area.toFixed(2)); // Rounded to 2 decimal places
