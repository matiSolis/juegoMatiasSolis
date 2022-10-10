// CONSTRUCTORES DEL JUEGO
class Personaje {
    constructor(tipo, vida, daño, objetos, inventario) {
        this.tipo = tipo;
        this.vida = vida;
        this.daño = daño;
        this.objetos = objetos;
        this.inventario = inventario;
    }
}

class Monstruos {
    constructor(tipo, vida, daño) {
        this.tipo = tipo;
        this.vida = vida;
        this.daño = daño;
    }
}

class ObjetoPj {
    constructor(nombre, vida, daño, durabilidadTurnos) {
        this.nombre = nombre;
        this.vida = vida;
        this.daño = daño;
        this.durabilidadTurnos = durabilidadTurnos;
    }
}



//OBJETOS
const objetoMago1 = new ObjetoPj("baston", 0, 30, 3);
const objetoMago2 = new ObjetoPj("capa", 50, 0, 2);
const objetoMago3 = new ObjetoPj("gorro", 20, 10, 1);

const objetoGuerrero1 = new ObjetoPj("espada", 0, 30, 3);
const objetoGuerrero2 = new ObjetoPj("armadura", 50, 0, 2);
const objetoGuerrero3 = new ObjetoPj("guantes", 20, 10, 1);

const objetoArquera1 = new ObjetoPj("arco", 0, 30, 3);
const objetoArquera2 = new ObjetoPj("pechera", 50, 0, 2);
const objetoArquera3 = new ObjetoPj("flecha", 20, 10, 1);

const objMago = [objetoMago1, objetoMago2, objetoMago3];
const objGuerrero = [objetoGuerrero1, objetoGuerrero2, objetoGuerrero3];
const objArquera = [objetoArquera1, objetoArquera2, objetoArquera3];

const inventarioMago = [];
const inventarioGuerrero = [];
const inventarioArquera = [];


//PERSONAJES Y MONSTRUOS
const mago = new Personaje("Mago", 100, 10, objMago, inventarioMago)
const guerrero = new Personaje("Guerrero", 100, 10, objGuerrero, inventarioGuerrero);
const arquera = new Personaje("Arquera", 100, 10, objArquera, inventarioArquera);

const orco = new Monstruos("Orco", 70, 20);
const araña = new Monstruos("Araña", 40, 5);
const huargo = new Monstruos("Huargo", 60, 10);
const troll = new Monstruos("Troll", 90, 25);
const balrog = new Monstruos("Balrog", 120, 35);

const monstruosArray = [araña, huargo, orco, troll, balrog];


//HISTORIA
alert("La montaña maldita");
alert("Muchos años atrás en Carnicabunstein ,un pueblo cercano a la gran montaña, un grupo de magos forjo una daga mágica. Esta daga le otorga a su portador la habilidad de controlar a los dragones.");
alert("El pueblo entro en guerra tras guerra ya que todos querían poseer el poder otorgado por el filoso tesoro. Tal fue el daño causado por la daga que sus creadores tomaron la drástica decisión de perderla en las catacumbas de la montaña y sellar la entrada con una maldición.");
alert("Cientos de años pasaron y una gran amenaza se fue haciendo más fuerte en el continente. Los ciudadanos de Carnicabunstein necesitan nuevamente la ayuda de los dragones, pero para poder controlarlos la daga deberán recuperar.");
alert("Estas listo para encontrar la daga y enfrentarte a las maldiciones de los antiguos magos?");

//SELECCION DE PERSONAJE
let seleccionPersonaje = Number(prompt("Seleccion de personaje: '1'- Mago, '2'- Guerrero, '3'- Arquera"));
switch (seleccionPersonaje) {
    case 1:
        seleccionPersonaje = mago;
        console.log("Has seleccionado al mago, sabia decision.");
        break;
    case 2:
        seleccionPersonaje = guerrero;
        console.log("Has seleccionado al guerrero, sabia decision.");
        break;
    case 3:
        seleccionPersonaje = arquera;
        console.log("Has seleccionado a la arquera, sabia decision.");
        break;
    default:
        console.log("Seleccion invalida.");
}
console.log(seleccionPersonaje);

function dropObjetosArray(Personaje){ 
    return Personaje.objetos[Math.floor(Math.random() * Personaje.objetos.length)]
}

function pjVida (Personaje) {
    return (Personaje.inventario.ObjetoPj.vida + Personaje.vida)
}

function pjDaño (Personaje) {
    return Personaje.inventario.ObjetoPj.daño + Personaje.daño
}

//JUEGO
alert("Te paras frente a la entrada de la montaña. Dejas de oir el canto de las aves, una ultima brisa acaricia tu cara. Te das vuelta para ver por ultima vez la luz del sol y pronuncias el hechizo que abre el paso. Enciendes tu antorcha y te adentras a lo desconocido. Lo que suceda a continuacion depende solo de ti y de las decisiones que tomes. Mantente alerta, la muerte acecha en la oscuridad.")
if (seleccionPersonaje === mago) {
        let enemigo;
        for(let i=0; i<monstruosArray.length; i++){
            let enemigo = monstruosArray[i];
            alert(`Comienzas a adentrarte en la montaña mientras bajas un empinado sendero. Oyes unos horribles gruñidos. Un ${enemigo.tipo} aparece corriendo hacia ti, piensa rapido joven ${seleccionPersonaje.tipo}!`);
        while (mago.vida > 0 && enemigo.vida > 0) {
            enemigo.vida -= mago.daño;
            mago.vida -= enemigo.daño;
            console.log(`Vida mago ${mago.vida}`);
            console.log(`Vida ${enemigo.tipo} ${enemigo.vida}`);
        }
        if (mago.vida <= 0) {
            alert("Tu camino ha llegado al fin. La muerte te ha alcanzado.");
        } else {
            alert("Has vencido a tu enemigo. Descansa un poco, nuevos peligros te esperan");
            dropObjetosArray(mago);
            inventarioMago.push(dropObjetosArray(mago));
            console.log(dropObjetosArray(mago));
            console.table(mago);
            mago.daño = parseInt (mago.daño + inventarioMago.daño)
            mago.vida = mago.vida + inventarioMago.vida;
            console.log(mago.vida);
            console.log(mago.daño);
        }
        }
} else if (seleccionPersonaje === guerrero) {
    let enemigo;
    for(let i=0; i<monstruosArray.length; i++){
        let enemigo = monstruosArray[i];
        alert(`Comienzas a adentrarte en la montaña mientras bajas un empinado sendero. Oyes unos horribles gruñidos. Un ${enemigo.tipo} aparece corriendo hacia ti, piensa rapido joven ${seleccionPersonaje.tipo}!`);
    while (guerrero.vida > 0 && enemigo.vida > 0) {
        enemigo.vida -= guerrero.daño;
        guerrero.vida -= enemigo.daño;
        console.log(`Vida guerrero ${guerrero.vida}`);
        console.log(`Vida ${enemigo.tipo} ${enemigo.vida}`);
    }
    if (guerrero.vida <= 0) {
        alert("Tu camino ha llegado al fin. La muerte te ha alcanzado.");
    } else {
        alert("Has vencido a tu enemigo. Descansa un poco, nuevos peligros te esperan");
        dropObjetosArray(guerrero);
        inventarioGuerrero.push(dropObjetosArray(guerrero));
        console.log(dropObjetosArray(guerrero));
        console.table(guerrero);
    }
    }
} else {
    let enemigo;
    for(let i=0; i<monstruosArray.length; i++){
        let enemigo = monstruosArray[i];
        alert(`Comienzas a adentrarte en la montaña mientras bajas un empinado sendero. Oyes unos horribles gruñidos. Un ${enemigo.tipo} aparece corriendo hacia ti, piensa rapido joven ${seleccionPersonaje.tipo}!`);
    while (arquera.vida > 0 && enemigo.vida > 0) {
        enemigo.vida -= arquera.daño;
        arquera.vida -= enemigo.daño;
        console.log(`Vida arquera ${arquera.vida}`);
        console.log(`Vida ${enemigo.tipo} ${enemigo.vida}`);
    }
    if (arquera.vida <= 0) {
        alert("Tu camino ha llegado al fin. La muerte te ha alcanzado.");
    } else {
        alert("Has vencido a tu enemigo. Descansa un poco, nuevos peligros te esperan");
        dropObjetosArray(arquera);
        inventarioGuerrero.push(dropObjetosArray(arquera));
        console.log(dropObjetosArray(arquera));
        console.table(arquera);
    }
    }
}