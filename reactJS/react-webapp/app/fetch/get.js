import 'es6-promise'
import 'whatwg-fetch'

export function get (url) {
    let result = fetch(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    return result;

}