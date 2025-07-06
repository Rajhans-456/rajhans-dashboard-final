import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import SearchCustomer from "./pages/SearchCustomer";
import SearchGuarantor from "./pages/SearchGuarantor";
import SearchReceipts from "./pages/SearchReceipts";
import EMICalculator from "./pages/EMICalculator";
import Entries from "./pages/Entries";
import Edits from "./pages/Edits";
import EditCustomer from "./pages/EditCustomer";
import EditCoBorrower from "./pages/EditCoBorrower";
import EditGuarantor from "./pages/EditGuarantor";
import EditVehicle from "./pages/EditVehicle";
import ChangeGuarantor from "./pages/ChangeGuarantor";
import ChangeEMIDate from "./pages/ChangeEMIDate";
import ChangeHP from "./pages/ChangeHP";
import EditExtAcNo from "./pages/EditExtAcNo";
import RestructureLoan from "./pages/RestructureLoan";
import SelectLoan from "./pages/SelectLoan";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/customer" element={<SearchCustomer />} />
          <Route path="/search/guarantor" element={<SearchGuarantor />} />
          <Route path="/search/receipts" element={<SearchReceipts />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/entries" element={<Entries />} />
          <Route path="/transactions" element={<NotFound />} />
          <Route path="/updates" element={<NotFound />} />
          <Route path="/edits" element={<Edits />} />
          <Route path="/edits/customer" element={<EditCustomer />} />
          <Route path="/edits/co-borrower" element={<EditCoBorrower />} />
          <Route path="/edits/guarantor" element={<EditGuarantor />} />
          <Route path="/edits/loan" element={<SelectLoan />} />
          <Route path="/edits/restructure-loan" element={<RestructureLoan />} />
          <Route path="/edits/vehicle" element={<EditVehicle />} />
          <Route path="/edits/change-guarantor" element={<ChangeGuarantor />} />
          <Route path="/edits/change-hp" element={<ChangeHP />} />
          <Route path="/edits/change-emi-date" element={<ChangeEMIDate />} />
          <Route path="/edits/edit-ext-ac-no" element={<EditExtAcNo />} />
          <Route path="/reports" element={<NotFound />} />
          <Route path="/setup" element={<NotFound />} />
          <Route path="/accounts" element={<NotFound />} />
          <Route path="/settings" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
