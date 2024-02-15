import { eq, sql } from 'drizzle-orm'
import { type wide_app_ctx_T } from 'relysjs/server'
import { drizzle_db_ } from '../drizzle/index.js'
import { text_cache_tbl } from '../schema/index.js'
export async function text_cache__upsert(
	ctx:wide_app_ctx_T,
	text_cache_id:string,
	partial:{
		data:string
		etag?:string
	}
) {
	const db = drizzle_db_(ctx)
	const data_o = db.select({
		etag: text_cache_tbl.etag,
		data: text_cache_tbl.data
	})
		.from(text_cache_tbl)
		.where(eq(text_cache_tbl.text_cache_id, text_cache_id))
		.limit(1)
		.all()[0]
	return db.insert(text_cache_tbl)
		.values({
			text_cache_id,
			...partial,
		})
		.onConflictDoUpdate({
			target: text_cache_tbl.text_cache_id,
			set: {
				...(
					(partial.etag && partial.etag === data_o?.etag)
					|| partial.data === data_o?.data
						? null
						: {
							create_dts: sql`CURRENT_TIMESTAMP`,
							...partial,
						}),
				validate_dts: sql`CURRENT_TIMESTAMP`,
			}
		})
		.returning()
		.get()
}
