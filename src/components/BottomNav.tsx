import { NavLink } from 'react-router-dom';const m=[['/','Home'],['/patients','Pasien'],['/services','Layanan'],['/pharmacy','Farmasi'],['/reports','Laporan']];
export const BottomNav=()=> <nav className='fixed bottom-0 inset-x-0 bg-white border-t grid grid-cols-5 text-xs'>{m.map(([to,l])=><NavLink key={to} to={to} className='p-3 text-center'>{l}</NavLink>)}</nav>;
