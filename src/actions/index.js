import axios from 'axios';

const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

/**
 * Get the 5 day forecast given the city.
 * https://openweathermap.org/forecast5
 * @param city
 * @returns {{type: string, payload: AxiosPromise}}
 */
export function fetchWeather(city) {

    // URL comes from documentation.
    const url = `${ROOT_URL}&q=${city},us`;
    // Make a request which returns a promise.
    const request = axios.get(url);

    // console.log('Request:', request);
    // Pass the request into our action as the payload.
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
