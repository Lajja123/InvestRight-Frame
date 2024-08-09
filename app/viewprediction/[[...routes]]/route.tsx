/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
import { devtools } from "frog/dev";
import { handle } from "frog/next";
import { serveStatic } from "frog/serve-static";

const app = new Frog({
  assetsPath: "/",
  basePath: "/viewprediction",
  title: "InvestRight",
});

app.frame("/", (c) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const background = `${baseUrl}/bg.png`;
  return c.res({
    image: (
      <div
        style={{
          alignItems: "center",
          backgroundImage: `url('${background}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100%",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
          }}
        >
          Frame1
        </div>
      </div>
    ),
    intents: [<Button action="/viewDetails">View</Button>],
  });
});

app.frame("/viewdetails", (c) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const background = `${baseUrl}/bg.png`;
  return c.res({
    image: (
      <div
        style={{
          alignItems: "center",
          backgroundImage: `url('${background}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100%",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
          }}
        >
          Frame2
        </div>
      </div>
    ),
    intents: [
      <Button action="/viewstate">View Stats</Button>,
      <Button action="/">Back</Button>,
    ],
  });
});

app.frame("/viewstate", (c) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const background = `${baseUrl}/bg.png`;
  return c.res({
    image: (
      <div
        style={{
          alignItems: "center",
          backgroundImage: `url('${background}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100%",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
          }}
        >
          Frame3
        </div>
      </div>
    ),
    intents: [
      <Button action="/viewprediction">View Stats</Button>,
      <Button action="/viewdetails">Back</Button>,
    ],
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
