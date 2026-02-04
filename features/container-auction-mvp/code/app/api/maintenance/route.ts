import { NextResponse } from 'next/server';
import { RepairJob } from '@/lib/types';
import repairJobs from '@/data/repair-jobs.json';

export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return NextResponse.json(repairJobs as RepairJob[]);
}
