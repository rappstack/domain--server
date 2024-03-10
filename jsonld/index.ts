import type { Graph, Thing } from '@btakita/schema-dts'
import { id_be_, ns_id_be_, ns_id_be_memo_pair_ } from 'ctx-core/rmemo'
import { type request_ctx_T, type wide_app_ctx_T } from 'rebuildjs/server'
import { type wide_ctx_T } from 'rmemo'
export function ns_id_id_ref_be_jsonld_pair_<
	val_T extends Thing,
	ns_T extends ''|'app',
	ctx_T extends (wide_app_ctx_T|request_ctx_T)&wide_ctx_T<ns_T>
>(
	ns:ns_T,
	id:string,
	fn:(ctx:ctx_T)=>val_T
):[(ctx:ctx_T)=>id_ref_T, (ctx:ctx_T)=>val_T] {
	const [, jsonld_id_ref_] = ns_id_be_memo_pair_(ns, id + '_id_ref', (ctx:ctx_T)=>{
		return (
			ns === 'app'
				? app_jsonld__add(<wide_app_ctx_T>ctx, fn(ctx))
				: jsonld__add(<request_ctx_T>ctx, fn(ctx))
		)
	})
	const [, jsonld_] = ns_id_be_memo_pair_(ns, id, (ctx:ctx_T)=>{
		return <val_T>(
			ns === 'app'
				? app_id_ref_M_jsonld_(ctx).get(jsonld_id_ref_(ctx))
				: id_ref_M_jsonld_(<wide_ctx_T>ctx).get(jsonld_id_ref_(ctx))
		)
	})
	return [
		jsonld_id_ref_,
		jsonld_,
	]
}
export function id_be_id_ref_jsonld_pair_<
	val_T extends Thing,
	ctx_T extends request_ctx_T
>(id:string, fn:(ctx:ctx_T)=>val_T) {
	return ns_id_id_ref_be_jsonld_pair_<val_T, '', ctx_T>('', id, fn)
}
export const jsonld_Graph__init_ = id_be_('jsonld_Graph__init', (ctx:request_ctx_T)=>()=>{})
export const jsonld_Graph_ = id_be_('site__jsonld_Graph', (ctx:request_ctx_T)=>{
	jsonld_Graph__init_(ctx)()
	return <Graph>{
		'@context': 'https://schema.org',
		'@graph': [...app_id_ref_M_jsonld_(ctx).values(), ...id_ref_M_jsonld_(ctx).values()]
	}
})
const app_id_ref_M_jsonld_ = ns_id_be_('app', 'id_ref_M_jsonld_Thing', ()=>
	new Map<id_ref_T, Thing>())
export function app_jsonld__add(ctx:wide_app_ctx_T, thing:Thing):{ '@id':string } {
	const id_ref = jsonld_id_ref_(thing)
	app_id_ref_M_jsonld_(ctx).set(id_ref, thing)
	return id_ref
}
const id_ref_M_jsonld_ = id_be_('id_ref_M_jsonld_Thing', ()=>
	new Map<id_ref_T, Thing>())
export function jsonld__add(ctx:request_ctx_T, thing:Thing):{ '@id':string } {
	const id_ref = jsonld_id_ref_(thing)
	id_ref_M_jsonld_(ctx).set(id_ref, thing)
	return id_ref
}
export function jsonld_id_ref_(thing:Thing):id_ref_T {
	return { '@id': <string>(<never>thing)['@id'] }
}
export type id_ref_T = { '@id':string }
