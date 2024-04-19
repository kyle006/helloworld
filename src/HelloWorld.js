import "./style/HelloWorld.css";

export default function HelloWorld() {
  return (
    <main>
      <button id="button" onClick={handleButtonClick}>Try to Click me!</button>
    </main>
  );
}

let clickCount = 0;

function handleButtonClick(){
  clickCount += 1;
  if(isPrimeNumber(clickCount)){
    changeButtonColor();
  }
}

function changeButtonColor(){
  const buttonElement = document.getElementById("button");
  buttonElement.style.backgroundColor = getRandomColor();
}

function getRandomColor(){
  const random = Math.floor(Math.random() * 4);
  console.log(random);

  const currentColor = document.getElementById("button").style.backgroundColor;
  console.log(currentColor);

  if(random === 0 && currentColor != "green"){
    return "green";
  }
  else if(random === 1 && currentColor != "purple"){
    return "purple";
  }
  else if(random === 2 && currentColor != "red"){
    return "red";
  }
  else if(random === 3 && currentColor != "yellow"){
    return "yellow";
  }
  else{
    return "cadetblue";
  }
}

function isPrimeNumber(number){
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        return false;
    }
  }

  return true;
}
