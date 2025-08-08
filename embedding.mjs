import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import dotenv from 'dotenv'

dotenv.config()

const client = new BedrockRuntimeClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    // sessionToken: process.env.AWS_SESSION_TOKEN
  }
});

// -inputText – Enter text to convert to an embedding.
// -normalize – (optional) Flag indicating whether or not to normalize the output embedding. Defaults to true.
// -dimensions – (optional) The number of dimensions the output embedding should have. The following values are accepted: 1024 (default), 512, 256.
// -embeddingTypes – (optional) Accepts a list containing "float", "binary", or both. Defaults to float.

// {
//   "inputText": string,
//   "dimensions": int,
//   "normalize": boolean,
//   "embeddingTypes": list
// }

// async function generateEmbedding(modelId, inputText) {
//   const body = JSON.stringify({
//     inputText: inputText,
//     dimensions: 1024,
//     normalize: true,
//     embeddingTypes: ["float"]
//   });

//   const command = new InvokeModelCommand({
//     modelId: modelId,
//     body: body,
//     accept: "application/json",
//     contentType: "application/json"
//   });

//   const response = await client.send(command);
//   return JSON.parse(new TextDecoder().decode(response.body));
// }

// async function main(inputText) {
//   const modelId = "amazon.titan-embed-text-v2:0";
// //   const inputText = `On Sat Aug 10 2024 15:00:00 GMT+0530 (India Standard Time), a meeting (ID: MOM-HYD-006, slug: slug-705) was held at Hyderabad. 
// // The agenda was: Outsourcing. Key discussion points included: Discussed vendor bids. 
// // The final decision was: Not Approved. Meeting status: Inactive. 
// // Contact person: 9123401005. The meeting was created by user ID 1002 on Thu Aug 07 2025 16:31:59 GMT+0530 (India Standard Time).`;

//   try {
//     const response = await generateEmbedding(modelId, inputText);
//     // console.log(`Response >>>: ${JSON.stringify(response.embeddingsByType)}`);
//     // console.log(`embeddingsByType >>>" ${JSON.stringify(response.embeddingsByType)}`);
//     const floatResponse = response.embeddingsByType.float;
//     console.log(`FLOAT >>>: ${floatResponse}`);
//     // console.log(`BINARY >>>: ${response.embeddingsByType.binary}`);
//     // console.log(`Input Token count >>> ${response.inputTextTokenCount}`);
//   } catch (error) {
//     console.error("A client error occurred:", error.message);
//   }
// }


async function generateEmbedding(inputText) {
  console.log('inputText >>>>', inputText);
  const modelId = "amazon.titan-embed-text-v2:0"
  const body = JSON.stringify({
    inputText: inputText,
    dimensions: 1024,
    normalize: true,
    embeddingTypes: ["float"]
  });

  const command = new InvokeModelCommand({
    modelId,
    body,
    accept: "application/json",
    contentType: "application/json"
  });

  const response = await client.send(command);
  const decodedResponse = JSON.parse(new TextDecoder().decode(response.body));
  const floatResponse = decodedResponse.embeddingsByType.float;
  // console.log("FLOAT >>>", floatResponse);
  return floatResponse;
}

export { generateEmbedding };

// Optional CLI test runner:
if (import.meta.url === `file://${process.argv[1]}`) {
  const inputText = "Hello my name is Ritrik Rohra";
  generateEmbedding(inputText)
    .then(res => console.log("RES >>>", res))
    .catch(err => console.error("A client error occurred:", err.message));
}