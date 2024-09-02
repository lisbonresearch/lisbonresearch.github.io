function base64_decode(b64data) {
	const bindata = Uint8Array.from(atob(b64data), (m) => m.codePointAt(0))
	return new TextDecoder().decode(bindata)
}

function base64_encode(data) {
	const utf8data = new TextEncoder().encode(data)
	const bindata = Array.from(utf8data, (b) => String.fromCodePoint(b)).join('')
	return btoa(bindata)
}

const benc = document.getElementById('benc')
const bdec = document.getElementById('bdec')
const data = document.getElementById('data')

benc.addEventListener('click', function (ev) {
	data.value = base64_encode(data.value)
})

bdec.addEventListener('click', function (ev) {
	data.value = base64_decode(data.value)
})
