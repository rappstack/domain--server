import { Person_id_ref_, WebSite_id_ref_ } from '@btakita/domain--server--briantakita/jsonld'
import type { Graph, Thing, WebPage } from '@btakita/schema-dts'
import { id_be_, ns_id_be_, ns_id_be_memo_pair_, nullish__none_, tup } from 'ctx-core/rmemo'
import { url__join } from 'ctx-core/uri'
import { type request_ctx_T, type wide_app_ctx_T } from 'rebuildjs/server'
import { id_be_sig_triple_ } from 'relementjs'
import { type wide_ctx_T } from 'rmemo'
import { request_url__pathname_ } from '../request/index.js'
import { site__website_ } from '../site/index.js'
export function ns_id_id_ref_be_jsonld_pair_<
	T extends Thing,
	ns_T extends ''|'app',
	ctx_T extends (wide_app_ctx_T|request_ctx_T)&wide_ctx_T<ns_T>
>(
	ns:ns_T,
	id:string,
	fn:(ctx:ctx_T)=>T
):[(ctx:ctx_T)=>id_ref_T, (ctx:ctx_T)=>T] {
	const [, jsonld_id_ref_] = ns_id_be_memo_pair_(ns, id + '_id_ref', (ctx:ctx_T)=>{
		return (
			ns === 'app'
				? app_jsonld__add(ctx, fn)
				: jsonld__add(ctx, fn)
		)
	})
	const [, jsonld_] = ns_id_be_memo_pair_(ns, id, (ctx:ctx_T)=>{
		return <T>(
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
export const jsonld_Graph__init_ = id_be_('jsonld_Graph__init', (ctx:request_ctx_T)=>()=>{
})
export const jsonld_Graph_ = id_be_('site__jsonld_Graph', (ctx:request_ctx_T)=>{
	jsonld_Graph__init_(ctx)()
	return <Graph>{
		'@context': 'https://schema.org',
		'@graph': [
			...[...app_id_ref_M_jsonld_(ctx).values()].map(fn=>fn(ctx)),
			...[...id_ref_M_jsonld_(ctx).values()].map(fn=>fn(ctx))
		]
	}
})
const app_id_ref_M_jsonld_ = ns_id_be_('app', 'id_ref_M_jsonld_Thing', ()=>
	new Map<id_ref_T, (ctx:wide_app_ctx_T)=>Thing>())
export function app_jsonld__add<ctx_T extends wide_app_ctx_T, T extends Thing>(
	ctx:ctx_T,
	fn:(ctx:ctx_T)=>T
):{ '@id':string } {
	const id_ref = jsonld_id_ref_(fn(ctx))
	app_id_ref_M_jsonld_(ctx).set(id_ref, fn)
	return id_ref
}
const id_ref_M_jsonld_ = id_be_('id_ref_M_jsonld_Thing', ()=>
	new Map<id_ref_T, (ctx:request_ctx_T)=>Thing>())
export function jsonld__add<ctx_T extends request_ctx_T, T extends Thing>(
	ctx:ctx_T,
	fn:(ctx:ctx_T)=>T
):{ '@id':string } {
	const id_ref = jsonld_id_ref_(fn(ctx))
	id_ref_M_jsonld_(ctx).set(id_ref, fn)
	return id_ref
}
export function jsonld_id_ref_(thing:Thing):id_ref_T {
	return { '@id': <string>(<never>thing)['@id'] }
}
export const [
	,
	WebPage__name_,
	WebPage__name__set
] = id_be_sig_triple_<string|undefined>('WebPage__name', ()=>undefined)
export const [
	,
	WebPage__description_,
	WebPage__description__set
] = id_be_sig_triple_<string|undefined>('WebPage__description', ()=>undefined)
export const [
	,
	WebPage__type_,
	WebPage__type__set
] = id_be_sig_triple_<WebPage['@type']>('WebPage__type', ()=>'WebPage')
export const [
	[WebPage_id_ref_],
	WebPage_id_
] = [
	id_be_id_ref_jsonld_pair_('WebPage', ctx=>{
		return nullish__none_(tup(site__website_(ctx)), (
			site__website
		)=><WebPage>{
			'@type': WebPage__type_(ctx),
			'@id': url__join(site__website, request_url__pathname_(ctx), '#WebPage'),
			name: WebPage__name_(ctx),
			description: WebPage__description_(ctx),
			about: Person_id_ref_(ctx),
			isPartOf: WebSite_id_ref_(ctx),
			inLanguage: 'en-us'
		})
	}),
	(ctx:request_ctx_T)=><string>WebPage_id_ref_(ctx)['@id']
]
export type id_ref_T = { '@id':string }
