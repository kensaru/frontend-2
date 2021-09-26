// const button = document.getElementById('header-toggle');
// const buttonBall = document.getElementById('header-toggle-ball');
// const price1 = document.querySelectorAll('.card-price')[0];
// const price2 = document.querySelectorAll('.card-price')[2];
// const price3 = document.querySelectorAll('.card-price')[3];
// const annuallyPrice1 = document.querySelectorAll('.card-price')[1];
// const annuallyPrice2 = document.getElementById('professional-price');
// const annuallyPrice3 = document.querySelectorAll('.card-price')[5];
// const monthly = document.querySelectorAll('.monthly');

// button.addEventListener('click', function(){
//   buttonBall.classList.toggle('float-toggle');

//   //basic card
//   price1.classList.toggle('monthly') // mati
//   annuallyPrice1.classList.toggle('monthly'); //nyala

//   //professional card
//   price2.classList.toggle('monthly') // mati
//   annuallyPrice2.classList.add("monthly"); //nyala

//   //master card
//   price3.classList.toggle('monthly') // mati
//   annuallyPrice3.classList.toggle('monthly'); //nyala
// })


const button = document.getElementById('header-toggle');
const buttonBall = document.getElementById('header-toggle-ball');
const btn = document.getElementsByClassName('card-price');
const container = document.querySelector('.container');

//basic
const basicMonthly = document.getElementById('basic-monthly');
const basicAnnually = document.getElementById('basic-annually');

//professional 
const professionalMonthly = document.getElementById('professional-monthly');
const professionalAnnually = document.getElementById('professional-annually');

//master
const masterMonthly = document.getElementById('master-monthly');
const masterAnnually = document.getElementById('master-annually');


button.addEventListener('click', function(){
    buttonBall.classList.toggle('float-toggle');

    basic();
    professional();
    master();
})

container.addEventListener('click', function nama(e) {
  const klik = e.target.getAttribute("class");
  console.log(klik)
  
  if(klik == 'btn' || klik == 'btn btn-special'){
    alert('belum bisa dipencet, tunggu w bikin programnya dulu \n -c');
  } else{
    alert('salah')
  }
})


function basic(){
  basicMonthly.classList.toggle('hide');
  basicAnnually.classList.toggle('hide');
}
function professional(){
  professionalMonthly.classList.toggle('hide');
  professionalAnnually.classList.toggle('hide');
}
function master(){
  masterMonthly.classList.toggle('hide');
  masterAnnually.classList.toggle('hide');
}



