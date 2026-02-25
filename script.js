/**
 * 📖 Configuration & Logique pour vavanessa.dev
 * Gère les effets interactifs de la page, principalement l'effet 3D (tilt)
 * du conteneur central et le suivi subtil de la souris avec le blob lumineux.
 * 
 * → Écoute les mouvements de la souris
 * → Module la rotation de la carte glassmorphism
 * → Déplace le conteneur lumineux pour un effet de profondeur
 */

document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".content");
    const blob = document.querySelector(".blob");

    // L'effet 3D et le suivi de souris
    document.addEventListener("mousemove", (e) => {
        // Position globale de la souris
        const { clientX: x, clientY: y } = e;
        
        // Centre de l'écran
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Calcul du tilt pour la carte (effet 3D léger)
        // Les valeurs de /50 et /100 réduisent l'amplitude pour garder un effet subtil et premium
        const rotateX = ((y - centerY) / 50).toFixed(2);
        const rotateY = ((centerX - x) / 100).toFixed(2);
        
        // Applique la rotation au conteneur principal
        if (card) {
            // Remplace l'animation de flottement par le suivi en X et Y
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            card.style.transition = "transform 0.1s ease-out"; // Une transition très courte pour que l'effet soit réactif
        }

        // Déplace le blob de fond pour suivre la souris
        if (blob) {
            // Un effet d'inertie léger s'applique grâce au CSS existant ("transition: transform 0.6s...")
            blob.style.transform = `translate(calc(-50% + ${x - centerX}px), calc(-50% + ${y - centerY}px))`;
        }
    });

    // Reset l'effet lorsque la souris quitte la fenêtre pour un retour à la normale propre
    document.addEventListener("mouseleave", () => {
        if (card) {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            card.style.transition = "transform 0.5s ease"; // Retour doux au centre
        }
        if (blob) {
            blob.style.transform = `translate(-50%, -50%)`;
        }
    });

    // Remettre la transition rapide après le leave
    document.addEventListener("mouseenter", () => {
        if (card) {
            card.style.transition = "transform 0.1s ease-out";
        }
    });
});
