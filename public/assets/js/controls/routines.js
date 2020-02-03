import { animationBind } from "./animations.js"

export const addRoutine = (e) => {
  const targetElement = $(".new-routine")

  const routineElement = `
    <div class="border-bottom border-top mb-3 d-flex-center routine-creating animated bounceInDown faster">
      <div class="no-padding-x add-reward-div border-right clickable">
        <img class="icon-sizer-ui add-reward img-fluid" src="assets/images/ui/gems.svg" />
      </div>

      <div class="no-padding-x plus-icon-div clickable">
        <img class="icon-sizer-ui plus-icon img-fluid" src="assets/images/ui/plus.svg" />
      </div>
    </div>
  `

  $(targetElement).before(routineElement)

  animationBind("plus")

  // $(targetElement).addClass("routine-creating")
}

window.addRoutine = addRoutine

export default {
  addRoutine
}