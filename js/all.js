'use strict';

//頻道列表
const channelList = [
    {
        title:'薛喜',
        live:'Hearthstone'
    },
    {
        title:'美女',
        live:'Apex Legends'
    },
    {
        title:'逼比',
        live:'League of Legends'
    },
    {
        title:'嬌兔',
        live:'聊天'
    }
]

const channel = document.querySelector('.channel');

channelList.forEach(function(item){
    let li = document.createElement('li');
    let title = document.createTextNode(item.title);
    let live = document.createTextNode(item.live);
    let p = document.createElement('p');
    let span = document.createElement('span');
    let avatar = document.createElement('img');
    p.appendChild(title);
    span.appendChild(live);
    li.innerHTML=`<img src='./img/channel.png'>`;
    li.appendChild(p);
    li.appendChild(span);
    channel.appendChild(li);
})

//頻道列表toggle
const sideBar = document.querySelector('.sideBar');
const toggle = document.querySelector('.toggle');
toggle.addEventListener('click',function(){
    sideBar.classList.toggle('toggle');
})

//輪播監聽
let transforms = [
    { 
      x : '-35%',
      z : '-100px',
      scale : 0.7,
      hover : 'translateX(-35%) translateZ(-100px) scale(0.72)'
    },
    { 
      x : '-20%',
      z : '-50px',
      scale : 0.8,
      hover : 'translateX(-20%) translateZ(-50px) scale(0.82)'
    },
    { 
      x : '0%',
      z : '0px',
      scale : 1,
    },
    { 
      x : '20%',
      z : '-50px',
      scale : 0.8,
      hover : 'translateX(20%) translateZ(-50px) scale(0.82)'
    },
    { 
      x : '35%',
      z : '-100px',
      scale : 0.7,
      hover : 'translateX(35%) translateZ(-100px) scale(0.72)'
    }

]
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');
const inner = document.querySelectorAll('.inner');
const carousel = [...inner];

//輪播紀錄(下一個)
function nextRecord(num) {
        num -= 1;
    if (num < 0) {
        num =carousel.length-1;
    }
    return num;
}

//輪播紀錄(上一個)
function preRecord(num) {
    num += 1;
if (num >= carousel.length) {
    num =0;
}
return num;
}

//下一個輪播
function nextCarousel() {
    for(let i = 0; i < carousel.length; i++) {
        carousel[i].style.transform = "translateX("+transforms[nextRecord(i)].x+")"+
         "translateZ("+ transforms[nextRecord(i)].z+ ")"+ 
         "scale("+transforms[nextRecord(i)].scale +")";
    }
    transforms.unshift(transforms.pop());
}
next.addEventListener('click',function(item){
    nextCarousel()
})

//上一個輪播
function preCarousel() {
    for(let j = 0; j < carousel.length; j++) {
        carousel[j].style.transform = "translateX("+transforms[preRecord(j)].x+")"+
         "translateZ("+ transforms[preRecord(j)].z+ ")"+ 
         "scale("+transforms[preRecord(j)].scale +")";
    }
    transforms.push(transforms.shift());
}
pre.addEventListener('click',function(item){
    preCarousel()
})

carousel.forEach(function(item,index){
    item.addEventListener('mouseenter',function() {
        item.style.transform=`${transforms[index].hover}`;
        clearHover(item,index);
    })
})

function clearHover(item,index) {
    setTimeout(function(){
        item.style.transform="translateX("+transforms[index].x+")"+
        "translateZ("+ transforms[index].z+ ")"+ 
        "scale("+transforms[index].scale +")";
    },400)
}