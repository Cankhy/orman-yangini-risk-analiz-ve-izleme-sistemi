const regionData = [
  {
    id: "izmir-manisa",
    name: "Bergama Orman İşletme Müdürlüğü",
    shortName: "Bergama OİM",
    province: "İzmir",
    latitude: 39.12,
    longitude: 27.18,
    macroRegion: "Ege",
    status: "active-watch",
    riskLevel: "critical",
    riskScore: 92,
    threat: "Kuru bitki örtüsü ve şiddetli rüzgâr",
    humidity: 18,
    wind: 37,
    temperature: 39,
    slope: 24,
    watchZones: 12,
    responseReadiness: "6 müdahale ekibi hazır",
    deployment: { teams: 6, tankers: 8, helicopters: 2, towers: 5, reservoirs: 4 },
    actions: [
      "Enerji nakil hatları ve orman yol koridorları için anlık saha devriyesi planla.",
      "Kritik vadilerde mobil su ikmal noktalarını aktif konuma al.",
      "Rüzgâr yükselişi beklenen saat aralıklarında insansız hava aracı taramasını artır."
    ],
    summary: "Günün en yüksek operasyonel stresi bu koridorda görülüyor.",
    cardClass: "critical-tone",
    span: "span-6",
    districtCoverage: "Bergama, Dikili, Kınık ve çevre şeflik aksları",
    chiefdomCount: 14,
    areaHectares: "Kuzey Ege sahasında geniş sorumluluk alanı",
    forestShare: "Yüksek maki ve kara çam karışımı",
    sourceLabel: "OGM İzmir OBM - Bergama OİM"
  },
  {
    id: "mugla-koycegiz",
    name: "Köyceğiz Orman İşletme Müdürlüğü",
    shortName: "Köyceğiz OİM",
    province: "Muğla",
    latitude: 36.84,
    longitude: 28.75,
    macroRegion: "Akdeniz",
    status: "ready-response",
    riskLevel: "critical",
    riskScore: 88,
    threat: "Düşük nem ve yoğun orman dokusu",
    humidity: 21,
    wind: 29,
    temperature: 37,
    slope: 33,
    watchZones: 10,
    responseReadiness: "5 ekip ve 2 helikopter hazır",
    deployment: { teams: 5, tankers: 6, helicopters: 2, towers: 4, reservoirs: 3 },
    actions: [
      "Turistik hareketliliğin yoğun olduğu giriş noktalarında uyarıcı yönlendirme kullan.",
      "Saha ekiplerini gün batımı öncesi ikinci kontrol turuna çıkar.",
      "Kırsal yerleşim ceplerinde su tankeri dağılımını genişlet."
    ],
    summary: "Kıyıya yakın yoğun orman dokusu nedeniyle müdahale penceresi daralıyor.",
    cardClass: "critical-tone",
    span: "span-4",
    districtCoverage: "Köyceğiz merkezli kıyısal ve iç kesim şeflikleri",
    chiefdomCount: 9,
    areaHectares: "Köyceğiz ilçe sınırlarında yoğun sorumluluk alanı",
    forestShare: "Yoğun kızılçam ve hassas koruma dokusu",
    sourceLabel: "OGM Muğla OBM - Köyceğiz OİM"
  },
  {
    id: "antalya-serik",
    name: "Serik Orman İşletme Müdürlüğü",
    shortName: "Serik OİM",
    province: "Antalya",
    latitude: 36.92,
    longitude: 31.1,
    macroRegion: "Akdeniz",
    status: "active-watch",
    riskLevel: "high",
    riskScore: 79,
    threat: "Yüksek sıcaklık ve insan kaynaklı baskı",
    humidity: 25,
    wind: 23,
    temperature: 38,
    slope: 17,
    watchZones: 8,
    responseReadiness: "4 ekip sahaya dağıtıldı",
    deployment: { teams: 4, tankers: 5, helicopters: 1, towers: 3, reservoirs: 2 },
    actions: [
      "Piknik ve rekreasyon alanlarında denetim yoğunluğunu artır.",
      "Ana ulaşım koridorlarında termal kamera izlemeyi açık tut.",
      "Oteller ve yerel yönetimlerle hızlı ihbar iletişim hattını test et."
    ],
    summary: "Yüksek insan hareketliliği nedeniyle tetiklenme olasılığı artıyor.",
    cardClass: "high-tone",
    span: "span-5",
    districtCoverage: "Serik, Gebiz ve bağlı orman şeflikleri",
    chiefdomCount: 10,
    areaHectares: "124.227 ha",
    forestShare: "%51 ormanlık alan",
    sourceLabel: "OGM Antalya OBM - Serik OİM"
  },
  {
    id: "canakkale-kazdagi",
    name: "Yenice Orman İşletme Müdürlüğü",
    shortName: "Yenice OİM",
    province: "Çanakkale",
    latitude: 39.76,
    longitude: 27.16,
    macroRegion: "Marmara",
    status: "routine",
    riskLevel: "medium",
    riskScore: 61,
    threat: "Değişen rüzgâr yönü",
    humidity: 34,
    wind: 19,
    temperature: 31,
    slope: 20,
    watchZones: 5,
    responseReadiness: "Rutin devriye sürüyor",
    deployment: { teams: 3, tankers: 3, helicopters: 0, towers: 3, reservoirs: 2 },
    actions: [
      "Akşam saatlerinde rüzgâr yönü değişimini istasyon verileriyle yeniden değerlendir.",
      "Piknik akslarında ateş ve cam kırığı farkındalığı için saha ekiplerine görev ata.",
      "Zirve hatlarında gözlem noktalarını vardiya değişimleriyle canlı tut."
    ],
    summary: "Hava koşulları değişken; orta riskli ama hızla yükselebilir.",
    cardClass: "medium-tone",
    span: "span-3",
    districtCoverage: "Yenice ilçesi ve bağlı dağlık orman sahaları",
    chiefdomCount: 8,
    areaHectares: "91.946,9 ha",
    forestShare: "%61,7 ormanlık alan",
    sourceLabel: "OGM Çanakkale OBM - Yenice OİM"
  },
  {
    id: "mersin-silifke",
    name: "Silifke Orman İşletme Müdürlüğü",
    shortName: "Silifke OİM",
    province: "Mersin",
    latitude: 36.38,
    longitude: 33.96,
    macroRegion: "Akdeniz",
    status: "ready-response",
    riskLevel: "high",
    riskScore: 74,
    threat: "Rüzgâr koridorları ve kuru ot yükleri",
    humidity: 27,
    wind: 26,
    temperature: 35,
    slope: 28,
    watchZones: 7,
    responseReadiness: "3 ekip ve 1 su tankeri ön konumda",
    deployment: { teams: 3, tankers: 4, helicopters: 1, towers: 2, reservoirs: 3 },
    actions: [
      "Köy geçişlerinde erken ihbar afişlerini ve anons mekanizmasını devreye al.",
      "Orman içi yol kenarlarında kuru ot temizliğini hızlandır.",
      "Acil durum toplanma noktalarının ulaşılabilirliğini saha kontrolüne aç."
    ],
    summary: "Topografya alev yayılımını hızlandırabilecek bir yapı oluşturuyor.",
    cardClass: "high-tone",
    span: "span-4",
    districtCoverage: "Silifke kıyıdan Toros geçişine uzanan hat",
    chiefdomCount: 7,
    areaHectares: "Kıyı ve dağ geçişi karakterli geniş saha",
    forestShare: "Akdeniz iklimine açık orman ve açıklık karışımı",
    sourceLabel: "OGM Mersin OBM - Silifke OİM"
  },
  {
    id: "kahramanmaras-goksun",
    name: "Göksun Orman İşletme Müdürlüğü",
    shortName: "Göksun OİM",
    province: "Kahramanmaraş",
    latitude: 38.02,
    longitude: 36.5,
    macroRegion: "İç Anadolu Geçişi",
    status: "routine",
    riskLevel: "medium",
    riskScore: 57,
    threat: "Yerel sıcaklık artışı",
    humidity: 38,
    wind: 14,
    temperature: 30,
    slope: 31,
    watchZones: 4,
    responseReadiness: "Rutin takip ve vardiya planlaması aktif",
    deployment: { teams: 2, tankers: 3, helicopters: 0, towers: 2, reservoirs: 2 },
    actions: [
      "Rakım farkı yüksek alanlarda öğlen sonrası termal takibi yoğunlaştır.",
      "Yangın emniyet şeridi bakım ihtiyacını bölme bazında kayda al.",
      "Yerel ekiplerle telsiz denemesini akşam vardiyası öncesi tekrar et."
    ],
    summary: "Sıcaklık dalgası devam ederse yüksek risk sınıfına çıkabilir.",
    cardClass: "medium-tone",
    span: "span-4",
    districtCoverage: "Göksun, Afşin, Elbistan, Nurhak ve Ekinözü",
    chiefdomCount: 12,
    areaHectares: "716.464,2 ha",
    forestShare: "%24 ormanlık alan",
    sourceLabel: "OGM Kahramanmaraş OBM - Göksun OİM"
  }
];

const referenceIncidents = [
  {
    title: "Muğla kıyı koridoru · Temmuz analizi",
    description: "Kuvvetli rüzgâr ve düşük nem kombinasyonunun müdahale penceresini nasıl daralttığını gösteren referans vaka.",
    takeaway: "Erken konumlanan ekipler ilk 20 dakikadaki yayılımı belirgin biçimde düşürüyor."
  },
  {
    title: "İzmir kuzey kuşağı · Ağustos sıcaklık dalgası",
    description: "Yüksek sıcaklık altında enerji nakil hatları ve yol koridorlarının ikincil risk yaratabildiği saha özeti.",
    takeaway: "Termal tarama ile altyapı izleme birlikte planlanmalı."
  },
  {
    title: "Kazdağı orman hattı · Geçiş mevsimi olayı",
    description: "Orta riskli görünen ama rüzgâr yönü değişimiyle hızla yükselen bir yangın davranışı senaryosu.",
    takeaway: "Rutin görünen alanlarda bile akşam senaryoları için gözlem açık tutulmalı."
  }
];

const dayLabels = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
const trendOffsets = [-14, -10, -6, -1, 4, 8, 12];

const regionFilter = document.querySelector("#region-filter");
const scenarioFilter = document.querySelector("#scenario-filter");
const riskFilter = document.querySelector("#risk-filter");
const statusFilter = document.querySelector("#status-filter");
const mapStage = document.querySelector("#map-stage");
const priorityList = document.querySelector("#priority-list");
const insightCards = document.querySelector("#insight-cards");
const bulletinCards = document.querySelector("#bulletin-cards");
const incidentList = document.querySelector("#incident-list");
const executiveNote = document.querySelector("#executive-note");
const directorateList = document.querySelector("#directorate-list");
const trendChart = document.querySelector("#trend-chart");
const rankingTable = document.querySelector("#ranking-table");
const deploymentGrid = document.querySelector("#deployment-grid");
const deploymentNotes = document.querySelector("#deployment-notes");
const eventLog = document.querySelector("#event-log");
const alarmList = document.querySelector("#alarm-list");
const reportPreview = document.querySelector("#report-preview");
const mapOverlayGrid = document.querySelector("#map-overlay-grid");

const detailTitle = document.querySelector("#detail-title");
const detailStatus = document.querySelector("#detail-status");
const detailScore = document.querySelector("#detail-score");
const detailThreat = document.querySelector("#detail-threat");
const detailStats = document.querySelector("#detail-stats");
const detailActions = document.querySelector("#detail-actions");

const criticalCount = document.querySelector("#critical-count");
const watchCount = document.querySelector("#watch-count");
const avgRisk = document.querySelector("#avg-risk");
const heroScore = document.querySelector("#hero-score");
const heroSummary = document.querySelector("#hero-summary");
const heroList = document.querySelector("#hero-list");
const scenarioTitle = document.querySelector("#scenario-title");
const scenarioSummary = document.querySelector("#scenario-summary");
const scenarioScore = document.querySelector("#scenario-score");
const scenarioTime = document.querySelector("#scenario-time");
const scenarioAlerts = document.querySelector("#scenario-alerts");
const weatherSourceStatus = document.querySelector("#weather-source-status");

const nationalRiskValue = document.querySelector("#national-risk-value");
const nationalRiskNote = document.querySelector("#national-risk-note");
const responseCapacityValue = document.querySelector("#response-capacity-value");
const responseCapacityNote = document.querySelector("#response-capacity-note");
const dayChangeValue = document.querySelector("#day-change-value");
const dayChangeNote = document.querySelector("#day-change-note");
const focusRegionValue = document.querySelector("#focus-region-value");
const focusRegionNote = document.querySelector("#focus-region-note");

const downloadReportButton = document.querySelector("#download-report");
const printReportButton = document.querySelector("#print-report");

const statusLabels = {
  "active-watch": "Aktif izleme",
  "ready-response": "Müdahale hazır",
  routine: "Rutin takip"
};

const riskLabels = {
  critical: "Kritik",
  high: "Yüksek",
  medium: "Orta"
};

const riskColors = {
  critical: "#d14b2d",
  high: "#eb8d2f",
  medium: "#c3a048"
};

const fallbackGeoJson = {
  type: "FeatureCollection",
  features: [
    { type: "Feature", properties: { id: "izmir-manisa" }, geometry: { type: "Polygon", coordinates: [[[26.2, 38.25], [27.85, 38.25], [27.85, 39.35], [26.2, 39.35], [26.2, 38.25]]] } },
    { type: "Feature", properties: { id: "mugla-koycegiz" }, geometry: { type: "Polygon", coordinates: [[[28.2, 36.45], [29.6, 36.45], [29.6, 37.3], [28.2, 37.3], [28.2, 36.45]]] } },
    { type: "Feature", properties: { id: "antalya-serik" }, geometry: { type: "Polygon", coordinates: [[[30.45, 36.65], [31.7, 36.65], [31.7, 37.45], [30.45, 37.45], [30.45, 36.65]]] } },
    { type: "Feature", properties: { id: "canakkale-kazdagi" }, geometry: { type: "Polygon", coordinates: [[[26.7, 39.5], [27.85, 39.5], [27.85, 40.35], [26.7, 40.35], [26.7, 39.5]]] } },
    { type: "Feature", properties: { id: "mersin-silifke" }, geometry: { type: "Polygon", coordinates: [[[33.75, 36.05], [34.85, 36.05], [34.85, 36.95], [33.75, 36.95], [33.75, 36.05]]] } },
    { type: "Feature", properties: { id: "kahramanmaras-goksun" }, geometry: { type: "Polygon", coordinates: [[[35.9, 37.7], [37.05, 37.7], [37.05, 38.6], [35.9, 38.6], [35.9, 37.7]]] } }
  ]
};

const fallbackStationGeoJson = {
  type: "FeatureCollection",
  features: [
    { type: "Feature", properties: { id: "stm-izmir-north", name: "Yamanlar Gözlem İstasyonu", regionId: "izmir-manisa", type: "Termal ve nem" }, geometry: { type: "Point", coordinates: [27.18, 38.56] } },
    { type: "Feature", properties: { id: "stm-manisa-east", name: "Spil Dağı Gözlem İstasyonu", regionId: "izmir-manisa", type: "Rüzgâr ve görüş" }, geometry: { type: "Point", coordinates: [27.51, 38.58] } },
    { type: "Feature", properties: { id: "stm-mugla-coast", name: "Köyceğiz Kıyı İstasyonu", regionId: "mugla-koycegiz", type: "Nem ve sıcaklık" }, geometry: { type: "Point", coordinates: [28.72, 36.98] } },
    { type: "Feature", properties: { id: "stm-antalya-east", name: "Serik Ova İstasyonu", regionId: "antalya-serik", type: "Rüzgâr ve termal" }, geometry: { type: "Point", coordinates: [31.08, 36.92] } },
    { type: "Feature", properties: { id: "stm-canakkale-ridge", name: "Kazdağı Sırt İstasyonu", regionId: "canakkale-kazdagi", type: "Rüzgâr ve görüş" }, geometry: { type: "Point", coordinates: [27.04, 39.75] } },
    { type: "Feature", properties: { id: "stm-mersin-pass", name: "Silifke Geçit İstasyonu", regionId: "mersin-silifke", type: "Termal ve nem" }, geometry: { type: "Point", coordinates: [34.01, 36.42] } },
    { type: "Feature", properties: { id: "stm-kahramanmaras-south", name: "Göksun Vadi İstasyonu", regionId: "kahramanmaras-goksun", type: "Sıcaklık ve basınç" }, geometry: { type: "Point", coordinates: [36.49, 38.04] } },
    { type: "Feature", properties: { id: "stm-akdeniz-link", name: "Akdeniz Orman Ağ İstasyonu", regionId: "mugla-koycegiz", type: "Kamera ve ihbar" }, geometry: { type: "Point", coordinates: [29.15, 36.76] } }
  ]
};

let activeId = regionData[0].id;
let map;
let geoJsonLayer;
let stationLayer;
let directorateLayer;
let regionGeoJsonData = null;
let stationGeoJsonData = null;
let scenarioData = null;
let directorateData = null;
let activeScenarioId = "midday";
let liveWeatherByRegion = {};
let weatherFetchMeta = { state: "loading", updatedAt: null, source: "Open-Meteo", successCount: 0 };
const layerState = { regions: true, stations: true, directorates: true };

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function deriveRiskLevel(score) {
  if (score >= 85) return "critical";
  if (score >= 68) return "high";
  return "medium";
}

function describeWeatherCode(code) {
  const labels = {
    0: "Açık hava",
    1: "Çoğu açık",
    2: "Parçalı bulutlu",
    3: "Bulutlu",
    45: "Sis",
    48: "Kırağılı sis",
    51: "Hafif çiseleme",
    53: "Orta çiseleme",
    55: "Yoğun çiseleme",
    61: "Hafif yağmur",
    63: "Yağmur",
    65: "Kuvvetli yağmur",
    80: "Sağanak",
    95: "Gök gürültülü"
  };
  return labels[code] ?? "Değişken koşullar";
}

function computeLiveRiskAdjustment(weather) {
  if (!weather) return 0;
  let adjustment = 0;
  adjustment += clamp((weather.temperature - 30) * 1.5, -6, 14);
  adjustment += clamp((26 - weather.humidity) * 0.7, -8, 8);
  adjustment += clamp((weather.wind - 20) * 0.9, -6, 10);
  adjustment += clamp((weather.gust - 30) * 0.35, -3, 6);
  return Math.round(adjustment);
}

function populateFilters() {
  const regions = ["all", ...new Set(regionData.map((item) => item.macroRegion))];
  regionFilter.innerHTML = regions.map((region) => `<option value="${region}">${region === "all" ? "Tüm bölgeler" : region}</option>`).join("");
}

function populateScenarioFilter() {
  const scenarios = scenarioData?.scenarios ?? [];
  scenarioFilter.innerHTML = scenarios.map((scenario) => `<option value="${scenario.id}">${scenario.label}</option>`).join("");
  scenarioFilter.value = activeScenarioId;
}

function getActiveScenario() {
  return scenarioData?.scenarios.find((scenario) => scenario.id === activeScenarioId) ?? null;
}

function getScenarioAdjustedRegion(item) {
  const scenario = getActiveScenario();
  const override = scenario?.overrides?.[item.id] ?? {};
  const liveWeather = liveWeatherByRegion[item.id];
  const baseRegion = { ...item, ...override };
  const liveRiskScore = clamp((baseRegion.riskScore ?? item.riskScore) + computeLiveRiskAdjustment(liveWeather), 35, 98);
  const liveThreat = liveWeather ? `${baseRegion.threat}. Anlık durum: ${describeWeatherCode(liveWeather.weatherCode).toLowerCase()}` : baseRegion.threat;
  return {
    ...baseRegion,
    temperature: liveWeather?.temperature ?? baseRegion.temperature,
    humidity: liveWeather?.humidity ?? baseRegion.humidity,
    wind: liveWeather?.wind ?? baseRegion.wind,
    gust: liveWeather?.gust ?? baseRegion.wind,
    riskScore: liveWeather ? liveRiskScore : baseRegion.riskScore,
    riskLevel: liveWeather ? deriveRiskLevel(liveRiskScore) : baseRegion.riskLevel,
    threat: liveThreat,
    weatherLabel: liveWeather ? describeWeatherCode(liveWeather.weatherCode) : "Senaryo verisi",
    weatherSource: liveWeather ? "Canlı meteoroloji" : "Senaryo verisi"
  };
}

function getFilteredRegions() {
  return regionData
    .map((item) => getScenarioAdjustedRegion(item))
    .filter((item) => {
      const regionOk = regionFilter.value === "all" || item.macroRegion === regionFilter.value;
      const riskOk = riskFilter.value === "all" || item.riskLevel === riskFilter.value;
      const statusOk = statusFilter.value === "all" || item.status === statusFilter.value;
      return regionOk && riskOk && statusOk;
    });
}

function getRegionById(id) {
  const item = regionData.find((region) => region.id === id);
  return item ? getScenarioAdjustedRegion(item) : undefined;
}

function ensureActiveRegion(filtered) {
  if (!filtered.some((item) => item.id === activeId)) {
    activeId = filtered[0]?.id ?? regionData[0].id;
  }
}

function getTopRegions(count = 3) {
  return getFilteredRegions().slice().sort((a, b) => b.riskScore - a.riskScore).slice(0, count);
}

function getAverageRisk(filtered = getFilteredRegions()) {
  if (!filtered.length) return 0;
  return Math.round(filtered.reduce((sum, item) => sum + item.riskScore, 0) / filtered.length);
}

function getNationalSummary(filtered = getFilteredRegions()) {
  const avg = getAverageRisk(filtered);
  const top = filtered.slice().sort((a, b) => b.riskScore - a.riskScore)[0];
  const deployment = filtered.reduce((acc, item) => {
    acc.teams += item.deployment.teams;
    acc.tankers += item.deployment.tankers;
    acc.helicopters += item.deployment.helicopters;
    acc.towers += item.deployment.towers;
    return acc;
  }, { teams: 0, tankers: 0, helicopters: 0, towers: 0 });
  return { avg, top, deployment };
}

function createTrendSeries(region) {
  return trendOffsets.map((offset, index) => ({
    label: dayLabels[index],
    value: clamp(region.riskScore + offset + ((region.wind + region.temperature) % 5) - (index % 2 ? 1 : 0), 32, 98)
  }));
}

function createEventLog(filtered) {
  const scenario = getActiveScenario();
  const top = filtered.slice().sort((a, b) => b.riskScore - a.riskScore);
  return [
    top[0] && { time: "08:10", title: `${top[0].shortName} için ön konum emri`, description: `${top[0].responseReadiness}. ${top[0].districtCoverage} için saha konuşlanması güçlendirildi.` },
    scenario && { time: "10:40", title: `${scenario.label} senaryosu aktif edildi`, description: scenario.alerts[0] },
    top[1] && { time: "12:15", title: `${top[1].shortName} için meteoroloji teyidi`, description: `${top[1].weatherSource} verisi ${top[1].weatherLabel.toLowerCase()} koşulunu işaret ediyor.` },
    top[2] && { time: "14:05", title: `${top[2].shortName} lojistik kontrolü`, description: `${top[2].deployment.tankers} tanker ve ${top[2].deployment.teams} ekibin konuşlanması güncellendi.` }
  ].filter(Boolean);
}

function createAlarmHistory(filtered) {
  return filtered
    .slice()
    .sort((a, b) => b.riskScore - a.riskScore)
    .slice(0, 5)
    .map((item, index) => ({
      time: `${String(9 + index * 2).padStart(2, "0")}:20`,
      level: item.riskLevel,
      title: `${item.shortName} alarm eşiği güncellendi`,
      description: `${item.riskScore}/100 risk skoru ile ${riskLabels[item.riskLevel].toLowerCase()} alarm seviyesinde.`
    }));
}

function getReportText() {
  const filtered = getFilteredRegions();
  const scenario = getActiveScenario();
  const top = getTopRegions(3);
  const deployment = getNationalSummary(filtered).deployment;
  return [
    "Orman Yangını Risk Analiz ve İzleme Sistemi",
    "",
    `Senaryo: ${scenario?.label ?? "-"}`,
    `Zaman aralığı: ${scenario?.timeRange ?? "-"}`,
    `Ulusal ortalama risk: ${getAverageRisk(filtered)}/100`,
    "",
    "Öncelikli alanlar:",
    ...top.map((item, index) => `${index + 1}. ${item.name} - ${item.riskScore}/100 - ${item.threat}`),
    "",
    "Konuşlanma özeti:",
    `Ekip: ${deployment.teams}`,
    `Tanker: ${deployment.tankers}`,
    `Helikopter: ${deployment.helicopters}`,
    `Gözetleme kulesi: ${deployment.towers}`,
    "",
    "Yönetici notu:",
    top[0] ? `${top[0].name} bugün ana odak alanı olarak değerlendirilmelidir.` : "Odak alanı bulunamadı."
  ].join("\n");
}

function renderMapOverlay() {
  const filtered = getFilteredRegions();
  const top = getTopRegions(1)[0];
  const avg = getAverageRisk(filtered);
  const stationCount = stationGeoJsonData?.features?.filter((feature) => filtered.some((item) => item.id === feature.properties.regionId)).length ?? 0;
  mapOverlayGrid.innerHTML = `
    <article class="map-overlay-card">
      <span class="mini-label">Harita odağı</span>
      <strong>${top ? top.shortName : "--"}</strong>
      <p>${top ? top.threat : "Odak alanı bekleniyor."}</p>
    </article>
    <article class="map-overlay-card">
      <span class="mini-label">Canlı kapsam</span>
      <strong>${filtered.length} saha</strong>
      <p>${stationCount} gözlem istasyonu eş zamanlı izleniyor.</p>
    </article>
    <article class="map-overlay-card">
      <span class="mini-label">Ulusal ortalama</span>
      <strong>${avg}/100</strong>
      <p>Seçili katmanlarda genel yangın baskısı bu seviyede.</p>
    </article>`;
}

function renderMapCards() {
  const filtered = getFilteredRegions();
  ensureActiveRegion(filtered);
  mapStage.innerHTML = filtered.length
    ? filtered.map((item) => `
        <article class="map-card ${item.cardClass} ${item.span} ${item.id === activeId ? "is-active" : ""}" data-id="${item.id}">
          <small>${item.macroRegion}</small>
          <strong>${item.name}</strong>
          <p>${item.summary}</p>
          <small>${statusLabels[item.status]} · Risk ${item.riskScore}</small>
        </article>`).join("")
    : `<div class="priority-item span-6"><div><strong>Sonuç bulunamadı</strong><span>Filtreleri değiştirerek başka risk profillerini inceleyebilirsin.</span></div></div>`;

  mapStage.querySelectorAll(".map-card").forEach((card) => {
    card.addEventListener("click", () => {
      activeId = card.dataset.id;
      renderAll();
    });
  });
}

function renderDetail() {
  const selected = getRegionById(activeId) ?? regionData[0];
  detailTitle.textContent = selected.name;
  detailStatus.textContent = `${riskLabels[selected.riskLevel]} risk · ${statusLabels[selected.status]}`;
  detailScore.textContent = selected.riskScore;
  detailThreat.textContent = selected.threat;
  detailStats.innerHTML = `
    <article><p class="mini-label">Sorumlu alan</p><span>${selected.areaHectares}</span></article>
    <article><p class="mini-label">Orman profili</p><span>${selected.forestShare}</span></article>
    <article><p class="mini-label">Nem</p><span>%${selected.humidity}</span></article>
    <article><p class="mini-label">Rüzgâr</p><span>${selected.wind} km/sa</span></article>
    <article><p class="mini-label">Esinti</p><span>${selected.gust ?? selected.wind} km/sa</span></article>
    <article><p class="mini-label">Sıcaklık</p><span>${selected.temperature}°C</span></article>
    <article><p class="mini-label">İzleme noktası</p><span>${selected.watchZones}</span></article>
    <article><p class="mini-label">Şeflik sayısı</p><span>${selected.chiefdomCount}</span></article>`;
  detailActions.innerHTML = selected.actions.map((action) => `<li>${action}</li>`).join("");
}

function renderExecutiveOverview() {
  const filtered = getFilteredRegions();
  const summary = getNationalSummary(filtered);
  const top = summary.top;
  const previousDayAverage = createTrendSeries(top ?? filtered[0] ?? regionData[0]).at(-2)?.value ?? summary.avg;
  const delta = summary.avg - previousDayAverage;
  nationalRiskValue.textContent = `${summary.avg}/100`;
  nationalRiskNote.textContent = `${filtered.length} seçili saha içinde genel baskı seviyesi canlı olarak izleniyor.`;
  responseCapacityValue.textContent = `${summary.deployment.teams} ekip`;
  responseCapacityNote.textContent = `${summary.deployment.tankers} tanker ve ${summary.deployment.helicopters} helikopter hazır durumda.`;
  dayChangeValue.textContent = `${delta >= 0 ? "+" : ""}${delta}`;
  dayChangeNote.textContent = delta >= 0 ? "Son 24 saatte risk baskısı artış eğiliminde." : "Son 24 saatte risk baskısı gerileme eğiliminde.";
  focusRegionValue.textContent = top ? top.shortName : "--";
  focusRegionNote.textContent = top ? `${top.summary} ${top.sourceLabel} verisi odak alanı doğruluyor.` : "Filtreye uygun odak alanı bulunamadı.";
}

function renderTrendChart() {
  const selected = getRegionById(activeId) ?? getFilteredRegions()[0] ?? regionData[0];
  const series = createTrendSeries(selected);
  trendChart.innerHTML = series.map((item) => `
    <article class="trend-column">
      <div class="trend-value">${item.value}</div>
      <div class="trend-bar" style="height:${Math.max(item.value * 2, 56)}px"></div>
      <div class="trend-label">${item.label}</div>
    </article>`).join("");
}

function renderPriorityList() {
  const filtered = getFilteredRegions().slice().sort((a, b) => b.riskScore - a.riskScore);
  priorityList.innerHTML = filtered.map((item, index) => `
    <article class="priority-item">
      <div><strong>${index + 1}. ${item.shortName}</strong><span>${item.responseReadiness}</span></div>
      <div class="risk-chip risk-${item.riskLevel}">${riskLabels[item.riskLevel]} · ${item.riskScore}</div>
    </article>`).join("");
}

function renderRankingTable() {
  const filtered = getFilteredRegions().slice().sort((a, b) => b.riskScore - a.riskScore);
  rankingTable.innerHTML = filtered.map((item, index) => `
    <article class="ranking-row">
      <div><strong>${index + 1}. ${item.province} · ${item.shortName}</strong><p class="ranking-meta">Nem %${item.humidity} · Rüzgâr ${item.wind} km/sa · ${statusLabels[item.status]}</p></div>
      <div class="ranking-score"><strong>${item.riskScore}</strong><p>${riskLabels[item.riskLevel]}</p></div>
    </article>`).join("");
}

function renderDeploymentSummary() {
  const filtered = getFilteredRegions();
  const deployment = getNationalSummary(filtered).deployment;
  deploymentGrid.innerHTML = `
    <article class="deployment-card"><p class="mini-label">Müdahale ekibi</p><span class="stat-value">${deployment.teams}</span><p>Sahaya çıkmaya hazır toplam ekip sayısı.</p></article>
    <article class="deployment-card"><p class="mini-label">Su tankeri</p><span class="stat-value">${deployment.tankers}</span><p>Kara lojistiğinde görevli tanker kapasitesi.</p></article>
    <article class="deployment-card"><p class="mini-label">Helikopter</p><span class="stat-value">${deployment.helicopters}</span><p>Hava desteği için hazır bekleyen araç sayısı.</p></article>
    <article class="deployment-card"><p class="mini-label">Gözetleme kulesi</p><span class="stat-value">${deployment.towers}</span><p>Aktif izleme ağında çalışan kule noktaları.</p></article>`;
  deploymentNotes.innerHTML = getTopRegions(2).map((item) => `
    <article class="deployment-card">
      <strong>${item.shortName} konuşlanma notu</strong>
      <p>${item.deployment.teams} ekip, ${item.deployment.tankers} tanker ve ${item.deployment.helicopters} helikopter ile destekleniyor.</p>
    </article>`).join("");
}

function renderInsights() {
  const filtered = getFilteredRegions();
  const avg = getAverageRisk(filtered);
  const maxWind = filtered.length ? filtered.reduce((max, item) => Math.max(max, item.wind), 0) : 0;
  const driest = filtered.length ? filtered.slice().sort((a, b) => a.humidity - b.humidity)[0] : null;
  insightCards.innerHTML = `
    <article class="insight-card"><strong>Ortalama operasyonel risk ${avg}/100 seviyesinde.</strong><p>Seçili filtrelerdeki alanların genel yangın baskısını tek bakışta okumayı sağlar.</p></article>
    <article class="insight-card"><strong>En yüksek rüzgâr hızı ${maxWind} km/sa ile yayılım riskini artırıyor.</strong><p>Rüzgâr koridorları, ilk müdahale sürelerini ve ekip konumlandırmasını doğrudan etkiliyor.</p></article>
    <article class="insight-card"><strong>${driest ? driest.name : "Seçili alan yok"} en düşük nem seviyesiyle öne çıkıyor.</strong><p>Nem düşüşü, özellikle yüzey örtüsünde tutuşma eşiğini ciddi biçimde aşağı çekiyor.</p></article>`;
}

function renderScenarioPanel() {
  const scenario = getActiveScenario();
  if (!scenario) return;
  scenarioTitle.textContent = `${scenario.label} operasyon modeli`;
  scenarioSummary.textContent = scenario.summary;
  scenarioScore.textContent = scenario.nationalRisk;
  scenarioTime.textContent = scenario.timeRange;
  scenarioAlerts.innerHTML = scenario.alerts.map((item) => `<li>${item}</li>`).join("");
}

function renderDirectorateList() {
  if (!directorateData?.directorates?.length) {
    directorateList.innerHTML = "";
    return;
  }
  directorateList.innerHTML = directorateData.directorates.map((item) => `
    <article class="directorate-item"><strong>${item.name}</strong><p>Merkez il: ${item.city}</p></article>`).join("");
}

function renderBulletin() {
  bulletinCards.innerHTML = getTopRegions(3).map((item) => `
    <article class="bulletin-card">
      <strong>${item.name}</strong>
      <p>${item.threat}</p>
      <p>${item.weatherSource}: ${item.weatherLabel}</p>
      <p>${item.districtCoverage}</p>
      <p>Nem %${item.humidity} · Rüzgâr ${item.wind} km/sa · Sıcaklık ${item.temperature}°C</p>
    </article>`).join("");
}

function renderIncidents() {
  incidentList.innerHTML = referenceIncidents.map((incident) => `
    <article class="incident-item">
      <strong>${incident.title}</strong>
      <p>${incident.description}</p>
      <p><strong>Çıkarım:</strong> ${incident.takeaway}</p>
    </article>`).join("");
}

function renderExecutiveNote() {
  const filtered = getFilteredRegions().slice().sort((a, b) => b.riskScore - a.riskScore);
  const top = filtered[0];
  const scenario = getActiveScenario();
  executiveNote.innerHTML = top && scenario
    ? `<strong>${scenario.label} senaryosunda ana odak ${top.name} olarak belirlenmeli.</strong><p>${top.summary}</p><p>Bu zaman diliminde ulusal risk ${scenario.nationalRisk}/100 seviyesinde. ${top.sourceLabel} ve ${top.districtCoverage} bilgisi, bölgenin karar destek ekranında neden öne çıktığını açıklıyor.</p>`
    : `<strong>Yönetici özeti hazır değil.</strong><p>Senaryo veya bölge verisi bekleniyor.</p>`;
}

function renderEventLog() {
  eventLog.innerHTML = createEventLog(getFilteredRegions()).map((item) => `
    <article class="event-item"><div><strong>${item.title}</strong><p>${item.description}</p></div><div class="event-time">${item.time}</div></article>`).join("");
}

function renderAlarmHistory() {
  alarmList.innerHTML = createAlarmHistory(getFilteredRegions()).map((item) => `
    <article class="alarm-item">
      <div><span class="alarm-chip alarm-${item.level}">${riskLabels[item.level]}</span><strong>${item.title}</strong><p>${item.description}</p></div>
      <div class="alarm-time">${item.time}</div>
    </article>`).join("");
}

function renderReportPreview() {
  const top = getTopRegions(3);
  const scenario = getActiveScenario();
  const deployment = getNationalSummary(getFilteredRegions()).deployment;
  reportPreview.innerHTML = `
    <strong>${scenario?.label ?? "-"} senaryosu için paylaşılabilir operasyon özeti</strong>
    <p>${top[0] ? `${top[0].name} bugün birincil odak alanıdır.` : "Odak alanı bulunamadı."}</p>
    <div class="report-grid">
      <article class="report-row"><span class="mini-label">Ulusal risk</span><p>${getAverageRisk(getFilteredRegions())}/100</p></article>
      <article class="report-row"><span class="mini-label">Senaryo aralığı</span><p>${scenario?.timeRange ?? "-"}</p></article>
      <article class="report-row"><span class="mini-label">Müdahale ekibi</span><p>${deployment.teams} ekip</p></article>
      <article class="report-row"><span class="mini-label">Hava desteği</span><p>${deployment.helicopters} helikopter</p></article>
    </div>
    <div class="report-list">
      ${top.map((item, index) => `<article class="report-list-item"><span>${index + 1}. ${item.shortName}</span><span>${item.riskScore}/100 · ${riskLabels[item.riskLevel]}</span></article>`).join("")}
    </div>`;
}

function renderWeatherStatus() {
  if (weatherFetchMeta.state === "ready") {
    const updatedAt = new Intl.DateTimeFormat("tr-TR", { hour: "2-digit", minute: "2-digit" }).format(weatherFetchMeta.updatedAt);
    weatherSourceStatus.textContent = `${weatherFetchMeta.source} üzerinden ${weatherFetchMeta.successCount} bölge için canlı veri alındı. Son güncelleme ${updatedAt}.`;
    return;
  }
  if (weatherFetchMeta.state === "error") {
    weatherSourceStatus.textContent = "Canlı meteoroloji verisine ulaşılamadı. Sistem şu anda yalnızca yerel senaryo verisiyle çalışıyor.";
    return;
  }
  weatherSourceStatus.textContent = "Canlı meteoroloji verisi bağlanıyor.";
}

function renderHero() {
  const filtered = getFilteredRegions();
  const critical = filtered.filter((item) => item.riskLevel === "critical").length;
  const watch = filtered.filter((item) => item.status === "active-watch").length;
  const avg = getAverageRisk(filtered);
  const topRegions = getTopRegions(3);
  criticalCount.textContent = critical;
  watchCount.textContent = watch;
  avgRisk.textContent = avg;
  heroScore.textContent = avg;
  heroSummary.textContent = topRegions.length ? `${topRegions[0].name} bugün en yüksek öncelikli alan olarak dikkat çekiyor.` : "Filtre sonucunda gösterilecek aktif alan bulunamadı.";
  heroList.innerHTML = topRegions.map((item) => `<li>${item.name}: ${item.threat.toLowerCase()}</li>`).join("");
}

function createMap() {
  map = L.map("leaflet-map", { zoomControl: false, attributionControl: true }).setView([38.55, 33.4], 6);
  L.control.zoom({ position: "bottomright" }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 11,
    minZoom: 5,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);
}

function featureStyle(feature) {
  const item = getRegionById(feature.properties.id);
  const isActive = item?.id === activeId;
  return {
    color: isActive ? "#1b241e" : "#fff8ee",
    weight: isActive ? 3 : 1.5,
    fillColor: riskColors[item?.riskLevel ?? "medium"],
    fillOpacity: isActive ? 0.78 : 0.58
  };
}

function renderGeoJsonLayer() {
  if (!map || !regionGeoJsonData) return;
  const filteredIds = new Set(getFilteredRegions().map((item) => item.id));
  const filteredFeatures = regionGeoJsonData.features.filter((feature) => filteredIds.has(feature.properties.id));
  if (geoJsonLayer) geoJsonLayer.remove();
  if (!layerState.regions) return;
  geoJsonLayer = L.geoJSON({ type: "FeatureCollection", features: filteredFeatures }, {
    style: featureStyle,
    onEachFeature(feature, layer) {
      const item = getRegionById(feature.properties.id);
      if (!item) return;
      layer.bindTooltip(`<strong>${item.name}</strong><span>${riskLabels[item.riskLevel]} risk · ${item.riskScore}</span>`, {
        sticky: true, direction: "top", className: "map-tooltip"
      });
      layer.on({
        click() {
          activeId = item.id;
          renderAll();
        },
        mouseover() {
          layer.setStyle({ weight: 3, fillOpacity: 0.82 });
        },
        mouseout() {
          geoJsonLayer.resetStyle(layer);
        }
      });
    }
  }).addTo(map);
  if (filteredFeatures.length) {
    const bounds = geoJsonLayer.getBounds();
    if (bounds.isValid()) map.fitBounds(bounds.pad(0.28));
    focusActiveRegion();
  } else {
    map.setView([38.55, 33.4], 6);
  }
}

function renderStationLayer() {
  if (!map || !stationGeoJsonData) return;
  const filteredIds = new Set(getFilteredRegions().map((item) => item.id));
  const filteredFeatures = stationGeoJsonData.features.filter((feature) => filteredIds.has(feature.properties.regionId));
  if (stationLayer) stationLayer.remove();
  if (!layerState.stations) return;
  stationLayer = L.geoJSON({ type: "FeatureCollection", features: filteredFeatures }, {
    pointToLayer(feature, latlng) {
      return L.circleMarker(latlng, { radius: 7, weight: 2, color: "#fff9ef", fillColor: "#244b3c", fillOpacity: 0.95 });
    },
    onEachFeature(feature, layer) {
      const region = getRegionById(feature.properties.regionId);
      layer.bindPopup(`<div class="station-popup"><strong>${feature.properties.name}</strong><span>${feature.properties.type}</span><span>${region ? region.name : ""}</span></div>`);
    }
  }).addTo(map);
}

function renderDirectorateLayer() {
  if (!map || !directorateData?.directorates?.length) return;
  if (directorateLayer) directorateLayer.remove();
  if (!layerState.directorates) return;
  directorateLayer = L.layerGroup(directorateData.directorates.map((item) =>
    L.circleMarker([item.latitude, item.longitude], { radius: 5, weight: 2, color: "#244b3c", fillColor: "#f3d694", fillOpacity: 0.92 })
      .bindPopup(`<div class="station-popup"><strong>${item.name}</strong><span>Merkez il: ${item.city}</span></div>`)
  )).addTo(map);
}

function focusActiveRegion() {
  if (!geoJsonLayer || !layerState.regions) return;
  geoJsonLayer.eachLayer((layer) => {
    if (layer.feature?.properties?.id === activeId) {
      layer.bringToFront();
      layer.setStyle({ color: "#1b241e", weight: 3, fillOpacity: 0.78 });
      const bounds = layer.getBounds?.();
      if (bounds?.isValid()) {
        map.flyToBounds(bounds.pad(0.8), { duration: 0.45, maxZoom: 8 });
      }
    }
  });
}

async function loadGeoJson() {
  const response = await fetch("data/fire-risk-regions.geojson");
  regionGeoJsonData = await response.json();
}

async function loadStations() {
  const response = await fetch("data/weather-stations.geojson");
  stationGeoJsonData = await response.json();
}

async function loadScenarios() {
  const response = await fetch("data/operational-scenarios.json");
  scenarioData = await response.json();
  activeScenarioId = scenarioData.defaultScenario;
}

async function loadDirectorates() {
  const response = await fetch("data/ogm-regional-directorates.json");
  directorateData = await response.json();
}

async function fetchLiveWeatherForRegion(region) {
  const params = new URLSearchParams({
    latitude: String(region.latitude),
    longitude: String(region.longitude),
    current: "temperature_2m,relative_humidity_2m,wind_speed_10m,wind_gusts_10m,weather_code",
    timezone: "auto",
    forecast_days: "1"
  });
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
  if (!response.ok) throw new Error(`Weather API failed for ${region.id}`);
  const data = await response.json();
  return {
    temperature: Math.round(data.current.temperature_2m),
    humidity: Math.round(data.current.relative_humidity_2m),
    wind: Math.round(data.current.wind_speed_10m),
    gust: Math.round(data.current.wind_gusts_10m ?? data.current.wind_speed_10m),
    weatherCode: data.current.weather_code ?? 0
  };
}

async function loadLiveWeather() {
  weatherFetchMeta.state = "loading";
  renderWeatherStatus();
  const results = await Promise.allSettled(regionData.map((region) => fetchLiveWeatherForRegion(region)));
  const successfulEntries = results.map((result, index) => ({ result, region: regionData[index] })).filter(({ result }) => result.status === "fulfilled");
  if (!successfulEntries.length) {
    weatherFetchMeta.state = "error";
    renderWeatherStatus();
    return;
  }
  liveWeatherByRegion = Object.fromEntries(successfulEntries.map(({ result, region }) => [region.id, result.value]));
  weatherFetchMeta = { state: "ready", updatedAt: new Date(), source: "Open-Meteo", successCount: successfulEntries.length };
  renderAll();
}

function updateToolbarNote() {
  const filtered = getFilteredRegions();
  const visibleRegions = layerState.regions ? filtered.length : 0;
  const visibleStations = layerState.stations && stationGeoJsonData ? stationGeoJsonData.features.filter((feature) => filtered.some((item) => item.id === feature.properties.regionId)).length : 0;
  const visibleDirectorates = layerState.directorates ? directorateData?.directorates?.length ?? 0 : 0;
  document.querySelector("#map-toolbar-note").textContent = `${visibleRegions} risk bölgesi, ${visibleStations} gözlem istasyonu ve ${visibleDirectorates} OGM bölge müdürlüğü izleniyor.`;
}

function syncLayerButtons() {
  document.querySelectorAll("[data-layer-toggle]").forEach((button) => {
    const key = button.dataset.layerToggle;
    const isOn = layerState[key];
    button.classList.toggle("is-on", isOn);
    button.setAttribute("aria-pressed", String(isOn));
  });
}

function downloadReport() {
  const blob = new Blob([getReportText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "orman-yangini-operasyon-ozeti.txt";
  link.click();
  URL.revokeObjectURL(url);
}

function renderAll() {
  renderMapCards();
  renderMapOverlay();
  renderExecutiveOverview();
  renderTrendChart();
  renderScenarioPanel();
  renderWeatherStatus();
  renderBulletin();
  renderDetail();
  renderPriorityList();
  renderRankingTable();
  renderDeploymentSummary();
  renderInsights();
  renderDirectorateList();
  renderIncidents();
  renderExecutiveNote();
  renderEventLog();
  renderAlarmHistory();
  renderReportPreview();
  renderHero();
  renderGeoJsonLayer();
  renderStationLayer();
  renderDirectorateLayer();
  updateToolbarNote();
  syncLayerButtons();
}

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.jump)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

[regionFilter, riskFilter, statusFilter].forEach((element) => {
  element.addEventListener("change", renderAll);
});

scenarioFilter.addEventListener("change", () => {
  activeScenarioId = scenarioFilter.value;
  renderAll();
});

document.querySelectorAll("[data-layer-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.layerToggle;
    layerState[key] = !layerState[key];
    renderAll();
  });
});

downloadReportButton.addEventListener("click", downloadReport);
printReportButton.addEventListener("click", () => window.print());

async function init() {
  populateFilters();
  createMap();
  try {
    await loadScenarios();
    populateScenarioFilter();
  } catch (error) {
    console.error("Senaryo verisi yüklenemedi:", error);
    scenarioData = {
      defaultScenario: "midday",
      scenarios: [{ id: "midday", label: "Öğlen", timeRange: "11:00 - 17:00", summary: "Varsayılan senaryo aktif.", nationalRisk: 78, alerts: ["Varsayılan operasyon senaryosu kullanılıyor."], overrides: {} }]
    };
    activeScenarioId = "midday";
    populateScenarioFilter();
  }
  try {
    await loadGeoJson();
  } catch (error) {
    console.error("GeoJSON yüklenemedi:", error);
    regionGeoJsonData = fallbackGeoJson;
  }
  try {
    await loadStations();
  } catch (error) {
    console.error("İstasyon verisi yüklenemedi:", error);
    stationGeoJsonData = fallbackStationGeoJson;
  }
  try {
    await loadDirectorates();
  } catch (error) {
    console.error("OGM bölge müdürlüğü verisi yüklenemedi:", error);
    directorateData = { directorates: [] };
  }
  renderAll();
  loadLiveWeather().catch((error) => {
    console.error("Canlı meteoroloji verisi yüklenemedi:", error);
    weatherFetchMeta.state = "error";
    renderWeatherStatus();
  });
}

init();
