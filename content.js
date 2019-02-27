console.log('Simple Scraper running')

// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'clicked_browser_action') {
    const defaultSelector = '.myclass div'
    const selector = window.prompt('What’s the CSS selector?', defaultSelector)
    const items = document.querySelectorAll(selector)
    const itemsArray = []
    items.forEach((item, index) => {
      console.log(`#${index + 1}:`, item)
      itemsArray.push(item.toString())
    })
    window.alert(itemsArray.join('\n'))
  }
})
