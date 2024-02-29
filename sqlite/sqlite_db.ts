import { Database } from 'bun:sqlite'
import { ns_id_be_sig_triple_ } from 'ctx-core/rmemo'
export const [
	,
	sqlite_db_,
	sqlite_db__set,
] = ns_id_be_sig_triple_(
	'app',
	'sqlite_db',
	()=><Database|undefined>undefined)
