export async function fetchPublicApi(): Promise<any> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  console.log("API Response:", data);

  return data;
}
// Add more activities as needed