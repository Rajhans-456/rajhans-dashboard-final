import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign } from "lucide-react";

export default function ChangeEMIDate() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Change EMI Date
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Edits &gt; Change EMI Date
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
                  Ledger No / HP
                </label>
                <input
                  type="text"
                  placeholder="Ledger No / HP"
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

          {/* Right Column - EMI Details */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <DollarSign className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">EMI Details</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  EMI Paid
                </label>
                <input
                  type="text"
                  placeholder="Emis Paid"
                  className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Next Due EMI DT
                </label>
                <input
                  type="text"
                  placeholder="Next due emi dt"
                  className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  EMI Pending
                </label>
                <input
                  type="text"
                  placeholder="Emis Pending"
                  className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  No. of EMI's
                </label>
                <input
                  type="text"
                  placeholder="Emis"
                  className="w-full px-3 py-2 border border-teal-400 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Date for Next EMI
                </label>
                <input
                  type="text"
                  placeholder="DD-MM-YYYY"
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