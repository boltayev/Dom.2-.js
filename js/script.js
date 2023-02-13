const wrapper  = document.querySelector('.wrapper')
const input= document.querySelector('input')
const clickMe  = document.querySelector('#click-me')
const into  = document.querySelector('ul')
 

clickMe.addEventListener('click', () =>{
	into.innerHTML += `
			<li>
				<div class="todo">
					<input type="checkbox">
					${input.value}
				</div>
				<button class="ee">X</button>

			</li>
		`
	k('ee')
})

function k(ending){
	let deleted = document.querySelectorAll(`.${ending}`)

	deleted.forEach((time) => {
		time.addEventListener('click', () => {
			time.parentElement.remove()
		})
	})
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

