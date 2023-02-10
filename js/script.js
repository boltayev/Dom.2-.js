const wrapper  = document.querySelector('.wrapper')
const input= document.querySelector('input')
const clickMe  = document.querySelector('#click-me')
const into  = document.querySelector('.into')
 

// clickMe.addEventListener('click' , (e) =>{
//     e.preventDefault()
//     const abs = document.createElement('li')
//     // into.append(abs)
//     abs.innerHTML = `<li>${input.value}</li>`
//     into.append(abs)

// })

clickMe.addEventListener("click" , sayHello)

function sayHello() {
	if(input.value !== ''){
		input.style.border = "1px solid black"
		into.innerHTML += `
			<li>${input.value}</li>
		`
		input.value = ''
	}else{
		input.style.border = "1px solid red"
	}
}


const sum = document.querySelector('.sum')

const enc = document.querySelector('.enc')
const dec = document.querySelector('.dec')
const rst = document.querySelector('.rst')
const rnd = document.querySelector('.rnd')


let sumValue = 0
sum.innerText = sumValue

enc.addEventListener('click' , (e))
function e (){
	sumValue++
	sum.innerText = sumValue

	if(sumValue === 50){
		enc.removeEventListener('click', (e))
	}

}



dec.addEventListener('click', p)

function p (){
	sumValue--
	sum.innerText = sumValue
	if(sumValue === -50){
		dec.removeEventListener('click', (p))
	}
}



rst.addEventListener('click' , r)

function r (){
	sumValue = 0
	sum.innerText  = sumValue
}



rnd.addEventListener('click', m)

function m (){
	sumValue = Math.random()
	sumValue = Math.floor(Math.random() * (50 - (-50) + 1) ) + (-50); 
	sum.innerText = `${sumValue}`
}



