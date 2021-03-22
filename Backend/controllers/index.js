exports.encode = async (req, res) => {
	function compress(s) {
		var newstring = ''
		var c = 1
		var a = 0
		while (a < s.length) {
			while (a + 1 < s.length && s[a] === s[a + 1]) {
				a++
				c++
			}
			newstring += s[a] + c
			c = 1
			a++
		}
		return newstring
	}
	try {
		var givenString = req.body.value
		var Onlyletters = /^[A-Za-z]+$/
		if (!givenString.match(Onlyletters)) {
			return res.json({ status: 401, message: 'URL should be only Alphabet ' })
		}
		var OnlySmallletters = /^[a-z]+$/
		if (!givenString.match(OnlySmallletters)) {
			return res.json({ status: 401, message: 'URL should be only Small Alphabet ' })
		}
		var newString = compress(givenString)
		return res.json({ status: 201, compressString: newString })
	} catch (e) {
		res.json({ status: 401, message: e.message })
	}
}

exports.decode = async (req, res) => {
	function decompress(compresedString) {
		var decompressedString = ''

		var c = 0

		while (c < compresedString.length) {
			var cha
			if (compresedString[c] >= 'a' && compresedString[c] <= 'z') {
				cha = compresedString[c]
				c++
			}
			let cc = ''

			if (!cha) {
				return 'undefind'
			}
			while (compresedString[c] >= '0' && compresedString[c] <= '9') {
				cc += compresedString[c]
				c++
			}
			console.log(cc)
			for (let index = 0; index < cc; index++) decompressedString += cha
		}
		return decompressedString
	}
	try {
		var givenString = req.body.value
		if (givenString.length < 1) return res.json({ status: 401, message: 'Compress URL should not empty' })

		for (let index = 0; index < givenString.length; index++) {
			if (givenString[index] >= 'a' && givenString[index] <= 'z') {
				if (index + 1 < givenString.length) {
					if (givenString[index + 1] >= 'a' && givenString[index + 1] <= 'z') return res.json({ status: 401, message: 'Enter a Valid Compressed URL' })
				} else return res.json({ status: 401, message: 'Enter a Valid Compressed URL' })
			}
		}

		var newString = decompress(givenString)
		if (newString === 'undefind') return res.json({ status: 401, message: 'Enter a Valid Compressed URL' })
		return res.json({ status: 201, decompressString: newString })
	} catch (e) {
		res.json({ status: 401, message: e.message })
	}
}
