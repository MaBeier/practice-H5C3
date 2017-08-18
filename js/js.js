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


var navItems=document.querySelectorAll('.nav_item');
var outLineItems=document.querySelectorAll('.outline_item');
var navTip=document.querySelector('.header_nav-tip');
var outline=document.querySelector('.outline');


var unit=(function(){
    var delCls=function(e,cls){
          var baseCls=e.getAttribute('class');
          if(cls.indexOf(cls)>-1)
         return e.setAttribute('class',baseCls.split(cls).join(' ').replace(/\s+/g,' ') )
        }


    var addCls=function(e,cls){
        var baseCls=e.getAttribute('class');
        if(baseCls.indexOf(cls)===-1)
        return e.setAttribute('class',baseCls+' '+cls);
      }

      return {
        delCls:delCls,
        addCls:addCls
      }
})()




//初始化
window.onload=function(){
  //设置成init
  for(k in screenAnimateElements){//console.log(k);
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


setTimeout(function(){playScreenAnimateDone('.sr-1')},100)


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
  if(top<620){
    playScreenAnimateDone('.sr-1');
    switchNavItemsActive(0);
    unit.delCls(outline,'outline_status_in')
  }
 
  if(top>620){
    playScreenAnimateDone('.sr-2');
    switchNavItemsActive(1);
    unit.addCls(outline,'outline_status_in')

  }
  if(top>(1240)){
    playScreenAnimateDone('.sr-3');
    switchNavItemsActive(2);
  }
  if(top>(1860)){
    playScreenAnimateDone('.sr-4');
    switchNavItemsActive(3);
  }
  if(top>(2480)){
    playScreenAnimateDone('.sr-5');
    switchNavItemsActive(4);
  }
    if(top>(2800)){
    switchNavItemsActive(5);
  }
}








function switchNavItemsActive(idx){
  for(var i=0;i<navItems.length;i++){
    unit.delCls(navItems[i],'header_nav-item_active');
    unit.delCls(outLineItems[i],'outline_item_status_active');
  }
  unit.addCls(navItems[idx],'header_nav-item_active');
  unit.addCls(outLineItems[idx],'outline_item_status_active');
  navTip.style.left=( idx * 113.5 )+'px';
}



//跳转
function setNavJump(i,lib){
  lib[i].onclick=function(){
    if(i==0){
      document.body.scrollTop=0; 
    }
    else
      {document.body.scrollTop=i*640;
    switchNavItemsActive(i);}
  }
}


//滑动门
function headerNavTip(i){
  var j=i;
  navItems[j].onmouseover=function(){
    navTip.style.left=(i*113.5)+'px';
    switchNavItemsActive(j);
  }
}


for(var i=0;i<navItems.length;i++){
    setNavJump(i,navItems);//console.log(i,navItems)
    setNavJump(i,outLineItems);
    headerNavTip(i);
}




