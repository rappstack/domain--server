import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
export const text_cache_tbl = sqliteTable('text_cache', {
	text_cache_id: text('text_cache_id').notNull().primaryKey(),
	create_dts:
		integer('create_dts', { mode: 'timestamp_ms' })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
	validate_dts:
		integer('validate_dts', { mode: 'timestamp_ms' })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
	etag: text('etag'),
	data: text('data').notNull(),
})
