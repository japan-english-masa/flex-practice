// 更新日の取得
const last = new Date(document.lastModified);
const year = last.getFullYear();
const month = last.getMonth() + 1;
const date = last.getDate();
// 日付を書き換える
const target = document.getElementById('modify');
target.textContent = year + '-' + month + '-' + date + '';

//thank you btn
const thankYouForSeeing=document.getElementById("thank-you-for-seeing");
const thankYouForSeeingText=document.getElementById("thank-you-for-seeing-text");

document.getElementById("thank-you-btn").onclick=function(){
   thankYouForSeeing.classList.add("thank-you-for-seeing");
   thankYouForSeeingText.classList.add("thank-you-for-seeing-text");
}



//ここからページ個別