///public
export function json_error_response__new(err:{
	error?:string
	error_message?:string
	http_status?:number
}) {
	if (err.error === 'bad_credentials') {
		return new Response(JSON.stringify({
			error: 'bad_credentials',
			error_description: 'Please Login or Signup to use this app'
		}), {
			status: err.http_status || 401,
			headers: { 'Content-Type': 'application/json' }
		})
	}
	return new Response(
		JSON.stringify({ error: 'error', error_message: 'Error' }),
		{
			status: err.http_status || 500,
			headers: { 'Content-Type': 'application/json' }
		})
}
