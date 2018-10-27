//-------------------- Color utilities --------------------

// Obtained from https://stackoverflow.com/a/9493060/2342681
function hsl2rgb(h, s, l) {
	let r, g, b
	if (s === 0) {
		r = g = b = l // achromatic
	} else {
		let hue2rgb = (p, q, t) => {
			if (t < 0) t += 1
			if (t > 1) t -= 1
			if (t < 1 / 6) return p + (q - p) * 6 * t
			if (t < 1 / 2) return q
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
			return p
		}
		let q = l < 0.5 ? l * (1 + s) : l + s - l * s
		let p = 2 * l - q
		r = hue2rgb(p, q, h + 1 / 3)
		g = hue2rgb(p, q, h)
		b = hue2rgb(p, q, h - 1 / 3)
	}
	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

function rgb2hex(r, g, b) {
	let d2h = d => {
		let h = d.toString(16)
		return h.length > 1 ? h : '0' + h
	}
	return `#${d2h(r)}${d2h(g)}${d2h(b)}`
}

export function randomColor() {
	let [r, g, b] = hsl2rgb(Math.random(), 1, 0.5)
	return rgb2hex(r, g, b)
}


//-------------------- Date utilities --------------------

export function date2html(d) {
	return d.toISOString().split('T')[0]
}

