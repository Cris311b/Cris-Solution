const elementos = document.querySelectorAll(
    ".card, .step, .showcase-text, .floating-web"
);


const observador = new IntersectionObserver(

    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementos.forEach((elemento) => {

    observador.observe(elemento);

});


function contactar() {

    alert(
        "¡Perfecto! Escríbeme para hablar sobre tu página web."
    );

}