const onEditNewEvent = (element) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    startEditMode(element);
};

const onDeleteNewEvent = async (id, title) => {
    if (
        window.confirm(`Do you want to delete event "${title}" with id: ${id}`)
    ) {
        await fetch(`/newevents/${id}`, { method: "DELETE" });
        location.reload();
    }
};

const startEditMode = (element) => {
    editMode = true;
    editElementId = element.id;
    Object.keys(element).forEach((key) => {
        const currentInput = document.getElementById(key);
        if (!currentInput) return;
        if (currentInput.type !== "checkbox") currentInput.value = element[key];
        else currentInput.checked = element[key];
    });
    btnCreate.classList.add("hidden");
    btnCancelEdit.classList.remove("hidden");
    btnEdit.classList.remove("hidden");
    formTitle.innerHTML = `Редагування події ${element.id}`;
};

const endEditMode = () => {
    editMode = false;
    editElementId = null;
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("location").value = "";
    document.getElementById("enter_price").value = "";
    document.getElementById("registration").checked = false;
    document.getElementById("title_en").value = "";
    document.getElementById("description_en").value = "";
    document.getElementById("location_en").value = "";
    btnCreate.classList.remove("hidden");
    btnCancelEdit.classList.add("hidden");
    btnEdit.classList.add("hidden");
    formTitle.innerHTML = `Створення нової майбутньої події`;
};

newEventForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const obj = Object.fromEntries(formData.entries());
    obj.registration = !!obj.registration;
    console.log(obj);
    if (editMode && editElementId) {
        const response = await fetch(`/newevents/${editElementId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        });

        if (response.ok) {
            location.reload();
        } else {
            alert("Error");
        }
    } else {
        const response = await fetch("/newevents", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        });

        if (response.ok) {
            location.reload();
        } else {
            alert("Error");
        }
    }
});

fetch("/newevents", { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
        data.forEach((element) => {
            newEventsContainer.insertAdjacentHTML(
                "beforeend",
                `
                        <div class="eventlist-element-container">
                            <div class="eventlist-element">
                                <p class="eventlist-element-title">
                                    ${element.title}
                                </p>
                                <p class="eventlist-element-date">
                                    ${dateFormatter(
                                        element.date,
                                        "{d} {M}, {Y}"
                                    )}
                                </p>
                                <p class="eventlist-element-text">
                                    ${element.description}
                                </p>
                            </div>
                            <div>
                                <button onclick='openModal(${JSON.stringify(
                                    element
                                )})' class="btn-more">Детальніше</button>
                                <button onclick='onEditNewEvent(${JSON.stringify(
                                    element
                                )})' class="btn-more green">Редагувати</button>
                                <button onclick="onDeleteNewEvent(
                                    ${element.id},
                                    '${element.title}'
                                )" class="btn-more red">Видалити</button>
                            </div>
                            <p>id: ${element.id}</p>
                        </div>
                    `
            );
        });
    });
