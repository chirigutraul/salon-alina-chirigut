export interface IClient {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface IService {
  id:number;
  name: string;
  price: number;
  duration:string;
  description:string;
}