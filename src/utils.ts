import axios from "axios";
import {servserAddr} from "./config";

export async function fetchNginxFile<T>(path: string): Promise<T> {
	const response = await axios.get<T>(servserAddr.value + path)
	return response.data
}

export function LogError(error: unknown) {
	console.log(error)
}
