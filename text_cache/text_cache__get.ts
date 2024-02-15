import { type wide_app_ctx_T } from 'relysjs/server'
import { active_text_cache_ } from './active_text_cache.js'
import { text_cache__select } from './text_cache__select.js'
export function text_cache__get(
	ctx:wide_app_ctx_T,
	text_cache_id:string,
	config:{
		etag?:string
		ttl_ms?:number
	}
) {
	return active_text_cache_(
		text_cache__select(ctx, text_cache_id),
		config)
}
