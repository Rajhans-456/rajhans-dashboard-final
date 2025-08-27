import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { User, Car, FileText, Shield } from "lucide-react";

export default function EditVehicle() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Edit Vehicle Details
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Edits &gt; Vehicle &gt; Edit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Customer Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <User className="w-5 h-5 text-blue-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Customer Information</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      placeholder="Customer Name"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Customer ID
                    </label>
                    <input
                      type="text"
                      placeholder="Customer ID"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Ac No
                    </label>
                    <input
                      type="text"
                      placeholder="Loan Ac No"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ext. Ac No
                    </label>
                    <input
                      type="text"
                      placeholder="Ext. Ac No"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Booking No
                    </label>
                    <input
                      type="text"
                      placeholder="Booking No"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dealer Name
                    </label>
                    <input
                      type="text"
                      placeholder="Dealer Name"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Registration & Delivery */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <FileText className="w-5 h-5 text-blue-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Registration & Delivery
                </h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Registration Authority
                    </label>
                    <input
                      type="text"
                      placeholder="Regn Authority"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Registration No
                    </label>
                    <input
                      type="text"
                      placeholder="Regn No"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Temp Registration No
                    </label>
                    <input
                      type="text"
                      placeholder="Temp Regn No"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Date
                    </label>
                    <input
                      type="date"
                      placeholder="mm/dd/yyyy"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Registration By
                    </label>
                    <input
                      type="text"
                      placeholder="Regn By"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ex. Sh. Price
                    </label>
                    <input
                      type="text"
                      placeholder="Ex. Sh. Price"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Vehicle Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <Car className="w-5 h-5 text-blue-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Vehicle Information</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Color
                    </label>
                    <input
                      type="text"
                      placeholder="Vehicle Color"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Type
                    </label>
                    <input
                      type="text"
                      placeholder="Veh. Type"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Manufacturer
                    </label>
                    <input
                      type="text"
                      placeholder="Manufacturer"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Make
                    </label>
                    <input
                      type="text"
                      placeholder="Veh. Make"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Model MM
                    </label>
                    <input
                      type="text"
                      placeholder="Model MM"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year
                    </label>
                    <input
                      type="text"
                      placeholder="Year"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Engine No
                    </label>
                    <input
                      type="text"
                      placeholder="Engine No"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Chassis No
                    </label>
                    <input
                      type="text"
                      placeholder="Chassis No"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Insurance & Documentation */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <Shield className="w-5 h-5 text-blue-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Insurance & Documentation
                </h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Policy No
                    </label>
                    <input
                      type="text"
                      placeholder="Policy No."
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Company
                    </label>
                    <input
                      type="text"
                      placeholder="Insurance Co"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Upto
                    </label>
                    <input
                      type="date"
                      placeholder="mm/dd/yyyy"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Document Status
                    </label>
                    <input
                      type="text"
                      placeholder="Docs Status"
                      className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-6">
          <Button variant="outline" className="px-6">
            Clear All
          </Button>
          <Button variant="outline" className="px-6">
            Switch To Edit Mode
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
            Save Changes
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}