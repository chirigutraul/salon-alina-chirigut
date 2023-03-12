export async function getServices(){
  const response = await fetch("/api/services");
  const data = await response.json();
  return data;
}