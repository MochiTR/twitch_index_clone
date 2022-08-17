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