import React from "./reactreact";
import ReactDom from "./react-dom";


/*interface CardDet{
id: Number;
  imgsrc: String;
title: string;
description: String;
}*/

function App() {
  return (
    <div className="wrapper">
      <Card src="https://media.istockphoto.com/id/2078490118/photo/businessman-using-laptop-to-online-payment-banking-and-online-shopping-financial-transaction.jpg?s=1024x1024&w=is&k=20&c=SDepWtu5jUrc1Jk_GlQSqlD1mwUgfZXYjOJaoeadIQU="
      title="The everyday Meal"
description="taking your boring salad up a knotchthis recipe is perfect for lunch and only contain 5 ingrediants"
      >
      </Card>

      <Card src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="The everyday Meal"
description="taking your boring salad up a knotchthis recipe is perfect for lunch and only contain 5 ingrediants"
      >
      </Card>

      <Card src="https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="The everyday Meal"
description="taking your boring salad up a knotchthis recipe is perfect for lunch and only contain 5 ingrediants"
      >
      </Card>

      <Card className="card__image" src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="The everyday Meal"
description="taking your boring salad up a knotchthis recipe is perfect for lunch and only contain 5 ingrediants"
      >
      </Card>

      <Card src="https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok"
      title="The everyday Meal"
description="taking your boring salad up a knotchthis recipe is perfect for lunch and only contain 5 ingrediants"
      >
      </Card>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.src}></img>
        <h1 className="card__title">{props.title}</h1>
        <p className="card_desription">{props.description}</p>
      </div>
      <button className="card__btn">view</button>
    </div>
  );
}

ReactDom.render(<App />, document.getelementById("root"));
