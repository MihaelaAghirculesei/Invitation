const TUO_NUMERO_WHATSAPP = "491749627899";

function sendWhatsAppMessage() {
    const adulti = parseInt(document.getElementById('adulti').value) || 0;
    const bambini = parseInt(document.getElementById('bambini').value) || 0;
    
    if (adulti < 0 || bambini < 0) {
        alert('⚠️ I numeri devono essere positivi!');
        return;
    }
    
    if (adulti == 0 && bambini == 0) {
        alert('⚠️ Inserisci almeno 1 persona (adulti o bambini)');
        return;
    }

    if (adulti > 20 || bambini > 20) {
        alert('⚠️ Numero troppo alto! Contattaci direttamente per gruppi grandi.');
        return;
    }
    
    const totalePersone = adulti + bambini;
    const messaggio = `🎓 CONFERMA PRESENZA - EINSCHULUNG ALEX 🎓

Ciao! Confermo la mia presenza alla festa di Einschulung di Alex:

👨‍👩‍👧‍👦 Adulti: ${adulti}
🧒 Bambini: ${bambini}
👥 Totale persone: ${totalePersone}

📅 Data: Sabato 16 Agosto 2025
🕓 Orario: dalle 17:00
📍 Dove: Springwisen 29, 38446 Wolfsburg

Non vediamo l'ora di festeggiare questo momento speciale insieme! 🎉📚✏️`;

    const messaggioCodificato = encodeURIComponent(messaggio);
    
    const linkWhatsApp = `https://wa.me/${TUO_NUMERO_WHATSAPP}?text=${messaggioCodificato}`;
    
    try {
        window.open(linkWhatsApp, '_blank');
        
        createFireworks();
        createBalloons();

        setTimeout(() => {
            alert('🎉 Perfetto! WhatsApp si sta aprendo per inviare la conferma! 🎉');
        }, 500);
        
    } catch (error) {
        alert('❌ Errore nell\'aprire WhatsApp. Copia questo messaggio e invialo manualmente:\n\n' + messaggio);
        console.error('Errore WhatsApp:', error);
    }
}

function validateNumberInput(input) {
    input.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (parseInt(this.value) > 20) {
            this.value = 20;
        }
    });
}

function createConfetti() {
    const colors = ['#FF6B35', '#F7931E', '#FFD54F', '#4CAF50', '#2196F3', '#9C27B0'];
    const container = document.getElementById('confetti-container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animation = 'confetti-fall ' + (Math.random() * 3 + 2) + 's linear infinite';
        container.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) confetti.parentNode.removeChild(confetti);
        }, 5000);
    }
}

function createSparkles() {
    const container = document.getElementById('sparkle-container');
    
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle);
        }, 4000);
    }
}

function createBalloons() {
    const balloons = ['🎈', '🎊', '🎉', '🎁'];
    const container = document.getElementById('balloon-container');
    
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.innerHTML = balloons[Math.floor(Math.random() * balloons.length)];
        balloon.style.left = Math.random() * window.innerWidth + 'px';
        balloon.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(balloon);
        
        setTimeout(() => {
            if (balloon.parentNode) balloon.parentNode.removeChild(balloon);
        }, 8000);
    }
}

function createMagicParticles() {
    const container = document.getElementById('particles');
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        container.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) particle.parentNode.removeChild(particle);
        }, 4000);
    }
}

function createFireworks() {
    createConfetti();
    createSparkles();
}

function shakeScreen() {
    document.body.style.animation = 'none';
    document.body.style.transform = 'translateX(0)';
    
    let shakeCount = 0;
    const shakeInterval = setInterval(() => {
        const translateX = Math.random() * 20 - 10;
        document.body.style.transform = `translateX(${translateX}px)`;
        shakeCount++;
        
        if (shakeCount > 10) {
            clearInterval(shakeInterval);
            document.body.style.transform = 'translateX(0)';
        }
    }, 100);
    
    createConfetti();
}

function rainbowExplosion() {
    const abc = document.querySelector('.abc-decoration');
    abc.style.animation = 'none';
    abc.style.fontSize = '4em';
    abc.style.transform = 'scale(1.5) rotateY(360deg)';
    
    setTimeout(() => {
        abc.style.animation = 'rainbow-letters 2s linear infinite';
        abc.style.fontSize = '2.5em';
        abc.style.transform = 'scale(1) rotateY(0deg)';
    }, 1000);
    
    createSparkles();
}

function bounceItem(item) {
    item.style.animation = 'none';
    item.style.transform = 'scale(2) rotateZ(720deg)';
    
    setTimeout(() => {
        item.style.animation = 'supply-dance 4s ease-in-out infinite';
        item.style.transform = 'scale(1) rotateZ(0deg)';
    }, 1000);
}

function photoMagic() {
    const photo = document.querySelector('.photo-placeholder');
    photo.style.animation = 'none';
    photo.style.transform = 'scale(1.3) rotateY(360deg)';
    photo.style.boxShadow = '0 0 50px rgba(255, 215, 0, 1)';
    
    setTimeout(() => {
        photo.style.animation = 'photo-magic 5s ease-in-out infinite';
        photo.style.transform = 'scale(1) rotateY(0deg)';
    }, 1500);
    
    createMagicParticles();
}

function celebrationBurst() {
    createConfetti();
    createBalloons();
    createSparkles();
    
    const celebration = document.querySelector('.celebration');
    celebration.style.animation = 'none';
    celebration.style.transform = 'scale(1.5)';
    celebration.style.textShadow = '0 0 30px #FFD700';
    
    setTimeout(() => {
        celebration.style.animation = 'celebration-explosion 2s infinite';
        celebration.style.transform = 'scale(1)';
    }, 2000);
}

function highlightDetail(item) {
    item.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
    item.style.transform = 'translateX(20px) scale(1.1)';
    item.style.color = 'white';
    item.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.6)';
    
    setTimeout(() => {
        item.style.background = '';
        item.style.transform = '';
        item.style.color = '';
        item.style.boxShadow = '';
    }, 1500);
}

function magicConfirmation() {
    alert('🎉 Fantastico! La tua presenza è confermata! 🎉\n\nNon vediamo l\'ora di festeggiare insieme questo momento speciale con Alex! 🎓📚');
    createFireworks();
    createBalloons();
}

function footerSurprise() {
    const footer = document.querySelector('.footer');
    footer.style.animation = 'none';
    footer.style.background = 'linear-gradient(45deg, #FF6B35, #F7931E, #FFD54F, #4CAF50, #2196F3, #9C27B0)';
    footer.style.transform = 'scale(1.1) rotateX(10deg)';
    footer.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
    
    setTimeout(() => {
        footer.style.animation = 'footer-wave 4s ease infinite';
        footer.style.transform = 'scale(1)';
        footer.style.textShadow = '';
    }, 2000);
    
    createMagicParticles();
}

document.addEventListener('DOMContentLoaded', function() {

    const adultiInput = document.getElementById('adulti');
    const bambiniInput = document.getElementById('bambini');
    
    validateNumberInput(adultiInput);
    validateNumberInput(bambiniInput);
    
    setTimeout(() => {
        createMagicParticles();
    }, 2000);
    
    setInterval(() => {
        if (Math.random() < 0.3) {
            createSparkles();
        }
    }, 8000);
    
    setInterval(() => {
        if (Math.random() < 0.2) {
            createBalloons();
        }
    }, 12000);
});

document.addEventListener('mousemove', function(e) {
    if (Math.random() < 0.02) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.position = 'fixed';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
    }
});

window.addEventListener('resize', function() {
    const confettiElements = document.querySelectorAll('.confetti');
    confettiElements.forEach(confetti => {
        if (confetti.offsetLeft > window.innerWidth) {
            confetti.style.left = Math.random() * window.innerWidth + 'px';
        }
    });
});