/**
 * ---------------------------------------------------------------------
 * Modal Controller
 * ---------------------------------------------------------------------
 * This module handles opening and closing modal components.
 * It manages visibility and transition animations
 * using CSS utility classes.
 * ---------------------------------------------------------------------
 */

/* ===================================================================
  Opens a modal by making it visible and applying the entry animation.
==================================================================== */
function openModal(modalBtnId) {
  const modal = document.getElementById(`${modalBtnId}`);
  modal.classList.remove("hidden");
  modal.classList.add("modal-enter");
}

/* =========================================================================================
  Closes a modal by triggering the exit animationand hiding it after the animation completes.
============================================================================================ */
function closeModal(modalBtnId) {
  const modal = document.getElementById(`${modalBtnId}`);
  modal.classList.remove("modal-enter");
  modal.classList.add("modal-exit");

  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("modal-exit");
  }, 500);
}

/* ====================================================================
  Handles image uploads and previews them in the specified container.
=======================================================================*/
function handleImageUpload(target) {
  const previewSectionId = target.getAttribute("data-previewSectionId");
  if (!previewSectionId) return;

  const previewContainer = document.getElementById(previewSectionId);
  if (!previewContainer) return;

  // Clear previous preview if single file upload
  if (!target.multiple) {
    previewContainer.innerHTML = "";
  }

  previewContainer.classList.remove("hidden");
  const files = Array.from(target.files);

  files.forEach((file) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgWrapper = document.createElement("div");
      imgWrapper.classList.add("relative", "inline-flex", "gap-2");

      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = file.name;
      img.classList.add("w-24", "h-24", "object-cover", "rounded", "border");

      imgWrapper.appendChild(img);
      addRemoveButton(imgWrapper, target);

      previewContainer.appendChild(imgWrapper);
    };
    reader.readAsDataURL(file);
  });
}

/* ==============================================================================
Adds a small remove button to an image wrapper, allowing users to remove the image.
=================================================================================*/
function addRemoveButton(wrapper, target) {
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "×";
  removeBtn.classList.add(
    "absolute",
    "top-0",
    "right-0",
    "bg-red-500",
    "text-white",
    "rounded-full",
    "w-5",
    "h-5",
    "flex",
    "items-center",
    "justify-center",
    "text-xs"
  );

  removeBtn.addEventListener("click", () => {
    wrapper.remove();
    if (!target.multiple) target.value = "";
  });

  wrapper.appendChild(removeBtn);
}

export { openModal, closeModal, handleImageUpload };
