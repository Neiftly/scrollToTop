document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(['buttonStyle'], (result) => {
        console.log('Loaded style:', result.buttonStyle);
        const style = result.buttonStyle || 'custom';
        document.querySelector(`input[name="style"][value="${style}"]`).checked = true;
    });
  const saveButton = document.getElementById("save");

  if (!saveButton) {
    return;
  }

  saveButton.addEventListener("click", () => {
    const selected = document.querySelector('input[name="style"]:checked');
    if (!selected) return;

    chrome.storage.sync.set({ buttonStyle: selected.value }, () => {
      console.log("Saved: " + selected.value);
      chrome.tabs.reload();
    });
  });
});