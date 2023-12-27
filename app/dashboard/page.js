import React from 'react'
import { Card, UsersChart} from '@/app/ui/dashboard';
import { fetchUsers } from '../lib/data';

export default async function Page() {
  const fetchData = await fetchUsers();
  const countUsers = fetchData.countUsers.message || null;
  const registerUsers = fetchData.registerUsers || null;
  const usersActive = fetchData.usersActive.message || null;
  const usersInactive = fetchData.usersInactive.message || null;
  return (
    <div>
      <p className='font-bold text-2xl'>Dashboard</p>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-4'>
        <Card value={countUsers.numeroUsuarios} title="Usuarios" />
        <Card value={usersActive.usuariosActivos} title="Usuarios Activos" />
        <Card value={usersInactive.usuariosInactivos} title="Usuarios Inactivos" />
      </div>
      <div className='mt-6 grid grid-cols-2 '>
        <UsersChart
          dataset={registerUsers}
        />
      </div>
    </div>
  ) 
}
