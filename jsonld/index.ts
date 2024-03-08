import type { Graph, Thing } from '@btakita/schema-dts'
import { id_be_, ns_id_be_ } from 'ctx-core/rmemo'
import { type request_ctx_T, wide_app_ctx_T } from 'rebuildjs/server'
export const jsonld_Graph_ = id_be_('site__jsonld_Graph', (ctx:request_ctx_T)=>{
	return <Graph>{
		'@context': 'https://schema.org',
		'@graph': [...app_jsonld_Thing_S_(ctx), ...jsonld_Thing_S_(ctx)]
	}
})
const app_jsonld_Thing_S_ = ns_id_be_('app', 'app_jsonld_thing_S', ()=>
	new Set<Thing>())
export function app_jsonld__add(ctx:wide_app_ctx_T, thing:Thing):{ '@id':string } {
	app_jsonld_Thing_S_(ctx).add(thing)
	return id_ref_(thing)
}
const jsonld_Thing_S_ = id_be_('jsonld_thing_S', ()=>
	new Set<Thing>())
export function jsonld__add(ctx:request_ctx_T, thing:Thing):{ '@id':string } {
	jsonld_Thing_S_(ctx).add(thing)
	return id_ref_(thing)
}
function id_ref_(thing:Thing):{ '@id':string } {
	return { '@id': <string>(<never>thing)['@id'] }
}
