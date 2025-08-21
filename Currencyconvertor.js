const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact"); // 
const btn = document.querySelector("#btn");
const getFacts = async () => {
  console.log("Fetching advice...");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  // console.log(data.fact);
  factPara.innerText = data.fact;
}
 
// function getFacts() {
//   fetch(URL)
//   .then(response => {
//     return response.json();

// })
// .then (data => {
//   factPara.innerText = data.fact;
// })
// }




btn.addEventListener("click", getFacts);