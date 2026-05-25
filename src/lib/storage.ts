import { seedData } from '../data/seed';
import type { AppData, BaseRecord, EntityKey } from '../types';
import { downloadFile } from './csv';
export const STORAGE_KEY = 'radcare_nusantara_app_data';

export const saveAppData = (data: AppData) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
export const loadAppData = (): AppData => { const raw = localStorage.getItem(STORAGE_KEY); if (!raw) { const d = seedData(); saveAppData(d); return d; } return JSON.parse(raw); };
export const resetAppData = (): AppData => { const d = seedData(); saveAppData(d); return d; };
export const exportJSON = () => downloadFile('radcare-backup.json', JSON.stringify(loadAppData(), null, 2), 'application/json');
export const importJSON = (file: File) => new Promise<AppData>((res, rej) => { const fr = new FileReader(); fr.onload = () => { const data = JSON.parse(String(fr.result)) as AppData; saveAppData(data); res(data); }; fr.onerror = () => rej(fr.error); fr.readAsText(file); });
export const exportCSV = (entity: EntityKey) => { const rows = (loadAppData()[entity] as BaseRecord[]); const keys = Object.keys(rows[0] ?? { id: '' }); const csv = [keys.join(','), ...rows.map(r => keys.map(k => JSON.stringify(r[k] ?? '')).join(','))].join('\n'); downloadFile(`radcare-${entity}.csv`, csv, 'text/csv'); };
export const createRecord = <T extends BaseRecord>(entity: EntityKey, payload: T) => { const data = loadAppData(); (data[entity] as BaseRecord[]).push(payload); saveAppData(data); return payload; };
export const updateRecord = <T extends BaseRecord>(entity: EntityKey, id: string, payload: Partial<T>) => { const data = loadAppData(); data[entity] = (data[entity] as BaseRecord[]).map(r => r.id === id ? { ...r, ...payload } : r); saveAppData(data); return data; };
export const deleteRecord = (entity: EntityKey, id: string) => { const data = loadAppData(); data[entity] = (data[entity] as BaseRecord[]).filter(r => r.id !== id); saveAppData(data); return data; };
export const getRecordById = (entity: EntityKey, id: string) => (loadAppData()[entity] as BaseRecord[]).find(r => r.id === id);
