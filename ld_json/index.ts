import { ns_id_be_sig_triple_ } from 'ctx-core/rmemo'
import type { Graph, Thing, WithContext } from 'schema-dts'
export const [
	,
	site__ld_json_,
	site__ld_json__set
] = ns_id_be_sig_triple_(
	'app',
	'ld_json',
	()=><undefined|WithContext<Thing>|Graph>undefined)
