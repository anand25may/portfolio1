import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-gray-800 text-white font-sans">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            👋 Hi, I'm Swarnim : Your Azure DevOps
          </h1>
          <p className="text-lg md:text-xl">
            🚀 DevOps Engineer | Certified in Azure, Kubernetes(CKA), Terraform, Google Cloud | CI/CD | Cloud-Native Enthusiast
          </p>
          <p className="mt-4 text-sm text-gray-300">Deployed via Docker 🐳 | AKS ☸️ | Azure DevOps CI/CD 🚀</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">🌐 About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate DevOps Engineer with hands-on experience in automating, optimizing, and deploying scalable applications using modern tools and practices. I love building cloud-native solutions, managing infrastructure as code, and enabling CI/CD for fast, reliable delivery.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">🛠️ Skills & Tools</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-200">
            <li>Azure, AKS</li>
            <li>Google Cloud (ACE)</li>
            <li>Docker & Kubernetes</li>
            <li>Terraform, Ansible</li>
            <li>Helm, GitHub Actions</li>
            <li>Azure DevOps, Jenkins</li>
            <li>CI/CD Pipelines</li>
            <li>React, Node.js</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">📜 Certifications</h2>
          <ul className="list-disc list-inside text-gray-200">
            <li>CKA – Certified Kubernetes Administrator</li>
            <li>Terraform Associate</li>
            <li>AZ-104: Microsoft Azure Administrator</li>
            <li>AZ-400: Azure DevOps Engineer Expert</li>
            <li>AZ-900: Azure Fundamentals</li>
            <li>Google Cloud ACE – Associate Cloud Engineer</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">📫 Contact</h2>
          <p className="text-gray-300">
            💼 Portfolio: <a href="https://www.anandgupta.in" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">www.anandgupta.in</a><br />
            📧 Email: <a href="mailto:Anand.gupta.blg@gmail.com" className="text-blue-400 underline">Anand.gupta.blg@gmail.com</a>
          </p>
        </section>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Anand Gupta. Built with React, Docker, AKS & DevOps 💙
        </footer>
      </div>
    </div>
  );
}

export default App;
