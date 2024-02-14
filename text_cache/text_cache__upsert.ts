import { eq, sql } from 'drizzle-orm'
import { type wide_app_ctx_T } from 'relysjs/server'
import { drizzle_db_ } from '../drizzle/index.js'
import { text_cache } from '../schema/index.js'
export async function text_cache__upsert(ctx:wide_app_ctx_T, text_cache_id:string, data:string) {
	const db = drizzle_db_(ctx)
	const data_o = db.select({ data: text_cache.data })
		.from(text_cache)
		.where(eq(text_cache.text_cache_id, text_cache_id))
		.limit(1)
		.all()[0]
	return db.insert(text_cache)
		.values({
			text_cache_id,
			data
		})
		.onConflictDoUpdate({
			target: text_cache.text_cache_id,
			set: {
				...(
					data !== data_o?.data
						? {
							create_ms: sql`CURRENT_TIMESTAMP`,
							data
						}
						: null),
				validate_ms: sql`CURRENT_TIMESTAMP`,
			}
		})
		.returning()
		.get()
}
