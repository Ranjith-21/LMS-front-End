let getPrimaryData = JSON.parse(localStorage.getItem("PrimaryData"));
let getSecondaryData = JSON.parse(localStorage.getItem("SecondaryData"));
let getEducationData = JSON.parse(localStorage.getItem("educationData"));
let getAddressData = JSON.parse(localStorage.getItem("AddressDetails"));
let getBankData = JSON.parse(localStorage.getItem("Bank Details"));
let getTechnicalData = JSON.parse(localStorage.getItem("TechnicalSkills"));
let getExperience = JSON.parse(localStorage.getItem("Experience Details"));
let getContactData = JSON.parse(localStorage.getItem("contact Details"));

export let allData = {
  Primary: getPrimaryData,
  Secondary: getSecondaryData,
  Education: getEducationData,
  Address: getAddressData,
  Bank: getBankData,
  Technical: getTechnicalData,
  Experience: getExperience,
  Contact: getContactData,
};

localStorage.setItem('All Signup Data',JSON.stringify(allData))

console.log(allData);
    