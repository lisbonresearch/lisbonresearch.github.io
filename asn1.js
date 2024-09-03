import { ASN1 } from './modules/asn1.js'
import { Base64 } from './modules/base64.js'

let data = document.getElementById('data')
let bdec = document.getElementById('bdec')
let out = document.getElementById('out')

function decodeAndPrint(data, out) {
	const ul = document.createElement('ul')
	let start = 0

	while (start < data.length) {
		let asn1 = ASN1.decode(data, start)

		const li = document.createElement('li')
		li.textContent = `Tag Class: ${asn1.tagClass} / Is Constructed: ${asn1.isConstructed} / Tag Type: ${asn1.tagType} / Data Length: ${asn1.data.length} / Total Length: ${asn1.totalLength}`

		if (asn1.isSequence()) {
			decodeAndPrint(asn1.data, li)
		}

		ul.appendChild(li)

		start += asn1.totalLength
	}

	let asn1 = ASN1.decode(data,)

	out.appendChild(ul)
}

bdec.addEventListener('click', function (ev) {
	let decodedData = Base64.decode(data.value)
	decodeAndPrint(decodedData, out)
})
