import { nullish__none_, tup } from 'ctx-core/rmemo'
import { url__join } from 'ctx-core/uri'
import { type request_ctx_T } from 'rebuildjs/server'
import { id_be_memo_pair_ } from 'rmemo'
import type { Thing } from 'schema-dts'
import { type id_ref_T } from '../jsonld/index.js'
import { request_url__pathname_ } from '../request/index.js'
import { site__website_ } from '../site/index.js'
export const schema_org_rdfa_vocab = 'http://schema.org/'
export type schema_org_rdfa_vocab_T = typeof schema_org_rdfa_vocab
export type schema_org_rdfa_typeof_T = type_union__infer<Thing>
type type_union__infer<T> =
	T extends { '@type':infer U }
		? U
		: never
export type schema_org_thing_rdfa_T = {
	vocab:schema_org_rdfa_vocab_T,
	typeof:schema_org_rdfa_typeof_T
}
export type schema_org_props_rdfa_T<T extends Thing> = {
	property:keyof T
}
export type Thing_type_T<T extends Thing> =
	T extends { ['@type']:string }
		? T['@type']
		: never
export function schema_org_rdfa_<T extends Thing>(
	_typeof:Thing_type_T<T>,
	schema_org_id:id_ref_T|string
) {
	return {
		...<schema_org_thing_rdfa_T>{
			vocab: schema_org_rdfa_vocab,
			typeof: _typeof,
		},
		resource: typeof schema_org_id === 'string' ? schema_org_id : schema_org_id['@id']
	}
}
export function schema_org_rdfa_property_<Parent extends Thing>(prop:keyof Parent) {
	return {
		property: prop
	}
}
/** @see {https://stackoverflow.com/a/46018087/142571} */
export function schema_org_rdfa_rev_<Parent extends Thing>(prop:keyof Parent) {
	return {
		rev: prop
	}
}
export const [
	,
	Article_id_
] = id_be_memo_pair_('Article_id', (ctx:request_ctx_T)=>{
	return nullish__none_(tup(site__website_(ctx)), (
		site__website
	)=>url__join(site__website, request_url__pathname_(ctx), '#Article'))
})
