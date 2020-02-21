
// You should implement your task here.

module.exports = towelSort = m => {
	if (!Array.isArray(m) || m.length == 0) return [];

	let f = [];
	// even
	let e = true;

	for (let r = 0; r < m.length; r++) {
		if (e === true) {
			for (let c = 0; c < m[r].length; c++) {
				f.push(m[r][c]);
			}
		} else {
			for (let c = m[r].length - 1; c >= 0; c--) {
				f.push(m[r][c]);
			}
		}
		e = !e;
	}
	return f;
}
