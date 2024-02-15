import { ms_ } from 'ctx-core/date'
import { text_cache_tbl } from '../schema/index.js'
export function active_text_cache_(
	text_cache:typeof text_cache_tbl.$inferSelect|undefined,
	{ etag, ttl_ms }:{
		etag?:string
		ttl_ms?:number
	}
) {
	return (
		etag && text_cache?.etag !== etag
			? null
			: ttl_ms == null
				? text_cache
				: text_cache && ms_(text_cache.validate_dts) + ttl_ms >= ms_()
					? text_cache
					: null
	)
}
