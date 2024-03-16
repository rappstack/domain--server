import { id_be_, ns_id_be_, ns_id_be_memo_pair_, nullish__none_, tup } from 'ctx-core/rmemo'
import { url__join } from 'ctx-core/uri'
import { type request_ctx_T, type wide_app_ctx_T } from 'rebuildjs/server'
import { id_be_sig_triple_ } from 'relementjs'
import { type wide_ctx_T } from 'rmemo'
import type { Graph, Thing, WebPage } from 'schema-dts'
import { request_url__pathname_ } from '../request/index.js'
import { site__website_ } from '../site/index.js'
export function ns_id_be_id_ref_be_jsonld_pair_<
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
				? app_jsonld__add<ctx_T, T>(ctx, fn)
				: jsonld__add(<request_ctx_T>ctx, <(ctx:request_ctx_T)=>T>fn)
		)
	})
	const [, jsonld_] = ns_id_be_memo_pair_(ns, id, (ctx:ctx_T)=>{
		return <T>(
			ns === 'app'
				? app_id_ref_M_jsonld_(ctx).get(<(ctx:wide_app_ctx_T)=>T>fn)
				: id_ref_M_jsonld_(<wide_ctx_T>ctx).get(<(ctx:request_ctx_T)=>T>fn)
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
	return ns_id_be_id_ref_be_jsonld_pair_<val_T, '', ctx_T>('', id, fn)
}
export const jsonld_Graph__init_ = id_be_('jsonld_Graph__init', (ctx:request_ctx_T)=>()=>{
})
export const jsonld_Graph_ = id_be_('site__jsonld_Graph', (ctx:request_ctx_T)=>{
	jsonld_Graph__init_(ctx)()
	return <Graph>{
		'@context': 'https://schema.org',
		'@graph': [
			...app_id_ref_M_jsonld_(ctx).values(),
			...id_ref_M_jsonld_(ctx).values()
		]
	}
})
const app_id_ref_M_jsonld_ = ns_id_be_('app', 'id_ref_M_jsonld_Thing', ()=>
	new Map<(ctx:wide_app_ctx_T)=>Thing, Thing>)
export function app_jsonld__add<ctx_T extends wide_app_ctx_T, T extends Thing>(
	ctx:ctx_T,
	fn:(ctx:ctx_T)=>T
):{ '@id':string } {
	const thing = fn(ctx)
	app_id_ref_M_jsonld_(ctx).set(<never>fn, thing)
	return jsonld_id_ref_(thing)
}
const id_ref_M_jsonld_ = id_be_('id_ref_M_jsonld_Thing', ()=>
	new Map<(ctx:request_ctx_T)=>Thing, Thing>())
export function jsonld__add<ctx_T extends request_ctx_T, T extends Thing>(
	ctx:ctx_T,
	fn:(ctx:ctx_T)=>T
):{ '@id':string } {
	const thing = fn(ctx)
	id_ref_M_jsonld_(ctx).set(<never>fn, thing)
	return jsonld_id_ref_(fn(ctx))
}
export function jsonld_id_ref_(thing:Thing):id_ref_T {
	return { '@id': <string>(<never>thing)['@id'] }
}
export const [
	,
	WebPage__name_,
	WebPage__name__set
] = id_be_sig_triple_<string|undefined, unknown, request_ctx_T>(
	'WebPage__name',
	()=>undefined)
export const [
	,
	WebPage__headline_,
	WebPage__headline__set
] = id_be_sig_triple_<string|undefined, unknown, request_ctx_T>(
	'WebPage__headline',
	()=>undefined)
export const [
	,
	WebPage__description_,
	WebPage__description__set
] = id_be_sig_triple_<string|undefined, unknown, request_ctx_T>(
	'WebPage__description',
	()=>undefined
).add(ctx=>WebPage__name_(ctx))
export const [
	,
	WebPage__type_,
	WebPage__type__set
] = id_be_sig_triple_<WebPage['@type'], unknown, request_ctx_T>(
	'WebPage__type',
	()=>'WebPage'
)
export const [
	,
	WebPage__author_,
	WebPage__author__set
] = id_be_sig_triple_<id_ref_T|undefined, unknown, request_ctx_T>(
	'WebPage__author',
	ctx=>{
		return nullish__none_(tup(site__website_(ctx)), (
			site__website
		)=><id_ref_T>{ '@id': url__join(site__website, '#Person') })
	})
export const [
	,
	WebPage__about_,
	WebPage__about__set
] = id_be_sig_triple_<id_ref_T|undefined, unknown, request_ctx_T>(
	'WebPage__about',
	ctx=>{
		return nullish__none_(tup(site__website_(ctx)), (
			site__website
		)=><id_ref_T>{ '@id': url__join(site__website, '#Person') })
	})
export const [
	,
	WebPage__isPartOf_,
	WebPage__isPartOf__set
] = id_be_sig_triple_<id_ref_T|undefined, unknown, request_ctx_T>(
	'WebPage__isPartOf',
	ctx=>{
		return nullish__none_(tup(site__website_(ctx)), (
			site__website
		)=><id_ref_T>{ '@id': url__join(site__website, '#WebSite') })
	})
export const [
	,
	WebPage__hasPart_,
	WebPage__hasPart__set
] = id_be_sig_triple_<id_ref_T[]|undefined, unknown, request_ctx_T>(
	'WebPage__hasPart',
	()=>undefined)
export function WebPage__hasPart__push(ctx:request_ctx_T, id_ref:id_ref_T) {
	WebPage__hasPart__set(ctx, [
		...WebPage__hasPart_(ctx) ?? [],
		id_ref
	])
}
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
			about: WebPage__about_(ctx),
			isPartOf: WebPage__isPartOf_(ctx),
			inLanguage: 'en-us',
			headline: WebPage__headline_(ctx),
			author: WebPage__author_(ctx),
			hasPart: WebPage__hasPart_(ctx),
		})
	}),
	(ctx:request_ctx_T)=><string>WebPage_id_ref_(ctx)['@id']
]
export type id_ref_T = { '@id':string }
