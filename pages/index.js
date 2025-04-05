import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6 py-10">
      <header className="flex justify-between items-center mb-10">
        <div className="text-xl font-semibold">AI USB Toolkits</div>
        <nav className="space-x-4 hidden md:flex">
          <Link href="#" className="hover:underline">Workflows</Link>
          <Link href="#" className="hover:underline">Dashboard</Link>
          <Link href="#" className="hover:underline">Admin</Link>
          <button className="ml-4 px-4 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            Sign in
          </button>
        </nav>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            AI USB Toolkits for Smarter Automation
          </h1>
          <p className="mb-6 text-lg">
            Enhance your productivity with our AI-powered USB toolkits and customizable workflows.
          </p>
          <div className="space-x-4">
            <button className="bg-black text-white px-5 py-2 rounded hover:opacity-90">
              Explore Workflows
            </button>
            <button className="bg-gray-100 dark:bg-gray-800 px-5 py-2 rounded hover:opacity-90">
              Submit Prompt
            </button>
          </div>
        </div>
        <Image src="/usb-toolkit.png" alt="USB Toolkit" width={300} height={300} />
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Browse Workflows</h2>
          <select className="text-black dark:text-white bg-white dark:bg-gray-800 p-2 rounded">
            <option>Creator</option>
            <option>Category</option>
            <option>Price</option>
          </select>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Sales Automation', desc: 'Auto-create complex workflows.', price: 19 },
            { title: 'Email Marketing', desc: 'Specific business needs.', price: 19 },
            { title: 'Social Media Management', desc: 'Platform workflows.', price: 49 },
            { title: 'Lead Generation', desc: 'Based on sales data.', price: 49 },
            { title: 'Customer Service Automation', desc: 'Streamline processes.', price: 49 },
            { title: 'Content Creation', desc: 'Generate automated ideas.', price: 49 },
          ].map((wf, i) => (
            <div key={i} className="border rounded p-4 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-2">{wf.title}</h3>
              <p className="mb-4">{wf.desc}</p>
              <div className="flex justify-between items-center">
                <span>${wf.price}</span>
                <button className="px-3 py-1 bg-black text-white rounded hover:opacity-90">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
