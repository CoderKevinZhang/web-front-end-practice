import {get} from "../get";

export function getAdData() {
    let result = get('/api/homead');
    return result;
}

export function getList(city, page) {
    let result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page);
    return result;
}