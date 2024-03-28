import { nullish__none_ } from 'ctx-core/function'
import { type request_ctx_T } from 'rebuildjs/server'
import type { tag_dom_T } from 'relementjs'
import { id_be_memo_pair_, id_be_sig_triple_, type wide_ctx_T } from 'rmemo'
import { request_url__origin_ } from '../request/index.js'
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
	site__author_img_url_,
] = id_be_memo_pair_(
	'site__author_img_url',
	ctx=>site_(ctx)?.author_img_url)
export const [
	,
	site__title_,
] = id_be_memo_pair_(
	'site__title',
	ctx=>site_(ctx)?.title)
export const [
	,
	site__phone_,
] = id_be_memo_pair_(
	'site__phone',
	ctx=>site_(ctx)?.phone)
export const [
	,
	site__description_,
] = id_be_memo_pair_(
	'site__description',
	ctx=>site_(ctx)?.description)
export const [
	,
	font__meta_props_a1_,
] = id_be_memo_pair_(
	'font__meta_props_a1',
	(ctx:request_ctx_T)=>site_(ctx)?.font__meta_props_a1 ?? [])
export const [
	,
	site__favicon_,
] = id_be_memo_pair_(
	'site__favicon',
	(ctx:request_ctx_T)=>{
		return nullish__none_([site_(ctx)?.favicon], icon=>
			<icon_link_props_T>{
				...icon,
				href: new URL(icon.href, request_url__origin_(ctx)) + ''
			})
	})
export const [
	,
	site__social_image_url_,
] = id_be_memo_pair_(
	'site__social_image_url',
	(ctx:request_ctx_T)=>{
		return nullish__none_([site_(ctx)?.social_image_url], (social_image_url)=>
			new URL(social_image_url, request_url__origin_(ctx)).href)
	})
export const [
	,
	site__light_and_dark_mode_,
] = id_be_memo_pair_(
	'site__light_and_dark_mode',
	ctx=>site_(ctx)?.light_and_dark_mode)
export const [
	,
	site__light_theme_color_fill_,
] = id_be_memo_pair_(
	'site__light_theme_color_fill',
	ctx=>site_(ctx)?.light_theme_color_fill)
export const [
	,
	site__dark_theme_color_fill_,
] = id_be_memo_pair_(
	'site__dark_theme_color_fill',
	ctx=>site_(ctx)?.dark_theme_color_fill)
export const [
	,
	site__google_site_verification_
] = id_be_memo_pair_(
	'site__google_site_verification',
	ctx=>site_(ctx)?.google_site_verification)
export const [
	,
	site__gtag_id_
] = id_be_memo_pair_(
	'site__gtag_id',
	ctx=>site_(ctx)?.gtag_id)
export const [
	,
	site__body_class_
] = id_be_memo_pair_(
	'site__body_class',
	ctx=>site_(ctx)?.body_class)
export const [
	,
	site__logo_image__new_,
] = id_be_sig_triple_<logo_image__new_T|undefined>(
	'site__logo_image__new',
	ctx=>site_(ctx)?.logo_image__new)
export function site__logo_image_(ctx:wide_ctx_T, $p?:{ class?:string }) {
	return site__logo_image__new_(ctx)?.($p)
}
export const [
	,
	site__social_a1_,
] = id_be_memo_pair_(
	'site__social_a1',
	ctx=>site_(ctx)?.social_a1)
export type logo_image__new_T = ($p?:{ class?:string })=>tag_dom_T
export type site_T = {
	website:string
	author:string
	author_url:string
	author_img_url:string
	editor?:string
	editor_url?:string
	editor_img_url?:string
	description:string
	title:string
	phone?:string
	font__meta_props_a1?:font__meta_props_T[]
	favicon?:icon_link_props_T
	social_image_url?:string|URL
	light_and_dark_mode?:boolean
	light_theme_color_fill?:string
	dark_theme_color_fill?:string
	google_site_verification?:string
	gtag_id?:string
	body_class?:string
	logo_image__new?:logo_image__new_T
	social_a1?:social_T[]
}
export type font__meta_props_T =
	&{ rel:'preconnect'|'stylesheet', href:string, crossorigin?:1|0 }
	&(
	|{ rel:'stylesheet', href:string }
	|{ rel:'preconnect', href:string, crossorigin?:1|0 }
	)
export type icon_link_props_T = {
	type:
		|'image/apng'
		|'image/avif'
		|'image/bmp'
		|'image/gif'
		|'image/jpeg'
		|'image/png'
		|'image/svg+xml'
		|'image/tiff'
		|'image/webp'
		|'image/x-icon'
		|string
	href:string
}
export type social_T = {
	icon_:($p?:{ class?:string })=>tag_dom_T
	href:string
	active:boolean
	link_title:string
}
