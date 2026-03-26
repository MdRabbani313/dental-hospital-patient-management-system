export type Branch = {
  id: string;
  name: string;
  address: string;
  staffCount: number;
  activePatients: number;
};

export type StaffMember = {
  id: string;
  name: string;
  role: 'Dentist' | 'Orthodontist' | 'Hygienist' | 'Reception' | 'Admin';
  branchId: string;
  shift: string;
  availability: 'Available' | 'Busy' | 'Off';
};

export type VitalRecord = {
  bp: string;
  pulse: number;
  tempC: number;
  oxygen: number;
  bloodSugar?: string;
  painScore: number;
};

export type Visit = {
  id: string;
  date: string;
  branchId: string;
  doctor: string;
  chiefComplaint: string;
  diagnosis: string;
  proceduresDone: string[];
  vitals: VitalRecord;
  immediateNeed: string;
  futureRemedy: string;
  followUpDate: string;
};

export type DocumentItem = {
  id: string;
  type: 'X-Ray' | 'Prescription' | 'Consent Form' | 'Invoice' | 'Treatment Plan';
  uploadedAt: string;
  uploadedBy: string;
  branchId: string;
  status: 'Verified' | 'Pending' | 'Rejected';
  tags: string[];
};

export type Patient = {
  id: string;
  fullName: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  phone: string;
  email: string;
  firstVisitDate: string;
  diseaseHistory: string[];
  allergies: string[];
  currentMedications: string[];
  dentalChartSummary: string;
  treatmentPriority: 'Low' | 'Medium' | 'High';
  visits: Visit[];
  documents: DocumentItem[];
};
