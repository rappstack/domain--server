export function not_found_response__new(
	body?:string,
	init?:ResponseInit
) {
	return new Response(
		body ?? 'Not Found',
		{
			status: 404,
			statusText: 'Not Found',
			...init
		})
}
