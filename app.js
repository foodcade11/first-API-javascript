const cat_btn = document.getElementById("cat_btn");
const fox_btn =document.getElementById("fox_btn");
const cat_result = document.getElementById("cat_result");
const fox_result = document.getElementById("fox_result");

cat_btn.addEventListener('click', getRandomCat);
fox_btn.addEventListener('click', getRandomFox);


function getRandomCat(){
fetch("https://aws.random.cat/meow")
.then((Response) => Response.json())
.then((data) => {
    console.log(data.file);
cat_result.innerHTML =`<img src = ${data.file} alt="cat">`;
});

}
function getRandomFox(){
    fetch("https://randomfox.ca/floof/")
    .then((Response) => Response.json())
    .then((data) => {

    console.log(data.image);

    fox_result.innerHTML =`<img src = ${data.image} alt="cat">`;
    });
}











