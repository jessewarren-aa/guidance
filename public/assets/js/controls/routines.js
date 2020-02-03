import { animationBind } from "./animations.js"

export const addRoutine = (e) => {
  const targetElement = $(".new-routine")

  const routineElement = `
    <div class="border-bottom border-top mb-3 d-flex-center routine-creating animated bounceInDown faster">
      <div class="no-padding-x display-font add-reward-icon-div border-right clickable">
        reward
        <img class="icon-sizer-ui add-reward-icon img-fluid" src="assets/images/ui/gems.svg" />
      </div>

      <div class="no-padding-x display-font plus-icon-div clickable">
        <img class="icon-sizer-ui plus-icon img-fluid" src="assets/images/ui/plus.svg" />
        action
      </div>
    </div>
  `

  $(targetElement).before(routineElement)

  animationBind("plus")
  animationBind("add-reward")

  // $(targetElement).addClass("routine-creating")
}

window.addRoutine = addRoutine

export default {
  addRoutine
}