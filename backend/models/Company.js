const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  pincode: { type: String, required: true },
  available: { type: String, default: 'No' }, // Expecting 'Yes' or 'No' as a string
  certified: { type: String, default: 'No' }, // Expecting 'Yes' or 'No' as a string
  rating: { type: Number },
  virtualConsultations: { type: String, default: 'No' }, // Expecting 'Available' or 'Not Available' as a string
  servicesOffered: [{ type: String }],
  contactEmail: { type: String },
  contactNumber: { type: String },
  // Any other company details go here
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
