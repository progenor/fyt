// on click on goButton id button in popup.html
const tab = await chrome.tabs.query({
  active: true,
  currentWindow: true,
  url: "https://www.youtube.com/*",
});

const tabs = await chrome.tabs.query({
  url: "https://www.youtube.com/*",
});

const page = tab[0].url;

document.getElementById("switchAll").addEventListener("click", () => {
  tabs.forEach((tab) => {
    const currentUrl = tab.url;

    if (currentUrl.includes("embed")) {
      let newUrl = currentUrl.replace("embed/", "watch?v=");
      redirect(newUrl);
    } else {
      let newUrl = currentUrl.replace("watch?v=", "embed/");

      redirect(newUrl);
    }
  });
});

document.getElementById("goButton").addEventListener("click", () => {
  const currentUrl = page;

  if (currentUrl.includes("embed")) {
    let newUrl = currentUrl.replace("embed/", "watch?v=");

    redirect(newUrl);
  } else {
    let newUrl = currentUrl.replace("watch?v=", "embed/");

    redirect(newUrl);
  }
});

async function redirect(url) {
  await chrome.tabs.update({ url: url });
}

async function changeButton() {
  if (currentUrl.includes("embed"))
    await page.evaluate(() => {
      document.getElementById("goButton").innerHTML = "Go back to YouTube";
    });
  else
    await page.evaluate(() => {
      document.getElementById("goButton").innerHTML = "Go to Embeded YouTube";
    });
}
