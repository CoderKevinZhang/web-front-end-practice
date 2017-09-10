import {get} from "../get";

export function getAdData() {
    let result = get('/api/homead');
    return result;
}