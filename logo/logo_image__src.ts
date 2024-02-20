import { nullish__none_ } from 'ctx-core/function'
import { id_be_memo_pair_ } from 'rmemo'
import { logo_image_ } from './logo_image.js'
export const [
	,
	logo_image__src_,
] = id_be_memo_pair_(
	'logo_image__src',
	ctx=>
		nullish__none_([logo_image_(ctx)],
			logo_image=>
				logo_image!.src))
