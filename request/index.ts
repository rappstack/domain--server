import { type request_ctx_T } from 'rebuildjs/server'
import { request_url_ } from 'relysjs/server'
import { id_be_memo_pair_ } from 'rmemo'
export const [
	,
	request_url__pathname_,
] = id_be_memo_pair_('request_url__pathname', (ctx:request_ctx_T)=>{
	return request_url_(ctx)?.pathname
})
