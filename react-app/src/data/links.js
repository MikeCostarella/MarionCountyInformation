// Marion County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-21

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The vendor that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "Pivot Point";

export const LINKS = [
  // ---------- Government ----------
  { name: "Marion County (Official Site)", category: "Government", subcategory: "County", url: "https://www.co.marion.oh.us/", description: "Official government portal for Marion County, Ohio (county seat: Marion)." },
  { name: "Marion County Auditor", category: "Government", subcategory: "Auditor", url: "https://propertysearch.marioncountyohio.gov/", description: "Property records, valuations, and parcel/property search (hosted on the Pivot Point platform)." },
  { name: "Marion County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/marion/", description: "Voter registration, polling locations, and election administration." },
  { name: "City of Marion", category: "Government", subcategory: "City", url: "https://marionohio.us/", description: "Government site for the City of Marion, the county seat." },
  // ---------- Education ----------
  { name: "Marion Public Library", category: "Education", subcategory: "Library", url: "https://www.marionlibrary.org/", description: "Public library serving the City of Marion and Marion County." },
  { name: "Marion City Schools", category: "Education", subcategory: "K-12", url: "https://www.marioncityschools.org/", description: "Marion County's largest public school district, serving the City of Marion." },
  { name: "Marion Technical College", category: "Education", subcategory: "Higher Ed", url: "https://www.mtc.edu/", description: "Two-year technical college on the shared Marion campus." },
  { name: "The Ohio State University at Marion", category: "Education", subcategory: "Higher Ed", url: "https://marion.osu.edu/", description: "Regional campus of Ohio State University in Marion." },
  // ---------- Health ----------
  { name: "Marion Public Health", category: "Health", subcategory: "Public Health", url: "https://www.marionpublichealth.org/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  { name: "OhioHealth Marion General Hospital", category: "Health", subcategory: "Hospital", url: "https://www.ohiohealth.com/locations/hospitals/marion-general-hospital", description: "Full-service hospital in Marion, part of the OhioHealth system." },
  // ---------- Business & Economy ----------
  { name: "Marion Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.marionareachamber.org/", description: "Business advocacy, member support, and community resources across Marion County." },
  { name: "Marion CANDO", category: "Business & Economy", subcategory: "Economic Development", url: "https://marioncando.com/", description: "Marion Community & Development Organization — countywide economic development." },
  // ---------- Community & Social ----------
  { name: "OhioMeansJobs Marion County", category: "Community & Social", subcategory: "Workforce", url: "https://ohiomeansjobs.ohio.gov/job-seekers/find-a-job/local-help/marion-county", description: "Workforce, job-search, and employment services for county residents." },
  // ---------- Recreation & Tourism ----------
  { name: "Warren G. Harding Presidential Sites", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.hardingpresidentialsites.org/", description: "Home, memorial, and presidential library of Marion's own President Warren G. Harding." },
  { name: "Visit Marion (Marion Area CVB)", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://visitmarionohio.com/", description: "Convention & visitors bureau — attractions, the Popcorn Festival, events, and dining." },
  // ---------- News & Media ----------
  { name: "The Marion Star", category: "News & Media", subcategory: "Newspaper", url: "https://www.marionstar.com/", description: "Marion's daily newspaper covering county news, sports, and events." },
];
