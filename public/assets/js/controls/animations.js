export const animationBind = (elementName) => {
  $(`.${elementName}-icon`).bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
    $(this).removeClass(`${elementName}-animation`)
  })

  $(`.${elementName}-icon-div`).mouseenter(function () {
    $(this).children($(`.${elementName}-icon`)).addClass(`${elementName}-animation`);
  })
}

animationBind("plus")
animationBind("create")
animationBind("settings")
animationBind("back")

