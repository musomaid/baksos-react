import type { AppData, Patient } from '../types';
const mkPatient = (i:number): Patient => ({
  id:`p-${i}`,
  patientId:`RCN-${String(1000+i)}`,
  name:['Andi Pratama','Siti Rahma','Budi Santoso','Nadia Putri','Rizky Hidayat','Citra Lestari','Dewi Anggraini','Fajar Nugroho','Maya Salsabila','Yusuf Maulana','Rina Oktavia','Hendra Wijaya'][i-1],
  age:28+i,gender:i%2?'L':'P',diagnosis:'Karsinoma',cancerType:['Payudara','Paru','Nasofaring'][i%3],stage:['IIA','IIB','IIIA'][i%3],doctorName:['dr. Arif','dr. Lani','dr. Putra'][i%3],
  status:i%4===0?'Tertunda':i%5===0?'Selesai':'Aktif',riskLevel:i%4===0?'Tinggi':i%3===0?'Sedang':'Rendah',totalSessions:25,completedSessions:Math.min(25, i+8),treatmentProgress:Math.min(100,Math.round(((i+8)/25)*100)),nextSchedule:new Date(Date.now()+i*86400000).toISOString(),createdAt:new Date(Date.now()-i*86400000).toISOString(),
});

export const seedData = (): AppData => ({
  patients: Array.from({length:12},(_,i)=>mkPatient(i+1)),
  users: Array.from({length:8},(_,i)=>({id:`u-${i+1}`,name:`User ${i+1}`})),
  schedules: Array.from({length:15},(_,i)=>({id:`sc-${i+1}`,patientId:`p-${(i%12)+1}`,status:i%4===0?'Ditunda':'Terjadwal',date:new Date(Date.now()+i*3600000).toISOString()})),
  treatmentPlans: [], treatmentSessions: Array.from({length:12},(_,i)=>({id:`ts-${i+1}`,patientId:`p-${(i%12)+1}`,status:i%3===0?'Selesai':'Berjalan'})),
  monitoringNotes: Array.from({length:10},(_,i)=>({id:`mn-${i+1}`,patientId:`p-${(i%12)+1}`,note:'Monitoring stabil'})),
  doctorNotes: Array.from({length:8},(_,i)=>({id:`dn-${i+1}`,patientId:`p-${(i%12)+1}`,note:'Review dokter'})),
  physicsNotes: Array.from({length:5},(_,i)=>({id:`pn-${i+1}`,patientId:`p-${(i%12)+1}`,note:'Validasi dosis'})),
  sideEffects: Array.from({length:7},(_,i)=>({id:`se-${i+1}`,patientId:`p-${(i%12)+1}`,severity:i%3===0?'Berat':'Ringan'})),
  documents: Array.from({length:6},(_,i)=>({id:`doc-${i+1}`,title:`Dokumen ${i+1}`})),
  reports: [],
  auditLogs: Array.from({length:10},(_,i)=>({id:`log-${i+1}`,date:new Date(Date.now()-i*3600000).toISOString(),role:'System',action:'Seed Data',entity:'system',description:'Inisialisasi data demo'})),
  aiInsights: Array.from({length:5},(_,i)=>({id:`ai-${i+1}`,title:`Insight ${i+1}`,summary:'Perlu evaluasi pasien risiko tinggi.'})),
  settings: { facilityName: 'RADCARE NUSANTARA', location: 'Jakarta', themePreference: 'light' },
});
