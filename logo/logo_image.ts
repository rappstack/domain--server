import { id_be_lock_memosig_triple_ } from 'relementjs'
import { type wide_ctx_T } from 'rmemo'
import { type logo_image__new_T, site__logo_image__new_ } from '../site/index.js'
export const [
	,
	logo_image__new_,
	logo_image__new__set,
] = id_be_lock_memosig_triple_<logo_image__new_T|undefined>(
	'logo_image__new',
	ctx=>site__logo_image__new_(ctx))
export function logo_image_(ctx:wide_ctx_T, $p?:{ class?:string }) {
	return logo_image__new_(ctx)?.($p)
}
