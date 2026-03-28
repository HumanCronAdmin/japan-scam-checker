/**
 * Search Tracking — japan-scam-checker
 * Sends search queries to GAS for usage analysis.
 * No personal data collected. Query + status only.
 */
var GAS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxNgRSQnoevLcHrBPRtUSWEa5FOVikW8b5qH7Rv3aiK7KQ7a2dSKrGLVSgQxFNu9pBH/exec';

function trackEvent(service, query, status) {
  if (!GAS_ENDPOINT || !query || !query.trim()) return;
  var params = new URLSearchParams({
    service: service,
    query: query.trim().substring(0, 200),
    status: status
  });
  var img = new Image();
  img.src = GAS_ENDPOINT + '?' + params.toString();
}
