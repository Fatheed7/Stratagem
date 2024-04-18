document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/json/data.json')
        .then(response => response.json())
        .then(jsonData => {
            jsonData.forEach(tier => {
                tier.forEach(item => {
                    const tierRow = document.getElementById(`tier-${item.tier.toLowerCase()}`);
                    if (tierRow) {
                        const img = document.createElement("img");
                        img.src = item.image_url;
                        img.alt = item.text_content;
                        img.title = item.text_content;
                        img.setAttribute('data-bs-toggle', 'tooltip');
                        img.setAttribute('data-bs-placement', 'top');
                        img.classList.add("tier-icon");
                        tierRow.children[1].appendChild(img);
                    } else {
                        console.error(`Tier row for tier ${item.tier} not found.`);
                    }
                });
            });
            $('[data-bs-toggle="tooltip"]').tooltip();
        })
        .catch(error => console.error('Error loading JSON:', error));
});
