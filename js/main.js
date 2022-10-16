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

const objMago = [objetoMago1, objetoMago2, objetoMago3];

const objetoGuerrero1 = new ObjetoPj("espada", 0, 30, 3);
const objetoGuerrero2 = new ObjetoPj("armadura", 50, 0, 2);
const objetoGuerrero3 = new ObjetoPj("guantes", 20, 10, 1);

const objGuerrero = [objetoGuerrero1, objetoGuerrero2, objetoGuerrero3];

const objetoArquera1 = new ObjetoPj("arco", 0, 30, 3);
const objetoArquera2 = new ObjetoPj("pechera", 50, 0, 2);
const objetoArquera3 = new ObjetoPj("flecha", 20, 10, 1);

const objArquera = [objetoArquera1, objetoArquera2, objetoArquera3];

const inventarioMago = [];
const inventarioGuerrero = [];
const inventarioArquera = [];


//PERSONAJES Y MONSTRUOS
const mago = new Personaje("Mago", 100, 20, objMago, inventarioMago)
const guerrero = new Personaje("Guerrero", 100, 20, objGuerrero, inventarioGuerrero);
const arquera = new Personaje("Arquera", 100, 20, objArquera, inventarioArquera);

const orco = new Monstruos("Orco", 70, 30);
const espiritu = new Monstruos("Espiritu", 40, 15);
const huargo = new Monstruos("Huargo", 60, 20);
const troll = new Monstruos("Troll", 90, 40);
const balrog = new Monstruos("Balrog", 120, 55);

const monstruosArray = [espiritu, huargo, orco, troll, balrog];

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
console.table(seleccionPersonaje);

let enemigo;
let objeto;


function dropObjetosArray(Personaje) {
    return Personaje.objetos[Math.floor(Math.random() * Personaje.objetos.length)]
}

function juego(seleccionPersonaje) {
    for (let i = 0; i < monstruosArray.length; i++) {
        let enemigo = monstruosArray[i];
        console.log(enemigo);
        alert(`Comienzas a adentrarte en la montaña mientras bajas un empinado sendero. Oyes unos horribles gruñidos. Un ${enemigo.tipo} aparece corriendo hacia ti, piensa rapido joven ${seleccionPersonaje.tipo}!`);
        while (seleccionPersonaje.vida > 0 && enemigo.vida > 0) {
            let accion = Number(prompt("Seleccione la accion a realizar: '1'- Atacar, '2'- Pocima de vida"));
            switch (accion) {
                case 1:
                    console.log("Has elegido atacar");
                    enemigo.vida -= seleccionPersonaje.daño;
                    console.log(`La vida del ${enemigo.tipo} es de ${enemigo.vida}`);
                    if (enemigo.vida === 0) {
                        console.log("Enemigo abatido")
                    } else if (enemigo.vida > 0 && enemigo.vida < 16) {
                        enemigo.vida += 15;
                        console.log(`El ${enemigo.tipo} ha tomado una pocima de vida. La vida del enemigo sube a ${enemigo.vida}`);
                    } else {
                        console.log(`Cuidado, el ${enemigo.tipo} te esta atacando!`)
                        seleccionPersonaje.vida -= enemigo.daño;
                        console.log(`Tu vida baja a ${seleccionPersonaje.vida}`);
                    }
                    break;
                case 2:
                    console.log("Has elegido beber una pocima")
                    seleccionPersonaje.vida = seleccionPersonaje.vida + 25;
                    console.log(`La vida de tu pj sube a ${seleccionPersonaje.vida}`);
                    if (enemigo.vida === 0) {
                        console.log("Enemigo abatido")
                    } else if (enemigo.vida > 0 && enemigo.vida < 16) {
                        enemigo.vida += 15;
                        console.log(`El ${enemigo.tipo} ha tomado una pocima de vida. La vida del enemigo sube a ${enemigo.vida}`);
                    } else {
                        console.log(`Cuidado, el ${enemigo.tipo} te esta atacando!`)
                        seleccionPersonaje.vida -= enemigo.daño;
                        console.log(`Tu vida baja a ${seleccionPersonaje.vida}`);
                    }
                    break;
                default:
                    console.log("Pierdes el turno");
                    break;
            }
        }
        if (seleccionPersonaje.vida <= 0) {
            alert("Tu camino ha llegado al fin. La muerte te ha alcanzado.");
            break;
        } else {
            alert("Has vencido a tu enemigo. Descansa un poco, nuevos peligros te esperan");
            let objeto = dropObjetosArray(seleccionPersonaje);
            seleccionPersonaje.inventario.push(objeto);
            const last = seleccionPersonaje.inventario[seleccionPersonaje.inventario.length - 1];
            console.log(last);
            seleccionPersonaje.vida = last.vida + seleccionPersonaje.vida;
            seleccionPersonaje.daño = last.daño + seleccionPersonaje.daño;
            console.table(seleccionPersonaje);
        }
    }
}


//JUEGO
alert("Te paras frente a la entrada de la montaña. Dejas de oir el canto de las aves, una ultima brisa acaricia tu cara. Te das vuelta para ver por ultima vez la luz del sol y pronuncias el hechizo que abre el paso. Enciendes tu antorcha y te adentras a lo desconocido. Lo que suceda a continuacion depende solo de ti y de las decisiones que tomes. Mantente alerta, la muerte acecha en la oscuridad.")
if (seleccionPersonaje === mago) {
    juego(mago);
} else if (seleccionPersonaje === guerrero) {
    juego(guerrero);
} else {
    juego(arquera);
}
