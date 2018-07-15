const swipeDirective={
    install(Vue){
        Vue.directive("swipe",{
            bind(el,binding){
                let start = ""
                let end = ""
                let distance =""
                let {movedistance=50,touchstart,touchmove,touchend,left,right} =binding.value
                el.addEventListener("touchstart",(e)=>{
                    start = e.touches[0].pageX
                    touchstart()
                })
                el.addEventListener("touchmove",(e)=>{
                    end = e.touches[0].pageX
                    distance=end-start
                    touchmove()
                })
                el.addEventListener("touchend",()=>{
                    if (distance<-movedistance) {
                        left()
                    }
                    if (distance>movedistance) {
                        right()
                    }
                    touchend()
                })
            }
        })
    }
}
module.exports=swipeDirective