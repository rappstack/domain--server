import { id_be_sig_triple_, type tag_dom_T } from 'relementjs'
import { type wide_ctx_T } from 'rmemo'
export const [
	,
	logo_image__new_,
	logo_image__new__set,
] = id_be_sig_triple_<logo_image__new_T|undefined>(
	'logo_image',
	()=>undefined)
export function logo_image_(ctx:wide_ctx_T, $p?:{ class?:string }) {
	return logo_image__new_(ctx)?.($p)
}
export type logo_image__new_T = ($p?:{ class?:string })=>tag_dom_T
