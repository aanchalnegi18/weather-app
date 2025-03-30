const backgroundDiv=document.querySelector('.content');
const imageDiv=document.querySelector('.image');
const image=document.querySelector('img')

let btn=document.querySelector('button');

let city=document.querySelector('.city');
let temp=document.querySelector('.temp')
let input=document.querySelector('input')
let wind=document.querySelector('.wind');
let humidity=document.querySelector('.humidity');


btn.addEventListener('click',()=>{

	fetching(); });

async function  fetching() {


const url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=4d4a4aed0f673cc3cc15e718a876ee74&units=metric`;





	try{
	const response=await fetch(url);
	const result=await response.json();
	console.log(result)

if(input.value.trim===''){ console.log('please enter name')}
else{
  city.innerHTML = result.name;
  
  temp.innerHTML =`${ result.main.temp} °C`;
	humidity.innerHTML=`${result.main.humidity}%`;
	wind.innerHTML=`${result.wind.speed}Km/h`;
  
  console.log(result.main.temp)
 }
	
	
	


}

	catch(error){
		console.error(error);
	}
	
}
 //backgroundDiv.classList.add('rain');