var screenAnimateElements={
  '.header':[
      '.header',
  ],
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
      '.sr-3_img',
      '.sr-3_ul'
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


function setScreenAnimate(screenCls) {
      var screen=document.querySelector(screenCls);
      var animateElements=screenAnimateElements[screenCls];

      var isSetAnimateClass=false;//是否有初始化子元素样式

      var isSetAnimateDone=false;//当前所有元素的状态是DONE?

      screen.onclick=function(){
      
        if(isSetAnimateClass===false){
          for (var i = 0; i < animateElements.length; i++) {
            var element=document.querySelector(animateElements[i]);
            var baseCls=element.getAttribute('class');
            element.setAttribute('class',baseCls+" "+animateElements[i].substr(1)+"_animate_init");
          }
          isSetAnimateClass=true;
          return;
        }
       
        if(isSetAnimateDone===false){
          for (var i = 0; i < animateElements.length; i++) {
            var element=document.querySelector(animateElements[i]);
            var baseCls=element.getAttribute('class');
            element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
          }
          isSetAnimateDone=true;
          return;
        }

        if(isSetAnimateDone===true){
          for (var i = 0; i < animateElements.length; i++) {
            var element=document.querySelector(animateElements[i]);
            var baseCls=element.getAttribute('class');
            element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
          }
          isSetAnimateDone=false;
          return;
        }

      }
}
//切换到done

setScreenAnimate('.sr-1');
setScreenAnimate('.sr-2');
setScreenAnimate('.sr-3');
setScreenAnimate('.sr-4');
setScreenAnimate('.sr-5');