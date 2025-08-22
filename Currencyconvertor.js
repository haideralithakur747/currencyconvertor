const dropdowns = document.querySelectorAll(".dropdown select");
for (let select of dropdowns){
  for(let currcode in countryList){
  let newOption = document.createElement("option");
  newOption.innerText = currcode;
  newOption.textContent = currcode;
  if(select.name==="from"&& currcode==="USD")
  {
    newOption.selected = true;
  }if(select.name==="to"&& currcode==="PKR")
  {
    newOption.selected = true;
  }
  select.appendChild(newOption);

  select.addEventListener("change", (e) => {
    updateflag(e.target);
  });
}
}
const updateflag = (element) =>{

  let currcode = element.value;
  console.log(currcode)
    let countryCode = countryList[currcode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
 let img = element.parentElement.querySelector("img");
 img.src = newSrc;
}