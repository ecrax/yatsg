#!/usr/bin/env node
const inquirer = require("inquirer");
const { writeFileSync } = require("fs");

const reactTsconfig = require("./config/create-react-app.json");
const cypressTsconfig = require("./config/cypress.json");
const denoTsconfig = require("./config/deno.json");
const docusaurusTsconfig = require("./config/docusaurus.json");
const nextTsconfig = require("./config/next.json");
const node10Tsconfig = require("./config/node10.json");
const node12Tsconfig = require("./config/node12.json");
const node14Tsconfig = require("./config/node14.json");
const node16Tsconfig = require("./config/node16.json");
const nuxtTsconfig = require("./config/nuxt.json");
const reactNativeTsconfig = require("./config/react-native.json");
const recommendedTsconfig = require("./config/recommended.json");
const svelteTsconfig = require("./config/svelte.json");

const stringify = (string) => {
  return JSON.stringify(string, null, 2);
};

const tsconfigs = {
  react: stringify(reactTsconfig),
  cypress: stringify(cypressTsconfig),
  deno: stringify(denoTsconfig),
  docusaurus: stringify(docusaurusTsconfig),
  next: stringify(nextTsconfig),
  node10: stringify(node10Tsconfig),
  node12: stringify(node12Tsconfig),
  node14: stringify(node14Tsconfig),
  node16: stringify(node16Tsconfig),
  nuxt: stringify(nuxtTsconfig),
  reactNative: stringify(reactNativeTsconfig),
  recommended: stringify(recommendedTsconfig),
  svelte: stringify(svelteTsconfig),
};

inquirer
  .prompt([
    {
      type: "list",
      message: "Pick the framework you are using:",
      name: "framework",
      choices: [
        "Recommended ✨",
        "react",
        "cypress",
        "deno",
        "docusaurus",
        "next",
        "node 10",
        "node 12",
        "node 14",
        "node 16",
        "nuxt",
        "react-native",
        "svelte",
      ],
      loop: false,
    },
  ])
  .then(({ framework }) => {
    let tsconfigToWrite = "";

    switch (framework) {
      case "react":
        tsconfigToWrite = tsconfigs.react;
        break;
      case "cypress":
        tsconfigToWrite = tsconfigs.cypress;
        break;
      case "deno":
        tsconfigToWrite = tsconfigs.deno;
        break;
      case "docusaurus":
        tsconfigToWrite = tsconfigs.docusaurus;
        break;
      case "next":
        tsconfigToWrite = tsconfigs.next;
        break;
      case "node 10":
        tsconfigToWrite = tsconfigs.node10;
        break;
      case "node 12":
        tsconfigToWrite = tsconfigs.node12;
        break;
      case "node 14":
        tsconfigToWrite = tsconfigs.node14;
        break;
      case "node 16":
        tsconfigToWrite = tsconfigs.node16;
        break;
      case "nuxt":
        tsconfigToWrite = tsconfigs.nuxt;
        break;
      case "react-native":
        tsconfigToWrite = tsconfigs.reactNative;
        break;
      case "Recommended ✨":
        tsconfigToWrite = tsconfigs.recommended;
        break;
      case "svelte":
        tsconfigToWrite = tsconfigs.svelte;
        break;

      default:
        break;
    }

    const cwd = process.cwd();
    writeFileSync(cwd + "/tsconfig.json", tsconfigToWrite);
    console.log("\ntsonfig.json successfully created");
  });
