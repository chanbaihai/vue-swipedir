# vue-swipedir
create a  moible swipe directive of vue
# 使用方法
在入口文件import然后Vue.use（）一下就可以使用指令了    
或者script link，在node_modules下面找到这个包下面的index.js文件 link过去

`v-swipe="<Object>"  

Object为data或props提供的对象  

Object{  

  //设置手指移动距离，大于设置值时为滑动，默认100  

   movedistance:100,  

  //相应触摸事件的回调函数  

   touchstart(){},  

   touchmove(){},  

   touchend(){},  

  //向左滑动执行的函数  

   left(){},  

  //向右滑动执行的函数  

   right(){}  
   
  }`
