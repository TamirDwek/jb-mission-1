function addProduct(){
    const productName = document.getElementById('productName').value
    const productPrice = document.getElementById('productPrice').value
    const productCategory = document.getElementById('productCategory').value
    const imageUrl = document.getElementById('imageUrl').value
  
   return {
    productName : productName ,
    productPrice : productPrice,
    productCategory: productCategory,
    imageUrl : imageUrl
   }
}

function generateHTML(data){
const newHTML = `
<tr>
<td> ${data.productName} </td>
<td> ${data.productPrice} </td>
<td> ${data.productCategory} </td>
<td><img src="${data.imageUrl}"></td>
</tr>
`
return newHTML   
}


function renderHTML(newHTML) {
const productContainer = document.getElementById('productContainer')
productContainer.innerHTML += newHTML
}

function clearForm()
{const registrationForm = document.getElementById('registrationForm')
    registrationForm.reset()

const productInput = document.getElementById('productName')
productInput.focus()
}





function addProductFinish(event){
event.preventDefault()
const data = addProduct()
const newHTML = generateHTML(data)
renderHTML(newHTML)
clearForm()

}








//set item to Localstorage
// function saveToLocalStorage(data){
// let animals = JSON.parse(localStorage.getItem(`animals`)) || [] ;
// animals.push(data)
// localStorage.setItem(`animals`,JSON.stringify(animals));
// }

//load item from Localstorage
// function loadFromLocalStorage(){
// const animals = JSON.parse(localStorage.getItem(`animals`))
// anther way- for (const animal of animals) {
    // const newHTML = generateHTML(animal); 
    // renderHTML(newHTML); } 
// for(let i = 0 ; i < animals.length; i++){
//     const newHTML = generateHTML(animals[i])
//     renderHTML(newHTML)
// }
// }

// function saveSingleCarToStorage(carObject) {
//     const currentCarsInStorageJSON = localStorage.getItem('cars')

//     let carsArray;
//     if (!currentCarsInStorageJSON) {
//         carsArray = []
//     } else {
//         carsArray = JSON.parse(currentCarsInStorageJSON)
//     }

//     carsArray.push(carObject)
//     localStorage.setItem('cars', JSON.stringify(carsArray))
// }

// function addCarToTable(event) {
//     event.preventDefault()
//     const data = collectData()
//     const newHTML = generateHTML(data)
//     saveSingleCarToStorage(data)
//     renderHTML(newHTML)
//     clearForm()
// }

// // function loadCarsFromLocalStorage() {
// //     const carsJSON = localStorage.getItem('cars')
// //     if(carsJSON) {
// //         const cars = JSON.parse(carsJSON)
// //         for(const car of cars) {
// //             const newHTML = generateHTML(car)
// //             renderHTML(newHTML)
// //         }
// //     }
// // }

// // loadCarsFromLocalStorage()