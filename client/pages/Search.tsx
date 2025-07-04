import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchForm from "@/components/ui/SearchForm";
import FormInput from "@/components/ui/FormInput";

export default function Search() {
  const [activeTab, setActiveTab] = useState("customer");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Search</h1>
          <p className="text-gray-600 mt-1">
            Search for customers, guarantors, and receipts
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="customer">Search Customer</TabsTrigger>
            <TabsTrigger value="guarantor">Search Guarantor</TabsTrigger>
            <TabsTrigger value="receipts">Search Receipts</TabsTrigger>
          </TabsList>

          <TabsContent value="customer" className="space-y-6 mt-6">
            <SearchForm
              title="Search Customer"
              searchLabel="Search By"
              searchPlaceholder="Type Text & Press ENTER"
              selectLabel="Select Type"
              selectOptions={[
                "Customer Name",
                "Account Number",
                "Mobile Number",
              ]}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Details Of Customer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FormInput label="Customer Name" />
                  <FormInput label="Account No." />
                  <FormInput label="Mobile No." />
                </div>
              </div>
            </SearchForm>
          </TabsContent>

          <TabsContent value="guarantor" className="space-y-6 mt-6">
            <SearchForm
              title="Search Guarantor"
              searchLabel="Search By"
              searchPlaceholder="Type Text & Press ENTER"
              selectLabel="Select Type"
              selectOptions={[
                "Guarantor Name",
                "Account Number",
                "Mobile Number",
              ]}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Details Of Guarantor
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FormInput label="Guarantor's Name" />
                  <FormInput label="Account No." />
                  <FormInput label="Mobile No." />
                </div>
              </div>
            </SearchForm>
          </TabsContent>

          <TabsContent value="receipts" className="space-y-6 mt-6">
            <SearchForm
              title="Search Receipts"
              searchLabel="Search By"
              searchPlaceholder="Type Text & Press ENTER"
              selectLabel="Select Type"
              selectOptions={[
                "Receipt Number",
                "Account Number",
                "Transaction ID",
              ]}
            >
              <div className="flex items-center space-x-4 mb-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-700">
                    Search Last 4 Digit
                  </span>
                </label>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Results
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FormInput label="Chq/Trxn No." />
                  <FormInput label="Account No." />
                  <FormInput label="Mobile No." />
                </div>
              </div>
            </SearchForm>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
