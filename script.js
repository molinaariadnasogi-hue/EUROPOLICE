javascript// --- PRIVATE CRYPTOGRAPHIC CASE KEY ---
const MOUNT_CASE_PIN = "120352";

// --- VIEWPORT PANEL TOGGLE ROUTER ---
function switchToView(sectionId) {
    var sectionPanels = document.getElementsByClassName('view-section');
    for (var i = 0; i < sectionPanels.length; i++) {
        sectionPanels[i].classList.remove('active');
    }
    document.getElementById(sectionId).classList.add('active');
    
    // Header navigation links synchronization labels updates
    if (sectionId === 'section-europol-home') {
        document.getElementById('dynamic-title').innerText = "European Cybercrime Centre";
        document.getElementById('dynamic-tagline').innerText = "Helping make Europe safer by combating organized transnational crime networks";
        document.getElementById('nav-btn-about').classList.add('active');
        document.getElementById('nav-btn-crime').classList.remove('active');
    } else {
        document.getElementById('nav-btn-about').classList.remove('active');
        document.getElementById('nav-btn-crime').classList.add('active');
    }
    window.scrollTo(0, 0);
}

// --- BIOMETRIC ACCESS RUNTIME CHECKER ---
function verifyCasePasskey() {
    var userInputFieldVal = document.getElementById('passkeyField').value;
    var loginErrorBox = document.getElementById('authErrorMsg');
    
    // LILITAW LANG ANG BALANCE NI TAN KANG LIN PAG TAMA ANG PIN
    if (userInputFieldVal === MOUNT_CASE_PIN) {
        loginErrorBox.style.display = 'none';
        
        // Dynamically updates global layout header strings text
        document.getElementById('dynamic-title').innerHTML = "Binance Network | <span>Forensic Recovery Node</span>";
        document.getElementById('dynamic-tagline').innerText = "Authorized clearing workspace for high-value blockchain case tracking files.";
        
        switchToView('section-binance-dashboard');
    } else {
        loginErrorBox.style.display = 'block';
    }
}

// --- DASHBOARD FORMS SELECTION HANDSHAKES ---
function selectInsur(cardElement) {
    var nodes = document.getElementsByClassName('insurance-node');
    for(var i=0; i<nodes.length; i++) {
        nodes[i].classList.remove('selected');
    }
    cardElement.classList.add('selected');
}

function triggerFinalBoxState(operationStatusCode) {
    switchToView('section-outcome-desk');
    document.getElementById('boxHold').style.display = 'none';
    document.getElementById('boxSuccess').style.display = 'none';
    
    if (operationStatusCode === 'HOLD') {
        document.getElementById('boxHold').style.display = 'block';
    } else {
        document.getElementById('boxSuccess').style.display = 'block';
    }
}
