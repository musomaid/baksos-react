export type UserRole = 'Pasien' | 'Dokter Spesialis' | 'Fisikawan Medis' | 'Admin Rumah Sakit' | 'Manajemen';
export type PatientStatus = 'Aktif' | 'Tertunda' | 'Selesai';
export type RiskLevel = 'Rendah' | 'Sedang' | 'Tinggi';

export interface Patient {
  id: string;
  patientId: string;
  name: string;
  age: number;
  gender: 'L' | 'P';
  diagnosis: string;
  cancerType: string;
  stage: string;
  doctorName: string;
  status: PatientStatus;
  riskLevel: RiskLevel;
  totalSessions: number;
  completedSessions: number;
  treatmentProgress: number;
  nextSchedule: string;
  createdAt: string;
}
export interface AuditLog { id: string; date: string; role: UserRole | 'System'; action: string; entity: string; description: string; }
export interface AppSettings { facilityName: string; location: string; themePreference: 'light' | 'system'; }
export interface BaseRecord { id: string; [k: string]: unknown }

export interface AppData {
  patients: Patient[]; users: BaseRecord[]; schedules: BaseRecord[]; treatmentPlans: BaseRecord[]; treatmentSessions: BaseRecord[];
  monitoringNotes: BaseRecord[]; doctorNotes: BaseRecord[]; physicsNotes: BaseRecord[]; sideEffects: BaseRecord[]; documents: BaseRecord[];
  reports: BaseRecord[]; auditLogs: AuditLog[]; aiInsights: BaseRecord[]; settings: AppSettings;
}

export type EntityKey = Exclude<keyof AppData, 'settings'>;
