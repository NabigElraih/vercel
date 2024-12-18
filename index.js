const express = require("express");
const app = express();

app.use("/", (req,res)=>{
res.send("
<html>
<head>
<script src="./main.css"></script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap");

*,
*::before,
*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    font-family: Oxygenn, sans-serif;
    font-size: small;
    margin: 2rem;
}

.wrapper{
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(12rem,16rem));
    gap:2rem;
    justify-content: center;
}

.card{
    overflow: hidden;
    box-shadow: 0 2px 20px #e1e5ee;
    border-radius: radius;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 200ms ease-in;

    &:hover{
        transform: scale(1.02);
    }
}
.image{
        height: 12rem;
        width: 100%;
        object-fit: cover;
    }

    .title{
        padding:1rem;
    }

    .description{
        padding: 0 1rem;
    }
.btn{
        padding: 1rem;
        font-family: inherit;
        font-weight: bold;
        font-size: 1rem;
        margin:1rem;
        border: 2px solid rebeccapurple;
        background: transparent;
        color: rebeccapurple;
        border: radius 0;
        transition: background 200ms ease-in, color 200ms ease-in;
        cursor: pointer;
        
        &:hover{
        background: rebeccapurple;
        color: white;
        }

    }


</style>
<script type="text/javascript">
/*function fetchData(){
fetch("./cardsjson.tx").then((res)=>{
  if(!res.ok){
throw new Error ('HTTP ERROR STATUS:!', res.status) 
  }
  return res.json();
}).then((data)=>{
  console.log(data)
}).catch((error)=>{
  console.error("unable to fetch data error :!", error)
})
}
fetchData();*/
</script>
<script type="module" src="./script.js">
  
</script>

</head>

<body id="root">
<div>
    <div class="wrapper">
      <div class="card">
        <div class="card__body">
          <img class="image" src="./IMG_20240506_112811_2.png"></img>
          <h1 class="title">The everyday Meal</h1>
          <p class="description">taking your boring salad up a knotchthis recipe is perfect for lunch and only contain 5 ingrediants</p>
        </div>
        <button class="btn">view</button>
      </div>
      <div class="card">
        <div class="card__body">
          <img class="image" src="./NabigElraih-removebg-preview.png"></img>
          <h1 class="title">The everyday Meal</h1>
          <p class="description">taking your boring salad up a knotchthis recipe is perfect for lunch and only contain 5 ingrediants</p>
        </div>
        <button class="btn">view</button>
      </div>
    <div class="card">
        <div class="card__body">
          <img class="image" src="https://images.unsplash.com/photo-1725640904544-886450cec628?q=80&w=2310&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          <h1 class="title">The everyday Meal</h1>
          <p class="description">taking your boring salad up a knotchthis recipe is perfect for lunch and only contain 5 ingrediants</p>
        </div>
        <button class="btn">view</button>
      </div>
      <div class="card">
        <div class="card__body">
          <img class="image" src="https://media.istockphoto.com/id/2078490118/photo/businessman-using-laptop-to-online-payment-banking-and-online-shopping-financial-transaction.jpg?s=1024x1024&w=is&k=20&c=SDepWtu5jUrc1Jk_GlQSqlD1mwUgfZXYjOJaoeadIQU="></img>
          <h1 class="title">The everyday Meal</h1>
          <p class="description">taking your boring salad up a knotchthis recipe is perfect for lunch and only contain 5 ingrediants</p>
        </div>
        <button class="btn">view</button>
      </div>
      <div class="card">
        <div class="card__body">
          <img class="image" src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          <h1 class="title">The everyday Meal</h1>
          <p class="description">taking your boring salad up a knotchthis recipe is perfect for lunch and only contain 5 ingrediants</p>
        </div>
        <button class="btn">view</button>
      </div>
      <div class="card">
        <div class="body">
          <img class="image" src="https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          <h1 class="title">The everyday Meal</h1>
          <p class="description">taking your boring salad up a knotchthis recipe is perfect for lunch and only contain 5 ingrediants</p>
        </div>
        <button class="btn">view</button>
      </div>
      <div class="card">
        <div class="card__body">
          <img class="image" src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          <h1 class="title">The everyday Meal</h1>
          <p class="description">taking your boring salad up a knotchthis recipe is perfect for lunch and only contain 5 ingrediants</p>
        </div>
        <button class="btn">view</button>
      </div>
    </div>
</div>
</body>
</html>
");
});

app.listen(5000, console.log("server is listening on port 5000"));

