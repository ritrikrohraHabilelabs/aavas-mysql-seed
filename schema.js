// schema.js
export const allTableSchemas = [
    // Banks
    `CREATE TABLE IF NOT EXISTS banks (
        id INT PRIMARY KEY,
        slug VARCHAR(50),
        name VARCHAR(255),
        head_office_city VARCHAR(255),
        img_path VARCHAR(255),
        status VARCHAR(50),
        created DATETIME,
        modified DATETIME
    );`,
    // Branches
    `CREATE TABLE IF NOT EXISTS branches (
        id INT PRIMARY KEY,
        slug VARCHAR(50),
        bank_id INT,
        name VARCHAR(255),
        address TEXT,
        status VARCHAR(50),
        created DATETIME,
        modified DATETIME,
        FOREIGN KEY (bank_id) REFERENCES banks(id)
    );`,
    // Contacts
    `CREATE TABLE IF NOT EXISTS contacts (
        id INT PRIMARY KEY,
        slug VARCHAR(50),
        name VARCHAR(255),
        email VARCHAR(255),
        user_type VARCHAR(255),
        mobile VARCHAR(15),
        address TEXT,
        designation VARCHAR(255),
        department VARCHAR(255),
        status VARCHAR(50),
        created DATETIME,
        modified DATETIME,
        landlineno VARCHAR(20),
        bank_name VARCHAR(255)
    );`,
    // Devices
    `CREATE TABLE IF NOT EXISTS devices (
        id INT PRIMARY KEY,
        device_id VARCHAR(64),
        device_type VARCHAR(50),
        reg_id VARCHAR(255),
        user_id INT,
        status VARCHAR(20)
    );`,
    // Groups
    `CREATE TABLE IF NOT EXISTS groups (
        id INT PRIMARY KEY,
        user_id INT,
        title VARCHAR(255),
        status INT,
        supper INT,
        created DATETIME,
        modified DATETIME
    );`,
    // Meeting_Actions
    `CREATE TABLE IF NOT EXISTS meeting_actions (
        id INT PRIMARY KEY,
        slug VARCHAR(50),
        action_id INT,
        meeting_id INT,
        contact_id INT,
        name VARCHAR(255),
        due_date DATE,
        meeting_decisions TEXT,
        status VARCHAR(50),
        created_by INT,
        created DATETIME
    );`,
    // Meeting_Members
    `CREATE TABLE IF NOT EXISTS meeting_members (
        id INT PRIMARY KEY,
        meeting_id INT,
        contact_id INT
    );`,
    // Meeting_Proposals
    `CREATE TABLE IF NOT EXISTS meeting_proposals (
        id INT PRIMARY KEY,
        slug VARCHAR(50),
        proposal_id VARCHAR(50),
        meeting_id INT,
        bank_id INT,
        sector VARCHAR(255),
        roi FLOAT,
        processing_fee FLOAT,
        margin FLOAT,
        guarantee VARCHAR(50),
        servicing_fees FLOAT,
        product_id INT,
        stage VARCHAR(255),
        status VARCHAR(50),
        created_by INT,
        created DATETIME,
        modified DATETIME
    );`,
    // Meetings
    `CREATE TABLE IF NOT EXISTS meetings (
        id INT PRIMARY KEY,
        slug VARCHAR(50),
        meeting_id VARCHAR(255),
        bank_id INT,
        branch_id INT,
        contact_number VARCHAR(50),
        meeting_date_time DATETIME,
        location VARCHAR(255),
        agenda TEXT,
        decisions TEXT,
        status VARCHAR(50),
        created_by INT,
        created DATETIME,
        modified DATETIME,
        discussion_points TEXT
    );`,
    // Proposal_Documents
    `CREATE TABLE IF NOT EXISTS proposal_documents (
        id INT PRIMARY KEY,
        proposal_id VARCHAR(50),
        doc_path VARCHAR(255),
        created_by INT,
        created DATETIME,
        modified DATETIME
    );`,
    // Products
    `CREATE TABLE IF NOT EXISTS products (
        id INT PRIMARY KEY,
        slug VARCHAR(50),
        name VARCHAR(255),
        status VARCHAR(50),
        created DATETIME,
        modified DATETIME
    );`,
    // Roles
    `CREATE TABLE IF NOT EXISTS roles (
        id INT PRIMARY KEY,
        slug VARCHAR(50),
        name VARCHAR(255)
    );`,
    // Settings
    `CREATE TABLE IF NOT EXISTS settings (
        id INT PRIMARY KEY,
        title VARCHAR(255),
        owner VARCHAR(255),
        address TEXT,
        email VARCHAR(255),
        email_2 VARCHAR(255),
        mobile VARCHAR(20),
        phone VARCHAR(20),
        logo VARCHAR(255),
        meta_title VARCHAR(255),
        meta_keyword VARCHAR(255),
        meta_description TEXT,
        fb_link VARCHAR(255),
        twitter_link VARCHAR(255),
        in_link VARCHAR(255),
        gpluse_link VARCHAR(255),
        youtube_link VARCHAR(255),
        config_google_analytics VARCHAR(255),
        config_mail_protocol VARCHAR(50),
        config_smtp_port VARCHAR(10),
        config_smtp_host VARCHAR(255),
        config_smtp_username VARCHAR(255),
        config_smtp_password VARCHAR(255),
        config_smtp_timeout VARCHAR(10),
        default_status INT,
        status INT,
        created DATETIME,
        modified DATETIME
    );`,
    // Users
    `CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY,
        slug VARCHAR(50),
        name VARCHAR(255),
        email VARCHAR(255),
        contact VARCHAR(20),
        address TEXT,
        username VARCHAR(255),
        password VARCHAR(255),
        role_id INT,
        image_path VARCHAR(255),
        new_password_token VARCHAR(255),
        forgot_password_token VARCHAR(255),
        current_lat VARCHAR(50),
        current_long VARCHAR(50),
        status VARCHAR(50),
        created DATETIME,
        modified DATETIME
    );`
];
