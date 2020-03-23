const createElement = (
  { elementType, elementContent, id, classes, onClick, imagePath }
) => {
  let idValue = ""
  if (id) idValue = ` id="${id}"`
  let classValues = ""
  if (classes) classValues = ` class="${classes}"`
  let onClickCallback = ""
  if (onClick) onClickCallback = ` onclick="${onClick}"`
  let imageSource = ""
  if (imagePath) imageSource = ` src="${imagePath}"`
  let contentValue = ""
  if (elementContent) contentValue = elementContent
  
  return `<${elementType}${idValue}${classValues}${onClickCallback}${imageSource}>${contentValue}</${elementType}>`
}

const createImage = ({id, classes, imagePath}) => {
  return createElement({
    elementType: "img",
    id,
    classes,
    imagePath: `static/images/icons/${imagePath}`
  })
}