import type { AppData, ReportSummary } from '../types';
export const summarize=(d:AppData):ReportSummary=>({totalPatients:d.patients.length,totalFinished:d.visits.filter(v=>v.status==='Selesai').length,referrals:d.referrals.length,criticalStock:d.medicines.filter(m=>m.stock<=m.criticalStock).length});
