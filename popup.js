let copyCommandBtn = document.getElementById('copyCommand');

copyCommandBtn.onclick = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'let prefix = "CCB";' },
      () => {
        chrome.tabs.executeScript(
          tabs[0].id,
          { file: "makeCommand.js" }
        )
      }
    )
  })
}

