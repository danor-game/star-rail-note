/** @type {typeof GM_xmlhttpRequest} */
export const XMLHttpRequestGM = window.XMLHttpRequestGM;

export const hasXHRGM = typeof XMLHttpRequestGM == 'function';


const fetchText = async (url, method = 'GET', option, willReturnResponse = false) => new Promise((resolve, reject) =>
	XMLHttpRequestGM(Object.assign({}, option, {
		method,
		url,

		onload(response) { resolve(willReturnResponse ? response : response.responseText); },
		onerror(event) { reject(event?.error ?? event); }
	})));



export default fetchText;
