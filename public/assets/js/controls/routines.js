export const addRoutine = (e) => {
  const targetElement = $(".new-routine")

  const routineElement = `
    <div class="border-bottom border-top mb-3 d-flex-center routine-creating animated bounceInDown faster">
      <div class="no-padding">
        <img class="icon-sizer-ui go-create img-fluid" src="assets/images/ui/addheart.svg" />
      </div>
    </div>
  `

  $(targetElement).before(routineElement)
  // $(targetElement).addClass("routine-creating")
}

window.addRoutine = addRoutine

export default {
  addRoutine
}