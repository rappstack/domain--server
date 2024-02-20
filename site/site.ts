import { nullish__none_ } from 'ctx-core/function'
import { id_be_memo_pair_, id_be_sig_triple_, wide_ctx_T } from 'rmemo'
export const [
	,
	site_,
	site__set,
] = id_be_sig_triple_<site_T|undefined>(
	'site',
	()=>undefined)
export const [
	,
	site__website_,
] = id_be_memo_pair_(
	'site__website',
	ctx=>site_(ctx)?.website)
export const [
	,
	site__website__url_,
] = id_be_memo_pair_(
	'site__website__url',
	ctx=>
		nullish__none_([site__website_(ctx)],
			site__website=>new URL(site__website)))
export const [
	,
	site__author_,
] = id_be_memo_pair_(
	'site__author',
	ctx=>site_(ctx)?.author)
export const [
	,
	site__title_,
] = id_be_memo_pair_(
	'site__title',
	ctx=>site_(ctx)?.title)
export const [
	,
	site__description_,
] = id_be_memo_pair_(
	'site__description',
	ctx=>site_(ctx)?.description)
export const [
	,
	site__og_image_,
] = id_be_memo_pair_(
	'site__og_image',
	ctx=>site_(ctx)?.og_image)
export const [
	,
	site__light_and_dark_mode_,
] = id_be_memo_pair_(
	'site__light_and_dark_mode',
	ctx=>site_(ctx)?.light_and_dark_mode)
export type site_T = {
	website:string
	author:string
	description:string
	title:string
	og_image?:string
	light_and_dark_mode?:boolean
}
