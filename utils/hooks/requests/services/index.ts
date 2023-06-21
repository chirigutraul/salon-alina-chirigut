import { SERVICES_API_URL } from 'utils/constants';

export async function getServices(){
  const response = await fetch(SERVICES_API_URL);
  const data = await response.json();
  return data;
}