let price = document.querySelector('.tutar');
let yearly = document.querySelector('.yil');
let rate = document.querySelector('.oran');
let resultBtn = document.querySelector('.result-btn');

resultBtn.addEventListener('click', hesapla);

function hesapla() {
  if (price.value !== '' && yearly.value !== '' && rate.value !== '') {
    let aylikFaiz = Number(rate.value) / 100 / 12;
    let toplamaylikOdeme = Number(yearly.value) * 12;
    let aylikodeme = (Number(price.value) * aylikFaiz) / (1 - Math.pow(1 + aylikFaiz, -toplamaylikOdeme));
    let geriodeme = aylikodeme * toplamaylikOdeme;
    // result screen here
    document.querySelector('.aylikOdeme').innerText = `£${aylikodeme.toFixed(2)}`;
    document.querySelector('.greyBig').innerText = `£${geriodeme.toFixed(2)}`;
    document.querySelector('.footer-show').classList.add('shows');
    document.querySelector('.footer').classList.add('block');
    //warning remove
    document.querySelector('.warningRate').classList.remove('show');
    document.querySelector('.warningYear').classList.remove('show');
    document.querySelector('.warninPrice').classList.remove('show');
    price.classList.remove('red');
    yearly.classList.remove('red');
    rate.classList.remove('red');
  } else {   // valuelar warning spanlar
    if (price.value === '') {
      price.classList.add('red');
      document.querySelector('.warninPrice').classList.add('show');
    }
    if (yearly.value === '') {
      yearly.classList.add('red');
      document.querySelector('.warningYear').classList.add('show');
    }
    if (rate.value === '') {
      rate.classList.add('red');
      document.querySelector('.warningRate').classList.add('show');
    }
  }
}
// hepsini temizle 
document.querySelector('.clearBtn').addEventListener('click', clearAll);

function clearAll() {
  price.value = '';
  yearly.value = '';
  rate.value = '';
  document.querySelector('.footer-show').classList.remove('shows');
  document.querySelector('.footer').classList.remove('block');
  document.querySelector('.warningRate').classList.remove('show');
  document.querySelector('.warningYear').classList.remove('show');
  document.querySelector('.warninPrice').classList.remove('show');
  rate.classList.remove('red');
  yearly.classList.remove('red');
  price.classList.remove('red');
}
