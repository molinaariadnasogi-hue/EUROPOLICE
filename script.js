// --- MODULE NAVIGATION VIEWPORT CONTROLLER ENGINE ---
function displayRegistryModule() {
    // Hides documentation text panel layout, brings forward the box container
    document.getElementById('panelViewportAbout').style.display = 'none';
    document.getElementById('panelViewportRegistry').style.display = 'block';
    
    // Toggle active link visual elements
    document.getElementById('navLinkAbout').classList.remove('active');
    document.getElementById('navLinkCases').classList.add('active');
    
    // Dynamic text replacements for header banner sync
    document.getElementById('dynamicHeroTitle').innerText = "Active Case Files Registry";
    document.getElementById('dynamicHeroTagline').innerText = "Real-time judicial profiles and cross-border enforcement tracing registries";
}

function displayOverviewModule() {
    // Reverts layout boxes back to default text configuration reads
    document.getElementById('panelViewportRegistry').style.display = 'none';
    document.getElementById('panelViewportAbout').style.display = 'flex';
    
    document.getElementById('navLinkCases').classList.remove('active');
    document.getElementById('navLinkAbout').classList.add('active');
    
    document.getElementById('dynamicHeroTitle').innerText = "About Europol";
    document.getElementById('dynamicHeroTagline').innerText = "Helping make Europe safer";
}

// --- ACTIVE CARD MATCH SEARCH FILTER ENGINE ---
function executeDatabaseFilter() {
    var searchFilterValue = document.getElementById('directoryLiveInput').value.toLowerCase();
    var searchTargetCardsArray = document.getElementById('masterDataGrid').getElementsByClassName('suspect-case-profile-card-wrapper');
    var matchedCounter = 0;

    for (var i = 0; i < searchTargetCardsArray.length; i++) {
        var stringDumpData = searchTargetCardsArray[i].innerText.toLowerCase();
        
        // Live checking mechanism hiding grid element columns if input keywords are missing
        if (stringDumpData.includes(searchFilterValue)) {
            searchTargetCardsArray[i].style.setProperty('display', 'block', 'important');
            matchedCounter++;
        } else {
            searchTargetCardsArray[i].style.setProperty('display', 'none', 'important');
        }
    }
    
    // Toggle element fallback display visibility if searches net zero outputs
    var errorBanner = document.getElementById('noRecordsMsg');
    if (matchedCounter === 0) {
        errorBanner.style.setProperty('display', 'block', 'important');
    } else {
        errorBanner.style.setProperty('display', 'none', 'important');
    }
}
