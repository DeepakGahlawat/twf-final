// const distances = {
//     'C1_L1': 3,
//     'C2_L1': 2.5,
//     'C3_L1': 2,
//     'C1_C2': 4,
//     'C1_C3': 7,
//     'C2_C3': 3,
//     'C2_C1': 4,
//     'C3_C1': 7,
//     'C3_C2': 3,
// };

// const costsPerKm = 10;
// const costsPerKmInterCenter = 8;

// const products = {
//     'C1': { 'A': 3, 'B': 2, 'C': 8 },
//     'C2': { 'D': 12, 'E': 25, 'F': 15 },
//     'C3': { 'G': 0.5, 'H': 1, 'I': 1 },
// };

// module.exports = { distances, costsPerKm, costsPerKmInterCenter, products };

const centers = {
    C1: { A: 3, B: 2, C: 8, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0 },
    C2: { A: 0, B: 0, C: 0, D: 12, E: 25, F: 15, G: 0, H: 0, I: 0 },
    C3: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0.5, H: 1, I: 2 }
};

// Define the distance between centers and location L1
const distances = {
    C1: 3, // Distance between C1 and L1
    C2: 2.5, // Distance between C2 and L1
    C3: 2  // Distance between C3 and L1
};

module.exports={centers, distances};
