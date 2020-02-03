$(".go-back").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
  $(this).removeClass(`poke-left`)
})

$(".go-back-div").mouseenter(function () {
  $(".go-back").addClass(`poke-left`);
})

$(".go-create").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
  $(this).removeClass(`pulse`)
})

$(".go-create-div").mouseenter(function () {
  $(".go-create").addClass(`pulse`);
})

$(".go-settings").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
  $(this).removeClass(`spin`)
})

$(".go-settings-div").mouseenter(function () {
  $(".go-settings").addClass(`spin`);
})

