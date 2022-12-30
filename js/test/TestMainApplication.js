const checkTableElementsExist = () => {
  const elements = ['table', 'caption', 'tr', 'th', 'td'];
  let elementsExist = true;

  elements.forEach(element => {
    const elementExists = document.getElementsByTagName(element).length > 0;
    if (!elementExists) {
      console.error(`The ${element} element does NOT exist on the DOM.`);
      elementsExist = false;
    } else {
      console.log(`The ${element} element exists on the DOM.`);
    }
  });

  return elementsExist;
}

checkTableElementsExist();
