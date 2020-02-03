import { animationBind } from "./animations.js"

export const addRoutine = (e) => {
  const targetElement = $(".new-routine")

  const routineElement = `
    <div class="border-bottom border-top mb-3 d-flex-center routine-creating animated bounceInDown faster">
      <div class="margin-r-10 no-padding-x display-font add-reward-icon-div border-right clickable">
        <img class="icon-sizer-ui add-reward-icon img-fluid" src="assets/images/ui/gems.svg" />
      </div>

      <div class="no-padding-x grey-icon-div"></div>
      <div class="no-padding-x grey-icon-div"></div>
      <div class="no-padding-x grey-icon-div"></div>
      <div class="no-padding-x grey-icon-div"></div>
      <div class="no-padding-x grey-icon-div"></div>
    </div>
  `

  $(targetElement).before(routineElement)

  animationBind("plus-grey")
  animationBind("add-reward")

  // $(targetElement).addClass("routine-creating")
}

window.addRoutine = addRoutine

export default {
  addRoutine
}