

var screenAnimateElements={
  '.sr-1':[
      '.sr_container-1' ,
      '.sr_container-1_h1',
      '.sr_container-1_p'
  ],
  '.sr-2':[
      '.sr_container-2' ,
      '.sr_container-2_h1',
      '.sr_container-2_border',
      '.sr_container-2_p',
      '.sr-2_people',
      '.sr-2_rocket'
  ],
  '.sr-3':[
      '.sr_container-3_h1',
      '.sr_container-3_p',
      '.border_b3',
      '.sr-3_img'
  ],
  '.sr-4':[
      '.sr_container-4',
      '.sr-4_tu'
    ],

  '.sr-5':[
      '.sr-5_img',
      '.sr_container-5_h1',
      '.sr_container-5_p',
      '.border_b5'
  ]

};







setTimeout(function(){playScreenAnimateDone('.sr-1');},100)



//初始化
window.onload=function(){
  //设置成init
  for(k in screenAnimateElements){
    setScreenAnimateInit(k);
  }
}

function setScreenAnimateInit(screenCls){
  var screen=document.querySelector(screenCls);
  var animateElements=screenAnimateElements[screenCls];
  for(var i=0;i<animateElements.length;i++){
    var element=document.querySelector(animateElements[i]);
    var baseCls=element.getAttribute('class');
    element.setAttribute('class',baseCls+' '+animateElements[i].substr(1)+'_animate_init');
  }
}




//滚动条滑动
function playScreenAnimateDone(screenCls){
  var screen=document.querySelector(screenCls);
  var animateElements=screenAnimateElements[screenCls];
  for (var i = 0; i < animateElements.length; i++) {
    var element=document.querySelector(animateElements[i]);
    var baseCls=element.getAttribute('class');
    element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
  }
}



//滚动条动
window.onscroll = function(){
  var top  = document.body.scrollTop;
  switchNavItemsActive(0);
  if(top<640-80){
    playScreenAnimateDone('.sr-1');
    switchNavItemsActive(0);
  }
 
  if(top>640-80){
    playScreenAnimateDone('.sr-2');
    switchNavItemsActive(1);
  }
  if(top>(640*2-80)){
    playScreenAnimateDone('.sr-3');
    switchNavItemsActive(2);
  }
  if(top>(640*3-80)){
    playScreenAnimateDone('.sr-4');
    switchNavItemsActive(3);
  }
  if(top>(640*4-80)){
    playScreenAnimateDone('.sr-5');
    switchNavItemsActive(4);
  }
    if(top>(640*4+20)){
    switchNavItemsActive(5);
  }
}




var navItems=document.querySelectorAll('.nav_item');
var outLineItems=document.querySelectorAll('.outline_item');




function delCls(e,cls){
  var baseCls=e.getAttribute('class');
  if(cls.indexOf(cls)>-1){
    e.setAttribute('class',baseCls.split(cls).join(' ').replace(/\s+/g,' ') );
  }
}


function addCls(e,cls){
  var baseCls=e.getAttribute('class');
  if(baseCls.indexOf(cls)===-1)
  e.setAttribute('class',baseCls+' '+cls);
}



function switchNavItemsActive(idx){
  for(var i=0;i<navItems.length;i++){
    delCls(navItems[i],'header_nav-item_active');
    delCls(outLineItems[i],'outline_item_status_active');
    //console.log('i',i);
  }
  addCls(navItems[idx],'header_nav-item_active');
  addCls(outLineItems[idx],'outline_item_status_active');
  navTip.style.left=( idx * 115 )+'px';
  //console.log('idx',idx);
}



//跳转
function setNavJump(i,lib){
  lib[i].onclick=function(){
    if(i==0){
      document.body.scrollTop=0; 
    }
    else
      {document.body.scrollTop=(i+1)*640-80;
    switchNavItemsActive(i);}
  }
}




for(var i=0;i<navItems.length;i++){
  setNavJump(i,navItems);
}

//大纲点击跳转
for(var i=0;i<outLineItems.length;i++){
  setNavJump(i,outLineItems);
}



//滑动门
var navTip=document.querySelector('.header_nav-tip'); 

function headerNavTip(){
  var j=i;
  navItems[j].onmouseover=function(){
    navTip.style.left=(i*115)+'px';
    switchNavItemsActive(j);
  }
}

for(var i=0;i<navItems.length;i++){
  headerNavTip(i);
}


