document.getElementById("search-button").addEventListener('click',function(){
    // search text get by click on button
    const searchInput = document.getElementById('search-input')
    const searchText = searchInput.value
    // console.log(searchText);
    
//    api fetch
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then(res => res.json())
      .then(data => displayFoodsData(data.meals)) // pass the data to display foods data function
      
    // clear the input
    searchInput.value = ""
    
})
// in foods reciecev the array data + loop in array and get single data from array
   const displayFoodsData = (foods) => {
    console.log(foods)
   const ui = document.getElementById('foods-div')
    foods.map((foods) => {
      console.log(foods);
      const div = document.createElement('div')
      div.classList.add("card")
      div.innerHTML = 
        `
          <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      
      `
   
    
   ui.appendChild(div)
   
        
   
   
   
   
   
})

    
    
}