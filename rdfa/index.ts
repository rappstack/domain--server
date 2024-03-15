import type { Thing } from 'schema-dts'
import { nullish__none_, tup } from 'ctx-core/rmemo'
import { url__join } from 'ctx-core/uri'
import { type request_ctx_T } from 'rebuildjs/server'
import { id_be_memo_pair_ } from 'rmemo'
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
export const schema_org_Article_rdfa = Object.freeze(<schema_org_thing_rdfa_T>{
	vocab: schema_org_rdfa_vocab,
	typeof: 'Article',
})
export const schema_org_CreativeWork_rdfa = Object.freeze(<schema_org_thing_rdfa_T>{
	vocab: schema_org_rdfa_vocab,
	typeof: 'CreativeWork',
})
export const [
	,
	Article_id_
] = id_be_memo_pair_('Article_id', (ctx:request_ctx_T)=>{
	return nullish__none_(tup(site__website_(ctx)), (
		site__website
	)=>url__join(site__website, request_url__pathname_(ctx), '#Article'))
})
