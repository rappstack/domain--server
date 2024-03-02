export async function response__drain(response:Response) {
	if (!response.body) return
	const reader = response.body.getReader()
	while (!(await reader.read()).done) {
		/* empty */
	}
}
