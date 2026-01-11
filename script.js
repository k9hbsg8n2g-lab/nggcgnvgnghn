// Simulated data integrity check using a simple checksum concept
function validateData() {
    let data = "HELLO";
    let checksum = data.length;

    // Simulated transmission error
    let receivedData = "HELL0";

    if (receivedData.length !== checksum) {
        alert("Error detected! Data integrity compromised.");
    } else {
        alert("Data received successfully. No errors found.");
    }
}
