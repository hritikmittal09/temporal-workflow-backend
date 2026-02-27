export async function fetchPublicApi(): Promise<any> {
  
  const url = 'https://api.freeapi.app/api/v1/public/randomjokes/joke/random';

const res = await fetch(url);
const result = await res.json();

console.log("API Response:", result);


return result.data.content;
}
// Add more activities as needed