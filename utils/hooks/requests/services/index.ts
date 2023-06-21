export async function getServices(){
  const response = await fetch(`${process.env.API_URI}/api/services`);
  const data = await response.json();
  return data;
}