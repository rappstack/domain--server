import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
export const text_cache = sqliteTable('text_cache', {
	cache_id: text('cache_id').notNull().primaryKey(),
	timestamp_ms: integer('timestamp_ms', { mode: 'timestamp_ms' }),
	data: text('data'),
})
