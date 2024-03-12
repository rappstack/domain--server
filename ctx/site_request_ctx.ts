import { type middleware_ctx_T } from 'rebuildjs/server'
import { request_ctx__ensure } from 'relysjs/server'
import { type logo_image__new_T } from '../logo/index.js'
import { site__set, type site_T } from '../site/index.js'
import { social_a1__set, type social_T } from '../social/index.js'
export function site_request_ctx__ensure(
	middleware_ctx:middleware_ctx_T,
	context:{
		request:Request
		store:{ [x:string]:unknown }
	},
	{
		site,
		social_a1,
	}:site_request_ctx__ensure_config_T
) {
	const request_ctx = request_ctx__ensure(middleware_ctx, context)
	site__set(request_ctx, site)
	if (social_a1) {
		social_a1__set(request_ctx, social_a1)
	}
	return request_ctx
}
export type site_request_ctx__ensure_config_T = {
	logo_image_?:logo_image__new_T
	site:site_T
	social_a1?:social_T[]
}
