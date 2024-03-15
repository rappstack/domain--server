import type { Thing } from 'schema-dts'
import { type schema_org_rdfa_typeof_T } from '../rdfa/index.js'
export type schema_org_thing_microdata_T = {
	itemscope: ''
	itemtype: `https://schema.org/${schema_org_rdfa_typeof_T}`
}
export type schema_org_prop_microdata_T<T extends Thing> = {
	itemprop: keyof T
}
