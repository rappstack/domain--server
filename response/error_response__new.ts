export function error_response__new(
	body?:string,
	init?:ResponseInit
) {
	return new Response(body ?? 'Error', {
		status: 500,
		statusText: 'Error',
		...init,
	})
}
