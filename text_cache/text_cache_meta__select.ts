import { eq } from 'drizzle-orm'
import { type wide_app_ctx_T } from 'relysjs/server'
import { drizzle_db_ } from '../drizzle/index.js'
import { text_cache } from '../schema/index.js'
export function text_cache_meta__select(ctx:wide_app_ctx_T, text_cache_id:string) {
	return drizzle_db_(ctx)
		.select({
			text_cache_id: text_cache.text_cache_id,
			create_ms: text_cache.create_ms,
			validate_ms: text_cache.validate_ms,
		})
		.from(text_cache)
		.where(eq(text_cache.text_cache_id, text_cache_id))
		.limit(1)
		.all()[0]
}
