import { Database } from 'bun:sqlite'
import { id_be_memo_pair_, id_be_sig_triple_, nullish__none_ } from 'ctx-core/rmemo'
export const [
	sqlite_db__name$_,
	sqlite_db__name_,
	sqlite_db__name__set,
] = id_be_sig_triple_<string|undefined>(
	'sqlite_db__name',
	()=>undefined)
export const [
	sqlite_db$_,
	sqlite_db_,
] = id_be_memo_pair_(
	'sqlite_db',
	ctx=>
		nullish__none_([sqlite_db__name_(ctx)],
			sqlite_db__name=>new Database(sqlite_db__name)))
