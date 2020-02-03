$(".go-back").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
  $(this).removeClass(`spin-left`)
})

$(".go-back").mouseenter(function () {
  $(this).addClass(`spin-left`);
})

$(".go-create").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
  $(this).removeClass(`pulse`)
})

$(".go-create").mouseenter(function () {
  $(this).addClass(`pulse`);
})

$(".go-settings").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
  $(this).removeClass(`spin-left`)
})

$(".go-settings").mouseenter(function () {
  $(this).addClass(`spin-left`);
})