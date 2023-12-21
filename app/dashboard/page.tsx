import { fetchCardData, fetchLatestInvoices, fetchRevenue } from '../lib/data';
import { lusitana } from '../ui/fonts';
import { Card } from './cards';
import LatestInvoices from './latest-invoices';
import RevenueChart from './revenue-chart';

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const cardData = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Collected"
          value={cardData.totalPaidInvoices}
          type="collected"
        />
        <Card
          title="Pending"
          value={cardData.totalPendingInvoices}
          type="pending"
        />
        <Card
          title="Total Invoices"
          value={cardData.numberOfInvoices}
          type="invoices"
        />
        <Card
          title="Total Customers"
          value={cardData.numberOfCustomers}
          type="customers"
        />
      </div>
      <div>
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
