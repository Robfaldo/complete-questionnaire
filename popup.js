let completeForShopButton = document.getElementById('completeForShop')

completeForShopButton.onclick = function(element) {
  chrome.tabs.executeScript({
      code: 'document.getElementById("primary_trade").value = "Hairdressing Salon";'
    });
}
