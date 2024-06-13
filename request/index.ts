import { ns_id_be_memo_pair_ } from 'ctx-core/rmemo'
import { type request_ctx_T } from 'rebuildjs/server'
import { request_url_ } from 'relysjs/server'
import { id_be_memo_pair_ } from 'rmemo'
export const [
	,
	request_url__href_,
] = id_be_memo_pair_('request_url__href', (ctx:request_ctx_T)=>{
	return new URL(request_url__pathname_(ctx) + request_url__search_(ctx), request_url__origin_(ctx)).href
})
export const [
	,
	request_url__pathname_,
] = id_be_memo_pair_('request_url__pathname', (ctx:request_ctx_T)=>{
	return request_url_(ctx)?.pathname.replace(/\/$/, '')
})
export const [
	,
	request_url__search_,
] = id_be_memo_pair_('request_url__search', (ctx:request_ctx_T)=>{
	return request_url_(ctx)?.search
})
export const [
	,
	request_url__origin_
] = ns_id_be_memo_pair_(
	'request',
	'request_url__origin',
	ctx=>{
		const request_url = request_url_(ctx)
		const { hostname, port } = request_url
		const protocol = hostname === 'localhost' ? 'http:' : 'https:'
		const url_port = hostname === 'localhost' && port ? `:${port}` : ''
		return protocol + '//' + hostname + url_port
	})
