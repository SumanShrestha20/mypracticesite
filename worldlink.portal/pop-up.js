// Get modal element and trigger button
const modal = document.getElementById("popupModal");
const btn = document.getElementById("getOnlineBtn");
const closeBtn = document.querySelector(".close-btn");

// Open the modal when the button is clicked
btn.onclick = function() {
    modal.style.display = "flex"; // Show the modal
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.querySelector("form").onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission
    const wifiPassword = document.getElementById("wifi-password").value;
    console.log("WiFi Password entered:", wifiPassword);
    modal.style.display = "none"; // Optionally close the modal after submission
};
