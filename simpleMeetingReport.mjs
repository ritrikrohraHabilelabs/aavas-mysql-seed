import { sequelize } from "./config.mjs";
import { generateEmbedding } from "./embedding.mjs";
import { Meeting } from "./models/index.mjs";

async function meetingRowToParagraph_1(row) {
  return `On ${row.meeting_date_time}, a meeting (ID: ${row.meeting_id}, slug: ${row.slug}) was held at ${row.location}. 
The agenda was: ${row.agenda}. Key discussion points included: ${row.discussion_points}. 
The final decision was: ${row.decisions}. Meeting status: ${row.status}. 
Contact person: ${row.contact_number}. The meeting was created by user ID ${row.created_by} on ${row.created}.`;
}

async function meetingRowToParagraph_2(row) {
  return `Meeting "${row.slug}" (ID: ${row.meeting_id}) took place on ${
    row.meeting_date_time
  } at ${row.location}. 
The main agenda was: "${row.agenda}". 
Key points discussed included: ${row.discussion_points}. 
This meeting concluded with the following decision: "${
    row.decisions
  }", marking the meeting as ${row.status.toLowerCase()}.
The meeting was organized by user ID ${
    row.created_by
  } and the primary contact was ${row.contact_number}.
It was originally scheduled on ${row.created} and last updated on ${
    row.modified
  }.`;
}

async function meetingRowToParagraph_3(row) {
  return `On ${row.meeting_date_time}, the meeting "${row.slug}" (internal ID: ${row.meeting_id}) was held at ${row.location}.
Its core agenda: "${row.agenda}". During the session, key topics such as ${row.discussion_points} were addressed.
The meeting concluded with the decision: "${row.decisions}", and was recorded with the status: ${row.status}.
Organized by user ID ${row.created_by}, with ${row.contact_number} as the main point of contact.
Originally created on ${row.created}; last modified on ${row.modified}.`;
}

async function generateSimpleReports() {
  try {
    await sequelize.authenticate();

    const meetings = await Meeting.findAll();

    for (const meeting of meetings) {
      console.log("=".repeat(80));
      const meetingResponse = await meetingRowToParagraph_1(meeting.dataValues)
      // console.log('meetingResponse >>>', meetingResponse);
      const floatEmbeddingResponse = await generateEmbedding(meetingResponse);
      console.log('floatEmbeddingResponse >>>', floatEmbeddingResponse);
      console.log("=".repeat(80));
    };
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await sequelize.close();
  }
}

generateSimpleReports();
