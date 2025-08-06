// Helper for NOW date strings
function now() { return new Date().toISOString().replace('T',' ').substring(0,19); }

// --- BANKS (id, slug, name, head_office_city, img_path, status, created, modified)
const banks = [
  [101, 'ba1', 'Alpha Bank', 'Delhi', 'ba1.png', 'Active', now(), now()],
  [102, 'ba2', 'Beta Bank', 'Mumbai', 'ba2.png', 'Active', now(), now()],
  [103, 'ba3', 'Gamma Bank', 'Chennai', 'ba3.png', 'Active', now(), now()],
  [104, 'ba4', 'Delta Bank', 'Kolkata', 'ba4.png', 'Active', now(), now()],
  [105, 'ba5', 'Epsilon Bank', 'Pune', 'ba5.png', 'Inactive', now(), now()],
  [106, 'ba6', 'Zeta Bank', 'Hyderabad', 'ba6.png', 'Active', now(), now()],
  [107, 'ba7', 'Theta Bank', 'Bangalore', 'ba7.png', 'Inactive', now(), now()],
  [108, 'ba8', 'Lambda Bank', 'Jaipur', 'ba8.png', 'Active', now(), now()],
  [109, 'ba9', 'Omega Bank', 'Nagpur', 'ba9.png', 'Active', now(), now()],
  [110, 'ba10','Sigma Bank', 'Ahmedabad', 'ba10.png', 'Active', now(), now()]
];

// --- BRANCHES (id, slug, bank_id, name, address, status, created, modified)
const branches = [
  [201, 'br1', 101, 'Alpha Central', 'CBD, Delhi', 'Active', now(), now()],
  [202, 'br2', 101, 'Alpha South', 'South Delhi', 'Active', now(), now()],
  [203, 'br3', 102, 'Beta Fort', 'Fort, Mumbai', 'Active', now(), now()],
  [204, 'br4', 102, 'Beta Andheri', 'Andheri, Mumbai', 'Active', now(), now()],
  [205, 'br5', 103, 'Gamma Beach', 'Besant Nagar, Chennai', 'Active', now(), now()],
  [206, 'br6', 104, 'Delta Lake Town','Lake Town, Kolkata', 'Active', now(), now()],
  [207, 'br7', 104, 'Delta Salt', 'Salt Lake, Kolkata', 'Inactive', now(), now()],
  [208, 'br8', 105, 'Epsilon Camp','Camp, Pune','Active', now(), now()],
  [209, 'br9', 109, 'Omega Civil','Civil Lines, Nagpur','Active', now(), now()],
  [210, 'br10',110,'Sigma CG','CG Road, Ahmedabad','Active', now(), now()]
];

// --- CONTACTS (id, slug, name, email, user_type, mobile, address, designation, department, status, created, modified, landlineno, bank_name)
const contacts = [
 [301, 'c1', 'Ayush Sharma', 'ayush@ba.com', 'Bank', '900001001', 'Delhi', 'Manager', 'Corporate', 'Active', now(), now(),'0111001', 'Alpha Bank'],
 [302, 'c2', 'Swati Jain', 'swati@bb.com', 'Bank', '900001002', 'Mumbai', 'AVP', 'Treasury', 'Active', now(), now(),'', 'Beta Bank'],
 [303, 'c3', 'Pavan Rao', 'pavan@bg.com', 'Bank', '900001003', 'Chennai', 'Manager', 'Retail', 'Active', now(), now(),'','Gamma Bank'],
 [304, 'c4', 'Krishna Mehra', 'krish@bd.com', 'Bank', '900001004', 'Kolkata','Chief','Credit','Active',now(),now(),'','Delta Bank'],
 [305, 'c5', 'Lucy Thomas', 'lucy@be.com', 'Bank', '900001005', 'Pune', 'RM', 'SME', 'Active', now(), now(),'0201005', 'Epsilon Bank'],
 [306, 'c6', 'Nitin Desai', 'nitin@bz.com', 'Bank', '900001006', 'Hyderabad', 'Exec', 'IT', 'Active', now(), now(),'','Zeta Bank'],
 [307, 'c7', 'Priya Solanki', 'priya@bt.com', 'Bank', '900001007', 'Bangalore', 'DGM', 'Corporate', 'Active', now(), now(),'','Theta Bank'],
 [308, 'c8', 'Jayram G', 'jayram@bl.com', 'Bank', '900001008', 'Jaipur', 'RM', 'PSD', 'Active', now(), now(),'','Lambda Bank'],
 [309, 'c9', 'Mehul A', 'mehul@bo.com', 'Bank', '900001009', 'Nagpur', 'Chief', 'Treasury', 'Active', now(), now(),'','Omega Bank'],
 [310, 'c10', 'Sneha Bhatt', 'sneha@bs.com', 'Client', '900001010', 'Ahmedabad', 'CFO', 'Treasury', 'Active',now(),now(),'0791001','Sigma Bank']
];

// --- DEVICES (id, device_id, device_type, reg_id, user_id, status)
const devices = [
 [401, 'dev1', 'android', 'regid1', 501, 'Active'],
 [402, 'dev2', 'android', 'regid2', 502, 'Active'],
 [403, 'dev3', 'ios', 'regid3', 503, 'Inactive'],
 [404, 'dev4', 'android', 'regid4', 504, 'Active'],
 [405, 'dev5', 'ios', 'regid5', 505, 'Active'],
 [406, 'dev6', 'android', 'regid6', 506, 'Inactive'],
 [407, 'dev7', 'android', 'regid7', 507, 'Active'],
 [408, 'dev8', 'ios', 'regid8', 508, 'Active'],
 [409, 'dev9', 'web', 'regid9', 509, 'Inactive'],
 [410, 'dev10', 'android', 'regid10',510,'Active']
];

// --- GROUPS (id, user_id, title, status, supper, created, modified)
const groups = [
 [41, 501, 'Admin', 1, 1, now(), now()],
 [42, 502, 'TreasuryOps', 1, 0, now(), now()],
 [43, 503, 'Mumbai Ops', 1, 0, now(), now()],
 [44, 504, 'Chennai Ops', 1, 0, now(), now()],
 [45, 505, 'Support', 0, 0, now(), now()],
 [46, 506, 'Supervisors', 1, 1, now(), now()],
 [47, 507, 'Product', 1, 0, now(), now()],
 [48, 508, 'Jaipur', 1, 0, now(), now()],
 [49, 509, 'Branch Nagpur', 1, 0, now(), now()],
 [50, 510, 'Ahmedabad Ops', 1, 0, now(), now()]
];

// --- MEETING_ACTIONS (id, slug, action_id, meeting_id, contact_id, name, due_date, meeting_decisions, status, created_by, created)
const meeting_actions = [
 [801,'a1m1',1,601,301,'Review quarterly results','2024-07-12','Results shared','Pending',501,now()],
 [802,'a2m1',2,601,302,'Update NPA report','2024-07-13','To be submitted','In Progress',501,now()],
 [803,'a1m2',1,602,303,'Finalize vendor shortlist','2024-07-14','Shortlist pending','Pending',502,now()],
 [804,'a2m2',2,602,304,'Share rollout plan','2024-07-15','Draft due','Complete',502,now()],
 [805,'a1m3',1,603,305,'Contact SME prospects','2024-07-16','Review contacts','Pending',503,now()],
 [806,'a1m4',1,604,307,'Share IT roadmap','2024-07-17','Review with CIO','Complete',504,now()],
 [807,'a2m4',2,604,308,'Update infra status','2024-07-18','Infra details due','Pending',504,now()],
 [808,'a1m5',1,605,309,'Market analysis','2024-07-19','Summary to be sent','Pending',505,now()],
 [809,'a1m6',1,606,310,'Review project docs','2024-07-20','Docs archived','Complete',506,now()],
 [810,'a1m7',1,607,302,'Get IT security budget','2024-07-21','Pending management','In Progress',507,now()]
];

// --- MEETING_MEMBERS (id, meeting_id, contact_id)
const meeting_members = [
 [1001, 601, 301],
 [1002, 601, 302],
 [1003, 602, 303],
 [1004, 602, 304],
 [1005, 603, 305],
 [1006, 604, 306],
 [1007, 604, 307],
 [1008, 605, 308],
 [1009, 606, 309],
 [1010, 607, 310]
];

// --- MEETING_PROPOSALS (id, slug, proposal_id, meeting_id, bank_id, sector, roi, processing_fee, margin, guarantee, servicing_fees, product_id, stage, status, created_by, created, modified)
const meeting_proposals = [
 [1201, 'mp1', 'P1', 601, 101, 'Corporate', 8.25, 0.25, 5, 'No', 0.10, 901, 'In Progress', 'Active', 501, now(), now()],
 [1202, 'mp2', 'P2', 602, 102, 'Retail', 9.00, 0.35, 8, 'Partial', 0.14, 902, 'Proposal Sent', 'Active', 502, now(), now()],
 [1203, 'mp3', 'P3', 603, 103, 'SME', 10.00, 0.20, 10, 'Full', 0.17, 903, 'Closed', 'Inactive', 503, now(), now()],
 [1204, 'mp4', 'P4', 604, 104, 'Infra', 7.50, 0.28, 6, 'Full', 0.11, 904, 'Approved', 'Active', 504, now(), now()],
 [1205, 'mp5', 'P5', 605, 105, 'Agri', 8.30, 0.31, 7, 'No', 0.08, 905, 'In Progress', 'Active', 505, now(), now()],
 [1206, 'mp6', 'P6', 606, 106, 'Corporate', 7.90, 0.23, 5, 'Partial', 0.16, 906, 'Discussion', 'Active', 506, now(), now()],
 [1207, 'mp7', 'P7', 607, 107, 'Retail', 9.20, 0.32, 8, 'No', 0.13, 907, 'Proposal Sent', 'Active', 507, now(), now()],
 [1208, 'mp8', 'P8', 608, 108, 'PSD', 9.80, 0.25, 9, 'Full', 0.18, 908, 'Discussion', 'Active', 508, now(), now()],
 [1209, 'mp9', 'P9', 609, 109, 'SME', 10.20, 0.29, 10, 'Full', 0.14, 909, 'Closed', 'Inactive', 509, now(), now()],
 [1210, 'mp10','P10',610, 110, 'Corporate',8.90, 0.33, 11,'No',0.17, 910,'Approved','Active',510,now(),now()]
];

// --- MEETINGS (id, slug, meeting_id, bank_id, branch_id, contact_number, meeting_date_time, location, agenda, decisions, status, created_by, created, modified, discussion_points)
const meetings = [
 [601, 'm1', 'Meet-Alpha-20240701-1', 101, 201, '900001001','2024-07-01 10:00:00', 'Delhi', 'Quarterly Review', 'Action Points Set', 'Active', 501, now(), now(), 'Quarterly plans, NPA review'],
 [602, 'm2', 'Meet-Beta-20240702-1', 102, 203, '900001002','2024-07-02 11:00:00', 'Mumbai', 'Digital Rollout', 'Pending Actions', 'Active', 502, now(), now(), 'IT roadmap, CRM review'],
 [603, 'm3', 'Meet-Gamma-20240703-1', 103, 205, '900001003','2024-07-03 14:00:00', 'Chennai', 'SME Lending Discussion', 'Product Review', 'Complete', 503, now(), now(), 'SME leads, disbursal speed'],
 [604, 'm4', 'Meet-Delta-20240704-1', 104, 206, '900001004','2024-07-04 09:30:00', 'Kolkata', 'Risk Committee', 'Follow-ups Needed', 'Active', 504, now(), now(), 'Credit policies, loan process'],
 [605, 'm5', 'Meet-Epsilon-20240705-1', 105, 208, '900001005','2024-07-05 10:30:00', 'Pune', 'Liability Portfolio', 'Schedule Next', 'Active', 505, now(), now(), 'Bank tie-ups, funding'],
 [606, 'm6', 'Meet-Zeta-20240706-1', 106, 209, '900001006','2024-07-06 15:00:00', 'Hyderabad', 'Infra Project Loans', 'Action Points', 'Active', 506, now(), now(), 'Project status, legal issues'],
 [607, 'm7', 'Meet-Theta-20240707-1', 107, 210, '900001007','2024-07-07 16:00:00', 'Bangalore', 'IT Upgrade', 'Pending Budget', 'Active', 507, now(), now(), 'Vendor selection, budgeting'],
 [608, 'm8', 'Meet-Lambda-20240708-1', 108, 202, '900001008','2024-07-08 12:30:00', 'Jaipur', 'New Branch', 'Opening Postponed', 'Active', 508, now(), now(), 'HR, infra, licensing'],
 [609, 'm9', 'Meet-Omega-20240709-1', 109, 209, '900001009','2024-07-09 11:30:00', 'Nagpur', 'Corporate Account', 'Client Visit', 'Active', 509, now(), now(), 'Escalations, KYC'],
 [610, 'm10','Meet-Sigma-20240710-1',110, 210, '900001010','2024-07-10 14:30:00', 'Ahmedabad','Cash Management','Issues Resolved','Active',510,now(),now(),'CMS pipeline']
];

// --- PROPOSAL_DOCUMENTS (id, proposal_id, doc_path, created_by, created, modified)
const proposal_documents = [
 [1101, 'P1', 'docs/alpha-prop1.pdf', 501, now(), now()],
 [1102, 'P2', 'docs/beta-prop2.pdf', 502, now(), now()],
 [1103, 'P3', 'docs/gamma-prop3.pdf', 503, now(), now()],
 [1104, 'P4', 'docs/delta-prop4.pdf', 504, now(), now()],
 [1105, 'P5', 'docs/epsilon-prop5.pdf', 505, now(), now()],
 [1106, 'P6', 'docs/zeta-prop6.pdf', 506, now(), now()],
 [1107, 'P7', 'docs/theta-prop7.pdf', 507, now(), now()],
 [1108, 'P8', 'docs/lambda-prop8.pdf', 508, now(), now()],
 [1109, 'P9', 'docs/omega-prop9.pdf', 509, now(), now()],
 [1110, 'P10', 'docs/sigma-prop10.pdf',510, now(), now()]
];

// --- PRODUCTS (id, slug, name, status, created, modified)
const products = [
 [901, 'prd1', 'Overdraft', 'Active', now(), now()],
 [902, 'prd2', 'Term Loan', 'Active', now(), now()],
 [903, 'prd3', 'Working Capital Loan', 'Active', now(), now()],
 [904, 'prd4', 'Commercial Paper', 'Inactive', now(), now()],
 [905, 'prd5', 'Direct Assignment', 'Active', now(), now()],
 [906, 'prd6', 'Cash Management', 'Active', now(), now()],
 [907, 'prd7', 'Payment Gateway', 'Active', now(), now()],
 [908, 'prd8', 'Bill Discounting', 'Active', now(), now()],
 [909, 'prd9', 'Securitisation', 'Inactive', now(), now()],
 [910, 'prd10','Retail Loan','Active',now(),now()]
];

// --- ROLES (id, slug, name)
const roles = [
 [2,'JyBlteGD2o6U','Supervisor'],
 [3,'cKRzHRUMbb6Z','EndUser']
];

// --- SETTINGS (id, title, owner, address, email, email_2, mobile, phone, logo, meta_title, meta_keyword, meta_description, fb_link, twitter_link, in_link, gpluse_link, youtube_link, config_google_analytics, config_mail_protocol, config_smtp_port, config_smtp_host, config_smtp_username, config_smtp_password, config_smtp_timeout, default_status, status, created, modified)
const settings = [
 [1, 'Sample MOM', 'Sample Org', '123 Main St, India', 'admin@mom.com', 'support@mom.com','1234567890','1234567890','logo.jpg','Sample MOM','Sample MOM','MOM Platform','https://facebook.com/sample','https://twitter.com/sample','https://linkedin.com/company/sample','https://plus.google.com/sample', '', '', 'mail','587','smtp.sample.com','smtp_user','smtp_pass','30',1,1,now(),now()]
];

// --- USERS (id, slug, name, email, contact, address, username, password, role_id, image_path, new_password_token, forgot_password_token, current_lat, current_long, status, created, modified)
const users = [
 [501, 'u1', 'Admin One', 'admin1@client.com', '9991110001', 'Delhi', 'admin1', 'hash1', 2, '', '', '', '', '', 'Active', now(), now()],
 [502, 'u2', 'Supervisor Two', 'sup2@client.com', '9991110002', 'Mumbai', 'sup2', 'hash2', 2, '', '', '', '', '', 'Active', now(), now()],
 [503, 'u3', 'Branch User Three', 'user3@client.com', '9991110003', 'Chennai', 'user3', 'hash3', 3, '', '', '', '', '', 'Active', now(), now()],
 [504, 'u4', 'Branch User Four', 'user4@client.com', '9991110004', 'Kolkata', 'user4', 'hash4', 3, '', '', '', '', '', 'Active', now(), now()],
 [505, 'u5', 'Treasury User Five', 'user5@client.com', '9991110005', 'Pune', 'user5', 'hash5', 2, '', '', '', '', '', 'Inactive', now(), now()],
 [506, 'u6', 'User Six', 'user6@client.com', '9991110006', 'Hyderabad', 'user6', 'hash6', 3, '', '', '', '', '', 'Active', now(), now()],
 [507, 'u7', 'User Seven', 'user7@client.com', '9991110007', 'Bangalore', 'user7', 'hash7', 2, '', '', '', '', '', 'Active', now(), now()],
 [508, 'u8', 'User Eight', 'user8@client.com', '9991110008', 'Jaipur', 'user8', 'hash8', 3, '', '', '', '', '', 'Active', now(), now()],
 [509, 'u9', 'User Nine', 'user9@client.com', '9991110009', 'Nagpur', 'user9', 'hash9', 3, '', '', '', '', '', 'Inactive', now(), now()],
 [510, 'u10', 'User Ten', 'user10@client.com', '9991110010', 'Ahmedabad', 'user10', 'hash10', 2, '', '', '', '', '', 'Active', now(), now()]
];

export const dummyData = {
  banks,
  branches,
  contacts,
  devices,
  groups,
  meeting_actions,
  meeting_members,
  meeting_proposals,
  meetings,
  proposal_documents,
  products,
  roles,
  settings,
  users
};
