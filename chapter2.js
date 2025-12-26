function goHome() {
    window.location.href = "index.html";
}

const lessonData = {
    l1: {
        title: "Introduction to Electromagnetic Induction",
        text: `
        <div class="lesson-section">
            <h3>Introduction</h3>
            <p>
                The passage of an electric current in a conductor produces a magnetic field. After Oersted's discovery, the question arose: can a magnetic field produce an electric current?
            </p>
            <p>
                This problem was studied by Michael Faraday, leading to the discovery of <b>electromagnetic induction</b>, which is the basis of most electrical devices like generators and transformers.
            </p>
        </div>

        <div class="lesson-section">
            <h3>Faraday's Experiment</h3>
            <ul>
                <li>A solenoid of insulated copper wire was connected to a galvanometer.</li>
                <li>Plunging a magnet into the solenoid caused a momentary deflection of the galvanometer pointer.</li>
                <li>Removing the magnet caused deflection in the opposite direction.</li>
            </ul>
            <p>
                This demonstrated that a changing magnetic field induces an electromotive force (emf) and current in the conductor.
            </p>
        </div>

        <div class="lesson-section">
            <h3>Faraday's Laws</h3>
            <ul>
                <li>An emf is induced when there is relative motion between a conductor and a magnetic field.</li>
                <li>The induced emf is proportional to the rate of change of magnetic flux.</li>
                <li>The induced emf is proportional to the number of turns in the coil.</li>
            </ul>
            <div class="formula">
                emf = - N (ΔΦ / Δt)
            </div>
            <p>The negative sign indicates the induced emf opposes the change causing it, according to Lenz's law.</p>
        </div>
        `
    },

    l2: {
        title: "Lenz's Law",
        text: `
        <div class="lesson-section">
            <h3>Lenz's Law</h3>
            <p>
                Lenz's law determines the direction of the induced current in a coil. The induced current always opposes the change in magnetic flux that produced it.
            </p>
        </div>

        <div class="lesson-section">
            <h3>Explanation</h3>
            <ul>
                <li>When a magnet is moved towards a coil, the induced current creates a magnetic field that repels the magnet (like poles repel).</li>
                <li>When a magnet is moved away, the induced current creates a magnetic field that attracts the magnet (opposite poles attract).</li>
            </ul>
        </div>
        `
    },

    l3: {
        title: "Mutual and Self Induction",
        text: `
        <div class="lesson-section">
            <h3>Mutual Induction</h3>
            <p>
                Mutual induction occurs when a changing current in a primary coil induces an emf in a nearby secondary coil, opposing the change.
            </p>
            <ul>
                <li>Induced emf occurs when the primary coil moves relative to the secondary coil.</li>
                <li>Or when the current in the primary coil changes (using rheostat or switch).</li>
            </ul>
            <div class="formula">
                emf2 = - M (ΔI1 / Δt) = - N2 (ΔΦ2 / Δt)
            </div>
        </div>

        <div class="lesson-section">
            <h3>Self Induction</h3>
            <p>
                Self-induction occurs when a changing current in a coil induces an emf in the same coil. The induced emf opposes the change in current.
            </p>
            <div class="formula">
                emf = - L (ΔI / Δt) = - N (ΔΦ / Δt)
            </div>
        </div>
        `
    },

    l4: {
        title: "Induced EMF in a Moving Wire",
        text: `
        <div class="lesson-section">
            <h3>Introduction</h3>
            <p>
                When a straight wire moves perpendicular to a magnetic field, a voltage (emf) is generated across its ends.
            </p>
        </div>

        <div class="lesson-section">
            <h3>Calculation of Induced EMF</h3>
            <ul>
                <li>Wire length: l</li>
                <li>Magnetic field: B</li>
                <li>Velocity: v</li>
            </ul>
            <div class="formula">
                emf = B l v
            </div>
            <p>If wire moves at an angle θ to the field: emf = B l v sinθ</p>
        </div>

        <div class="lesson-section">
            <h3>Fleming's Right Hand Rule</h3>
            <ul>
                <li>Thumb: motion of wire</li>
                <li>Pointer: magnetic field direction</li>
                <li>Middle finger: induced current direction</li>
            </ul>
        </div>
        `
    },

    l5: {
        title: "Alternating Current and Transformer",
        text: `
        <div class="lesson-section">
            <h3>Direct and Alternating Current</h3>
            <ul>
                <li><b>DC:</b> Flows in one direction, constant intensity, steady magnetic field.</li>
                <li><b>AC:</b> Flows back and forth, variable intensity, produces changing magnetic field, has frequency.</li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>AC Generator</h3>
            <p>
                Converts mechanical energy into electrical energy based on electromagnetic induction. The coil rotates in a uniform magnetic field, inducing an alternating current.
            </p>
            <p>Fleming’s Right Hand Rule determines the current direction in the coil.</p>
        </div>

        <div class="lesson-section">
            <h3>Transformer</h3>
            <p>
                A transformer transfers AC power between circuits via mutual induction. It can step up or step down voltage according to the ratio of turns in primary and secondary coils.
            </p>
            <div class="formula">
                Vp / Vs = Np / Ns ; Ip / Is = Ns / Np
            </div>
            <p>Efficiency η = (Output Power / Input Power) × 100%</p>
        </div>
        `
    },
};

const cards = document.querySelectorAll(".lesson-card");
const lessonsSection = document.querySelector(".lessons");
const lessonContent = document.getElementById("lessonContent");
const lessonTitle = document.getElementById("lessonTitle");
const lessonText = document.getElementById("lessonText");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const key = card.dataset.lesson;
        lessonsSection.style.display = "none";
        lessonContent.style.display = "block";
        lessonTitle.textContent = lessonData[key].title;
        lessonText.innerHTML = lessonData[key].text;
    });
});

const navLinks = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

const backBtn = document.getElementById("backBtn");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const key = card.dataset.lesson;
        lessonsSection.style.display = "none";
        lessonContent.style.display = "block";
        lessonTitle.textContent = lessonData[key].title;
        lessonText.innerHTML = lessonData[key].text;
    });
});

backBtn.addEventListener("click", () => {
    lessonContent.style.display = "none";
    lessonsSection.style.display = "grid";
});

const titleText = "Chapter 2: Electromagnetic induction";
const descText =
    "In this chapter, we explore the phenomenon of electromagnetic induction, where changing magnetic fields induce electric currents in conductors. We will study Faraday's and Lenz's laws, the principles of induced EMF, and how these effects are applied in devices like generators, transformers, and electric motors. Practical examples and experiments will illustrate the relationship between magnetic fields and current-carrying conductors, deepening our understanding of electromagnetism in real-world applications.";
const titleElement = document.getElementById("chapterTitle");
const descElement = document.getElementById("chapterDesc");

let titleIndex = 0;
let descIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        titleElement.textContent += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 60);
    } else {
        setTimeout(typeDesc, 300);
    }
}

function typeDesc() {
    if (descIndex < descText.length) {
        descElement.textContent += descText.charAt(descIndex);
        descIndex++;
        setTimeout(typeDesc, 20);
    }
}

typeTitle();
