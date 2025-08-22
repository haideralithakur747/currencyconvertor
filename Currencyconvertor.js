
let url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";
const getcurrencydata = async () => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};
const fromCurrency = document.querySelector("#from-currency");
const toCurrency = document.querySelector("#to-currency");
const amount = document.querySelector("#amount");
const dropdowns = document.querySelectorAll(".dropdown select");
const result = document.querySelector("#result");
let final_value ;
let toRate;
let fromRate;
function convertCurrency(){
  getcurrencydata().then(data => {
     fromRate = data.eur[fromCurrency.value.toLowerCase()];
    
     toRate = data.eur[toCurrency.value.toLowerCase()];
    
    let convertedAmount = (amount / fromRate) * toRate;
    result.innerText = `${amount} ${fromCurrency.value} = ${convertedAmount.toFixed(2)} ${toCurrency.value}`;
final_value= convertedAmount;  
  });

}
convertCurrency();

for (let select of dropdowns){
  for(let currcode in countryList){
  let newOption = document.createElement("option");
  newOption.innerText = currcode;
  newOption.value = currcode;
  if(select.name==="from-currency"&& currcode==="USD")
  {
    newOption.selected = true;
  }if(select.name==="to-currency"&& currcode==="PKR")
  {
    newOption.selected = true;
  }
  // updateflag(select);
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