class ASN1 {
	constructor(tagClass, isConstructed, tagType, data, totalLength) {
		this.tagClass = tagClass
		this.isConstructed = isConstructed
		this.tagType = tagType
		this.data = data
		this.totalLength = totalLength
	}

	isSequence() { return this.tagClass == 0 && this.tagType == 16 }

	parseInteger() {
		let v = 0
		for (let i = 0; i != this.data.length; i++) {
			v = (v << 8) | this.data[i]
		}

		return v
	}

	static decode(data, start) {
		let identifier = data[start]
		let tagClass = (identifier & 0xC0) >> 6
		let isConstructed = (identifier & 0x40) >> 5
		let tagType = identifier & 0x1F

		let length = data[start + 1]
		let lengthlength = 0

		if (length & 0x80) {
			lengthlength = length & 0x7F

			length = 0
			for (let i = 0; i != lengthlength; i++) {
				length = (length << 8) | data[start + 2 + i]
			}
		}

		let dataIndex = start + 2 + lengthlength

		return new ASN1(
			tagClass,
			isConstructed,
			tagType,
			data.slice(dataIndex, dataIndex + length),
			2 + lengthlength + length)
	}
}

export { ASN1 }
