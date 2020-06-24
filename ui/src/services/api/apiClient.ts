import axios, { AxiosRequestConfig, Method } from 'axios';

const API_ROOT = 'http://localhost:8000';

export function apiGet<T>(uri: string): Promise<T> {
	return api<T>(uri, 'get');
}

export function apiDelete<T>(uri: string): Promise<T> {
	return api<T>(uri, 'delete');
}

export function apiPost<T>(uri: string, data: any): Promise<T> {
	return api<T>(uri, 'post', data);
}

export function apiPut<T>(uri: string, data: any): Promise<T> {
	return api<T>(uri, 'put', data);
}

export function apiPatch<T>(uri: string, data: any): Promise<T> {
	return api<T>(uri, 'patch', data);
}

function api<T>(
	uri: string,
	method: Method = 'GET',
	data: any = null
): Promise<T> {
	return call(uri, method, data);
}

function call<T>(
	uri: string,
	method: Method = 'GET',
	data: any = null,
	token?: string
): Promise<T> {
	let request: AxiosRequestConfig = {
		url: `${API_ROOT}${uri}`,
		withCredentials: true,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method,
	};

	if (data !== null) {
		request = {
			...request,
			data,
		};
	}

	return axios(request).then((response) => {
		return response.data;
	});
}

export default {
	get: apiGet,
	post: apiPost,
	put: apiPut,
	patch: apiPatch,
	delete: apiDelete,
};
