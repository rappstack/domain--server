export function redirect_response__new(
	status:301|302|303|307|308,
	Location:string,
	init?:ResponseInit
) {
	const headers = new Headers(init?.headers)
	headers.set('Location', Location)
	return new Response(
		'Redirecting to ' + Location,
		{
			...init,
			status,
			headers,
		})
}
