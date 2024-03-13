import { ns_id_be_memo_pair_ } from 'ctx-core/rmemo'
import { type request_ctx_T } from 'rebuildjs/server'
import { request_url_ } from 'relysjs/server'
import { id_be_memo_pair_ } from 'rmemo'
export const [
	,
	request_url__href_,
] = id_be_memo_pair_('request_url__href', (ctx:request_ctx_T)=>{
	return request_url_(ctx)?.href
})
export const [
	,
	request_url__pathname_,
] = id_be_memo_pair_('request_url__pathname', (ctx:request_ctx_T)=>{
	return request_url_(ctx)?.pathname
})
export const [
	,
	request_url__origin_
] = ns_id_be_memo_pair_(
	'request',
	'request_url__origin',
	ctx=>{
		const request_url = request_url_(ctx)
		const { hostname } = request_url
		const protocol = hostname === 'localhost' ? 'http:' : 'https:'
		return protocol + '//' + hostname
	}
)
