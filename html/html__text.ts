import { response__drain } from '../response/index.js'
export async function html__text_(html:string) {
	let _text = ''
	const rw = new HTMLRewriter().on('*', {
		text(text) {
			_text += text.text ?? ''
		}
	})
	await response__drain(await rw.transform(new Response(html)))
	return _text
}
