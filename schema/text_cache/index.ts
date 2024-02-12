import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
export const text_cache = sqliteTable('text_cache', {
	text_cache_id: text('text_cache_id').notNull().primaryKey(),
	create_ms:
		integer('create_ms', { mode: 'timestamp_ms' })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
	validate_ms:
		integer('validate_ms', { mode: 'timestamp_ms' })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
	data: text('data').notNull(),
})
