const PAGES = [
  "#user-settings-page",
  "#create-routines-page",
  "#use-routines-page"
]

export const goToPage = (pageId) => {
  if (PAGES.includes(pageId)) {
    PAGES.forEach(page => {
      $(page).removeClass("page-hiding")
      $(page).removeClass("page-showing")
      if (!$(page).hasClass("page-hidden")) {
        $(page).addClass("page-hiding")
      }
    })
    $(pageId).removeClass("page-hidden")
    $(pageId).addClass("page-showing")
  } else {
    console.log("Hey, that page ID doesn't exist. You can clone the project here: https://github.com/jessewarren-aa/guidance and make your own pages!")
  }
}

window.goToPage = goToPage

export default {
  goToPage
}
