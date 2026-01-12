function openModal(modalBtnId) {
    const modal = document.getElementById(`${modalBtnId}`);
    modal.classList.remove("hidden");
}

function closeModal(modalBtnId) {
    const modal = document.getElementById(`${modalBtnId}`);
    modal.classList.add("hidden");
}

export { openModal, closeModal }