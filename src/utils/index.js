import { useEffect, useRef } from 'react';
export function usePrevious(value) {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}
export const copy = object => JSON.parse(JSON.stringify(object));

export const commafy = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const filterFalsy = x =>
	Object.entries(x).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});

export const url_encode = val => encodeURIComponent(JSON.stringify(val));

export const url_decode = val => JSON.parse(decodeURIComponent(val));

export const keyfy = key => (
	key.split("").reduce((acc, curr) => {
		let char = ''
		if (acc.length === 0 && curr !== curr.toUpperCase()) {
			char = curr.toUpperCase()
		}
		else if (acc.length > 0 && curr === curr.toUpperCase() && curr !== " " && acc[acc.length - 1] !== " ") {
			char = " " + curr
		} else {
			char = curr
		}
		acc.push(char)
		return acc
	}, []).join("")
)