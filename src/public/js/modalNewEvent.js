const modalContent = document.getElementById("modalContent");
// const modal = document.getElementById("modal");

const openModal = (element) => {
    modal.style.display = "block";
    modalContent.innerHTML = `
<div class="modalmore-container">
    <div class="modalmore-section1">
        <div>
            <p class="modalmore-section1-title">
                Більше про подію
            </p>
            <p class="modalmore-section1-text">
                “${element.title}”
            </p>
        </div>
        <p class="modalmore-section1-subtext">
            Комарнівський молодіжний центр Комарно, вул.
            Січових Стрільців, 5, 81562
        </p>
    </div>
    <div class="modalmore-section2">
        <p style="white-space: pre-line">
            ${element.description}
        </p>
        <div class="modalmore-section2-info-container">
            <p class="modalmore-section2-info">
                Дата:
                <span>${dateFormatter(element.date, "{d} {M}, {Y}")}</span>
            </p>
            <p class="modalmore-section2-info">
                Час:
                <span>${element.time.replace(":", ".").slice(0, 5)}</span>
            </p>
            <p class="modalmore-section2-info">
                Локація:
                <span>
                    ${element.location}
                </span>
            </p>
            <p class="modalmore-section2-info">
                Вхід:
                <span>${
                    element.enter_price === 0
                        ? "безкоштовно"
                        : `${element.enter_price} грн`
                }</span>
            </p>
        </div>
        <button class="btn-yellow modalmore-section2-btn">
            Зареєструватися
        </button>
    </div>
</div>`;
};
