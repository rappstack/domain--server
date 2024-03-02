export function xml_response__new(body:string, init?:ResponseInit) {
	return new Response(body, {
		status: 200,
		...init ?? {},
		headers: {
			'Content-Type': 'application/xml',
			...init?.headers
		}
	})
}
