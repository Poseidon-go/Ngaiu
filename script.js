// DOM Elements
const questionText = document.getElementById('question-text');
const responseSection = document.getElementById('response-section');
const responseText = document.getElementById('response-text');
const btnCuteQuestion = document.getElementById('btn-cute-question');
const btnFlirt = document.getElementById('btn-flirt');
const btnTease = document.getElementById('btn-tease');
const btnCompliment = document.getElementById('btn-compliment');
const btnSpecial = document.getElementById('btn-special');
const btnPoem = document.getElementById('btn-poem');
const btnNext = document.getElementById('btn-next');
const btnHeartReact = document.getElementById('btn-heart-react');
const btnSave = document.getElementById('btn-save');
const currentQuestionSpan = document.getElementById('current-question');
const flirtScoreSpan = document.getElementById('flirt-score');
const hotnessLevel = document.getElementById('hotness-level');
const loveLevel = document.getElementById('love-level');
const currentMood = document.getElementById('current-mood');
const loveFill = document.getElementById('love-fill');
const lovePercentage = document.getElementById('love-percentage');
const floatingHearts = document.getElementById('floating-hearts');
const sparkleContainer = document.getElementById('sparkle-container');
const rosePetals = document.getElementById('rose-petals');
const specialEffects = document.getElementById('special-effects');
const fireworks = document.getElementById('fireworks');
const savedMessages = document.getElementById('saved-messages');
const savedList = document.getElementById('saved-list');

// Game State
let questionCount = 0;
let flirtScore = 0;
let lovePercentage_val = 0;
let currentLoveLevel = 1;
let savedMessagesArray = [];

// Mood and level arrays
const moods = ['😐', '🙂', '😊', '😄', '🥰', '😍', '🤩', '💖', '🌟', '👑'];
const hotnessLevels = ['🔥', '🔥🔥', '🔥🔥🔥', '💥', '💥�', '🌋', '⚡🔥', '💎🔥', '👑🔥', '🚀🔥'];

// Sến súa data arrays
const cuteQuestions = [
    "Em có biết em xinh nhất lúc nào không? Lúc nào cũng xinh! Nhưng xinh nhất là lúc em cười với anh 😊💕",
    "Em thích ăn kẹo không? Vì em ngọt hơn kẹo, anh muốn 'ăn' em mỗi ngày! 🍭�",
    "Em có sợ ma không? Vì em làm anh 'ma mê' đến mức không ngủ được rồi! 👻💤",
    "Em thường mơ về điều gì? Anh mơ về em mỗi đêm, thậm chí cả khi thức! 💭✨",
    "Em có biết em đẹp đến mức nào không? Đẹp đến mức anh phải che mắt khi nhìn! 🙈💖",
    "Em thích màu gì nhất? Anh thích màu mắt em, màu môi em, màu da em... tất cả! 👀💋",
    "Em có thích hoa không? Em đẹp hơn hoa hồng, thơm hơn hoa nhài! 🌹🌸",
    "Em thường làm gì khi buồn? Anh sẽ hôn em cho đến khi em cười! 😘😊",
    "Em có biết anh yêu em nhiều như thế nào không? Nhiều hơn số sao trên trời! ⭐💫",
    "Em thích nghe nhạc gì? Anh thích nghe tiếng em nói 'anh yêu'! 🎵💕"
];

const superFlirtLines = [
    "Em có bản đồ không? Vì anh bị lạc trong mắt em rồi và không muốn tìm đường về! 🗺️💕",
    "Em có phải thiên thần không? Vì trời thiếu một ngôi sao từ khi em xuống trái đất! ⭐👼",
    "Em có wifi không? Vì anh muốn 'kết nối' với em 24/7, không bao giờ mất sóng! 📶💖",
    "Em có phải Google không? Vì em có tất cả những gì anh tìm kiếm trong đời! 🔍💝",
    "Em có biết CPR không? Vì mỗi lần nhìn em, anh ngừng thở! 💨❤️",
    "Em có phải Netflix không? Vì anh có thể xem em cả ngày mà không chán! 📺💕",
    "Em có phải Spotify không? Vì em là bài hát yêu thích mà anh repeat mãi! 🎵💖",
    "Em có phải camera không? Vì mỗi lần nhìn em, anh đều cười như ngốc! 📸😊",
    "Em có phải thời tiết không? Vì em làm ngày nào của anh cũng nắng! ☀️🌈",
    "Em có phải phù thủy không? Vì em đã mê hoặc anh hoàn toàn rồi! 🧙‍♀️✨",
    "Em có biết em nguy hiểm không? Vì em làm tim anh đập nhanh hơn cả khi chạy marathon! 💓🏃‍♂️",
    "Em có phải đường không? Vì anh bị tiểu đường vì em quá ngọt! 🍯😋"
];

const teaseLines = [
    "Em hôm nay quên trang điểm à? Vẫn đẹp mà, đẹp đến mức bất hợp pháp! 😜💄",
    "Em có biết em cute đến mức nào không? Cảnh sát sắp bắt em vì tội 'quá đáng yêu'! 🚨😍",
    "Em ăn nhiều đường quá, ngọt hết cả người rồi! Anh sắp bị tiểu đường! 🍭😋",
    "Em cười hoài vậy, răng sắp mòn đó! Nhưng mà cười đi, anh thích lắm! 😁✨",
    "Em selfie hoài, điện thoại sắp đình công vì quá tải vẻ đẹp! 🤳📱",
    "Em shopping hoài, ví tiền khóc nhưng anh vẫn cho tiền vì em đáng yêu! 💸👜",
    "Em xinh quá, gương nhà anh sắp ghen tị và tự vỡ! 🪞😏",
    "Em nói chuyện ngọt quá, anh sắp bị sâu răng vì nghe em! 🍭😜",
    "Em đi đâu cũng đẹp, GPS cũng phải học em cách tỏa sáng! 🗺️😘",
    "Em dễ thương quá, anh sắp gọi cảnh sát báo có người ăn cắp trái tim anh! 👮‍♀️💕",
    "Em có biết em làm anh mất ngủ không? Vì cứ nghĩ về em suốt đêm! 😴💭",
    "Em thích màu hồng quá, sắp thành flamingo rồi! Nhưng flamingo xinh nhất! 🦩💗"
];

const compliments = [
    "Em là định nghĩa hoàn hảo của từ 'nữ thần'! Anh thờ em mỗi ngày! 👑✨",
    "Em có nụ cười đẹp nhất vũ trụ! NASA phải nghiên cứu vì sao em tỏa sáng! 😊🌟",
    "Em thông minh, xinh đẹp và dễ thương! Triple combo hoàn hảo! 🧠💖✨",
    "Em là ánh sáng trong cuộc đời anh! Mặt trời cũng phải ghen tị! ☀️💕",
    "Em làm mọi thứ trở nên đẹp hơn! Thế giới đẹp vì có em! 🌈💝",
    "Em có trái tim vàng và tâm hồn đẹp nhất! Anh yêu tất cả! 💛👼",
    "Em là người phụ nữ tuyệt vời nhất mà anh từng gặp! 👩‍🦰🏆",
    "Em xứng đáng với tất cả điều tốt đẹp nhất trên đời! 🎁💖",
    "Em là nguồn cảm hứng vô tận của anh! Anh viết thơ vì em! 🎨✨",
    "Em sinh ra để được yêu thương và chiều chuộng! 💕🤗",
    "Em đẹp từ trong ra ngoài! Cả tâm hồn lẫn ngoại hình! 💎👸",
    "Em là kỳ tích mà Chúa ban tặng cho anh! 🙏💖"
];

const specialLoveLines = [
    "Em à, anh muốn nói với em rằng... em là tất cả của anh! Không có em, anh như mất đi ý nghĩa sống! 💖🌟",
    "Em có biết không? Mỗi ngày anh thức dậy, điều đầu tiên anh nghĩ đến là em! Em là lý do anh muốn sống! 🌅💕",
    "Anh yêu em không chỉ vì em xinh, mà vì em là người duy nhất làm anh tin vào tình yêu đích thực! 💍✨",
    "Em ơi, nếu được chọn lại, anh vẫn sẽ chọn yêu em trong mọi kiếp sau! 🔄💖",
    "Anh muốn được chăm sóc em suốt đời, từ lúc em còn trẻ đến khi tóc em bạc! 👴👵💕",
    "Em là món quà quý giá nhất mà cuộc đời tặng anh! Anh sẽ tr珍惜 em mãi mãi! 🎁💎",
    "Anh yêu em nhiều đến mức muốn hét lên cho cả thế giới biết! EM LÀ CỦA ANH! 📢💖",
    "Em à, anh muốn cùng em xây dựng một tổ ấm nhỏ, có anh, có em, có những đứa con xinh như em! 🏠👶💕",
    "Nếu yêu em là tội, anh sẵn sàng làm tội nhân suốt đời! ⚖️💖",
    "Em là lý do anh muốn trở thành người đàn ông tốt hơn mỗi ngày! 💪✨"
];

const lovePoems = [
    "🌹 Thơ tặng em yêu 🌹\n\nEm như ánh nắng ban mai\nLàm tim anh rộn ràng, say đắm mê\nMỗi nụ cười em tỏa tia\nLàm anh quên hết muôn nghìn âu lo\n\nAnh yêu em từng giây phút\nYêu em từ tóc đến chân\nEm là thiên thần của anh\nMãi mãi trong tim, không phai! 💕",

    "💖 Bài thơ sến súa 💖\n\nEm ơi em có biết không\nAnh yêu em như yêu không khí\nKhông em anh không thể thở\nKhông em anh chẳng thể sống\n\nEm là mặt trời của anh\nEm là mặt trăng đêm khuya\nEm là ngôi sao sáng nhất\nTrong bầu trời tim anh! ⭐",

    "🌸 Thơ tình yêu 🌸\n\nNếu em là hoa hồng\nAnh là giọt sương mai\nNếu em là đại dương\nAnh là hạt cát bé nhỏ\n\nNhưng dù anh nhỏ bé\nTình yêu anh dành cho em\nLớn như cả vũ trụ\nSâu như đáy đại dương! 🌊💕",

    "💝 Thơ ngọt ngào 💝\n\nEm à, em nghe anh nói\nTrong đời anh chỉ có em\nEm là điều kỳ diệu nhất\nMà Chúa ban tặng cho anh\n\nAnh sẽ yêu em mãi mãi\nDù có già đi, xấu đi\nVì tình yêu anh dành em\nKhông bao giờ thay đổi! 👴👵💖"
];

// Utility Functions
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateStats() {
    currentQuestionSpan.textContent = questionCount;
    flirtScoreSpan.textContent = flirtScore;

    // Update love percentage
    lovePercentage_val = Math.min(100, Math.floor((flirtScore / 50) * 100));
    loveFill.style.width = lovePercentage_val + '%';
    lovePercentage.textContent = lovePercentage_val + '%';

    // Update mood
    const moodIndex = Math.min(moods.length - 1, Math.floor(questionCount / 2));
    currentMood.textContent = moods[moodIndex];

    // Update hotness level
    const hotnessIndex = Math.min(hotnessLevels.length - 1, Math.floor(flirtScore / 5));
    hotnessLevel.textContent = hotnessLevels[hotnessIndex];

    // Update love level
    currentLoveLevel = Math.min(10, Math.floor(flirtScore / 10) + 1);
    loveLevel.textContent = currentLoveLevel;
}

function createFloatingElement(container, className, content, duration = 5000) {
    const element = document.createElement('div');
    element.className = className;
    element.innerHTML = content;
    element.style.left = Math.random() * 100 + '%';
    element.style.animationDuration = (Math.random() * 2 + 3) + 's';
    element.style.fontSize = (Math.random() * 10 + 15) + 'px';

    container.appendChild(element);

    setTimeout(() => {
        if (element.parentNode) {
            element.remove();
        }
    }, duration);
}

function createFirework(x, y) {
    const colors = ['#ff6b6b', '#ff8e8e', '#ffa8a8', '#ffb6c1', '#ffd1dc'];

    for (let i = 0; i < 12; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        firework.style.background = colors[Math.floor(Math.random() * colors.length)];

        const angle = (i * 30) * Math.PI / 180;
        const distance = Math.random() * 100 + 50;

        firework.style.setProperty('--end-x', Math.cos(angle) * distance + 'px');
        firework.style.setProperty('--end-y', Math.sin(angle) * distance + 'px');

        fireworks.appendChild(firework);

        setTimeout(() => {
            if (firework.parentNode) {
                firework.remove();
            }
        }, 1000);
    }
}

function typeWriter(element, text, speed = 50) {
    element.innerHTML = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

function showResponse(text, type) {
    questionCount++;
    updateStats();

    // Type writer effect for question
    typeWriter(questionText, text, 30);

    setTimeout(() => {
        responseSection.classList.remove('hidden');

        // Create effects based on type
        const effectCounts = {
            'cute': { hearts: 6, sparkles: 4, petals: 3 },
            'flirt': { hearts: 10, sparkles: 8, petals: 5 },
            'tease': { hearts: 5, sparkles: 6, petals: 2 },
            'compliment': { hearts: 8, sparkles: 10, petals: 4 },
            'special': { hearts: 15, sparkles: 15, petals: 8 },
            'poem': { hearts: 12, sparkles: 12, petals: 10 }
        };

        const effects = effectCounts[type] || effectCounts['cute'];

        // Create floating hearts
        for (let i = 0; i < effects.hearts; i++) {
            setTimeout(() => {
                const hearts = ['💖', '💕', '💗', '💝', '💘', '❤️', '🧡', '💛', '💚', '💙', '💜'];
                createFloatingElement(floatingHearts, 'floating-heart', getRandomItem(hearts));
            }, i * 200);
        }

        // Create sparkles
        for (let i = 0; i < effects.sparkles; i++) {
            setTimeout(() => {
                const sparkles = ['✨', '⭐', '🌟', '💫', '⚡', '🔥'];
                createFloatingElement(sparkleContainer, 'sparkle', getRandomItem(sparkles));
            }, i * 150);
        }

        // Create rose petals
        for (let i = 0; i < effects.petals; i++) {
            setTimeout(() => {
                createFloatingElement(rosePetals, 'rose-petal', '');
            }, i * 300);
        }

        // Special effects for high-level interactions
        if (type === 'special' || type === 'poem') {
            setTimeout(() => {
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        createFirework(
                            Math.random() * window.innerWidth,
                            Math.random() * window.innerHeight * 0.7
                        );
                    }, i * 500);
                }
            }, 1000);
        }

        // Update flirt score
        const scoreIncrease = {
            'cute': 2,
            'flirt': 4,
            'tease': 2,
            'compliment': 3,
            'special': 8,
            'poem': 6
        };

        flirtScore += scoreIncrease[type] || 1;

        // Scroll to response
        responseSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, text.length * 30 + 500);
}

function resetToQuestion() {
    responseSection.classList.add('hidden');
    const resetMessages = [
        "Chọn một cách khác để anh thể hiện tình cảm nhé! 💫",
        "Anh còn nhiều điều muốn nói với em! 💕",
        "Em muốn nghe gì nữa từ anh? 😊",
        "Anh có vô số lời yêu thương dành cho em! 💖"
    ];
    typeWriter(questionText, getRandomItem(resetMessages), 40);
}

function saveMessage() {
    const currentMessage = responseText.textContent;
    if (currentMessage && !savedMessagesArray.includes(currentMessage)) {
        savedMessagesArray.push(currentMessage);
        updateSavedMessages();

        // Show save confirmation
        const originalText = btnSave.innerHTML;
        btnSave.innerHTML = '<span class="save-icon">✅</span><span class="save-text">Đã lưu!</span>';
        btnSave.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';

        setTimeout(() => {
            btnSave.innerHTML = originalText;
            btnSave.style.background = 'linear-gradient(135deg, #a8caba, #5d4e75)';
        }, 2000);
    }
}

function updateSavedMessages() {
    if (savedMessagesArray.length > 0) {
        savedList.innerHTML = savedMessagesArray.map((msg, index) =>
            `<div class="saved-item">
                <div class="saved-number">${index + 1}.</div>
                <div class="saved-text">${msg}</div>
            </div>`
        ).join('');
        savedMessages.classList.remove('hidden');
    }
}

function heartReaction() {
    // Create heart explosion
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFloatingElement(floatingHearts, 'floating-heart', '❤️');
        }, i * 50);
    }

    // Button animation
    const originalText = btnHeartReact.innerHTML;
    btnHeartReact.innerHTML = '<span class="react-icon">💖</span><span class="react-text">Yêu lắm!</span>';
    btnHeartReact.style.background = 'linear-gradient(135deg, #ff1744, #ff5722)';

    setTimeout(() => {
        btnHeartReact.innerHTML = originalText;
        btnHeartReact.style.background = 'linear-gradient(135deg, #ff6b6b, #ff8e8e)';
    }, 2000);

    flirtScore += 2;
    updateStats();
}

// Event Listeners
btnCuteQuestion.addEventListener('click', () => {
    const question = getRandomItem(cuteQuestions);
    showResponse(question, 'cute');
});

btnFlirt.addEventListener('click', () => {
    const flirtLine = getRandomItem(superFlirtLines);
    showResponse(flirtLine, 'flirt');
});

btnTease.addEventListener('click', () => {
    const teaseLine = getRandomItem(teaseLines);
    showResponse(teaseLine, 'tease');
});

btnCompliment.addEventListener('click', () => {
    const compliment = getRandomItem(compliments);
    showResponse(compliment, 'compliment');
});

btnSpecial.addEventListener('click', () => {
    const specialLine = getRandomItem(specialLoveLines);
    showResponse(specialLine, 'special');
});

btnPoem.addEventListener('click', () => {
    const poem = getRandomItem(lovePoems);
    showResponse(poem, 'poem');
});

btnNext.addEventListener('click', resetToQuestion);
btnHeartReact.addEventListener('click', heartReaction);
btnSave.addEventListener('click', saveMessage);

// Auto-create floating elements
setInterval(() => {
    createFloatingElement(floatingHearts, 'floating-heart', '💕');
}, 3000);

setInterval(() => {
    createFloatingElement(sparkleContainer, 'sparkle', '✨');
}, 4000);

setInterval(() => {
    createFloatingElement(rosePetals, 'rose-petal', '');
}, 5000);

// Special interactions based on score
function checkSpecialInteractions() {
    if (flirtScore >= 50 && questionCount >= 15) {
        questionText.innerHTML = "Em ơi... anh có điều quan trọng muốn nói... 💍<br><small style='color: #ff6b6b;'>Bấm 'Lời yêu đặc biệt' để nghe nhé!</small>";
    } else if (flirtScore >= 30) {
        questionText.innerHTML = "Anh đang cố gắng chinh phục trái tim em đây! 😏💖<br><small style='color: #ff6b6b;'>Em có cảm nhận được không?</small>";
    } else if (flirtScore >= 20) {
        questionText.innerHTML = "Anh thả thính em từ nãy giờ, em có nhận ra không? 😊✨";
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Initial typing effect
    setTimeout(() => {
        typeWriter(questionText, "Chọn một cách để anh thể hiện tình cảm với em nhé! 💕", 50);
    }, 1000);

    // Create initial effects
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFloatingElement(floatingHearts, 'floating-heart', '💖');
        }, i * 800);
    }

    // Add click effects to buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            // Create sparkle at click position
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.className = 'sparkle';
                    sparkle.innerHTML = '✨';
                    sparkle.style.position = 'fixed';
                    sparkle.style.left = (x + (Math.random() - 0.5) * 50) + 'px';
                    sparkle.style.top = (y + (Math.random() - 0.5) * 50) + 'px';
                    sparkle.style.zIndex = '1000';
                    document.body.appendChild(sparkle);

                    setTimeout(() => {
                        if (sparkle.parentNode) {
                            sparkle.remove();
                        }
                    }, 1500);
                }, i * 100);
            }
        });
    });
});

// Check for special interactions periodically
setInterval(checkSpecialInteractions, 8000);

// Touch and mobile optimizations
let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) => {
    const touchY = e.touches[0].clientY;
    const touchDiff = touchStartY - touchY;

    if (touchDiff > 0 && window.scrollY === 0) {
        e.preventDefault();
    }
});

// Prevent zoom on double tap
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Add CSS for saved messages
const savedMessagesCSS = `
.saved-item {
    background: rgba(255, 182, 193, 0.2);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 8px;
    display: flex;
    gap: 10px;
    align-items: flex-start;
}

.saved-number {
    color: #e91e63;
    font-weight: bold;
    min-width: 20px;
}

.saved-text {
    flex: 1;
    font-size: 0.9rem;
    line-height: 1.4;
}
`;

const style = document.createElement('style');
style.textContent = savedMessagesCSS;
document.head.appendChild(style);