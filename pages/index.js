import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AI USB Toolkits</title>
      </Head>
      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6 py-10">
        <header className="flex justify-between items-center mb-10">
          <div className="text-xl font-semibold">AI USB Toolkits</div>
          <nav className="space-x-4 hidden md:flex">
            <a href="#" className="hover:underline">Workflows</a>
            <a href="#" className="hover:underline">Dashboard</a>
            <a href="#" className="hover:underline">Admin</a>
            <button className="ml-4 px-4 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              Sign in
            </button>
          </nav>
        </header>
        <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-4">AI USB Toolkits for Smarter Automation</h1>
            <p className="mb-6 text-lg">
              Enhance your productivity with our AI-powered USB toolkits and customizable workflows.
            </p>
            <div className="space-x-4">
              <button className="bg-black text-white px-5 py-2 rounded hover:opacity-90">Explore Workflows</button>
              <button className="bg-gray-100 dark:bg-gray-800 px-5 py-2 rounded hover:opacity-90">Submit Prompt</button>
            </div>
          </div>
          <div>
            <img src="/usb-toolkit.png" alt="USB Toolkit" />
          </div>
        </section>
      </main>
    </>
  );
}
