import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard } from "lucide-react";

export default function ChangeHP() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Change HP
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Edits &gt; Change HP
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Customer & Loan Details */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Customer & Loan Details</h2>
            </div>

            <div className="space-y-4">
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
                  Internal Ac No.
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current HP
                </label>
                <input
                  type="text"
                  placeholder="Current HP"
                  className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ext Ac No.
                </label>
                <input
                  type="text"
                  placeholder="Ext Ac No."
                  className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount
                </label>
                <input
                  type="text"
                  placeholder="Loan Amount"
                  className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Veh Regn No.
                </label>
                <input
                  type="text"
                  placeholder="Veh Regn No."
                  className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Right Column - HP Change Details */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <CreditCard className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">HP Change Details</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New HP
                </label>
                <input
                  type="text"
                  placeholder="New HP"
                  className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  HP Change Reason
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Reason</option>
                  <option>Transfer of Ownership</option>
                  <option>Bank Change</option>
                  <option>Policy Update</option>
                  <option>Customer Request</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Effective Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  HP Contact Number
                </label>
                <input
                  type="text"
                  placeholder="HP Contact Number"
                  className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  HP Email
                </label>
                <input
                  type="email"
                  placeholder="HP Email Address"
                  className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  placeholder="Enter any additional notes"
                  rows={3}
                  className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-6">
          <Button variant="outline" className="px-6">
            Clear All
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
            Save Changes
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}