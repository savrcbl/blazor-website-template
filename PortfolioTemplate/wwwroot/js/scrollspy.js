// Highlights the sidebar nav link matching whichever section the user has scrolled to.
// Uses a fixed offset from the top of the viewport rather than intersection ratios,
// since ratio-based detection is unreliable with a tall hero section.
(function () {
    let sections = [];
    let links = [];
    let ticking = false;
    const OFFSET = 160; // px from top of viewport that counts as "current"

    function setActive(id) {
        links.forEach((link) => {
            link.classList.toggle('active', link.dataset.section === id);
        });
    }

    function computeActive() {
        if (sections.length === 0) return;

        let currentId = sections[0].id;

        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= OFFSET) {
                currentId = section.id;
            }
        }

        setActive(currentId);
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(computeActive);
            ticking = true;
        }
    }

    function setup() {
        sections = Array.from(document.querySelectorAll('section[id]'));
        links = Array.from(document.querySelectorAll('.scrollspy-nav .nav-link[data-section]'));

        if (sections.length === 0 || links.length === 0) {
            return;
        }

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', computeActive);

        computeActive();
    }

    document.addEventListener('DOMContentLoaded', setup);

    // Re-run after Blazor's enhanced navigation swaps content back in.
    if (window.Blazor && window.Blazor.addEventListener) {
        window.Blazor.addEventListener('enhancedload', setup);
    } else {
        document.addEventListener('blazor:enhancedload', setup);
    }
})();
