import React, {useState, useRef} from 'react';

import "./MapStyle.css";

const regionInfo = {
    "Alsace": {
        description: "L'Alsace est une région de l'est de la France",
        attractions: ["La cathédrale de Strasbourg","La flamenkuche "],
        timeTrip:["vous comptez 5 minutes de plus par kilomètre "],
        img:["./pigeonLogo.png"],
        conseil: ["Des chuttes de neige sont annoncée prévoyez du temps supplémentaire"]
    },
    "Aquitaine": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Le pinard de Bordeaux"],
        timeTrip:["vous comptez 3 minutes de plus par kilomètres "],
        img:["./pigeonLogo.png"],
        conseil: ["suivre la route des vins"]
    },
    "Auvergne": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["truffade","le vin de saint-Pourçain"],
        timeTrip:["vous comptez 3 minutes par kilomètre "],
        img:["./pigeonLogo.png"],
        conseil: ["survole des volcans"]
    },
    "Bourgogne": {
        description: "La Bourgogne est une region de France",
        attractions: ["Escargots , boeuf bourguignon"],
        timeTrip:["vous comptez 3 minutes par kilomètre "],
        img:["./pigeonLogo.png"],
        conseil: ["aucune perturbation de prevue"]
    },
    "Bretagne": {
        description: "la Bretagne est une région de l'EST de la France",
        attractions: ["Le cidre","la pluie"],
        timeTrip:["vous comptez 3 minutes par kilomètre "],
        img:["./pigeonLogo.png"],
        conseil: ["n'y allez pas par quatres chemins "]
    },
    "Centre": {
        description: "le centre est une région du centre de la France",
        attractions: ["L'empire du milieu "],
        timeTrip:["vous comptez 3 minutes par kilomètre "],
        img:["./pigeonLogo.png"],
        conseil: ["allez vers le milieu"]
    },
    "Champagne-Ardenne": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Franche-Comté": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Corse": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    // Ajoutez des informations pour les autres régions ici
    "Haute-Normandie": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Île-de-France": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Languedoc-Roussillon": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Limousin": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Lorraine": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Midi-Pyrénées": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Nord-Pas-de-Calais": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Basse-Normandie": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Pays de Loire": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Picardie": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Poitou-Charente": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Provence-Alpes-Côte-d'Azur": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
    "Rhône-Alpes": {
        description: "L'Aquitaine est une région du sud-ouest de la France",
        attractions: ["Festival de Moisy sur Meth"],
        timeTrip:["vous comptez 3 minutes par kilomètre supplémentaire "],
        img:["./pigeonLogo.png"],
        conseil: ["Suite à des pertubations dans le ciel le temps de trajet est ralongé"]
    },
};

function Map () {

    const dialogRef = useRef(null);
    const [selectedRegion,setSelectedRegion] = useState(null);

    const handleAreaClick = (e, region) => {
        e.preventDefault();
        setSelectedRegion(region);
        dialogRef.current.showModal();
    };
    return (
        <div id='map-container'>
            <p className='map'><img src="./carte_france.jpg" alt="Carte des régions de France" usemap="#ImageMap1" ></img></p>
<map name="ImageMap1" >

<area shape="poly" title="Alsace : Bas-Rhin (67), Haut-Rhin (68)." coords="348, 90, 362, 93, 355, 106, 350, 122, 349, 137, 346, 146, 347, 155, 342, 161, 337, 153, 331, 146, 330, 139, 336, 125, 334, 114, 339, 105, 335, 103, 331, 98, 334, 94, 345, 97" 
href="region-alsace.htm" onClick={(e) => handleAreaClick(e, "Alsace")}/>

<area shape="poly" title="Aquitaine : Dordogne (24), Gironde (33), Landes (40), Lot-et-Garonne (47), Pyrénées-Atlantique (64)"coords="80, 321, 99, 343, 128, 350, 132, 329, 136, 323, 135, 316, 128, 314, 130, 305, 161, 295, 177, 264, 176, 245, 165, 236, 155, 230, 140, 251, 134, 254, 125, 246, 106, 232, 98, 289, 91, 316" 
href="region-aquitaine.htm"  onClick={(e) => handleAreaClick(e, "Aquitaine")}/>

<area shape="poly" title="Auvergne : Allier (03), Cantal (15), Haute-Loire (43), Puy-Dôme (63)." coords="217, 190, 225, 187, 238, 193, 246, 195, 253, 202, 248, 211, 245, 220, 248, 236, 254, 243, 265, 245, 264, 259, 252, 270, 242, 265, 237, 265, 232, 262, 223, 272, 217, 264, 208, 274, 202, 273, 197, 260, 206, 244, 213, 238, 208, 227, 213, 220, 209, 209, 203, 204, 212, 198" 
href="region-auvergne.htm" onClick={(e) => handleAreaClick(e, "Auvergne")}/>

<area shape="poly" title="Bourgogne : Côte-d'Or (21), Nièvre (58), Saône-et-Loire (71), Yonne (89)" coords="227, 124, 237, 124, 245, 137, 250, 144, 267, 141, 276, 144, 275, 149, 285, 157, 291, 158, 293, 173, 285, 180, 290, 187, 290, 198, 284, 199, 277, 195, 276, 210, 270, 207, 263, 206, 261, 210, 252, 209, 253, 198, 241, 190, 229, 185, 227, 175, 224, 161, 224, 148, 229, 143, 224, 133" 
href="region-bourgogne.htm" onClick={(e) => handleAreaClick(e, "Bourgogne")}/>

<area shape="poly" title="Bretagne : Côtes-d'Armor (22), Finistère (29), Ile-et-Vilaine (35), Morbihan (56)" coords="14, 107, 41, 101, 62, 98, 71, 112, 89, 110, 99, 109, 104, 117, 111, 118, 112, 131, 109, 141, 103, 141, 93, 145, 87, 146, 80, 151, 74, 154, 66, 155, 49, 147, 36, 137, 25, 139, 19, 133, 11, 126" 
href="region-bretagne.htm" onClick={(e) => handleAreaClick(e, "Bretagne")}/>

<area shape="poly" title="Centre : Cher (18), Eure-et-Loir (28), Indre (36), Indre-et-Loire (37), Loire-et-Cher (41), Loiret (45)." coords="167, 112, 180, 109, 191, 121, 194, 132, 207, 132, 208, 136, 221, 137, 220, 142, 217, 152, 223, 185, 213, 191, 208, 196, 199, 197, 173, 201, 160, 178, 155, 173, 150, 177, 147, 171, 150, 160, 166, 150, 171, 131" 
href="region-centre.htm" onClick={(e) => handleAreaClick(e, "Centre")}/>

<area shape="poly" title="Champagne-Ardenne : Ardennes (08), Aube (10), Marne (51), Haute-Marne (52)" coords="256, 60, 272, 62, 279, 72, 273, 85, 270, 107, 276, 118, 284, 124, 294, 133, 297, 141, 290, 147, 282, 148, 274, 136, 262, 134, 250, 138, 237, 116, 240, 102, 248, 86, 254, 87"
 href="region-champagne.htm" onClick={(e) => handleAreaClick(e, "Champagne-Ardenne")}/>

<area shape="poly"  title="Franche-Comté  : Doubs (25), Jura (39), Haute-Saône (70), Territoire de Belfort (90) "  coords="304, 144, 313, 141, 321, 140, 327, 144, 336, 160, 321, 178, 305, 207, 300, 206, 292, 203, 296, 185, 293, 181, 297, 167, 295, 155" 
href="region-franche-comte.htm" onClick={(e) => handleAreaClick(e, "Franche-Comté")}/>

<area shape="poly"  title="Corse : Corse-du-Sud (2A), Haute-Corse (2B)" coords="349, 332, 362, 322, 366, 307, 374, 323, 376, 343, 370, 361, 368, 373, 356, 370, 348, 339" 
href="region-corse.htm" onClick={(e) => handleAreaClick(e, "Corse")}/>

<area shape="poly" title="Haute-Normandie : Eure (27), Seine-Maritime (76)"  coords="152, 63, 172, 66, 181, 56, 189, 70, 186, 80, 188, 87, 178, 97, 181, 104, 166, 107, 159, 100, 155, 81, 149, 76"
href="region-haute-normandie.htm" onClick={(e) => handleAreaClick(e, "Haute-Normandie")} />

<area shape="poly" title="Île-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91) Hauts-de-Seine (93), Seine-Saint-Denis (93), Val-de-Marne (94), Val-d'Oise (95)" coords="187, 93, 198, 95, 209, 96, 216, 99, 226, 97, 234, 108, 230, 115, 227, 121, 221, 121, 220, 132, 212, 132, 207, 125, 203, 126, 197, 127, 197, 123, 189, 114, 187, 106, 184, 100" 
href="region-ile-de-france.htm" onClick={(e) => handleAreaClick(e, "Île-de-France")}/>

<area shape="poly" title="Languedoc-Roussillon : Aude (11), Gard (30), Hérault (34), Lozère (48), Pyrénées-Orientales (66)"  coords="192, 324, 210, 326, 218, 323, 238, 302, 239, 295, 237, 287, 230, 286, 228, 274, 235, 268, 244, 272, 252, 284, 258, 289, 268, 289, 275, 297, 270, 305, 263, 314, 251, 315, 232, 327, 223, 333, 221, 356, 215, 362, 195, 362" 
href="region-languedoc.htm" onClick={(e) => handleAreaClick(e, "Languedoc-Roussillon")}/>

<area shape="poly"   title="Limousin : Corrèze (19), Creuse (23), Haute-Vienne (87)"  coords="167, 211, 187, 206, 201, 205, 209, 218, 205, 225, 208, 234, 193, 259, 186, 259, 181, 256, 179, 244, 164, 228, 168, 220" 
href="region-limousin.htm" onClick={(e) => handleAreaClick(e, "Limousin")}/>

<area shape="poly" title="Lorraine : Meurthe-et-Moselle (54), Meuse (55), Moselle (57), Vosges (88)"  coords="280, 76, 287, 76, 309, 79, 316, 80, 323, 89, 344, 89, 326, 92, 331, 103, 330, 127, 326, 133, 304, 134, 282, 111, 277, 105" 
href="region-lorraine.htm" onClick={(e) => handleAreaClick(e, "Lorraine")}/>

<area shape="poly" title="Midi-Pyrénées : Ariège (09), Aveyron (12), Haute-Garone (31), Gers (32), Lot (46), Hautes-Pyrénées (65), Tarn (81), Tarn-et-Garonne (82)"   coords="153, 349, 134, 349, 136, 338, 142, 325, 135, 307, 164, 297, 185, 263, 200, 276, 212, 278, 220, 273, 232, 297, 210, 319, 187, 319, 181, 335, 188, 337, 187, 354, 156, 343" 
href="region-midi-pyrenees.htm" onClick={(e) => handleAreaClick(e, "Midi-Pyrénées")} />

<area shape="poly" title="Nord-Pas-de-Calais : Nord (59), Pas-de-Calais (62)"  coords="186, 24, 212, 18, 215, 29, 224, 32, 234, 41, 242, 48, 248, 48, 251, 55, 227, 54, 208, 49, 200, 49, 186, 42"
href="region-nord.htm" onClick={(e) => handleAreaClick(e, "Nord-Pas-de-Calais")} />

<area shape="poly" title="Basse-Normandie : Calvados (14), Manche (50), Orne (61)"  coords="94, 70, 111, 72, 111, 80, 140, 87, 149, 84, 155, 101, 162, 112, 164, 121, 161, 125, 154, 122, 153, 116, 144, 117, 141, 111, 123, 116, 105, 110, 101, 86" 
href="region-basse-normandie.htm" onClick={(e) => handleAreaClick(e, "Basse-Normandie")} />

<area shape="poly" title="Pays de Loire : Loire-Atlantique (44), Maine & Loire (49), Mayenne (53), Sarthe (72), Vendée (85)"  coords="77, 160, 110, 147, 118, 134, 116, 119, 138, 119, 162, 134, 159, 143, 151, 153, 145, 151, 140, 171, 115, 176, 121, 199, 105, 202, 92, 200, 83, 186, 93, 166" 
href="region-pays-de-loire.htm" onClick={(e) => handleAreaClick(e, "Pays de Loire")} />

<area shape="poly" title="Picardie : Aisne (02), Oise (60), Somme (80)"  coords="186, 48, 211, 59, 245, 59, 250, 62, 249, 79, 236, 102, 229, 93, 194, 89, 193, 73, 186, 56" 
href="region-picardie.htm" onClick={(e) => handleAreaClick(e, "Picardie")} />

<area shape="poly" title="Poitou-Charentes : Charente (16), Charente-Maritime (17), Deux-Sèvres (79), Vienne (86)"  coords="106, 211, 127, 207, 125, 191, 123, 180, 143, 174, 154, 184, 167, 200, 159, 206, 158, 218, 134, 249, 108, 227" 
href="region-poitou.htm" onClick={(e) => handleAreaClick(e, "Poitou-Charentes")} />

<area shape="poly" title="Provence-Alpes-Côte-d'Azur : Alpes-de-Haute-Provence (04), Hautes-Alpes (05), Alpes-Maritimes (06), Bouches-du-Rhône (13), Var (83), Vaucluse (84)"  coords="275, 289, 292, 294, 300, 298, 305, 295, 304, 276, 324, 265, 329, 258, 334, 265, 339, 290, 359, 292, 327, 325, 298, 328, 292, 324, 278, 324, 263, 322, 275, 311, 283, 301" 
href="region-provence.htm" onClick={(e) => handleAreaClick(e, "Provence-Alpes-Côte-d'Azur")} />

<area shape="poly" title="Rhône-Alpes : Ain (01), Ardèche (07), Drôme (26), Isère (38), Loire (42), Rhône (69), Savoie (73), Haute-Savoie (74)"  coords="252, 214, 269, 216, 280, 213, 283, 202, 293, 210, 304, 210, 314, 216, 321, 206, 330, 204, 338, 216, 328, 227, 341, 242, 323, 251, 318, 249, 312, 259, 294, 275, 295, 289, 284, 280, 262, 282, 254, 273, 273, 250, 263, 238, 256, 240, 253, 232, 249, 223" 
href="region-rhone-alpes.htm" onClick={(e) => handleAreaClick(e, "Rhône-Alpes")} />
</map>
        

<div className='body-dialog'>
<dialog ref={dialogRef}>
                {selectedRegion && regionInfo[selectedRegion] && (
                    <div>
                    {regionInfo[selectedRegion].img.map((img, index) => (
                        <img key={index} src={img} alt={`Image ${index + 1} de ${selectedRegion}`} />
                    ))}
                        <h2>Guide du pigeon futé pour {selectedRegion}</h2>
                        <p>{regionInfo[selectedRegion].description}</p>
                        <h3>Attractions principales :</h3>
                        <ul>
                            {regionInfo[selectedRegion].attractions.map((attraction, index) => (
                                <li key={index}>{attraction}</li>
                            ))}
                        </ul>
                        <div className="image-gallery">
                        </div>
                        <h3>conseil de transport :</h3>
                        <ul>
                            {regionInfo[selectedRegion].conseil.map((conseil, index) => (
                                <li key={index}>{conseil}</li>
                            ))}
                        </ul>
                        <h3>Temps de trajet :</h3>
                        <ul>
                            {regionInfo[selectedRegion].timeTrip.map((timeTrip, index) => (
                                <li key={index}>{timeTrip}</li>
                            ))}
                        </ul>
                        <button onClick={() => dialogRef.current.close()}>Fermer</button>
                    </div>
                )}
            </dialog>
            </div>
</div>


    )
}



export default Map;