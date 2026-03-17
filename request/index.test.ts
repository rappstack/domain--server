import { describe, test, expect } from 'bun:test'
/**
 * Unit tests for request_url null-safety guards.
 *
 * These test the pure logic extracted from the memo callbacks,
 * verifying that null/undefined request_url does not crash.
 *
 * Integration tests for the full memo pipeline require a compatible
 * rebuildjs/rhonojs stack (currently blocked by html_response__new
 * export mismatch between rhonojs@0.1.2 and rebuildjs@0.70.47).
 */
// Extract the pure logic from request_url__origin_ callback
function request_url__origin__compute(request_url:URL|null|undefined):string|undefined {
	if (request_url == null) return undefined
	const { hostname, port } = request_url
	const protocol = hostname === 'localhost' ? 'http:' : 'https:'
	const url_port = hostname === 'localhost' && port ? `:${port}` : ''
	return protocol + '//' + hostname + url_port
}
// Extract the pure logic from request_url__href_ callback
function request_url__href__compute(
	pathname:string|undefined,
	search:string|undefined,
	origin:string|undefined,
):string|undefined {
	if (pathname == null || search == null || origin == null) return undefined
	return new URL(pathname + search, origin).href
}
// Extract the pure logic from request_url__pathname_ callback
function request_url__pathname__compute(request_url:URL|null|undefined):string|undefined {
	return request_url?.pathname.replace(/\/$/, '')
}
// Extract the pure logic from request_url__search_ callback
function request_url__search__compute(request_url:URL|null|undefined):string|undefined {
	return request_url?.search
}
describe('request_url__origin__compute', ()=>{
	test('returns undefined for null request_url', ()=>{
		expect(request_url__origin__compute(null)).toBeUndefined()
	})
	test('returns undefined for undefined request_url', ()=>{
		expect(request_url__origin__compute(undefined)).toBeUndefined()
	})
	test('returns http for localhost', ()=>{
		const url = new URL('http://localhost:3000/foo')
		expect(request_url__origin__compute(url)).toBe('http://localhost:3000')
	})
	test('returns https for non-localhost', ()=>{
		const url = new URL('https://example.com/foo')
		expect(request_url__origin__compute(url)).toBe('https://example.com')
	})
	test('omits port for non-localhost', ()=>{
		const url = new URL('https://example.com:8080/foo')
		expect(request_url__origin__compute(url)).toBe('https://example.com')
	})
	test('includes port for localhost', ()=>{
		const url = new URL('http://localhost:4100/foo')
		expect(request_url__origin__compute(url)).toBe('http://localhost:4100')
	})
})
describe('request_url__href__compute', ()=>{
	test('returns undefined when pathname is null', ()=>{
		expect(request_url__href__compute(undefined, '', 'http://localhost')).toBeUndefined()
	})
	test('returns undefined when search is null', ()=>{
		expect(request_url__href__compute('/foo', undefined, 'http://localhost')).toBeUndefined()
	})
	test('returns undefined when origin is null', ()=>{
		expect(request_url__href__compute('/foo', '', undefined)).toBeUndefined()
	})
	test('returns undefined when all are null', ()=>{
		expect(request_url__href__compute(undefined, undefined, undefined)).toBeUndefined()
	})
	test('computes full href with search', ()=>{
		expect(request_url__href__compute('/foo/bar', '?q=1', 'http://localhost:3000'))
			.toBe('http://localhost:3000/foo/bar?q=1')
	})
	test('computes href without search', ()=>{
		expect(request_url__href__compute('/foo', '', 'https://example.com'))
			.toBe('https://example.com/foo')
	})
})
describe('request_url__pathname__compute', ()=>{
	test('returns undefined for null', ()=>{
		expect(request_url__pathname__compute(null)).toBeUndefined()
	})
	test('returns undefined for undefined', ()=>{
		expect(request_url__pathname__compute(undefined)).toBeUndefined()
	})
	test('strips trailing slash', ()=>{
		expect(request_url__pathname__compute(new URL('http://x/foo/'))).toBe('/foo')
	})
	test('preserves path without trailing slash', ()=>{
		expect(request_url__pathname__compute(new URL('http://x/foo/bar'))).toBe('/foo/bar')
	})
	test('returns empty string for root path', ()=>{
		expect(request_url__pathname__compute(new URL('http://x/'))).toBe('')
	})
})
describe('request_url__search__compute', ()=>{
	test('returns undefined for null', ()=>{
		expect(request_url__search__compute(null)).toBeUndefined()
	})
	test('returns search string', ()=>{
		expect(request_url__search__compute(new URL('http://x/foo?key=value'))).toBe('?key=value')
	})
	test('returns empty string for no search', ()=>{
		expect(request_url__search__compute(new URL('http://x/foo'))).toBe('')
	})
})
