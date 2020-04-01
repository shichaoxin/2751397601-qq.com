import { HttpClient } from '../utils/http-client.js';
import requestUrl from '../common/url.js';


class StoreServices { 
  getList() {
    const url = requestUrl.getList;
    return HttpClient.get(url)
  }
}

export const storeServices = new StoreServices();