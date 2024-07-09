import aya from '../assets/aya.jpg'
import aya006 from '../assets/aya006.jpg'
import kimitachi from '../assets/kimitachi.jpg'
import kimitachi021 from '../assets/kimitachi021.jpg'
import redturtle from '../assets/red-turtle.jpg'
import redturtle017 from '../assets/redturtle017.jpg'
import marnie from '../assets/marnie.jpg'
import marnie019 from '../assets/marnie019.jpg'
import kaguyahime from '../assets/kaguyahime.jpg'
import kaguyahime038 from '../assets/kaguyahime038.jpg'
import kazetachinu from '../assets/kazetachinu.jpg'
import kazetachinu024 from '../assets/kazetachinu024.jpg'
import kokurikozaka from '../assets/kokurikozaka.jpg'
import kokurikozaka027 from '../assets/kokurikozaka027.jpg'
import karigurashi from '../assets/karigurashi.jpg'
import karigurashi032 from '../assets/karigurashi032.jpg'
import ponyo from '../assets/ponyo.jpg'
import ponyo032 from '../assets/ponyo032.jpg'
import ged from '../assets/ged.jpg'
import ged048 from '../assets/ged048.jpg'
import howl from '../assets/howl.jpg'
import howl040 from '../assets/howl040.jpg'
import baron from '../assets/baron.jpg'
import baron045 from '../assets/baron045.jpg'
import ghiblies from '../assets/ghiblies.jpg'
import ghiblies027 from '../assets/ghiblies027.jpg'
import chihiro from '../assets/chihiro.jpg'
import chihiro005 from '../assets/chihiro005.jpg'
import yamada from '../assets/yamada.jpg'
import yamada013 from '../assets/yamada013.jpg'
import mononoke from '../assets/mononoke.jpg'
import mononoke043 from '../assets/mononoke043.jpg'
import mimi from '../assets/mimi.jpg'
import mimi034 from '../assets/mimi034.jpg'
import onyourmark from '../assets/onyourmark.jpg'
import onyourmark016 from '../assets/onyourmark016.jpg'
import tanuki from '../assets/tanuki.jpg'
import tanuki021 from '../assets/tanuki021.jpg'
import umi from '../assets/umi.jpg'
import umi039 from '../assets/umi039.jpg'
import porco from '../assets/porco.jpg'
import porco015 from '../assets/porco015.jpg'
import omoide from '../assets/omoide.jpg'
import omoide046 from '../assets/omoide046.jpg'
import majo from '../assets/majo.jpg'
import majo018 from '../assets/majo018.jpg'
import totoro from '../assets/totoro.jpg'
import totoro029 from '../assets/totoro029.jpg'
import hotarunohaka from '../assets/hotarunohaka.jpg'
import hotarunohaka001 from '../assets/hotarunohaka001.jpg'
import laputa from '../assets/laputa.jpg'
import laputa004 from '../assets/laputa004.jpg'
import nausicaa from '../assets/nausicaa.jpg'
import nausicaa016 from '../assets/nausicaa016.jpg'



const allFilmsData = [
    {
        id: 1,
        title: 'The Boy and the Heron',
        year: 2023,
        img: kimitachi,
        img2: kimitachi021,
        old_price: 19.96,
        new_price: 11.99,
    },
    {
        id: 2,
        title: 'Earwig and the Witch',
        year: 2020,
        img: aya,
        img2: aya006,
        old_price: 19.96,
        new_price: 11.99,
    },
    {
        id: 3,
        title: 'The Red Turtle',
        year: 2016,
        img: redturtle,
        img2: redturtle017,
        old_price: 19.96,
        new_price: 11.99,
    },
    {
        id: 4,
        title: 'When Marnie Was There',
        year: 2014,
        img: marnie,
        img2: marnie019,
        old_price: 19.96,
        new_price: 11.99,
    },
    {
        id: 5,
        title: 'The Tale of Princess Kaguya',
        year: 2013,
        img: kaguyahime,
        img2: kaguyahime038,
        old_price: 19.96,
        new_price: 11.99,
    },
    {
        id: 6,
        title: 'The Wind Rises',
        year: 2013,
        img: kazetachinu,
        img2: kazetachinu024,
        old_price: 19.96,
        new_price: 11.99,
    },
    {
        id: 7,
        title: 'From Up on Poppy Hill',
        year: 2011,
        img: kokurikozaka,
        img2: kokurikozaka027,
        old_price: 19.96,
        new_price: 11.99,
    },
    {
        id: 8,
        title: 'The Borrower Arrietty',
        year: 2010,
        img: karigurashi,
        img2: karigurashi032,
        old_price: 19.96,
        new_price: 11.99,
    },
    {
        id: 9,
        title: 'Ponyo on the Cliff',
        year: 2008,
        img: ponyo,
        img2: ponyo032,
        old_price: 19.96,
        new_price: 11.99,
    },
    {
        id: 10,
        title: 'Tales from Earthsea',
        year: 2006,
        img: ged,
        img2: ged048,
        old_price: 19.96,
        new_price: 11.99,
    },
    {
        id: 11,
        title: "Howl's Moving Castle",
        year: 2004,
        img: howl,
        img2: howl040,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 12,
        title: 'The Cat Returns',
        year: 2002,
        img: baron,
        img2: baron045,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 13,
        title: 'The GHIBLIES episode 2',
        year: 2002,
        img: ghiblies,
        img2: ghiblies027,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 14,
        title: 'Spirited Away',
        year: 2001,
        img: chihiro,
        img2: chihiro005,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 15,
        title: 'My Neighbors the Yamadas',
        year: 1999,
        img: yamada,
        img2: yamada013,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 16,
        title: 'Princess Mononoke',
        year: 1997,
        img: mononoke,
        img2: mononoke043,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 17,
        title: 'Whisper of the Heart',
        year: 1995,
        img: mimi,
        img2: mimi034,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 18,
        title: 'On Your Mark',
        year: 1995,
        img: onyourmark,
        img2: onyourmark016,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 19,
        title: 'Pom Poko',
        year: 1994,
        img: tanuki,
        img2: tanuki021,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 20,
        title: 'The Ocean Waves',
        year: 1993,
        img: umi,
        img2: umi039,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 21,
        title: 'Porco Rosso',
        year: 1992,
        img: porco,
        img2: porco015,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 22,
        title: 'Only Yesterday',
        year: 1991,
        img: omoide,
        img2: omoide046,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 23,
        title: "Kiki's Delivery Service",
        year: 1989,
        img: majo,
        img2: majo018,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 24,
        title: 'My Neighbor Totoro',
        year: 1988,
        img: totoro,
        img2: totoro029,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 25,
        title: 'Grave of the Fireflies',
        year: 1988,
        img: hotarunohaka,
        img2: hotarunohaka001,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 26,
        title: 'Castle in the Sky',
        year: 1986,
        img: laputa,
        img2: laputa004,
        old_price: 24.98,
        new_price: 19.98,
    },
    {
        id: 27,
        title: 'Nausicaä of the Valley of the Wind',
        year: 1984,
        img: nausicaa,
        img2: nausicaa016,
        old_price: 24.98,
        new_price: 19.98,
    },

];

export default allFilmsData;