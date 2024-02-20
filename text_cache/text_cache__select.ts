import { eq } from 'drizzle-orm'
import { type wide_app_ctx_T } from 'relysjs/server'
import { drizzle_db_ } from '../drizzle/index.js'
import { text_cache_tbl } from '../schema/index.js'
export function text_cache__select(ctx:wide_app_ctx_T, text_cache_id:string) {
	return drizzle_db_(ctx).select()
		.from(text_cache_tbl)
		.where(eq(text_cache_tbl.text_cache_id, text_cache_id))
		.limit(1)
		.all()[0]
}
export type text_cache_T = ReturnType<typeof text_cache__select>
