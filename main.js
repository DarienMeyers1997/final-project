//Order Online
//BOX-BODY
let boxBody = document.querySelector("#box-body");
let ingredients = document.querySelectorAll("#box-body .ingredients");
let submitOrder = document.querySelector(".submitOrder");

function totalPrice() {
  let price = 0.0;
  let checkboxes = document.getElementsByClassName("ingredients");

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) price += Number(checkboxes[i].value);
  }
  boxBody.addEventListener("submit", function (event) {
    event.preventDefault();
    let newStr = "";
    for (let item of ingredients) {
      if (item.checked === true) {
        newStr += `${item.id},`;
      }
    }

    console.log(newStr);
    alert(`Your order contains: ${newStr} and comes to a total of: ${price}`);
  });
}
