import { useState, useEffect } from "react";
import CompanySettingsLogic from "../utils/CompanySettingsLogic";
import InputField from "./CompanySettingsInputField";

export default function CompanyOptions() {
  const [formData, setFormData] = useState({
    companyName: "",
    vatCode: "",
    country: "",
    county: "",
    city: "",
    street: "",
    postalCode: "",
    currency: "RON",
  });

  useEffect(() => {
    const savedSettings = CompanySettingsLogic.loadCompanySettings();
    if (savedSettings) {
      setFormData(savedSettings);
    }
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CompanySettingsLogic.saveCompanySettings(formData);
    alert("Settings saved successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 p-4">
      <InputField
        label="Company Name"
        id="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
      />
      <InputField
        label="VAT Code"
        id="vatCode"
        value={formData.vatCode}
        onChange={handleInputChange}
      />

      <p className="text-lg font-semibold">Company Address</p>
      <InputField
        label="Country"
        id="country"
        value={formData.country}
        onChange={handleInputChange}
      />
      <InputField
        label="County"
        id="county"
        value={formData.county}
        onChange={handleInputChange}
      />
      <InputField
        label="City"
        id="city"
        value={formData.city}
        onChange={handleInputChange}
      />
      <InputField
        label="Street"
        id="street"
        value={formData.street}
        onChange={handleInputChange}
      />
      <InputField
        label="Postal Code"
        id="postalCode"
        value={formData.postalCode}
        onChange={handleInputChange}
      />

      <p className="text-lg font-semibold">Preferences</p>
      <div className="flex items-center gap-4">
        <label htmlFor="currency" className="text-right w-52">
          Currency
        </label>
        <select
          id="currency"
          value={formData.currency}
          onChange={handleInputChange}
          className="w-full p-2 border rounded outline-none focus:border-default"
        >
          <option value="RON">RON</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white rounded bg-default hover:filter hover:brightness-90"
        >
          Save Settings
        </button>
      </div>
    </form>
  );
}
