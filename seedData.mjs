function now() {
  return new Date();
}

export const seedData = {
  banks: [
    { id: 100, slug: "bank-alpha", name: "Alpha Bank", head_office_city: "Delhi", img_path: "alpha.png", status: "Active", created: now(), modified: now() },
    { id: 101, slug: "bank-beta", name: "Beta Bank", head_office_city: "Mumbai", img_path: "beta.png", status: "Active", created: now(), modified: now() },
    { id: 102, slug: "bank-gamma", name: "Gamma Bank", head_office_city: "Chennai", img_path: "gamma.png", status: "Active", created: now(), modified: now() },
    { id: 103, slug: "bank-delta", name: "Delta Bank", head_office_city: "Kolkata", img_path: "delta.png", status: "Active", created: now(), modified: now() },
    { id: 104, slug: "bank-epsilon", name: "Epsilon Bank", head_office_city: "Hyderabad", img_path: "epsilon.png", status: "Inactive", created: now(), modified: now() }
  ],

  roles: [
    { id: 1, slug: "supervisor", name: "Supervisor" },
    { id: 2, slug: "enduser", name: "EndUser" }
  ],

  products: [
    { id: 600, slug: "prd-od", name: "Overdraft Facility", status: "Active", created: now(), modified: now() },
    { id: 601, slug: "prd-tl", name: "Term Loan", status: "Active", created: now(), modified: now() },
    { id: 602, slug: "prd-wcl", name: "Working Capital", status: "Active", created: now(), modified: now() },
    { id: 603, slug: "prd-ef", name: "Equipment Finance", status: "Active", created: now(), modified: now() }
  ],

  users: [
    { id: 1000, slug: "u-alpha", name: "Amit Sharma", email: "amit@company.com", contact: "9850010011", address: "Delhi", username: "amit", password: "hash", role_id: 1, status: "Active", created: now(), modified: now() },
    { id: 1001, slug: "u-beta", name: "Bina Patel", email: "bina@company.com", contact: "9840010022", address: "Mumbai", username: "bina", password: "hash", role_id: 2, status: "Active", created: now(), modified: now() },
    { id: 1002, slug: "u-gamma", name: "Govind Rao", email: "govind@company.com", contact: "9830010033", address: "Chennai", username: "govind", password: "hash", role_id: 2, status: "Active", created: now(), modified: now() },
    { id: 1003, slug: "u-delta", name: "Devika Singh", email: "devika@company.com", contact: "9820010044", address: "Kolkata", username: "devika", password: "hash", role_id: 1, status: "Active", created: now(), modified: now() }
  ],

  branches: [
    { id: 200, slug: "branch-a1", bank_id: 100, name: "Alpha Delhi", address: "Connaught Place, Delhi", status: "Active", created: now(), modified: now() },
    { id: 201, slug: "branch-a2", bank_id: 100, name: "Alpha West", address: "Dwarka, Delhi", status: "Active", created: now(), modified: now() },
    { id: 202, slug: "branch-b1", bank_id: 101, name: "Beta Mumbai", address: "Bandra Kurla, Mumbai", status: "Active", created: now(), modified: now() },
    { id: 203, slug: "branch-b2", bank_id: 101, name: "Beta South", address: "Lower Parel, Mumbai", status: "Active", created: now(), modified: now() },
    { id: 204, slug: "branch-c1", bank_id: 102, name: "Gamma Chennai", address: "T Nagar, Chennai", status: "Active", created: now(), modified: now() }
  ],

  contacts: [
    { id: 300, slug: "c1", name: "Suman Goel", email: "suman@alpha.com", user_type: "Bank", mobile: "9123001101", address: "New Delhi", designation: "Manager", department: "Corporate", status: "Active", created: now(), modified: now(), landlineno: "0111001", bank_name: "Alpha Bank" },
    { id: 301, slug: "c2", name: "Raj Bhandari", email: "raj@beta.com", user_type: "Bank", mobile: "9123101002", address: "Mumbai", designation: "Chief", department: "Debt", status: "Active", created: now(), modified: now(), landlineno: "0221002", bank_name: "Beta Bank" },
    { id: 302, slug: "c3", name: "Kiran Gupta", email: "kiran@gamma.com", user_type: "Bank", mobile: "9123201003", address: "Chennai", designation: "DGM", department: "Retail", status: "Inactive", created: now(), modified: now(), bank_name: "Gamma Bank" },
    { id: 303, slug: "c4", name: "Tejal Mehra", email: "tejal@delta.com", user_type: "Bank", mobile: "9123301004", address: "Kolkata", designation: "CFO", department: "Treasury", status: "Active", created: now(), modified: now(), bank_name: "Delta Bank" },
    { id: 304, slug: "c5", name: "Vivek Rathi", email: "vivek@epsilon.com", user_type: "External", mobile: "9123401005", address: "Hyderabad", designation: "Director", department: "IT", status: "Active", created: now(), modified: now(), bank_name: "Epsilon Bank" },
    { id: 305, slug: "c6", name: "Alok Verma", email: "alok@external.com", user_type: "External", mobile: "9123501106", address: "Bangalore", designation: "Consultant", department: "Risk", status: "Active", created: now(), modified: now(), bank_name: null },
    { id: 306, slug: "c7", name: "Nisha Jain", email: "nisha@beta.com", user_type: "Bank", mobile: "9123601107", address: "Pune", designation: "Credit Analyst", department: "Credit", status: "Active", created: now(), modified: now(), bank_name: "Beta Bank" }
  ],

  devices: [
    { id: 400, device_id: "dev-id-a", device_type: "android", reg_id: "regid-001", user_id: 1000, status: "Active" },
    { id: 401, device_id: "dev-id-b", device_type: "ios", reg_id: "regid-002", user_id: 1001, status: "Active" },
    { id: 402, device_id: "dev-id-c", device_type: "android", reg_id: "regid-003", user_id: 1002, status: "Inactive" },
    { id: 403, device_id: "dev-id-d", device_type: "android", reg_id: "regid-004", user_id: 1003, status: "Active" }
  ],

  groups: [
    { id: 500, user_id: 1000, title: "Admin", status: 1, supper: 1, created: now(), modified: now() },
    { id: 501, user_id: 1001, title: "Treasury", status: 1, supper: 0, created: now(), modified: now() },
    { id: 502, user_id: 1002, title: "Branch", status: 1, supper: 0, created: now(), modified: now() },
    { id: 503, user_id: 1003, title: "Support", status: 1, supper: 0, created: now(), modified: now() }
  ],

  meetings: [
    { id: 700, slug: "slug-700", meeting_id: "MOM-DEL-001", bank_id: 100, branch_id: 200, contact_number: "9123001101", meeting_date_time: new Date("2024-07-01 10:00:00"), location: "Delhi", agenda: "Q1 Review", decisions: "Approved", status: "Active", created_by: 1000, created: now(), modified: now(), discussion_points: "Discussed NPA, plans" },
    { id: 701, slug: "slug-701", meeting_id: "MOM-MUM-002", bank_id: 101, branch_id: 202, contact_number: "9123101002", meeting_date_time: new Date("2024-07-05 14:00:00"), location: "Mumbai", agenda: "Strategy", decisions: "Follow-Up Required", status: "Active", created_by: 1001, created: now(), modified: now(), discussion_points: "Growth targets" },
    { id: 702, slug: "slug-702", meeting_id: "MOM-CHE-003", bank_id: 102, branch_id: 204, contact_number: "9123201003", meeting_date_time: new Date("2024-07-11 09:00:00"), location: "Chennai", agenda: "Outreach Plan", decisions: "Scheduled", status: "Active", created_by: 1002, created: now(), modified: now(), discussion_points: "Market expansion" },
    { id: 703, slug: "slug-703", meeting_id: "MOM-DEL-004", bank_id: 100, branch_id: 201, contact_number: "9123001101", meeting_date_time: new Date("2024-07-15 16:00:00"), location: "Delhi", agenda: "Annual Budget", decisions: "Pending Approval", status: "Active", created_by: 1000, created: now(), modified: now(), discussion_points: "Budget allocations, targets" },
    { id: 704, slug: "slug-704", meeting_id: "MOM-MUM-005", bank_id: 101, branch_id: 203, contact_number: "9123101002", meeting_date_time: new Date("2024-08-01 12:00:00"), location: "Mumbai", agenda: "IT System Upgrade", decisions: "Requires Vendor Review", status: "Active", created_by: 1001, created: now(), modified: now(), discussion_points: "Discussed software proposals, cybersecurity" },
    { id: 705, slug: "slug-705", meeting_id: "MOM-HYD-006", bank_id: 104, branch_id: 201, contact_number: "9123401005", meeting_date_time: new Date("2024-08-10 15:00:00"), location: "Hyderabad", agenda: "Outsourcing", decisions: "Not Approved", status: "Inactive", created_by: 1002, created: now(), modified: now(), discussion_points: "Discussed vendor bids" }
  ],

  meetingMembers: [
    { id: 800, meeting_id: 700, contact_id: 300 },
    { id: 801, meeting_id: 700, contact_id: 301 },
    { id: 802, meeting_id: 701, contact_id: 301 },
    { id: 803, meeting_id: 701, contact_id: 304 },
    { id: 804, meeting_id: 702, contact_id: 302 },
    { id: 805, meeting_id: 702, contact_id: 303 },
    { id: 806, meeting_id: 703, contact_id: 305 },
    { id: 807, meeting_id: 703, contact_id: 300 },
    { id: 808, meeting_id: 704, contact_id: 304 },
    { id: 809, meeting_id: 704, contact_id: 306 },
    { id: 810, meeting_id: 705, contact_id: 304 }
  ],

  meetingActions: [
    { id: 900, slug: "ma-700-1", action_id: 1, meeting_id: 700, contact_id: 300, name: "Prepare NPA Report", due_date: new Date("2024-07-10"), meeting_decisions: "To be shared", status: "Pending", created_by: 1000, created: now() },
    { id: 901, slug: "ma-701-2", action_id: 2, meeting_id: 701, contact_id: 301, name: "Share Strategy Slides", due_date: new Date("2024-07-07"), meeting_decisions: "Slides due", status: "In Progress", created_by: 1001, created: now() },
    { id: 902, slug: "ma-702-3", action_id: 3, meeting_id: 702, contact_id: 302, name: "Collect Insight Leads", due_date: new Date("2024-07-13"), meeting_decisions: "List assigned", status: "Complete", created_by: 1002, created: now() },
    { id: 903, slug: "ma-703-4", action_id: 4, meeting_id: 703, contact_id: 305, name: "Submit Budget Draft", due_date: new Date("2024-07-20"), meeting_decisions: "Budget to be reviewed", status: "Overdue", created_by: 1003, created: now() },
    { id: 904, slug: "ma-704-5", action_id: 5, meeting_id: 704, contact_id: 304, name: "Arrange IT Vendor Demo", due_date: new Date("2024-08-05"), meeting_decisions: "Demo scheduled", status: "In Progress", created_by: 1001, created: now() }
  ],

  meetingProposals: [
    { id: 1001, slug: "mp-700-1", proposal_id: "PROP-700-1", meeting_id: 700, bank_id: 100, sector: "Corporate", roi: 8.5, processing_fee: 0.3, margin: 4.0, guarantee: "No", servicing_fees: 0.08, product_id: 600, stage: "Review", status: "Active", created_by: 1000, created: now(), modified: now() },
    { id: 1002, slug: "mp-701-2", proposal_id: "PROP-701-2", meeting_id: 701, bank_id: 101, sector: "SME", roi: 9.0, processing_fee: 0.4, margin: 5.0, guarantee: "Partial", servicing_fees: 0.1, product_id: 601, stage: "Sent", status: "Active", created_by: 1001, created: now(), modified: now() },
    { id: 1003, slug: "mp-703-1", proposal_id: "PROP-703-1", meeting_id: 703, bank_id: 100, sector: "Retail", roi: 10.0, processing_fee: 0.2, margin: 3.0, guarantee: "Full", servicing_fees: 0.07, product_id: 602, stage: "Draft", status: "Inactive", created_by: 1000, created: now(), modified: now() },
    { id: 1004, slug: "mp-704-2", proposal_id: "PROP-704-2", meeting_id: 704, bank_id: 101, sector: "Agri", roi: 7.5, processing_fee: 0.1, margin: 2.0, guarantee: "Partial", servicing_fees: 0.09, product_id: 601, stage: "Approved", status: "Active", created_by: 1001, created: now(), modified: now() }
  ],

  proposalDocuments: [
    { id: 1100, proposal_id: "PROP-700-1", doc_path: "docs/prop-700-1.pdf", created_by: 1000, created: now(), modified: now() },
    { id: 1101, proposal_id: "PROP-701-2", doc_path: "docs/prop-701-2.pdf", created_by: 1001, created: now(), modified: now() },
    { id: 1102, proposal_id: "PROP-703-1", doc_path: "docs/prop-703-1-v1.pdf", created_by: 1000, created: now(), modified: now() }
  ],

  settings: [
    { id: 1, title: "MOM App", owner: "Corp Owner", address: "123, Main St.", email: "admin@mom.com", email_2: "support@mom.com", mobile: "918800000000", phone: "01199998888", logo: "logo.jpg", meta_title: "App MOM", meta_keyword: "MOM,Meetings", meta_description: "Meetings Automation", config_mail_protocol: "mail", config_smtp_port: "587", config_smtp_host: "smtp.mom.com", config_smtp_username: "admin", config_smtp_password: "secret", config_smtp_timeout: "10", default_status: 1, status: 1, created: now(), modified: now() }
  ]
};