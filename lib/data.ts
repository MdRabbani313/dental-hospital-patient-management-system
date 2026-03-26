import { Branch, Patient, StaffMember } from './types';

export const branches: Branch[] = [
  {
    id: 'b1',
    name: 'Downtown Dental Care',
    address: '12 Main Street, City Center',
    staffCount: 6,
    activePatients: 248
  },
  {
    id: 'b2',
    name: 'Northside Smile Studio',
    address: '88 North Avenue, Uptown',
    staffCount: 4,
    activePatients: 173
  }
];

export const staff: StaffMember[] = [
  { id: 's1', name: 'Dr. A. Mehta', role: 'Dentist', branchId: 'b1', shift: '9:00-17:00', availability: 'Available' },
  { id: 's2', name: 'Dr. L. Roy', role: 'Orthodontist', branchId: 'b1', shift: '10:00-18:00', availability: 'Busy' },
  { id: 's3', name: 'Hina K', role: 'Hygienist', branchId: 'b1', shift: '8:00-16:00', availability: 'Available' },
  { id: 's4', name: 'Aman V', role: 'Reception', branchId: 'b1', shift: '9:00-17:00', availability: 'Available' },
  { id: 's5', name: 'Isha D', role: 'Admin', branchId: 'b1', shift: '11:00-19:00', availability: 'Busy' },
  { id: 's6', name: 'Dr. P. Singh', role: 'Dentist', branchId: 'b1', shift: '12:00-20:00', availability: 'Available' },
  { id: 's7', name: 'Dr. N. Khan', role: 'Dentist', branchId: 'b2', shift: '9:00-17:00', availability: 'Busy' },
  { id: 's8', name: 'Maya T', role: 'Hygienist', branchId: 'b2', shift: '8:00-16:00', availability: 'Available' },
  { id: 's9', name: 'Reena S', role: 'Reception', branchId: 'b2', shift: '9:00-17:00', availability: 'Available' },
  { id: 's10', name: 'Karan J', role: 'Admin', branchId: 'b2', shift: '11:00-19:00', availability: 'Off' }
];

export const patients: Patient[] = [
  {
    id: 'P-1001',
    fullName: 'Ritika Sharma',
    age: 34,
    gender: 'Female',
    phone: '+1-202-555-0192',
    email: 'ritika.sharma@email.com',
    firstVisitDate: '2026-01-15',
    diseaseHistory: ['Type 2 Diabetes', 'Mild Hypertension'],
    allergies: ['Penicillin'],
    currentMedications: ['Metformin 500mg', 'Amlodipine 5mg'],
    dentalChartSummary: 'Generalized gingivitis, deep caries on tooth #36, moderate tartar.',
    treatmentPriority: 'High',
    visits: [
      {
        id: 'V-9001',
        date: '2026-01-15',
        branchId: 'b1',
        doctor: 'Dr. A. Mehta',
        chiefComplaint: 'Severe pain in lower left molar.',
        diagnosis: 'Deep dental caries with pulpal involvement.',
        proceduresDone: ['Clinical examination', 'IOPA X-Ray', 'Pain management'],
        vitals: { bp: '138/88', pulse: 82, tempC: 36.9, oxygen: 98, bloodSugar: '162 mg/dL', painScore: 8 },
        immediateNeed: 'Pain relief and infection control.',
        futureRemedy: 'Root canal treatment followed by crown placement.',
        followUpDate: '2026-01-20'
      },
      {
        id: 'V-9018',
        date: '2026-01-20',
        branchId: 'b1',
        doctor: 'Dr. P. Singh',
        chiefComplaint: 'Follow-up for RCT procedure.',
        diagnosis: 'Canal cleaned and medicated.',
        proceduresDone: ['Biomechanical preparation', 'Temporary restoration'],
        vitals: { bp: '132/84', pulse: 79, tempC: 36.7, oxygen: 99, bloodSugar: '154 mg/dL', painScore: 4 },
        immediateNeed: 'Temporary restoration care instructions.',
        futureRemedy: 'Obturation and zirconia crown in next visit.',
        followUpDate: '2026-01-27'
      }
    ],
    documents: [
      {
        id: 'D-5001',
        type: 'X-Ray',
        uploadedAt: '2026-01-15',
        uploadedBy: 'Dr. A. Mehta',
        branchId: 'b1',
        status: 'Verified',
        tags: ['IOPA', 'Tooth #36']
      },
      {
        id: 'D-5002',
        type: 'Treatment Plan',
        uploadedAt: '2026-01-16',
        uploadedBy: 'Isha D',
        branchId: 'b1',
        status: 'Pending',
        tags: ['RCT', 'Crown']
      }
    ]
  }
];
