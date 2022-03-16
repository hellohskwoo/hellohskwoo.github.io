
document.querySelector('.rand_button_contain').addEventListener("click",init,false);
var num;
function init (){
	num=(Math.random()*100)%7;
	num=num-num%1;
	document.querySelector('.text_main p').innerHTML=arr[num];
	document.querySelector('.advice_num').innerHTML='Advice # '+num;
}
arr=[
"“We cannot solve problems with the kind of thinking we employed when we came up with them.”<br> — Albert Einstein",
"“Learn as if you will live forever, live like you will die tomorrow.”<br> — Mahatma Gandhi",
"“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”<br> — Mark Twain",
"“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”<br>— Eleanor Roosevelt",
"“When you change your thoughts, remember to also change your world.”<br>—Norman Vincent Peale",
"“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.<br> —Walter Anderson",
"“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.” <br>—Diane McLaren"
]
if(screen.width<=375)
{
	document.querySelector('.hr_class img').src="images/pattern-divider-mobile.svg";
}