// script.js
const articlesData = [
    {
        title: "Blood Type O – Foods to Eat",
        summary: "Complete list of highly beneficial and neutral foods for Type O (the Hunter). Includes meats, fish, vegetables, fruits, and more.",
        link: "https://open.substack.com/pub/nickngekenya/p/blood-type-o-eat-these-foods-and?r=6zxdkg&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
    },
    {
        title: "Blood Type O – Foods to Avoid",
        summary: "Foods that act like toxins for Type O and commonly cause weight gain, inflammation, and fatigue.",
        link: "https://open.substack.com/pub/nickngekenya/p/the-silent-saboteurs-dr-peter-j-dadamo?r=6zxdkg&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
    },
    {
        title: "Blood Type A – Foods to Eat",
        summary: "Plant-based foods that support digestion, immunity, and calm energy for Type A (the Farmer).",
        link: "https://open.substack.com/pub/nickngekenya/p/blood-type-a-foods-eat-these-daily?r=6zxdkg&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
    },
    {
        title: "Blood Type A – Foods to Avoid",
        summary: "Foods that increase cortisol and slow digestion for Type A.",
        link: "https://open.substack.com/pub/nickngekenya/p/foods-to-avoid-for-blood-type-a-what?r=6zxdkg&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
    },
    {
        title: "Blood Type B – Foods to Eat",
        summary: "Balanced omnivore diet with dairy that works best for Type B (the Nomad).",
        link: "https://open.substack.com/pub/nickngekenya/p/blood-type-b-foods-eat-these-daily?r=6zxdkg&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
    },
    {
        title: "Blood Type B – Foods to Avoid",
        summary: "Lectins and foods that cause inflammation and metabolic slowdown for Type B.",
        link: "https://open.substack.com/pub/nickngekenya/p/forbidden-foods-that-could-be-sabotaging?r=6zxdkg&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
    },
    {
        title: "Blood Type AB – Foods to Eat",
        summary: "Hybrid diet combining the best of A and B for Type AB (the Enigma).",
        link: "https://open.substack.com/pub/nickngekenya/p/best-foods-for-blood-type-ab-eat?r=6zxdkg&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
    },
    {
        title: "Blood Type AB – Foods to Avoid",
        summary: "Foods that overload the sensitive AB digestive system.",
        link: "https://open.substack.com/pub/nickngekenya/p/foods-to-avoid-for-blood-type-ab?r=6zxdkg&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
    },
    {
        title: "Best Exercises for Your Blood Type",
        summary: "Exactly how each blood type should move — high-intensity for O, calming for A, varied for B, and balanced for AB.",
        link: "https://open.substack.com/pub/nickngekenya/p/best-exercises-for-your-blood-type?r=6zxdkg&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
    },
    {
        title: "Blood Type Weight Loss Strategies",
        summary: "Personalized weight-loss tips, why certain foods cause gain, and how to lose fat naturally for your blood type.",
        link: "https://open.substack.com/pub/nickngekenya/p/blood-type-weight-loss-strategies?r=6zxdkg&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
    }
];

// Render articles
function renderArticles() {
    const grid = document.getElementById('articles-grid');
    grid.innerHTML = articlesData.map(article => `
        <div class="article-card">
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <a href="${article.link}" target="_blank">Read Full Article on Substack →</a>
        </div>
    `).join('');
}

// Rating system
let currentRating = 0;
let totalVotes = localStorage.getItem('bloodTypeTotalVotes') || 142;
let totalScore = localStorage.getItem('bloodTypeTotalScore') || 698; // 142 * 4.9

function updateRatingDisplay() {
    const avg = totalVotes > 0 ? (totalScore / totalVotes).toFixed(1) : 0;
    document.getElementById('average').textContent = avg;
    document.getElementById('total-votes').textContent = totalVotes;
}

function selectStar(value) {
    currentRating = value;
    const stars = document.querySelectorAll('#stars i');
    stars.forEach((star, index) => {
        if (index + 1 <= value) {
            star.classList.add('active');
            star.classList.replace('far', 'fas');
        } else {
            star.classList.remove('active');
            star.classList.replace('fas', 'far');
        }
    });
}

function submitRating() {
    if (currentRating === 0) {
        alert("Please select a star rating first!");
        return;
    }
    
    totalScore = parseFloat(totalScore) + currentRating;
    totalVotes = parseFloat(totalVotes) + 1;
    
    // Save to localStorage
    localStorage.setItem('bloodTypeTotalVotes', totalVotes);
    localStorage.setItem('bloodTypeTotalScore', totalScore);
    
    updateRatingDisplay();
    
    // Show thank you
    document.getElementById('thank-you').style.display = 'block';
    setTimeout(() => {
        document.getElementById('thank-you').style.display = 'none';
    }, 3000);
    
    // Reset stars
    currentRating = 0;
    const stars = document.querySelectorAll('#stars i');
    stars.forEach(star => {
        star.classList.remove('active');
        star.classList.replace('fas', 'far');
    });
}

// Star click handlers
function initStars() {
    const stars = document.querySelectorAll('#stars i');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectStar(parseInt(star.getAttribute('data-value')));
        });
    });
}

// Initialize everything
window.onload = function() {
    renderArticles();
    updateRatingDisplay();
    initStars();
    
    console.log('%c✅ Blood Type Diet website ready! Ratings are saved with localStorage.', 'color:#c8102e; font-weight:bold');
};