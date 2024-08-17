document.addEventListener('DOMContentLoaded', () => {
const form =document.querySelector('form');
const searchResult=document.querySelector('.search');
const container=document.querySelector('.container');
let userQuery='';
const ID="491c0a25";
const key="90f6192735aad01f8dc20fb18ee53869";

form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    userQuery=e.target.querySelector('input').value;
    console.log(userQuery);
     fetchData();

});

async function fetchData(){
const baseURL=`https://api.edamam.com/search?q=${userQuery}&app_id=${ID}&app_key=${key}`;
const response=await fetch(baseURL);
const data=await response.json();
createContent(data.hits)
console.log(data);
}

function createContent(results){
    let initialcontent='';
    results.map(result =>{
        initialcontent+=
        `<div class="item"><img src="${result.recipe.image}" alt="">
        <div class="flex-container">  
         <h1 class="title"><b>${result.recipe.label}</b></h1>
         <a class="view-btn" href='${result.recipe.url}'><b>View Recipe<b></a>
         </div>
          <p class="recipe-desc">Calories:${result.recipe.calories.toFixed(2)}</p> 
          </div>`;
    });

    searchResult.innerHTML = initialcontent;
    }
    });
