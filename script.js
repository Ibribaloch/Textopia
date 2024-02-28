const fontSelect = document.getElementById('font-select');
const colorSelect = document.getElementById('color-select');
const sizeSelect = document.getElementById('size-select');
const userText = document.getElementById('user-text');

fontSelect.addEventListener('change', () => {
    userText.style.fontFamily = fontSelect.value;
});

colorSelect.addEventListener('input', () => {
    userText.style.color = colorSelect.value;
});

sizeSelect.addEventListener('input', () => {
    userText.style.fontSize = sizeSelect.value + 'px';
});

const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
    const textToDownload = userText.value;
    const blob = new Blob([textToDownload], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Textopia.txt';
    a.click();
    URL.revokeObjectURL(url);
});
// button download
document.addEventListener("DOMContentLoaded",function(){
    this.addEventListener("click",e => {
      let tar = e.target;
      if (tar.hasAttribute("data-dl")) {
        let dlClass = "dl-working";
        if (!tar.classList.contains(dlClass)) {
          let lastSpan = tar.querySelector("span:last-child"),
            lastSpanText = lastSpan.textContent,
            timeout = getMSFromProperty("--dur",":root");
  
          tar.classList.add(dlClass);
          lastSpan.textContent = "Downloading…";
          tar.disabled = true;
  
          setTimeout(() => {
            lastSpan.textContent = "Completed!";
          },timeout * 0.9);
  
          setTimeout(() => {
            tar.classList.remove(dlClass);
            lastSpan.textContent = lastSpanText;
            tar.disabled = false;
          },timeout + 1e3);
        }
      }
    });
  });
  function getMSFromProperty(property,selector) {
    let cs = window.getComputedStyle(document.querySelector(selector)),
      transDur = cs.getPropertyValue(property),
      msLabelPos = transDur.indexOf("ms"),
      sLabelPos = transDur.indexOf("s");
  
    if (msLabelPos > -1)
      return transDur.substr(0,msLabelPos);
    else if (sLabelPos > -1)
      return transDur.substr(0,sLabelPos) * 1e3;
  }