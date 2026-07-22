const imagePreview = document.getElementById("imagePreview");
const fileInput = document.getElementById("fileInput");
const pastEventForm = document.getElementById("pastEventForm");
const cardimagePreviewContainer = document.getElementById(
    "cardimagePreviewContainer"
);

let file_list = [];

Array.prototype.swapItems = function (a, b) {
    this[a] = this.splice(b, 1, this[a])[0];
    return this;
};

const moveImageUp = (currentPosition) => {
    if (currentPosition <= 0) return false;

    file_list.swapItems(currentPosition - 1, currentPosition);

    renderImages();
    return false;
};

const moveImageDown = (currentPosition) => {
    if (currentPosition >= file_list.length - 1) return false;

    file_list.swapItems(currentPosition, currentPosition + 1);

    renderImages();
    return false;
};

const deleteImage = (currentPosition) => {
    if (currentPosition >= file_list.length - 1) return false;

    file_list.splice(currentPosition, currentPosition);

    console.log(file_list);
    renderImages();
    return false;
};

const deleteEvent = (id) => {
    fetch(`/pastevents/${id}`, {method: "DELETE"})
        .then(() => {
            location.reload()
        })
}

const fetchImages = async (path_list) => {
    let url_list = [];
    for (const path of path_list) {
        const res = await fetch(`/images/geturl/${path}`);
        const data = await res.text();
        url_list.push(data);
    }
    return url_list;
};

const renderImages = () => {
    imagePreview.innerHTML = "";
    file_list.forEach((file, index) => {
        imagePreview.insertAdjacentHTML(
            "beforeend",
            `
            <div class="image-container">
                <img src="${URL.createObjectURL(file)}" alt="previw" />
                <div class="image-buttons">
                    <button onclick="return moveImageUp(${index})" ${
                index === 0 && "disabled"
            }>/\\</button>
                    <button onclick="return moveImageDown(${index})" ${
                index === file_list.length - 1 && "disabled"
            }>\\/</button>
                </div>
                <button onclick="return deleteImage(${index})">X</button>
            </div>
        `
        );
    });
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("/images/upload/past-events", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (response.ok) {
            return { fileName: data.fileName };
        } else {
            return { error: data.message };
        }
    } catch (error) {
        console.error("Network error:", error);
        alert("An error occurred during upload.");
        return { error };
    }
};

const createPastEvent = async (formData) => {
    try {
        const response = await fetch("/pastevents", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            location.reload();
            return;
        } else {
            alert("An error occurred during upload.");
        }
    } catch (error) {
        console.error("Network error:", error);
        alert("An error occurred during upload.");
        return { error };
    }
};

fileInput.addEventListener("change", (e) => {
    e.preventDefault();
    file_list.push(...e.target.files);
    console.log(file_list);
    fileInput.value = "";
    renderImages();
});

pastEventForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(pastEventForm);
    const obj = Object.fromEntries(formData.entries());

    if (file_list.length <= 0) {
        alert("Please select files.");
        return;
    }

    obj.images_path = [];
    delete obj.file;
    for (const file of file_list) {
        const { fileName } = await uploadImage(file);
        obj.images_path.push(fileName);
    }
    createPastEvent(obj);
});


fetch("/pastevents")
    .then((res) => res.json())
    .then(async (data) => {
        for (element of data) {
            const url_list = await fetchImages(element.images_path);
            cardimagePreviewContainer.insertAdjacentHTML(
                "beforeend",
                `
                            <div class="cardimage">
                                <div class="cardimage-container">
                                    <img
                                        class="cardimage-image"
                                        src="${url_list[0]}"
                                    />
                                    <div class="cardimage-title-container">
                                        <h4 class="cardimage-title">
                                            ${element.title}
                                        </h4>
                                        <p class="cardimage-date">${dateFormatter(
                                            element.date,
                                            "{d}.{m}.{Y}"
                                        )}</p>
                                    </div>
                                    <p class="cardimage-text">
                                        ${element.description}
                                    </p>
                                    <div class="cardimage-button">
                                        <div class="cardimage-button-container">
                                            <button
                                                class="btn btn-outline btn-desktop btn-width-100"
                                            >
                                                <span>Детальніше</span>
                                            </button>
                                            <button
                                                class="btn btn-outline btn-desktop btn-width-100 green"
                                            >
                                                <span>Редагувати</span>
                                            </button>
                                            <button
                                                onclick="deleteEvent(${element.id})"
                                                class="btn btn-outline btn-desktop btn-width-100 red"
                                            >
                                                <span>Видалити</span>
                                            </button>
                                        </div>
                                    </div>
                                    <p>${element.id}</p>
                                </div>
                            </div>
                        `
            );
        }
    })