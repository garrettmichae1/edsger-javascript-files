function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function factorPolynomial() {
    const methods = [
        { name: "Trial and Error", desc: "Try integer factors" },
        { name: "Quadratic Formula", desc: "Use ax^2 + bx + c = 0" },
        { name: "Grouping", desc: "Factor by grouping terms" },
        { name: "Synthetic Division", desc: "Divide by potential roots" }
    ];

    const method = input("Enter method number (1-4): ");
    const result = input("Enter polynomial coefficients (a b c): ");
    const coeffs = result.split(" ").map(Number);

    if (coeffs.length !== 3) {
        console.log("Error: Enter exactly 3 coefficients");
        return;
    }

    const [a, b, c] = coeffs;
    let factorization = null;

    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                console.log("Polynomial is 0");
            } else {
                console.log("Factorization: " + c);
            }
        } else {
            console.log("Factorization: " + b + "x");
        }
    } else {
        const discriminant = b * b - 4 * a * c;
        if (discriminant < 0) {
            console.log("No real roots - cannot factor over reals");
        } else if (discriminant === 0) {
            const root = -b / (2 * a);
            console.log("Factorization: " + a + "(x - " + root + ")^2");
        } else {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            console.log("Factorization: " + a + "(x - " + root1 + ")(x - " + root2 + ")");
        }
    }
}

console.log("Polynomial Factorization Tool");
console.log("Use another method if you can't factor over reals");

factorPolynomial();
