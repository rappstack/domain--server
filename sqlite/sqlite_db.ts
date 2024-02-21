import { Database } from 'bun:sqlite'
import { ns_id_be_memo_pair_, ns_id_be_sig_triple_, nullish__none_ } from 'ctx-core/rmemo'
export const [
	,
	sqlite_db__name_,
	sqlite_db__name__set,
] = ns_id_be_sig_triple_<string|undefined, 'app'>(
	'app',
	'sqlite_db__name',
	()=>undefined)
export const [
	,
	sqlite_db_,
] = ns_id_be_memo_pair_(
	'app',
	'sqlite_db',
	ctx=>
		nullish__none_([sqlite_db__name_(ctx)],
			sqlite_db__name=>{
				const sqlite_db = new Database(sqlite_db__name)
				sqlite_db.exec('PRAGMA journal_mode = WAL;')
				return sqlite_db
			}))
