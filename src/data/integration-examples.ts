const STREAM_URL =
	'wss://fructus.insomnis.site/feed?format=raw&platforms=vinted,wallapop';

export const INTEGRATION_EXAMPLES = [
	{
		id: 'python',
		label: 'Python',
		language: 'python',
		dependency: 'pip install websockets',
		code: `import asyncio
from websockets.asyncio.client import connect


async def main():
    async with connect(
        "${STREAM_URL}",
        additional_headers={"Authorization": "Bearer YOUR_API_KEY"},
    ) as ws:
        async for message in ws:
            print(message)


asyncio.run(main())`,
	},
	{
		id: 'rust',
		label: 'Rust',
		language: 'rust',
		dependency:
			'cargo add futures-util && cargo add tokio --features macros,rt-multi-thread && cargo add tokio-tungstenite --features rustls-tls-webpki-roots',
		code: `use futures_util::StreamExt;
use tokio_tungstenite::{
    connect_async,
    tungstenite::{client::ClientRequestBuilder, http::Uri},
};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url: Uri = "${STREAM_URL}".parse()?;
    let request = ClientRequestBuilder::new(url)
        .with_header("Authorization", "Bearer YOUR_API_KEY");

    let (mut ws, _) = connect_async(request).await?;
    while let Some(message) = ws.next().await {
        println!("{:?}", message?);
    }

    Ok(())
}`,
	},
	{
		id: 'node',
		label: 'Node.js',
		language: 'javascript',
		dependency: 'npm install ws',
		code: `import WebSocket from "ws";

const ws = new WebSocket(
    "${STREAM_URL}",
    { headers: { Authorization: "Bearer YOUR_API_KEY" } },
);

ws.on("message", (data) => console.log(data.toString()));
ws.on("error", console.error);`,
	},
] as const;

export type IntegrationExampleId = (typeof INTEGRATION_EXAMPLES)[number]['id'];
