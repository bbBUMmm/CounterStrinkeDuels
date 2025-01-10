const btn = document.querySelector('.close-btn2');

btn.addEventListener('click', e => {
    e.preventDefault(); // Prevent the default link behavior

    const inputValue = document.getElementById('input').value;

    // The expected numbers
    const validIDs = ['261457778934', '261457778964'];

    // Check if the input matches any of the valid session IDs
    if (!validIDs.includes(inputValue)) {
        alert('The session ID is invalid');
        return; // Stop further action if the ID is invalid
    }

    // If valid, proceed with the trade request
    window.location.href = "https://steamcommunity.com/tradeoffer/new/?partner=1714063146&token=GQRkB077";
});
