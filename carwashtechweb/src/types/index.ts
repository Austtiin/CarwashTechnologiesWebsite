export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}