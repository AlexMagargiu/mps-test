const CompanySettingsLogic = {
  saveCompanySettings(settings) {
    localStorage.setItem("companySettings", JSON.stringify(settings));
  },

  loadCompanySettings() {
    const settings = localStorage.getItem("companySettings");
    return settings ? JSON.parse(settings) : null;
  },
};

export default CompanySettingsLogic;
