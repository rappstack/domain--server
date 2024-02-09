import { ns_id_be_memo_pair_, nullish__none_ } from 'ctx-core/rmemo'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import { type SQLiteTableWithColumns, type TableConfig } from 'drizzle-orm/sqlite-core'
import { sqlite_db_ } from '../sqlite/index.js'
export const [
	drizzle_schema$_,
	drizzle_schema_,
	drizzle_schema__set,
] = ns_id_be_memo_pair_<
	|Record<string, SQLiteTableWithColumns<TableConfig>>
	|undefined,
	'app'
>(
	'app',
	'drizzle_schema',
	()=>undefined)
export const [
	drizzle_db$_,
	drizzle_db_,
] = ns_id_be_memo_pair_(
	'app',
	'drizzle_db',
	ctx=>
		nullish__none_([sqlite_db_(ctx)],
			sqlite_db=>drizzle(
				sqlite_db,
				drizzle_schema_(ctx))))
