/**
 * editor.js — live preview logic for editor.html only
 * Each function does one job so it is easy to learn from.
 */

/** Default values when the page loads or when the user clicks Reset */
const DEFAULTS = {
  title: "Your headline goes here",
  backgroundColor: "#e0e7ff",
  fontSize: 36,
};

/**
 * Reads control values from the form and returns a simple state object.
 */
function readEditorState(elements) {
  return {
    title: elements.titleInput.value.trim() || " ",
    backgroundColor: elements.bgSelect.value,
    fontSize: Number(elements.fontSizeRange.value),
  };
}

/**
 * Pushes state into the on-page preview box.
 */
function applyPreview(state, elements) {
  elements.previewBox.style.backgroundColor = state.backgroundColor;
  elements.previewTitle.textContent = state.title;
  elements.previewTitle.style.fontSize = `${state.fontSize}px`;

  // Light text on dark backgrounds keeps the preview readable (simple contrast heuristic).
  const isDarkBackground = state.backgroundColor.toLowerCase() === "#1e293b";
  elements.previewTitle.style.color = isDarkBackground ? "#f8fafc" : "#1c2333";
}

/**
 * Updates the little helper text that shows the numeric font size.
 */
function updateFontSizeLabel(fontSizeRange, fontSizeValueEl) {
  fontSizeValueEl.textContent = `${fontSizeRange.value}px`;
}

/**
 * Wires inputs → preview. Returns a cleanup-friendly setup (one place to attach listeners).
 */
function setupEditor() {
  const titleInput = document.getElementById("poster-title");
  const bgSelect = document.getElementById("bg-color");
  const fontSizeRange = document.getElementById("font-size");
  const fontSizeValue = document.getElementById("font-size-value");
  const previewBox = document.getElementById("preview-box");
  const previewTitle = document.getElementById("preview-title");
  const resetBtn = document.getElementById("reset-editor");

  if (
    !titleInput ||
    !bgSelect ||
    !fontSizeRange ||
    !fontSizeValue ||
    !previewBox ||
    !previewTitle ||
    !resetBtn
  ) {
    return;
  }

  const elements = {
    titleInput,
    bgSelect,
    fontSizeRange,
    fontSizeValue,
    previewBox,
    previewTitle,
  };

  const sync = () => {
    const state = readEditorState(elements);
    applyPreview(state, elements);
    updateFontSizeLabel(fontSizeRange, fontSizeValue);
  };

  titleInput.addEventListener("input", sync);
  bgSelect.addEventListener("change", sync);
  fontSizeRange.addEventListener("input", sync);

  resetBtn.addEventListener("click", () => {
    titleInput.value = DEFAULTS.title;
    bgSelect.value = DEFAULTS.backgroundColor;
    fontSizeRange.value = String(DEFAULTS.fontSize);
    sync();
  });

  // First paint
  sync();
}

document.addEventListener("DOMContentLoaded", setupEditor);
