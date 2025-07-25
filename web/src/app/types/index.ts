export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface Chemical {
  id: string;
  name: string;
  description: string;
  usage: string;
}