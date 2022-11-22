import logoAssets from '../assets/LogoArcos1.svg';

import oidoCirugiaAssets1 from '../assets/cirugia_oido1.JPG';
import oidoCirugiaAssets2 from '../assets/cirugia_oido2.JPG';
import oidoCirugiaAssets3 from '../assets/cirugia_oido3.JPG';
import oidoCirugiaAssets4 from '../assets/cirugia_oido4.JPG';

const menu = {

    'limpiezaOidos': {
        'nombre': 'Limpieza de oidos',
        'data': `Contamos con el sistema más avanzado para mantener 
                la limpieza de tus oídos mediante el retiro de la 
                cerilla con visión endoscópica. El paciente ve en una 
                pantalla como son limpiados sus oídos.`,
    },

    'rinoplastia': {
        'nombre': 'Rinoplastia',
        'data': `Utilizamos varias técnicas quirúrgicas y 
                aplicamos la que más se adapte a tu nariz.  
                Técnica abierta, cerrada y ultrasónica.`,
    },

    'septumplastia': {
        'nombre': 'Septumplastia',
        'data': `Corrección funcional del tabique nasal 
                    ya sea por algún golpe o por herencia. 
                    Técnica combinada macroscópica con 
                    endoscópica.`,
    },

    'cornetes': {
        'nombre': 'Cornetes',
        'data': `Tratamiento de los cornetes nasales cuando 
                    son hipertróficos, no solo el tabique 
                    nasal es causa de obstrucción respiratoria.`,
    },

    'exploracion': {
        'nombre': 'Exploración endoscópica del oído',
        'data': `Utilizando sistema endoscópico con 
                resolución visual aumentada y dirigida 
                observando a detalle tu conducto externo 
                detectando enfermedades que con otros 
                sistemas tradicionales no es posible hacerlo.`,
    },

    'timpanoplastia': {
        'nombre': 'Timpanoplastia',
        'data': `Es la reparación de una membrana timpánica 
                rota  o enferma.  Esta cirugía se realiza 
                con la técnica endoscópica conociéndose como
                cirugía de minima invasión.`,
    },

    'mastoidectomia': {
        'nombre': 'Mastoidectomia',
        'data': `Cirugía propuesta para enfermedades 
                crónicas oído medio frecuentemente por 
                infecciones y/o tumores.  En nuestro 
                centro hacemos la Mastoidectomía Híbrida 
                en donde se utiliza el endoscopio y el 
                microscopio para una mejor visualización 
                y erradicar la enfermedad del oído.`,
    },

    'amigdalectomía': {
        'nombre': 'Amigdalectomía',
        'data': `Cirugía propuesta para erradicar las 
                    infecciones crónicas de las anginas o 
                    también conocidas como amígdalas.  
                    Utilizamos la plastia térmica para un 
                    mejor resultado postquirúrgico y menor 
                    riesgo de complicaciones porque al 
                    momento de retirar la angina, se realiza 
                    la cauterización.`,
    },

    'adenoidectomía': {
        'nombre': 'Adenoidectomía',
        'data': `Cirugía propuesta para retirar un tejido 
                    que se encuentra por detrás de la nariz 
                    y por arriba del paladar que causa 
                    obstrucción respiratoria en niños 
                    llegando a modificar el desarrollo de 
                    la cara por la respiración oral 
                    crónica,  pero además puede afectar a 
                    los oídos causando pérdida de la 
                    audición.`,
    },

    'estapedectomía': {
        'nombre': 'Estapedectomía',
        'data': `Cirugía propuesta para corregir la sordera 
                progresiva.  El objetivo es retirar el hueso
                 más pequeño del cuerpo llamado Estribo, ya
                  que es afectado por la formación un callo
                   de hueso, evitando la vibración y 
                   conducción de la audición del oído medio
                    al oído interno.  En su lugar se coloca 
                    una prótesis permitiendo la continuidad 
                    vibratil de la cadena de huesecillos y 
                    el paciente recupera la audición  de 
                    nueva cuenta.`,
    },

    'sinusitis': {
        'nombre': 'Sinusitis',
        'data': `Padecimiento crónico de la nariz y senos 
                paranasales.  Cuando el tratamiento médico 
                no es suficiente, se requiere de combinar 
                con un procedimiento quirúrgico (hay varios
                     métodos) para erradicar la enfermedad
                      y/o evitar complicaciones difíciles 
                      de resolver.  Para el tratamiento
                       quirúrgico de la sinusitis crónica 
                       contamos con el sistema de endoscopia 
                       realizando el procedimiento con 
                       mayor exactitud sin dejar cicatriz 
                       visible en la cara del paciente.`,
    },

    'poliposnNasales': {
        'nombre': 'Pólipos nasales',
        'data': `Enfermedad en donde se forma tejido nuevo 
                dentro de la nariz y senos paranasales 
                obstruyendo la respiración nasal  ya sea 
                parcial o totalmente.   Hay varios abordajes
                para su tratamiento...todos realizados con
                endoscopía.`,
    },

    'cuerdasVocales': {
        'nombre': 'Cuerdas Vocales',
        'data': `Se presenta la enfermedad con mayor 
                    frecuencia en forma de Nódulo o Pólipo. 
                    El paciente refiere voz ronca y por lo 
                    regular continuamente está aclarando su 
                    garganta.   El diagnóstico se realiza 
                    en el consultorio mediante una 
                    Laringoscopía utilizando un endoscopio
                     para visualizar directamente la cuerdas
                    vocales del paciente. Se propone 
                    tratamiento foniátrico si no esta 
                    complicado, de otra forma se retiran 
                    mediante endoscopía laríngea utilizando 
                    un microscopio quirúrgico.`,
    },

    'botox': {
        'nombre': 'Toxina Botulínica (Botox)',
        'data': `Aplicación de Toxina Botulínica para evitar 
                el daño prematuro de la piel disminuyendo 
                las líneas de expresión faciales.`,
    },

};

const metodosPago = {
    // TODO: Iconos o logos de los metodos de pago
}

const assets = {
    logo: {
        url: logoAssets,
        alt: 'Logo ARCOSCEO 2022',
    },

    cirugiaOido1: {
        ulr: oidoCirugiaAssets1,
        alt: 'Cirugia de Oido en Cancún',
    },
    cirugiaOido2: {
        ulr: oidoCirugiaAssets2,
        alt: 'Cirugia de Oido en Cancún',
    },
    cirugiaOido3: {
        ulr: oidoCirugiaAssets3,
        alt: 'Cirugia de Oido en Cancún',
    },
    cirugiaOido4: {
        ulr: oidoCirugiaAssets4,
        alt: 'Cirugia de Oido en Cancún',
    }
}

export {
    menu,
    metodosPago,
    assets,
}