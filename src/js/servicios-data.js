const SERVICIOS_DB = {
    // CATEGORÍA: Manicure & Pedicure Tradicional
    "tradicional-manos-dama": {
        titulo: "Manicure Tradicional - Manos Dama",
        categoria: "Manicure & Pedicure Tradicional",
        descripcion: "Un servicio diseñado para el cuidado esencial y la elegancia diaria de tus manos. El proceso incluye remoción de esmalte anterior (tradicional), higienización, corte y limado de uñas según tu preferencia, empuje y retiro de cutícula, pulido de la placa ungueal, exfoliación para retirar células muertas, masaje relajante e hidratante con loción premium, y finalmente, la aplicación de esmalte tradicional y aceite de cutícula para un acabado perfecto.",
        precio: "$20.000",
        duracion: "1 hora",
        beneficios: [
            "Mantiene las uñas saludables y con una apariencia limpia.",
            "Previene problemas como uñeros y padrastros.",
            "Mejora la circulación de las manos con el masaje relajante.",
            "Recomendación post: Evitar el contacto prolongado con agua caliente las primeras dos horas."
        ],
        faq: [
            { q: "¿Incluye retiro de acrílico o semipermanente?", a: "No, el retiro de sistemas artificiales o esmaltado semipermanente tiene un costo y tiempo adicional." },
            { q: "¿Cuánto tiempo dura el esmalte tradicional?", a: "Dependiendo del cuidado y actividades diarias, suele durar de forma óptima entre 5 a 7 días." }
        ],
        msg_wa: "Hola, deseo agendar una cita para Manicure Tradicional Manos Dama ($20.000).",
        img_hero: "../assets/galeria/WhatsApp Image 2026-03-07 at 9.43.39 PM (1).jpeg",
        galeria: [
            "../assets/galeria/WhatsApp Image 2026-03-07 at 9.43.38 PM.jpeg",
            "../assets/galeria/WhatsApp Image 2026-03-07 at 9.43.39 PM.jpeg"
        ]
    },
    "tradicional-pies-dama": {
        titulo: "Pedicure Tradicional - Pies Dama",
        categoria: "Manicure & Pedicure Tradicional",
        descripcion: "Cuidado profesional para mantener tus pies sanos y estéticamente perfectos. Incluye inmersión relajante, corte y limado, remoción completa de cutículas, tratamiento de callosidades leves, exfoliación, masaje hidratante en pies y pantorrillas, y esmaltado tradicional con el color de tu elección.",
        precio: "$20.000",
        duracion: "1 hora",
        beneficios: [
            "Alivia la tensión acumulada en los pies.",
            "Suaviza la piel y reduce durezas.",
            "Recomendación pre: Por favor, asista con calzado abierto (sandalias) para evitar estropear el esmalte fresco."
        ],
        faq: [
            { q: "¿Tratan uñas encarnadas severas?", a: "Realizamos limpieza preventiva, pero en casos médicos severos recomendamos consultar con un podólogo especialista." }
        ],
        msg_wa: "Hola, deseo agendar una cita para Pedicure Tradicional Pies Dama ($20.000).",
        img_hero: "https://images.unsplash.com/photo-1516975080661-464a93c9d7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        galeria: []
    },
    "tradicional-manos-caballero": {
        titulo: "Manicure Tradicional - Manos Caballero",
        categoria: "Manicure & Pedicure Tradicional",
        descripcion: "Atención estética e higiénica enfocada en las necesidades de limpieza y pulcritud masculina. Incluye limpieza profunda, corte anatómico, limado, tratamiento especial de cutículas, exfoliación para retirar asperezas, masaje relajante y aplicación opcional de brillo natural o mate protector.",
        precio: "$20.000",
        duracion: "1 hora",
        beneficios: [
            "Mejora significativamente la presentación personal.",
            "Combate la resequedad y dureza natural de la piel masculina."
        ],
        faq: [
            { q: "¿Se aplica algún color?", a: "Por defecto aplicamos una base transparente y mate que nutre sin dejar brillo. Si no deseas ninguna base, simplemente pulimos la uña para un brillo natural." }
        ],
        msg_wa: "Hola, deseo agendar una cita para Manicure Tradicional Caballero ($20.000).",
        img_hero: "https://images.unsplash.com/photo-1544161515-4ab2ce8286dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        galeria: []
    },
    "tradicional-pies-caballero": {
        titulo: "Pedicure Tradicional - Pies Caballero",
        categoria: "Manicure & Pedicure Tradicional",
        descripcion: "Higiene y confort total para pies masculinos. Incluye baño relajante, corte recto clínico para prevenir uñeros, limpieza de cutículas, remoción experta de excesos de piel hiperqueratósica (callosidades), exfoliación vigorizante y masaje profundo reparador de la fatiga del pie.",
        precio: "$25.000",
        duracion: "1 hora",
        beneficios: [
            "Previene eficazmente la encarnación de uñas.",
            "Elimina el cansancio crónico del pie mediante el masaje.",
            "Rebaja y suaviza durezas generadas por zapatos deportivos o formales."
        ],
        faq: [
            { q: "¿Es un procedimiento doloroso?", a: "En absoluto. Todos nuestros procedimientos de limpieza son no invasivos y altamente relajantes." }
        ],
        msg_wa: "Hola, deseo agendar una cita para Pedicure Tradicional Caballero ($25.000).",
        img_hero: "https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        galeria: []
    },

    // CATEGORÍA: Semipermanentes
    "semipermanente-manos-dama": {
        titulo: "Semipermanente - Manos Dama",
        categoria: "Semipermanentes",
        descripcion: "Resultados impecables de larga duración. Realizamos una manicura rusa combinada (con torno/fresa) para una limpieza milimétrica y asegurar que el esmalte se aplique lo más cerca posible de la cutícula. Aplicamos nivelación base, seguido de color de altísima pigmentación y sellado UV/LED con top coat ultra brillante.",
        precio: "$35.000",
        duracion: "1 hora",
        beneficios: [
            "Duración extendida: de 15 a 21 días de brillo perfecto.",
            "Secado inmediato al 100% bajo lámpara (sin riesgo de dañarlo al salir).",
            "Aporta un leve grosor que protege la uña natural de quiebres."
        ],
        faq: [
            { q: "¿Daña la uña natural?", a: "La técnica correcta y los productos premium no dañan la uña. El daño suele ocurrir si el cliente arranca el esmalte en casa en lugar de retirarlo profesionalmente." },
            { q: "¿Incluye nail art?", a: "Incluye esmaltado unicolor. El diseño (nail art) tiene valor adicional según la complejidad." }
        ],
        msg_wa: "Hola, deseo agendar una cita para Semipermanente Manos Dama ($35.000).",
        img_hero: "https://images.unsplash.com/photo-1519014816548-bf5fe459e98b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        galeria: [
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    "semipermanente-manos-caballero": {
        titulo: "Semipermanente Matte - Manos Caballero",
        categoria: "Semipermanentes",
        descripcion: "Diseñado para hombres que requieren protección extrema en sus uñas (ya sea por trabajo manual, deporte o para dejar de morderlas). Se realiza limpieza combinada con torno y se aplica una base rubber fortalecedora con finalizador ultra matte, pasando completamente imperceptible mientras brinda máxima resistencia.",
        precio: "$25.000",
        duracion: "1 hora",
        beneficios: [
            "Tratamiento efectivo para personas que sufren de onicofagia (se muerden las uñas).",
            "Resistencia superior contra quiebres para trabajos manuales."
        ],
        faq: [
            { q: "¿Se nota que llevo semipermanente?", a: "Se aplica un top coat 100% mate que simula a la perfección la uña natural emparejada y limpia, sin aportar brillo artificial." }
        ],
        msg_wa: "Hola, deseo agendar Semipermanente Manos Caballero ($25.000).",
        img_hero: "https://images.unsplash.com/photo-1544161515-4ab2ce8286dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        galeria: []
    },
    "semipermanente-pies-dama": {
        titulo: "Semipermanente - Pies Dama",
        categoria: "Semipermanentes",
        descripcion: "Pedicure profunda con acabado inalterable. Procedimiento que incluye limpieza y corte clínico, remoción de cutícula, pulido, exfoliación, y recubrimiento con geles de alta resistencia. Ideal para vacaciones de playa, arena o uso constante de calzado cerrado sin estropear el esmalte.",
        precio: "$35.000",
        duracion: "1 hora",
        beneficios: [
            "Brillo o acabado mate por más de 30 días en los pies.",
            "Puedes usar calzado inmediatamente después de salir del estudio."
        ],
        faq: [
            { q: "¿Requiere un retiro profesional?", a: "Sí, siempre se debe retirar con herramientas adecuadas para no adelgazar la placa de la uña." }
        ],
        msg_wa: "Hola, deseo agendar Semipermanente Pies Dama ($35.000).",
        img_hero: "https://images.unsplash.com/photo-1516975080661-464a93c9d7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        galeria: []
    },
    "semipermanente-pies-caballero": {
        titulo: "Semipermanente Protector - Pies Caballero",
        categoria: "Semipermanentes",
        descripcion: "Atención especializada para pies masculinos sometidos a desgaste extremo (como atletas o deportistas). Incluye un pedicuro clínico exhaustivo y la aplicación local de un gel flexible reparador o fortalecedor que restaure uñas estriadas o rotas, logrando uniformidad.",
        precio: "$25.000",
        duracion: "1 hora",
        beneficios: [
            "Reconstruye la apariencia de uñas rotas o malformadas por traumatismos.",
            "Altísima durabilidad y resistencia al impacto de calzado deportivo."
        ],
        faq: [
            { q: "¿Funciona si tengo uñas rotas por correr?", a: "Sí, podemos hacer una reconstrucción localizada de las uñas traumadas para que recuperen su forma." }
        ],
        msg_wa: "Hola, deseo agendar Semipermanente Pies Caballero ($25.000).",
        img_hero: "https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        galeria: []
    },

    // CATEGORÍA: Spa & Otros
    "pedi-spa": {
        titulo: "Pedi Spa de Lujo",
        categoria: "Spa & Otros Servicios",
        descripcion: "El ritual definitivo de relajación para tus pies y piernas. Más que una higiene estética básica, este es un tratamiento terapéutico completo. Incluye sales minerales efervescentes limpiadoras, pedicure completa, peeling químico-físico intenso, envoltura en mascarilla de arcilla y fango para desintoxicación, calor térmico con toallas para abrir poros y finalmente reflexología podal extendida.",
        precio: "Dama y Caballero: $70.000",
        duracion: "1 hora y 30 minutos",
        beneficios: [
            "Efecto de descanso inmediato y desinflamatorio total para extremidades cansadas.",
            "Renovación celular profunda para una piel que se siente como 'nueva'.",
            "Mejora los niveles de estrés y circulación gracias al protocolo de calor térmico."
        ],
        faq: [
            { q: "¿Puedo recibir el servicio si estoy embarazada?", a: "Sí, utilizamos masajes suaves y adaptamos los movimientos a las necesidades de la persona embarazada." }
        ],
        msg_wa: "Hola, deseo reservar el ritual exclusivo Pedi Spa ($70.000).",
        img_hero: "https://images.unsplash.com/photo-1519415510236-0775d7e48b56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        galeria: [
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    "limpieza": {
        titulo: "Limpieza Profunda",
        categoria: "Spa & Otros Servicios",
        descripcion: "Procedimiento exprés netamente enfocado en la bioseguridad. Limpieza profunda del lecho de la uña, eliminación de perigeo, corte técnico, limado correctivo, y aceitado vitamínico sin esmaltado.",
        precio: "$15.000",
        duracion: "30 min",
        beneficios: [
            "Ideal para la salud de las uñas entre sistemas o esmaltados.",
            "Servicio rápido y eficiente para mantener el bienestar."
        ],
        faq: [
            { q: "¿Este servicio incluye color?", a: "No, es un servicio 100% de sanidad estricta y preparación natural profunda." }
        ],
        msg_wa: "Hola, deseo agendar Limpieza Profunda ($15.000).",
        img_hero: null, // Dejamos el gradiente premium por defecto para que sea más sólido y minimalista
        galeria: []
    },
    "recubrimiento": {
        titulo: "Recubrimiento y nivelación estructural",
        categoria: "Spa & Otros Servicios",
        descripcion: "Conocido como capping. Es un recubrimiento protector sobre la extensión de la uña natural usando bases fortificadas: Gel constructor de alta viscosidad, Wildergel o Acrílico cristal. Permite mantener el largo natural previniendo astillamientos bajo una arquitectura estructurada de balance (ápice).",
        precio: "$45.000",
        duracion: "2 horas",
        beneficios: [
            "Convierte las uñas quebradizas y de papel en uñas extremadamente duras y fuertes.",
            "Corrige estéticamente uñas planas, con grietas o corrugadas.",
            "Permite que la uña natural crezca sin romperse constantemente."
        ],
        faq: [
            { q: "¿Me extienden o alargan la uña?", a: "No, el recubrimiento trabaja exclusivamente sobre el largo actual de tu uña para protegerlo. Si deseas largo artificial debes optar por Uñas Press u otro sistema de extensión." }
        ],
        msg_wa: "Hola, deseo agendar Recubrimiento ($45.000).",
        img_hero: "https://images.unsplash.com/photo-1519014816548-bf5fe459e98b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        galeria: []
    },
    "unas-press": {
        titulo: "Extensiones Soft Gel / Uñas Press On",
        categoria: "Spa & Otros Servicios",
        descripcion: "La última tecnología mundial en sistemas de extensión. Son 'tips' fabricados 100% en gel que se adhieren a tu placa usando base de gel UV (Rubber base). Son ultra livianas, pre-moldeadas a la perfección (coffin, stiletto, almendra o cuadrada) y no requieren rebajar tu uña con tornos agresivos ni uso de monómero tóxico mezclado cera polvo. El precio de nuevas es para un set cero kilómetro, y el mantenimiento aborda el crecimiento semanas posteriores.",
        precio: "Nuevas: $70.000 / Mantenimiento: $50.000",
        duracion: "2 horas",
        beneficios: [
            "Extensión instantánea y ultra natural. No se notan abultadas ni gruesas.",
            "Totalmente hipoalergénicas y sin los fuertes olores del acrílico.",
            "El retiro es muchísimo menos doloroso y perjudicial que las extensiones antiguas acrílicas."
        ],
        faq: [
            { q: "¿Cuánto tiempo duran unas Press on o Soft Gel?", a: "Tienen una retención excelente de 3 a 4 semanas, tras lo cual se sugiere el *Mantenimiento* para sellar la zona de crecimiento sin bajarlas por completo." }
        ],
        msg_wa: "Hola, deseo agendar Extensión Soft Gel / Uñas Press (Nuevas o mantenimiento).",
        img_hero: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        galeria: []
    }
};
window.SERVICIOS_DB = SERVICIOS_DB;

document.addEventListener('DOMContentLoaded', () => {
    
    // Solo ejecutar si estamos en la página de detalle
    if(document.getElementById('service-title')){
        
        // Extraer id de la URL
        const urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        
        // Si no hay id o el id no existe en la BD, hacer redirect o cargar un default
        if(!id || !SERVICIOS_DB[id]){
            // Fallback genérico a uno conocido para mostrar cómo funciona
            id = "tradicional-manos-dama";
        }

        const data = SERVICIOS_DB[id];
        
        // DOM Elements
        const uiTitle = document.getElementById('service-title');
        const uiCategory = document.getElementById('service-category-crumb');
        const uiDesc = document.getElementById('service-description');
        const uiPrice = document.getElementById('service-price');
        const uiDuration = document.getElementById('service-duration');
        const uiWaBtn = document.getElementById('service-whatsapp-btn');
        const uiBenefits = document.getElementById('service-benefits');
        const uiFaq = document.getElementById('service-faq');
        const uiHero = document.getElementById('service-hero');

        // Llenar contenido básico
        if(uiTitle) uiTitle.textContent = data.titulo;
        if(uiCategory) uiCategory.textContent = data.categoria;
        if(uiDesc) uiDesc.textContent = data.descripcion;
        if(uiPrice) uiPrice.textContent = data.precio;
        if(uiDuration) uiDuration.textContent = data.duracion;
        
        // Enlace WhatsApp dinámico (con número de marcador y mensaje uri-encoded)
        if(uiWaBtn && data.msg_wa) {
            const telefonoEmpresa = "573219055451";
            const textEncoded = encodeURIComponent(data.msg_wa);
            uiWaBtn.href = `https://wa.me/${telefonoEmpresa}?text=${textEncoded}`;
            uiWaBtn.setAttribute('target', '_blank');
            uiWaBtn.setAttribute('rel', 'noopener noreferrer');
            // Asegurarnos de que no haya listeners previos bloqueando el click
            uiWaBtn.onclick = (e) => {
                // Si por alguna razón el href sigue siendo # (no debería), prevenimos.
                if(uiWaBtn.getAttribute('href') === '#') e.preventDefault();
            };
        }
        
        // Ajustar imagen de Hero section dinámicamente con la foto especificada por el usuario (Inmersivo)
        if(uiHero) {
            const heroImageUrl = "../assets/galeria/WhatsApp Image 2026-03-07 at 9.43.39 PM (1).jpeg";
            uiHero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('${heroImageUrl}')`;
        }

        // Generar lista de beneficios
        if(uiBenefits) {
            uiBenefits.innerHTML = '';
            data.beneficios.forEach(b => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check-circle gold-text"></i> ${b}`;
                uiBenefits.appendChild(li);
            });
        }

        // Generar FAQs
        if(uiFaq) {
            uiFaq.innerHTML = '';
            if(data.faq && data.faq.length > 0){
                data.faq.forEach(f => {
                    const faqItem = document.createElement('div');
                    faqItem.className = 'faq-item';
                    faqItem.innerHTML = `
                        <h4 class="faq-question"><i class="fas fa-question-circle"></i> ${f.q}</h4>
                        <p class="faq-answer">${f.a}</p>
                    `;
                    uiFaq.appendChild(faqItem);
                });
            }
        }

    }
});
