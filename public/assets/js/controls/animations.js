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

const animationCycle = () => {
  const elements = [ // reference
    "#pine-thinking",
    "#pine-chemist",
    "#pine-credits",
    "#pine-hearts"
  ]

  $("#pine-thinking").bind(
    "webkitAnimationEnd mozAnimationEnd animationend",
    () => {
      $("#pine-thinking").removeClass("rubberBand");
      setTimeout(() => {
        $("#pine-chemist").addClass("shake")
      }, 6800)
    }
  );

  $("#pine-chemist").bind(
    "webkitAnimationEnd mozAnimationEnd animationend",
    () => {
      $("#pine-chemist").removeClass("shake");
      setTimeout(() => {
        $("#pine-credits").addClass("swing");
      }, 3200);
    }
  );

  $("#pine-credits").bind(
    "webkitAnimationEnd mozAnimationEnd animationend",
    () => {
      $("#pine-credits").removeClass("swing");
      setTimeout(() => {
        $("#pine-hearts").addClass("heartBeat");
      }, 3600);
    }
  );

  $("#pine-hearts").bind(
    "webkitAnimationEnd mozAnimationEnd animationend",
    () => {
      $("#pine-hearts").removeClass("heartBeat");
      setTimeout(() => {
        $("#pine-thinking").addClass("rubberBand");
      }, 2800);
    }
  );
}

animationCycle()
$("#pine-thinking").addClass("rubberBand");