import { Suspense } from 'react';
import { lusitana } from '../../ui/fonts';
import CardWrapper, { Card } from '../cards';
import LatestInvoices from '../latest-invoices';
import RevenueChart from '../revenue-chart';
import { CardsSkeleton, InvoiceSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';

export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton/>}>
          <CardWrapper/>
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<InvoiceSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
