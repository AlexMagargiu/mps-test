// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavMenu from "./modules/shared/components/navigation-bar/NavMenu";
import NavToggle from "./modules/shared/components/navigation-bar/NavToggle";
import Dashboard from "./modules/dashboard/Dashboard";
import Scheduling from "./modules/scheduling/Scheduling";
import CompanySettings from "./modules/company-settings/CompanySettings";
import Areas from "./modules/my-company/Areas/Areas";
import Subareas from "./modules/my-company/Subareas/Subareas";
import Lines from "./modules/my-company/Lines/Lines";
import PartNumbers from "./modules/my-company/PartNumbers/PartNumbers";
import History from "./modules/history/History";

export default function App() {
  const [isNavClosed, setIsNavClosed] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen">
        <NavMenu isNavClosed={isNavClosed} />
        <div className="flex flex-col flex-grow transition-all duration-300">
          <div className="w-full h-[70px]">
            <NavToggle
              isNavClosed={isNavClosed}
              setIsNavClosed={setIsNavClosed}
            />
          </div>
          <div className="flex-grow p-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/scheduling" element={<Scheduling />} />
              <Route path="/company-settings" element={<CompanySettings />} />
              <Route path="/company/areas" element={<Areas />} />
              <Route path="/company/subareas" element={<Subareas />} />
              <Route path="/company/lines" element={<Lines />} />
              <Route path="/company/part-numbers" element={<PartNumbers />} />
              <Route path="/history" element={<History />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
