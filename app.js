//Global Variable
let sign;


//Starting Function
function initHoroscopeFunc() {
document.querySelector('.zodiac').addEventListener('keypress', userZodiac);
}

//Show user's zodiac
function userZodiac() {
  let userMonth = this.value.substr(5,2);
  let userDay = this.value.substr(8,);
  if(event.keyCode == 13) {
  checkSign(defineSign(removeZero(userMonth)), userDay);
  console.log(showPrediction());
  }
}

//If a user has entered zero remove it
function removeZero(month) {
return (month < 10) ? month.substr(1,) : month;
}

//Define which zodiac sign a user has
function defineSign(month) {
return monthArr()[month - 1];
}

//Check which sign a user has
function checkSign(month, day) {
getCurrentDay();
if(month == 'March' && day >= 21 || month == 'April' && day <= 19) {
document.querySelector('.youare').classList.remove('d-none');
document.querySelector('.zodiac-pic').src = 'img/aries.png';
sign = 'Aries';
}if(month == 'April' && day >= 20 || month == 'May' && day <= 20) {
document.querySelector('.youare').classList.remove('d-none');
document.querySelector('.zodiac-pic').src = 'img/taurus.png';
sign = 'Taurus';
}if(month == 'May' && day >= 21 || month == 'June' && day <= 20) {
document.querySelector('.youare').classList.remove('d-none');
document.querySelector('.zodiac-pic').src = 'img/gemini.png';
sign = 'Gemini';
}if(month == 'June' && day >= 21 || month == 'July' && day <= 22) {
document.querySelector('.youare').classList.remove('d-none');
document.querySelector('.zodiac-pic').src = 'img/cancer.png';
sign = 'Cancer';
}if(month == 'July' && day >= 23 || month == 'August' && day <= 22) {
document.querySelector('.youare').classList.remove('d-none');
document.querySelector('.zodiac-pic').src = 'img/leo.png';
sign = 'Leo';
}if(month == 'August' && day >= 23 || month == 'September' && day <= 22) {
document.querySelector('.youare').classList.remove('d-none');
document.querySelector('.zodiac-pic').src = 'img/virgo.png';
sign = 'Virgo';
}if(month == 'September' && day >= 23 || month == 'October' && day <= 22) {
document.querySelector('.youare').classList.remove('d-none');
document.querySelector('.zodiac-pic').src = 'img/libra.png';
sign = 'Libra';
}if(month == 'October' && day >= 23 || month == 'November' && day <= 21) {
document.querySelector('.youare').classList.remove('d-none');
document.querySelector('.zodiac-pic').src = 'img/scorpio.png';
sign = 'Scorpio';
}if(month == 'November' && day >= 22 || month == 'December' && day <= 21) {
document.querySelector('.youare').classList.remove('d-none');
document.querySelector('.zodiac-pic').src = 'img/sagittarius.png';
sign = 'Sagittarius';
}if(month == 'December' && day >= 22 || month == 'January' && day <= 19) {
document.querySelector('.youare').classList.remove('d-none');
document.querySelector('.zodiac-pic').src = 'img/capricorn.png';
sign = 'Capricorn';
}if(month == 'January' && day >= 20 || month == 'February' && day <= 18) {
document.querySelector('.youare').classList.remove('d-none');
document.querySelector('.zodiac-pic').src = 'img/aquarius.png';
sign = 'Aquarius';
}if(month == 'February' && day >= 19 || month == 'March' && day <= 20) {
document.querySelector('.youare').classList.remove('d-none');
document.querySelector('.zodiac-pic').src = 'img/pisces.png';
sign = 'Pisces';
}

return sign;
}

//Return Month Array
function monthArr() {
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
return months;
}


//Get Zodiac Sign
function zodiacObj() {
  let zodiacSigns = {
    'Capricorn':'Козерог',
    'Aquarius':'Водолей',
    'Pisces':'Рыбы',
    'Aries':'Овен',
    'Taurus':'Телец',
    'Gemini':'Близнецы',
    'Cancer':'Рак',
    'Leo':'Лев',
    'Virgo':'Девы',
    'Libra':'Весы',
    'Scorpio':'Скорпион',
    'Sagittarius':'Стрелец'
  }
  return zodiacSigns;
}

//Show user his prediction for today
function showPrediction() {

  let prediction = {
    'Aries':'Any disappointing news you get today really isn\'t going to be bad news at all, and it won\'t cause a real problem for you. The person telling you the news thinks things are different than they really are, so they\'ll be happy when you set their mind at ease. All in all, you can expect today to be neither totally fun nor utterly frustrating. It could be a kind of gray day where nothing is going to get finalized, but nothing can really get started either.',
    'Taurus':'This is a good time to do some budgeting and prudent investing. Your intuition is strong, so take some time to meditate on where you see your life heading in the next several months or years.',
    'Gemini':'This is a good time to do some budgeting and prudent investing. Your intuition is strong, so take some time to meditate on where you see your life heading in the next several months or years.',
    'Cancer':'Your friends can help you maintain the good energy in your life and show you how to get rid of the bad energy that has been creeping in lately. These people know you better than almost anyone, and they know exactly what to say to help you see the glass as half full and not half empty.',
    'Leo':'All that glitters is not gold, especially today. Someone could be only saying whatever it takes to get their way, even if it\'s not totally true. In order to make sure you listen only to those who speak the truth, you might have to avoid listening to anybody for the time being. Be critical, be objective, and be skeptical. It might not make you the best company right now, but it will keep you safer, richer, and wiser in the long run.',
    'Virgo':'This is a day when you can make a lot of headway working through a love, friendship, or work relationship issue. More than ever, your mind is prepared for open and honest communication, which is essential for effective dialogue and respectful disagreements.',
    'Libra':' It looks like that issue you were worried about will turn out to be nothing, so get ready to breathe a huge sigh of relief! This wonderful release of tension should keep you smiling all day long and make more than a few people notice how cute you are when you\'re happy.',
    'Scorpio':'Your dreams for your life are starting to come true, at least partly. A new person could come into your life today, although their role might be so minimal that you don\'t even notice them. But you will soon enough! ',
    'Sagittarius':'Your ambitions take you forward in life, but have you ever stopped to think about what (or who) they may have forced you to leave behind? Take some time today to remember the people, places, and things that you miss. It won\'t be unpleasant.',
    'Capricorn':' Be happy, not annoyed, if a few people reach out for some assistance. You should be only too glad to help the people who have helped you so much in the past. And aren\'t you flattered that they think you have what it takes to make their life better? ',
    'Aquarius':'If you\'re holding joint assets with anyone right now, you should check in with them. You need to make sure that the status hasn\'t changed. It\'s not that you shouldn\'t trust this person; it\'s just that things could have changed and you need to stay on top of it.',
    'Pisces':'Why not treat yourself to a few of your favorite things? Buy yourself something that you\'ve wanted for a while. Fix yourself an extra special dinner. Relax a little longer in bed or a bath. Or maybe schedule in a nice long nap! '
  };

document.querySelector('.prediction-head').classList.remove('d-none');
document.querySelector('.prediction').classList.remove('d-none');


for(let key in prediction) {
  if(key == sign) {
  document.querySelector('.prediction').innerHTML = prediction[key];
  }
}

}

//Getting Curent Day
function getCurrentDay() {
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let date = new Date();
document.querySelector('.today').innerHTML = `${months[date.getMonth()] + ' ' + date.getDate()}`;
}
