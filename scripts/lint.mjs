import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const files = {
  html: path.join(root, "index.html"),
  css: path.join(root, "style.css"),
  js: path.join(root, "script.js"),
  regions: path.join(root, "data", "fire-risk-regions.geojson"),
  stations: path.join(root, "data", "weather-stations.geojson"),
  scenarios: path.join(root, "data", "operational-scenarios.json"),
  directorates: path.join(root, "data", "ogm-regional-directorates.json")
};

let failed = false;

function ok(message) {
  console.log(`OK   ${message}`);
}

function fail(message) {
  failed = true;
  console.error(`FAIL ${message}`);
}

function read(file) {
  if (!fs.existsSync(file)) {
    fail(`Missing file: ${path.relative(root, file)}`);
    return "";
  }
  return fs.readFileSync(file, "utf8");
}

function parseJsonFile(file, label) {
  try {
    return JSON.parse(read(file));
  } catch (error) {
    fail(`${label} is not valid JSON: ${error.message}`);
    return null;
  }
}

const html = read(files.html);
const css = read(files.css);
const js = read(files.js);
const regions = parseJsonFile(files.regions, "fire-risk-regions.geojson");
const stations = parseJsonFile(files.stations, "weather-stations.geojson");
const scenarios = parseJsonFile(files.scenarios, "operational-scenarios.json");
const directorates = parseJsonFile(files.directorates, "ogm-regional-directorates.json");

if (
  html.includes('id="leaflet-map"') &&
  html.includes('data-layer-toggle="stations"') &&
  html.includes('id="scenario-filter"') &&
  html.includes('id="weather-source-status"')
) {
  ok("HTML includes map container, scenario controls, and live weather status");
} else {
  fail("HTML is missing the map container, scenario controls, live weather status, or layer toggle controls");
}

if (css.includes(".leaflet-map") && css.includes(".layer-toggle") && css.includes(".scenario-band")) {
  ok("CSS includes map, layer toggle, and scenario styling");
} else {
  fail("CSS is missing expected map styles");
}

try {
  new vm.Script(js, { filename: "script.js" });
  ok("JavaScript parses successfully");
} catch (error) {
  fail(`JavaScript parse error: ${error.message}`);
}

if (regions?.type === "FeatureCollection" && Array.isArray(regions.features) && regions.features.length >= 6) {
  ok("Region GeoJSON has a valid feature collection");
} else {
  fail("Region GeoJSON must be a feature collection with at least 6 features");
}

if (stations?.type === "FeatureCollection" && Array.isArray(stations.features) && stations.features.length >= 6) {
  ok("Station GeoJSON has a valid feature collection");
} else {
  fail("Station GeoJSON must be a feature collection with at least 6 features");
}

if (scenarios?.defaultScenario && Array.isArray(scenarios.scenarios) && scenarios.scenarios.length >= 1) {
  ok("Operational scenarios file is valid");
} else {
  fail("Operational scenarios file must include a default scenario and at least one scenario");
}

if (Array.isArray(directorates?.directorates) && directorates.directorates.length >= 30) {
  ok("OGM regional directorates dataset is valid");
} else {
  fail("OGM regional directorates dataset must include at least 30 entries");
}

if (
  js.includes('fetch("data/fire-risk-regions.geojson")') &&
  js.includes('fetch("data/weather-stations.geojson")') &&
  js.includes('fetch("data/operational-scenarios.json")') &&
  js.includes("https://api.open-meteo.com/v1/forecast")
) {
  ok("JavaScript loads local datasets and live weather data");
} else {
  fail("JavaScript must load region, station, scenario, and live weather datasets");
}

if (failed) {
  process.exit(1);
}

console.log("Lint completed successfully.");
