class URL {
	static encode(data) {
		return encodeURIComponent(data)
	}

	static decode(data) {
		return decodeURIComponent(data)
	}
}

export { URL }