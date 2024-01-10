export interface CompanyHireType {
  id: string;
  company: string;
  companyAvatar?: string;
  notice: string;
  isHire: boolean;
  images: string[];
  keywords: string[];
  requirement: string;
  condition: string;
  applyMethod: string;
  applyPage?: string;
  welfare: string;
  location: {
    country: string;
    region: string;
    address: string;
    center: { lat: number; lng: number };
  };
}
