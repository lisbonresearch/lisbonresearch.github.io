class Base64 {
	static encode(data) {
		const bindata = Array.from(data, (b) => String.fromCodePoint(b)).join('')
		return btoa(bindata)
	}

	static decode(b64data) {
		return Uint8Array.from(atob(b64data), (m) => m.codePointAt(0))
	}
}

export { Base64 }
