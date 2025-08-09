// shared SDS types
export interface SDSDocument {
  id: string;
  name: string;
  category: string;
  manufacturer: string; // matches Manufacturer.id
  description: string;
  pdfUrl: string;
  lastUpdated: string; // ISO string
  fileName: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  // store the tailwind gradient classes (without 'bg-gradient-to-r')
  // example: "from-yellow-400 to-yellow-600"
  color: string;
}

export interface SDSStats {
  totalSheets: number;
  manufacturers: number;
  access: string;
  compliance: string;
}
