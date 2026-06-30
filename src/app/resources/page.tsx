export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Resources</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Documentation</h3>
              <p className="text-gray-600 mb-4">Access our comprehensive guides and API documentation.</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                View Documentation →
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
              <p className="text-gray-600 mb-4">Learn how companies are saving with Toreso.</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Read Case Studies →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
