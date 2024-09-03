import { Base64 } from './modules/base64.js'
import { URL } from './modules/url.js'

const algo = document.getElementById('algo')
const benc = document.getElementById('benc')
const bdec = document.getElementById('bdec')
const data = document.getElementById('data')

benc.addEventListener('click', function (ev) {
	switch (algo.value) {
		case 'base64':
			data.value = Base64.encode(new TextEncoder().encode(data.value))
			break
		case 'url':
			data.value = URL.encode(data.value)
			break
	}
})

bdec.addEventListener('click', function (ev) {
	switch (algo.value) {
		case 'base64':
			data.value = new TextDecoder().decode(Base64.decode(data.value))
			break
		case 'url':
			data.value = URL.decode(data.value)
			break
	}
})
