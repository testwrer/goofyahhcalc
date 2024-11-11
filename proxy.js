let validCode = '1234';

function checkCode() {
  let codeInput = document.getElementById('code').value;
  if (codeInput === validCode) {
    document.getElementById('url').style.display = 'block';
    document.getElementById('goBtn').style.display = 'inline-block';
  } else {
    document.getElementById('url').style.display = 'none';
    document.getElementById('goBtn').style.display = 'none';
  }
}

function startProxy() {
  let url = document.getElementById('url').value;
  if (url && isValidUrl(url)) {
    // Show loading screen
    document.getElementById('loading').style.display = 'block';
    document.getElementById('proxyContainer').style.display = 'none';
    
    // Use proxy.moe as an alternative
    let proxyUrl = `https://proxy.moe/${url}`;
    
    // Wait for the page to load, then embed it
    setTimeout(() => {
      document.getElementById('proxyFrame').src = proxyUrl;
      document.getElementById('loading').style.display = 'none';
      document.getElementById('proxyContainer').style.display = 'block';
    }, 2000);  // Simulating loading time
  }
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}
