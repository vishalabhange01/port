let docTitle = document.title;
window.addEventlistener("blur", () => {
  document.title = "Come back :(";
})
window.addEventlistener("focus", () => {
  document.title = docTitle;
})
