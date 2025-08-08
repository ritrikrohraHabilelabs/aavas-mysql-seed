import { sequelize } from './config.mjs';
import { Meeting } from './models/index.mjs';
import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({ region: "us-east-1" });

function meetingRowToParagraph(row) {
  return `On ${row.meeting_date_time}, a meeting (ID: ${row.meeting_id}, slug: ${row.slug}) was held at ${row.location}. 
The agenda was: ${row.agenda}. Key discussion points included: ${row.discussion_points}. 
The final decision was: ${row.decisions}. Meeting status: ${row.status}. 
Contact person: ${row.contact_number}. The meeting was created by user ID ${row.created_by} on ${row.created}.`;
}

async function generateEmbedding(inputText) {
  const body = JSON.stringify({
    inputText: inputText,
    embeddingTypes: ["binary"]
  });

  const command = new InvokeModelCommand({
    modelId: "amazon.titan-embed-text-v2:0",
    body: body,
    accept: "application/json",
    contentType: "application/json"
  });

  const response = await client.send(command);
  return JSON.parse(new TextDecoder().decode(response.body));
}

async function generateMeetingEmbeddings() {
  try {
    await sequelize.authenticate();
    
    const meetings = await Meeting.findAll();
    
    for (const meeting of meetings) {
      const text = meetingRowToParagraph(meeting.dataValues);
      console.log('='.repeat(80));
      console.log(text);
      
      const embedding = await generateEmbedding(text);
      console.log(`Embedding: ${embedding.embeddingsByType.binary.slice(0, 50)}...`);
      console.log(`Token count: ${embedding.inputTextTokenCount}`);
      console.log('='.repeat(80));
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
}

generateMeetingEmbeddings();