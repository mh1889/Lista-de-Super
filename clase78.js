window.onload = function () {
	const button = document.querySelector("button")
	const input = document.querySelector("input")
	const lista = document.querySelector(".lista")
	const items = []


function addItem() {
		const valor = input.value

		if (!items.includes(valor)) {items.push(valor)
		

			const newElement = document.createElement("div")
			newElement.append(valor)

			const eraseButton = document.createElement("button")
			eraseButton.innerHTML = "X"

			eraseButton.onclick = function() {
				lista.removeChild(newElement)
				items.splice(items.indexOf(valor), 1)
			}

			newElement.append(eraseButton)

			lista.append(newElement)

			return input.value = ('')
		}
}

	input.onkeydown = function (event) {
		if (event.key === "Enter") { addItem()
		}		}
	

	button.onclick = function () { addItem() }}