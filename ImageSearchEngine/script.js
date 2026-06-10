
const accessKey= "Uyl991xcxNFu1whWA-iTkvqufr_AkZ5RNCU0jmk6De0";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search");
const container = document.getElementById("container");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchInput.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        container.innerHTML = "";
    }

    data.results.forEach((result) => {

        // Card wrapper
        const card = document.createElement("div");
        card.classList.add("image-card");

        // Image
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description || "Unsplash Image";

        // Download Button
        const downloadBtn = document.createElement("button");
        downloadBtn.innerText = "Download";

        downloadBtn.addEventListener("click", () => {
            handleDownload(result);
        });

        card.appendChild(image);
        card.appendChild(downloadBtn);
        container.appendChild(card);
    });

    showMoreBtn.style.display = "block";
}


// 🔥 Proper Unsplash Download Tracking
async function handleDownload(result) {
    try {
        // 1️⃣ Track download (Required by Unsplash)
        await fetch(`${result.links.download_location}?client_id=${accessKey}`);

        // 2️⃣ Fetch image blob
        const response = await fetch(result.urls.full);
        const blob = await response.blob();

        const blobUrl = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = (result.alt_description || "image") + ".jpg";

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);

    } catch (error) {
        alert("Download failed!");
        console.error(error);
    }
}


// Search submit
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

// Show more
showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});


// Uyl991xcxNFu1whWA-iTkvqufr_AkZ5RNCU0jmk6De0

// SdwHTtuCinLR42D_69wUnqsFy5TFoTO5R8mrbjz6lJU

