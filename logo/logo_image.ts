import { id_be_sig_triple_ } from 'relementjs'
export const [
	,
	logo_image_,
	logo_image__set,
] = id_be_sig_triple_<logo_image_T|undefined>(
	'logo_image',
	()=>undefined)
export interface logo_image_T {
	enable:boolean
	svg:boolean
	src?:string
	width:number
	height:number
}
