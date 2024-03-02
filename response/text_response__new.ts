export function text_response__new(body:string, init?:ResponseInit) {
	return new Response(body, {
		status: 200,
		...init ?? {},
		headers: {
			'Content-Type': 'text/plain',
			...init?.headers
		}
	})
}
