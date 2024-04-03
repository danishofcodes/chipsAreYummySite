let disp = document.getElementById('noofitems');
let val = 0;

const add_button = document.getElementById('add-btn');
const less_button = document.getElementById('less-btn');
const cart = document.querySelector("#cart");
const manychips = document.getElementById("manychips");
const aboutLays = document.getElementById("aboutLays");

// add chips to cart

add_button.onclick = function () {
    val += 1;
    disp.textContent = val;
    cart.innerHTML = val + " Chips In Cart";
    console.log(disp.textContent);
    notifBubble.innerHTML = val;
}

// remove chips from cart

less_button.onclick = function () {
    val -= 1;
    if (val < 0) {
        val = 0;
    }
    disp.textContent = val;
    cart.innerHTML = val;
    console.log(disp.textContent)
    notifBubble.innerHTML = val;
}

// for sliding, gliding , parallax animation

window.addEventListener('scroll', function () {
    var v = window.scrollY;
    lays.style.top = v * 0.5 + 'px';
    sauce.style.left = v + 0.7 + 'px';
    sauce.style.top = v + 0.6 + 'px';
    manychips.style.left = v * 1.2 + 'px';
    manychips.style.top = v * 0.3 + 'px';
    sauce.style.transform = `rotate(${v * 0.5}deg)`;
    manychips.style.transform = `rotate(${v * 0.5}deg)`;


});

 // Trigger this on scroll, and add .slide-fade class , 

 window.addEventListener("scroll", function() {
    const slideFadeElements = document.querySelectorAll(".slide-fade");
    slideFadeElements.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add("in-view");
      }
    });
  });
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

console.log("value :" + val)

const lays = document.getElementById('layschips');
const sauce = document.getElementById('sauce');
const addToBag = document.getElementById("addToBag");
let cartItemList = document.querySelector("#cartItemList");
console.log("cartItemList : " + cartItemList);
const payBtn = document.getElementById("payBtn");
const notifBubble = document.querySelector(".notif-bubble");
notifBubble.innerHTML = 0;





function renderChipsInCart(val) {
    cartItemList.innerHTML = ""; // Clear the content initially
    console.log("working");

    if (val != 0) {
        for (let i = 1; i <= val; i++) {
            cartItemList.innerHTML += `<div class="cartItem mb-3">
                <div class="chips"><img src="images/chipsthumbnail.png" alt="Chips" class="thumbnail"></div>
                <div>
                    <h5>Lays BLT Family Size</h4>
                    <p>Rs: 30.98 / 300gms</p>
                </div>
                <button class="btn btn-dark rm-btn" onclick="removeFromCart(this)" id=${"chipsNo-" + i * Date.now()}>remove</button>
            </div>`;
        }
        payBtn.disabled = false;

        payBtn.innerHTML = "Proceed with Payment : " + cartItemsTotalPaymentCalc(30.98, val); // to set payBtn innerHTML here
    } else {
        console.log(val);
        cartItemList.innerHTML = "<div>No Items yet!</div>";
        console.log(val);
        payBtn.innerHTML = "Add Something First"; // to set payBtn innerHTML
        payBtn.disabled = true;
    }
}

// remove from cart
function removeFromCart(e) {
    //    console.log(e)
    val = val - 1;
    e.parentElement.style.display = "none";
    newVal = val;
    console.log("newVal = val, now newVal is :" + newVal)
    cart.innerHTML = newVal;
    disp.textContent = newVal;
    notifBubble.innerHTML = newVal;
    val = newVal;
    totalVal = cartItemsTotalPaymentCalc(30.98, val);

    if (val == 0) {
        cartItemList.innerHTML = "<div>No Items yet!</div>";
        payBtn.innerHTML = "Add Something First"; // to set payBtn innerHTML 
        payBtn.disabled = true;
    } else {
        payBtn.innerHTML = "Proceed with Payment : Rs." + cartItemsTotalPaymentCalc(30.98, val);
        payBtn.disabled = false;
    }
    console.log("val now :" + val)
}

addToBag.addEventListener('click', () => {
    renderChipsInCart(val);
});

function cartItemsTotalPaymentCalc(itemPrice, noOfItems) {
    console.log(itemPrice * noOfItems)
    return itemPrice * noOfItems;
}
