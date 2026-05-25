import { ReactNode } from 'react';import { AppHeader } from './AppHeader';import { BottomNav } from './BottomNav';
export const AppShell=({title,children}:{title:string;children:ReactNode})=><div className='min-h-screen bg-slate-50 pb-24'><AppHeader title={title}/><main className='p-4 space-y-3'>{children}</main><BottomNav/></div>;
