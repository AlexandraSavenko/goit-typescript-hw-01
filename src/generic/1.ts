import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const { data } = await axios.get<T>(url);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching from ${url}: ${error.message}`);
    } else {
      throw new Error(`Unknown Error fetching from ${url}`);
    }
  }
}
export {};
