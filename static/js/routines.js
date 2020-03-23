const emptyConstructor = {
  elementType: "", 
  id: "", 
  classes: "", 
  onClick: "", 
  imagePath: "",
  elementContent: ""
}

const moveStageTo = (newStage) => {
  window.localStorage.setItem("current_stage", newStage)
  renderStages(newStage)
}

const renderStages = (currentStage) => {
  let pageContent = "<div>This stage hasn't been developed yet.</div>"
  if (currentStage === "1_intro_1") {
    // 1_intro element map
    // div row d-flex-between
    //   div col
    //     img pinehappy
    //     img speechhappy
    //     div speechwrapper
    //       aligned img speechhappy
    //       intro text
    //   div col
    //     img acceptbutton onclick => next stage
    //     accept text

    const introText = createElement({
      elementType: "p",
      classes: "body-font",
      elementContent: "Hi!<br />According to your browser's localStorage, you haven't been here before!<br /><br />Let's go on a 3-click tour, okay?"
    })
    const speechWrapper = createElement({
      elementType: "div",
      elementContent: introText
    })
    const pineHappy = createImage({
      imagePath: "pine/pinehappy.svg",
      classes: "icon-char-sizer animated-pine"
    }) 
    const firstBodyCol = createElement({
      elementType: "div",
      classes: "col-md-6 d-flex",
      elementContent: pineHappy + speechWrapper
    })
    const acceptButton = createImage({
      imagePath: "ui/accept.svg",
      classes: "icon-sizer"
    }) 
    const acceptButtonDiv = createElement({
      elementType: "div",
      classes: "clickable",
      onClick: "moveStageTo('1_intro_2')",
      elementContent: acceptButton
    })
    const acceptText = createElement({
      elementType: "div",
      classes: "header-font",
      elementContent: "OKAY!"
    })
    const secondBodyCol = createElement({
      elementType: "div",
      classes: "col-md-4 d-flex",
      elementContent: acceptButtonDiv + acceptText
    })
    const rowDiv = createElement({
      elementType: "div",
      classes: "row d-flex-around",
      elementContent: firstBodyCol + secondBodyCol
    })

    pageContent = rowDiv
  } else if (currentStage === "1_intro_2") {

  } else if (currentStage === "2_routine_create") {

  } else if (currentStage === "3_routine_active") {

  } else if (currentStage === "4_routine_update") {

  }

  updateContainer("#body-content", pageContent)
}