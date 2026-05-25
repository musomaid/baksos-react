export type VisitStatus = 'Menunggu'|'Triage'|'Pemeriksaan'|'Farmasi'|'Selesai';
export type VisitPriority = 'Normal'|'Anak'|'Lansia'|'Darurat';
export type UserRole = 'Admin'|'Dokter'|'Perawat'|'Farmasi'|'Relawan';
export interface Activity {id:string;name:string;location:string;date:string;personInCharge:string;isActive:boolean}
export interface Patient {id:string;nik?:string;name:string;age:number;gender:'L'|'P';address:string;phone?:string;chiefComplaint:string;category:'Umum'|'Anak'|'Lansia'|'Prioritas'}
export interface Visit {id:string;patientId:string;queueNumber:string;priority:VisitPriority;status:VisitStatus;createdAt:string}
export interface TriageRecord {id:string;visitId:string;bloodPressure:string;temperature:number;pulse:number;respiration:number;oxygenSaturation:number;weight:number;height?:number;notes:string}
export interface MedicalRecord {id:string;visitId:string;anamnesis:string;physicalExam:string;diagnosis:string;action:string;doctorNotes:string}
export interface Medicine {id:string;name:string;type:string;unit:string;stock:number;criticalStock:number;defaultInstruction:string}
export interface Prescription {id:string;visitId:string;createdAt:string}
export interface PrescriptionItem {id:string;prescriptionId:string;medicineId:string;quantity:number;instruction:string}
export interface Referral {id:string;visitId:string;facility:string;reason:string;diagnosis:string;notes:string;status:string}
export interface DocumentRecord {id:string;title:string;type:'Foto Kegiatan'|'Persetujuan'|'Surat Rujukan'|'Catatan Klinis';description:string;date:string;patientId?:string;visitId?:string}
export interface TeamMember {id:string;name:string;role:UserRole;phone:string;email:string}
export interface AuditLog {id:string;action:string;timestamp:string;details:string}
export interface ReportSummary {totalPatients:number;totalFinished:number;referrals:number;criticalStock:number}
export interface AppData {activity:Activity;patients:Patient[];visits:Visit[];triageRecords:TriageRecord[];medicalRecords:MedicalRecord[];medicines:Medicine[];prescriptions:Prescription[];prescriptionItems:PrescriptionItem[];referrals:Referral[];documents:DocumentRecord[];teamMembers:TeamMember[];auditLogs:AuditLog[]}
