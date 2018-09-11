const options = [
  {theme: "anime", display: ""},
  {theme: "ninja", display: ""},
  {theme: "zombie", display: ""},
  {theme: "sci-fi", display: ""},
  {theme: "dinosaurs", display: ""}
];

document.addEventListener("DOMContentLoaded", ()=>{
  const optionsContainer = document.getElementsByClassName("options")[0];
  
  const displayTitle = document.getElementById("display-title");
  
  const renderCard = theme => {
    displayTitle.innerHTML = `Current Theme: ${theme}`;
  }

  options.forEach(option => {
    const button = document.createElement("button");
    button.id = option.theme;
    button.innerHTML = option.theme;
    button.addEventListener("click", () => renderCard(option.theme));
    optionsContainer.appendChild(button);
  })
});