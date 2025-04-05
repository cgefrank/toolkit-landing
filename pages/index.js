
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6 py-10 space-y-20">
      <header className="flex justify-between items-center mb-10">
        <div className="text-2xl font-bold">AI USB Toolkits</div>
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
          <h1 className="text-4xl font-bold mb-4">AI USB Toolkits for Smarter Automation</h1>
          <p className="mb-6 text-lg">Enhance your productivity with our AI-powered USB toolkits and customizable workflows.</p>
          <div className="space-x-4">
            <button className="bg-black text-white px-5 py-2 rounded hover:opacity-90">Explore Workflows</button>
            <button className="bg-gray-100 dark:bg-gray-800 px-5 py-2 rounded hover:opacity-90">Submit Prompt</button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src="/usb.png" alt="USB Toolkit" width={300} height={300} />
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Browse Workflows</h2>
          <select className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <option>Creator</option>
            <option>Price</option>
            <option>Popular</option>
          </select>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Sales Automation", price: "$19", desc: "Auto-create complex workflows." },
            { title: "Email Marketing", price: "$19", desc: "Tailor workflows to business needs." },
            { title: "Social Media Management", price: "$49", desc: "Automate platform tasks." },
            { title: "Lead Generation", price: "$49", desc: "Generate leads from data." },
            { title: "Customer Service Automation", price: "$49", desc: "Streamline processes." },
            { title: "Content Creation", price: "$49", desc: "Create automations for media." }
          ].map((w) => (
            <div key={w.title} className="p-4 border rounded shadow-sm dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-2">{w.title}</h3>
              <p className="text-sm mb-2">{w.desc}</p>
              <div className="flex justify-between items-center">
                <span>{w.price}</span>
                <button className="text-sm bg-black text-white px-3 py-1 rounded hover:opacity-90">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-gray-800 rounded">
            <p>"This toolkit changed the way I run my business. It's like having a full team."</p>
            <footer className="mt-2 text-sm text-right">– Sarah T., Entrepreneur</footer>
          </blockquote>
          <blockquote className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-gray-800 rounded">
            <p>"The automation workflows saved us hundreds of hours monthly!"</p>
            <footer className="mt-2 text-sm text-right">– Omar R., Ops Manager</footer>
          </blockquote>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">FAQs</h2>
        <ul className="space-y-4">
          <li>
            <strong>What is an AI USB Toolkit?</strong><br />
            A toolkit that runs customizable AI workflows offline on a USB.
          </li>
          <li>
            <strong>Can I upload my own prompts?</strong><br />
            Yes, using the “Submit Prompt” button.
          </li>
        </ul>
      </section>

      <footer className="border-t mt-16 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; 2025 Capital Golf Exchange. All rights reserved.
      </footer>
    </main>
  );
}
