function goHome() {
    window.location.href = "index.html";
}

const lessonData = {
    l1: {
        title: "Introduction – Magnetic Effect of Current",
        text: `
        <div class="lesson-section">
            <h3>Introduction</h3>
            <p>
                The magnetic effect of electric current (electromagnetism) is defined as:
            </p>
            <p class="definition">
                A magnetic field is produced around a conductor when an electric current passes through it.
            </p>
            <ul>
                <li>The magnetic effect of current was discovered by <b>Hans Christian Oersted</b> (Danish physicist) in 1820.</li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Oersted Experiment</h3>
            <ul>
                <li>Oersted brought a compass near a metallic wire carrying an electric current and noticed that the compass was deflected.</li>
                <li>When the current was switched off, the compass returned to its original position.</li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Conclusion</h3>
            <p>
                When an electric current flows through a conductor, it always produces a magnetic field around it.
                The deflection of the compass proves the existence of this magnetic field.
            </p>
            <p>
                This discovery started a chain of events that helped shape modern industrial civilization.
            </p>
        </div>

        <div class="lesson-section">
            <h3>Origin of Magnetism</h3>
            <p>
                Magnetism is generated due to the motion of electrons (electric charges) inside atoms.
                It arises from two types of electron motion:
            </p>
            <ol>
                <li>Orbital motion of electrons around the nucleus.</li>
                <li>Spin of electrons around their own axis.</li>
            </ol>
        </div>

        <div class="lesson-section">
            <h3>Magnetic Field</h3>
            <p class="definition">
                The magnetic field is the region around a magnet or a current-carrying conductor where magnetic forces can act.
            </p>
            <ul>
                <li>Magnetic field lines are imaginary lines used to represent magnetic fields.</li>
                <li>They show the shape, direction, and strength of the magnetic field.</li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Properties of Magnetic Field Lines</h3>
            <ul>
                <li>Magnetic field lines never intersect.</li>
                <li>They always form closed continuous loops.</li>
                <li>Outside the magnet, they go from North to South.</li>
                <li>Inside the magnet, they go from South to North.</li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Magnetic Flux (Φ<sub>m</sub>)</h3>
            <p>
                Magnetic flux is the total number of magnetic field lines passing through a surface.
            </p>
            <div class="formula">
                Φ<sub>m</sub> = B A cosθ
            </div>
            <ul>
                <li><b>Φ<sub>m</sub></b>: Magnetic flux (Weber)</li>
                <li><b>B</b>: Magnetic flux density (Tesla)</li>
                <li><b>A</b>: Area (m²)</li>
                <li><b>θ</b>: Angle between field direction and normal to the surface</li>
            </ul>
        </div>
        `
    },

    l2: {
        title: "Magnetic Field Due to a Straight Conductor",
        text: `
        <div class="lesson-section">
            <h3>Introduction</h3>
            <p>
                Every electric current produces a magnetic field. This magnetic field can be visualized
                as circular magnetic field lines surrounding the current-carrying wire.
            </p>
        </div>

        <div class="lesson-section">
            <h3>Early Experiments</h3>
            <ul>
                <li>
                    In 1819, Oersted showed that an electric current can deflect a magnetic needle
                    placed near a current-carrying conductor.
                </li>
                <li>
                    When current flows through the conductor, the magnetic needle is deflected.
                </li>
                <li>
                    When the current stops, the needle returns to its original position.
                </li>
                <li>
                    Reversing the direction of the current reverses the direction of needle deflection.
                </li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Magnetic Flux vs Magnetic Flux Density</h3>
            <p>
                It is important to distinguish between magnetic flux and magnetic flux density.
            </p>
        </div>

        <div class="lesson-section">
            <h3>Magnetic Flux Density (B)</h3>
            <ul>
                <li>
                    It describes the density and direction of magnetic field lines passing through
                    a certain area.
                </li>
                <li>
                    The denser the magnetic field lines, the greater the magnetic flux density.
                </li>
                <li>
                    It is measured in <b>Tesla (T)</b>, equivalent to <b>Wb/m²</b>.
                </li>
            </ul>

            <p class="definition">
                Magnetic flux density is defined as the total number of magnetic flux lines passing
                normally through a unit area.
            </p>

            <div class="formula">
                B = Φ<sub>B</sub> / A
            </div>
        </div>

        <div class="lesson-section">
            <h3>Magnetic Field Around a Straight Wire</h3>
            <p>
                The shape of the magnetic field around a straight current-carrying wire can be
                examined using iron filings.
            </p>
            <ul>
                <li>
                    Magnetic field lines form concentric circles centered on the wire.
                </li>
                <li>
                    The field lines are closer near the wire and farther apart as the distance increases.
                </li>
                <li>
                    Increasing the current increases the density of the field lines.
                </li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Magnitude of Magnetic Field Density</h3>
            <p>
                The magnetic field density at a point near a straight wire is given by
                Ampere’s circular law.
            </p>

            <div class="formula">
                B = (μ I) / (2π d)
            </div>

            <ul>
                <li><b>B</b>: Magnetic field density (Tesla)</li>
                <li><b>I</b>: Current intensity (Ampere)</li>
                <li><b>d</b>: Distance from the wire (meter)</li>
                <li><b>μ</b>: Magnetic permeability of the medium</li>
            </ul>

            <p class="definition">
                Magnetic permeability is the ability of a medium to allow magnetic flux lines
                to pass through it.
            </p>
        </div>

        <div class="lesson-section">
            <h3>Direction of the Magnetic Field</h3>
            <p>
                The direction of the magnetic field around a current-carrying wire can be determined
                using Ampere’s Right Hand Rule.
            </p>

            <p class="definition">
                If the thumb of the right hand points in the direction of the current, the curled fingers
                indicate the direction of the magnetic field lines.
            </p>
        </div>
        `
    },

    l3: {
        title: "Circular Coil",
        text: `
        <div class="lesson-section">
            <h3>Introduction</h3>
            <p>
                A circular coil of wire can be used to generate a nearly uniform magnetic field similar to that of a short bar magnet.
            </p>
        </div>

        <div class="lesson-section">
            <h3>Magnetic Field Due to a Circular Coil</h3>
            <p>
                When a current is passed through a circular coil, a magnetic field is produced around it which is more concentrated in the center of the loop than outside the loop.
            </p>
            <ul>
                <li>The flux lines are circular surrounding the two sides.</li>
                <li>The flux lines are no longer circular near the center.</li>
                <li>The flux lines become straight and parallel lines perpendicular to the plane of the coil at the center of the coil, indicating a uniform magnetic field.</li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Magnitude of Magnetic Field Density (B)</h3>
            <p>
                The magnetic field density at the center of the circular coil is given by:
            </p>
            <div class="formula">
                B = (μ N I) / (2 r)
            </div>
            <ul>
                <li><b>B</b>: Magnetic flux density (Tesla)</li>
                <li><b>I</b>: Current intensity (Ampere)</li>
                <li><b>r</b>: Radius of the circular coil (meter)</li>
                <li><b>μ</b>: Permeability of the medium (μ<sub>air</sub> = 4π × 10<sup>-7</sup> Wb/m·A)</li>
                <li><b>N</b>: Number of turns</li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Direction of the Magnetic Field</h3>
            <ul>
                <li>The <b>Right Cork Screw Rule</b> (Maxwell's Screw Rule) is used to determine the direction of the magnetic field resulting from a current in a circular coil.</li>
                <li>If the rotation of a right-handed screw points in the direction of the current (from + to -), the motion of the screw gives the direction of the magnetic field.</li>
                <li><b>Clockwise Rule (Polarity of Coil)</b>: The side where the current flows clockwise is the South Pole; the side where the current flows counterclockwise is the North Pole.</li>
                <li>Reversing the current reverses the direction of the magnetic field.</li>
                <li>If a straight wire of length <b>l</b> is bent to form a circular coil of radius <b>r</b> and <b>N</b> turns, then <b>l = 2π r N</b>.</li>
            </ul>
        </div>
        `
    },

    l4: {
        title: "Solenoid",
        text: `
        <div class="lesson-section">
            <h3>Introduction</h3>
            <p>
                A solenoid is considered a long straight coil of wire used to generate a magnetic field similar to that of a bar magnet.
            </p>
            <p>
                Solenoids have many practical applications in daily life.
            </p>
        </div>

        <div class="lesson-section">
            <h3>Magnetic Field Due to a Solenoid</h3>
            <ul>
                <li>The lines of magnetic flux outside the solenoid are closed loops moving from the North Pole to the South Pole.</li>
                <li>The lines of magnetic flux through the middle of the solenoid are straight and parallel to the axis, creating a uniform magnetic field.</li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Magnitude of Magnetic Field Density (B)</h3>
            <div class="formula">
                B = (μ N I) / L
            </div>
            <p>
                Or, B = μ n I, where n = N / L (turns per unit length).
            </p>
            <ul>
                <li><b>B</b>: Magnetic field density (Tesla)</li>
                <li><b>I</b>: Current intensity (Ampere)</li>
                <li><b>L</b>: Length of the solenoid (meter)</li>
                <li><b>N</b>: Number of turns</li>
                <li><b>μ</b>: Permeability of medium (μ<sub>air</sub> = 4π × 10<sup>-7</sup> Wb/m·A)</li>
            </ul>
            <p>
                The field strength increases when a soft iron core is inserted due to its high permeability.
            </p>
        </div>

        <div class="lesson-section">
            <h3>Direction of the Magnetic Field</h3>
            <ul>
                <li><b>Amperes Right Hand Rule</b>: Fingers wrap along coil direction pointing with current; thumb points to North Pole (field direction).</li>
                <li><b>Clockwise Rule (Polarity)</b>: Clockwise side is South Pole; counterclockwise side is North Pole.</li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Neutral Point</h3>
            <p>
                The neutral point is where the total magnetic flux density is zero:
            </p>
            <div class="formula">
                B<sub>t</sub> = 0, B1 = B2
            </div>
        </div>
        `
    },

    l5: {
        title: "Magnetic Force",
        text: `
        <div class="lesson-section">
            <h3>Introduction</h3>
            <p>
                The magnetic force acts on a wire carrying current placed in a uniform magnetic field.
            </p>
        </div>

        <div class="lesson-section">
            <h3>Direction of Force</h3>
            <ul>
                <li>The force is perpendicular to both the current and magnetic field.</li>
                <li>Reversing current or field reverses force direction.</li>
            </ul>
            <p><b>Fleming's Left Hand Rule</b> determines the direction of motion:</p>
            <ul>
                <li>Thumb: direction of motion</li>
                <li>First finger: direction of magnetic field</li>
                <li>Second finger: direction of current</li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Factors Affecting Magnetic Force</h3>
            <ul>
                <li>Length of wire (L) → F ∝ L</li>
                <li>Current (I) → F ∝ I</li>
                <li>Magnetic flux density (B) → F ∝ B</li>
            </ul>
            <div class="formula">
                F = I B L
            </div>
            <p>
                If wire makes angle θ with field: F = B I L sin θ. Maximum force when perpendicular (θ=90°), zero when parallel (θ=0°).
            </p>
        </div>

        <div class="lesson-section">
            <h3>Magnetic Flux Density</h3>
            <p>
                B = F / (I L) (force per unit current and unit length perpendicular to field). Tesla is defined as the flux density that exerts 1N on 1m wire carrying 1A perpendicular to field.
            </p>
        </div>
        `
    },

    l6: {
        title: "Magnetic Torque",
        text: `
        <div class="lesson-section">
            <h3>Introduction</h3>
            <p>
                A rectangular coil carrying current in a uniform magnetic field experiences torque.
            </p>
        </div>

        <div class="lesson-section">
            <h3>Torque on a Rectangular Coil</h3>
            <ul>
                <li>Wires parallel to flux: force = 0</li>
                <li>Wires perpendicular to flux: equal and opposite forces → torque τ = B I A N</li>
                <li>If coil is inclined at angle θ to flux: τ = B I A N sinθ</li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Factors Affecting Torque</h3>
            <ul>
                <li>Magnetic flux density (B)</li>
                <li>Current (I)</li>
                <li>Area of coil (A)</li>
                <li>Number of turns (N)</li>
                <li>Angle θ between normal to coil and field</li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Magnetic Dipole Moment</h3>
            <p>
                |m<sub>d</sub>| = I A N. Vector normal to coil plane from North Pole.
            </p>
            <ul>
                <li>Parallel to flux → τ = 0</li>
                <li>Perpendicular to flux → τ = τ<sub>max</sub> = B I A N</li>
            </ul>
        </div>

        <div class="lesson-section">
            <h3>Applications</h3>
            <p>
                The concept of torque on a current-carrying coil is the basis of instruments like galvanometers and electric motors.
            </p>
        </div>
        `
    }
};

const cards = document.querySelectorAll(".lesson-card");
const lessonsSection = document.querySelector(".lessons");
const lessonContent = document.getElementById("lessonContent");
const lessonTitle = document.getElementById("lessonTitle");
const lessonText = document.getElementById("lessonText");

cards.forEach(card => {
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

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

const backBtn = document.getElementById("backBtn");

cards.forEach(card => {
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

const titleText = "Chapter 1: Magnetic Effect of Current";
const descText =
    "This chapter explains how electric current produces magnetic effects, how magnetic fields are formed, and how they interact with conductors and coils. We will study the behavior, rules, and applications of these effects.";

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