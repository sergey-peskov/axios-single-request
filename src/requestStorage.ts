import { requestId } from "../types/type";
import { isUndefined } from "./helpers";

type IRequests = {
    [key:string]: Function
}

class RequestStorage {
    public requests:IRequests = {}
    public set(requestId:requestId, fn:Function) {
        if(this.has(requestId)) {
            this.cancel(requestId);
            this.remove(requestId);
        }
        this.requests[requestId] = fn;
    }

    public remove(requestId:requestId) {
        delete this.requests[requestId]
    }
    public cancel(requestId:requestId) {
        this.requests[requestId]('canceled request');
    }
    private has(requestId:requestId) {
        return !isUndefined(this.requests[requestId]) 
    }
}

let requestStorage = new RequestStorage();

export default requestStorage;