// Countdown Timer
function countdown() {
    const countDate = new Date("Aug 15, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerText = "Happy Independence Day!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
}
setInterval(countdown, 1000);

// Handle User Wishes
const wishForm = document.getElementById("wishForm");
const wishList = document.getElementById("wishItems");

wishForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userWish = document.getElementById("userWish").value;
    if (userWish.trim()) {
        const listItem = document.createElement("li");
        listItem.textContent = userWish;
        wishList.appendChild(listItem);
        wishForm.reset();
    }
});
