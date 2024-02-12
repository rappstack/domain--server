import { ns_id_be_memo_pair_, nullish__none_ } from 'ctx-core/rmemo'
import { drizzle } from 'drizzle-orm/bun-sqlite'
import { sqlite_db_ } from '../sqlite/index.js'
export const [
	drizzle_db$_,
	drizzle_db_,
] = ns_id_be_memo_pair_(
	'app',
	'drizzle_db',
	ctx=>
		nullish__none_([sqlite_db_(ctx)],
			sqlite_db=>
				drizzle(sqlite_db)))
