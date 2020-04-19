import storage from './requestStorage';
import axios from 'axios';
import { requestIdInParams } from '../types/type';
import { isUndefined } from './helpers';

export function requestInterceptorFulfilled(config) {
	let singleRequestId:requestIdInParams  = config.singleRequestId;
	if(!isUndefined(singleRequestId)) {
		let source = axios.CancelToken.source();
		config.cancelToken = source.token;
		storage.set(singleRequestId, source.cancel);
	}
	return config;
} 

export function responseFulfilled(response) {
	let singleRequestId:requestIdInParams = response.config.singleRequestId;
	if(!isUndefined(singleRequestId)) {
		storage.remove(singleRequestId);
	}
	return response;
} 
export function responseRejected(error) {
	if(axios.isCancel(error)) {
		return
	}
	if(!isUndefined(error.config) && !isUndefined(error.config.singleRequestId)) {
		storage.remove(error.config.singleRequestId);
	}
	return Promise.reject(error);
}
