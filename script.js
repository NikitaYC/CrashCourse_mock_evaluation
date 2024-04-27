let container = document.getElementById("container");
let options_price = document.getElementById("options_price");

async function getData(){
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        let finalresponse = await response.json();
        console.log(finalresponse);
        displayData(finalresponse)
    } catch (error) {
        console.log(error)
    }
}
getData();

function displayData(products){
    products.forEach(function(item){
        let productCard = document.createElement("div");
        productCard.className = "product-card";

        let Image = document.createElement("img");
        Image.src = item.image;

        let Title = document.createElement("h4");
        Title.textContent = item.title;

        let Price = document.createElement("p");
        Price.textContent = `$${item.price}`

        productCard.append(Image, Title, Price);
        container.append(productCard)
    })

    // let arr = products.sort(function(a, b){
    //     if(options_price == "Price: Low to High"){
    //         return a.price -b.price;
    //     }
    //     else if(options_price == "Price: High to Low"){
    //         return b.price-a.price;
    //     }
    //     else{
    //         return products;
    //     }

    // })
    // console.log(arr)

    // function sortByPrice(){
    //     let arr = products.filter((item) =>item.price)
    //     if(options_price == "Price: Low to High"){
    //         products.sort((a, b) => a.price - b.price)
    //     }
    //     else if(options_price == "Price: High to Low"){
    //         products.sort((a, b) => b.price - a.price)
    //     }
    //     else{
    //         return products;
    //     }
    // }
    // sortByPrice();
}

let asc = document.getElementById("asc");
let des = document.getElementById("des");
function sortProduct(){
    let option = option.value;
    let sortedProducts = [...products].sort((a,b) =>
    option =="asc" ? a.price - b.price : b.price - a.price
)
}
displayData(sortProduct);


let search = document.getElementById("Searchproduct").value;
function searchProduct(){
    for(let i = 0; i < item.length; i++){
        search == item.title;
        }
        console.log(search)
    }
searchProduct()


// function sortByPrice(){
//     let products = products.filter((item) =>item.price)
//     if(options_price == "Price: Low to High"){
//         products.sort((a, b) => a.price - b.price)
//     }
//     else if(options_price == "Price: High to Low"){
//         products.sort((a, b) => b.price - a.price)
//     }
//     else{
//         return products;
//     }
// }

