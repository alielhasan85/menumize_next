// app/(marketing)/components/FeaturesSection.tsx
import { QrCode, Smartphone, Settings } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose MenuMize?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <QrCode className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Instant QR Generation</h3>
            <p className="text-gray-500">
              Create and update QR codes instantly. Changes to your menu
              are reflected immediately.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Mobile-Optimized</h3>
            <p className="text-gray-500">
              Beautiful, responsive menus that work perfectly on any
              device.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Settings className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Easy Management</h3>
            <p className="text-gray-500">
              Update prices, add items, and manage multiple menus from one
              dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
