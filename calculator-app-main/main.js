var a=document.getElementsByClassName('num_button')
s=1;
var num='';
function f1()
{
	var aa=document.querySelectorAll('.theme_bar_ball');
	for(var i=0;i<3;i++)
	{
		if(i==0)
		{
			aa[i].style.background='red';
		}
		else aa[i].style.background='hsl(223, 31%, 20%)';
	}
	var aa=document.querySelector('.theme_bar');
	aa.style.background='hsl(223, 31%, 20%)';
	var aa=document.querySelectorAll('#calc_text');
	aa[0].style.color='white';
	aa[1].style.color='white';
	aa=document.querySelector('body');
	aa.style.background='hsl(222, 26%, 31%)';
	aa=document.querySelector('.calc_main');
	aa.style.background='hsl(223, 31%, 20%)';
	aa=document.querySelector('.num_bar');
	aa.style.background='hsl(224, 36%, 15%)';
	aa.style.color='white';
	for(var i=0;i<18;i++)
	{
		a[i].style.color='black';
		a[i].style.background='hsl(30, 25%, 89%)';
		a[i].style.borderRadius='8px';
		a[i].style.boxShadow='1px 1px 1px 2px hsl(28, 16%, 65%)';
	}
	a[3].style.color='white';
	a[3].style.background='hsl(225, 21%, 49%)';
	a[3].style.boxShadow='1px 1px 1px 2px  hsl(224, 28%, 35%)';
	a[3].style.fontSize='15px';

	a[16].style.color='white';
	a[16].style.background='hsl(225, 21%, 49%)';
	a[16].style.boxShadow='1px 1px 1px 2px  hsl(224, 28%, 35%)';
	a[16].style.fontSize='15px';

	a[17].style.color='white';
	a[17].style.background='hsl(6, 63%, 50%)';
	a[17].style.boxShadow='1px 1px 1px 2px   hsl(6, 70%, 34%)';
	a[17].style.fontSize='15px';
}
function f2()
{
	var aa=document.querySelectorAll('.theme_bar_ball');
	for(var i=0;i<3;i++)
	{
		if(i==1)
		{
			aa[i].style.background='red';
		}
		else aa[i].style.background='hsl(0, 5%, 81%)';
	}
	var aa=document.querySelector('.theme_bar');
	aa.style.background='hsl(0, 5%, 81%)';
	var aa=document.querySelectorAll('#calc_text');
	aa[0].style.color='black';
	aa[1].style.color='black';
	aa=document.querySelector('body');
	aa.style.background='hsl(0, 0%, 90%)';
	aa=document.querySelector('.calc_main');
	aa.style.background='hsl(0, 5%, 81%)';
	aa=document.querySelector('.num_bar');
	aa.style.background='white';
	aa.style.color='black';
	for(var i=0;i<18;i++)
	{
		a[i].style.color='black';
		a[i].style.background='hsl(45, 7%, 89%)';
		a[i].style.borderRadius='8px';
		a[i].style.boxShadow='1px 1px 1px 2px hsl(35, 11%, 61%)';
	}
	a[3].style.color='white';
	a[3].style.background='hsl(185, 42%, 37%)';
	a[3].style.boxShadow='1px 1px 1px 2px  hsl(185, 58%, 25%)';
	a[3].style.fontSize='15px';

	a[16].style.color='white';
	a[16].style.background='hsl(185, 42%, 37%)';
	a[16].style.boxShadow='1px 1px 1px 2px  hsl(185, 58%, 25%)';
	a[16].style.fontSize='15px';

	a[17].style.color='white';
	a[17].style.background='hsl(25, 98%, 40%)';
	a[17].style.boxShadow='1px 1px 1px 2px   hsl(25, 99%, 27%)';
	a[17].style.fontSize='15px';
}
function f3()
{
	var aa=document.querySelectorAll('.theme_bar_ball');
	for(var i=0;i<3;i++)
	{
		if(i==2)
		{
			aa[i].style.background='hsl(176, 100%, 44%)';
		}
		else aa[i].style.background='hsl(268, 71%, 12%)';
	}
	var aa=document.querySelector('.theme_bar');
	aa.style.background='hsl(268, 71%, 12%)';
	var aa=document.querySelectorAll('#calc_text');
	aa[0].style.color='hsl(52, 100%, 62%)';
	aa[1].style.color='hsl(52, 100%, 62%)';
	aa=document.querySelector('body');
	aa.style.background='hsl(268, 75%, 9%)';
	aa=document.querySelector('.calc_main');
	aa.style.background='hsl(268, 71%, 12%)';
	aa=document.querySelector('.num_bar');
	aa.style.background='hsl(268, 71%, 12%)';
	aa.style.color='hsl(52, 100%, 62%)';
	for(var i=0;i<18;i++)
	{
		a[i].style.color='hsl(52, 100%, 62%)';
		a[i].style.background='hsl(268, 47%, 21%)';
		a[i].style.borderRadius='8px';
		a[i].style.boxShadow='0px 1px 1px 1px hsl(290, 70%, 36%)';
	}
	a[3].style.color='white';
	a[3].style.background=' hsl(281, 89%, 26%)';
	a[3].style.boxShadow='0px 1px 1px 1px   hsl(285, 91%, 52%)';
	a[3].style.fontSize='15px';

	a[16].style.color='white';
	a[16].style.background='hsl(281, 89%, 26%)';
	a[16].style.boxShadow='0px 1px 1px 1px   hsl(285, 91%, 52%)';
	a[16].style.fontSize='15px';

	a[17].style.color='white';
	a[17].style.background='hsl(176, 100%, 44%)';
	a[17].style.boxShadow='0px 1px 1px 1px   hsl(177, 92%, 70%)';
	a[17].style.fontSize='15px';
}
f1();
for(var i=0;i<18;i++)
{
	a[i].addEventListener('click',function(event){
		calc(this.innerHTML);
	});
}
var tmp=document.getElementsByClassName('theme_bar_ball');


tmp[0].addEventListener('click',function(event){
	f1();
});
tmp[1].addEventListener('click',function(event){
	f2();
});
tmp[2].addEventListener('click',function(event){
	f3();
});
function calc(cc)
{
	var b=document.querySelector('.num_bar');
	if(cc=='DEL' || cc=='=' || cc=='RESET')
	{
		if(cc=='DEL')
		{
			num=num.slice(0,-1);
			b.innerHTML=num;
			return ;
		}
		if(cc=='=')
		{
			num=num.replace("x",'*');
			num=eval(num);
			num=String(num);
			b.innerHTML=num;
			return ;
		}
		if(cc=='RESET')
		{
			num='';
			b.innerHTML=num;
			return ;
		}
		console.log('sorry');
		return ;
	}
	num=num+cc;
	b.innerHTML=num;
}