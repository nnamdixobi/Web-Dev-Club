// Listen for the DOMContentLoaded event to ensure the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements by their IDs
    const apodTitle = document.getElementById("apod-title");
    const apodImage = document.getElementById("apod-image");
    const apodDate = document.getElementById("apod-date");
    const apodDescription = document.getElementById("apod-description");
    
    // Fetch Astronomy Picture of the Day (APOD) data from NASA's API
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => response.json()) // Parse the JSON response from the API
        .then(data => {
            // Populate the HTML elements with data from the API response

            // Set the text content of the element with the ID "apod-title" to the APOD title
            apodTitle.textContent = data.title;

            // Set the src attribute of the image element with the ID "apod-image" to the APOD image URL
            apodImage.src = data.url;

            // Set the text content of the element with the ID "apod-date" to the APOD date
            apodDate.textContent = data.date;

            // Set the inner HTML of the element with the ID "apod-description" to include an explanation (wrapped in <b> tags)
            apodDescription.innerHTML = "<b>Explanation:</b> " + data.explanation;
        })
        .catch(error => {
            // Handle errors if the fetch request fails
            console.error('Error fetching APOD data:', error);

            // Update the text content of the element with the ID "apod-description" to indicate the fetch failure
            apodDescription.textContent = "Failed to fetch Astronomy Picture of the Day. Please try again later.";
        });
});