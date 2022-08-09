var clickcounter = 0

function chbg(over) {
	if (over == 1) {
		document.getElementById("transpanel").style.backdropFilter = "blur(2px) contrast(35%) brightness(105%) invert(100%)";
		document.getElementById("doomrect").style.backgroundColor = "rgba(235,235,235,0.975)";
		document.getElementById("doomrect").style.boxShadow = "inset 0 0 10px rgba(0,0,0,0.5)";
		document.getElementById("doomrect").style.transform = "rotateY(180deg) translateY(-50%)";
	} else {
		document.getElementById("transpanel").style.backdropFilter = "none";
		document.getElementById("doomrect").style.backgroundColor = "rgba(44, 78, 126, 0.9)";
		document.getElementById("doomrect").style.boxShadow = "none";
		document.getElementById("doomrect").style.transform = "rotateY(0deg) translateY(-50%)";
	}
}

function giftClicked() {
	document.getElementById("giftbutton").style.display = "none";
	balik = document.getElementById("balik");
	balik.style.filter="contrast(75%) grayscale(100%) brightness(55%) blur(1px) drop-shadow(0 25px 20px #FFA500)";
	balik.style.animationDuration = "60s";
	document.getElementById("gifttitle").style.textDecorationColor = "rgba(225, 225, 225, 0.3)";

	document.getElementById("gifttitle").style.filter = "blur(2px)";
	document.getElementById("gifttitle").style.textShadow = "0 25px 10px #FFA500";
			
	//<div id="truvarect"></div>

	const panel = document.getElementById("giftbuttonpanel");

	const audioRect = document.createElement("div");
	audioRect.id = "truvarect";
	panel.appendChild(audioRect);

	//<audio controls id="truva"> <source src="truva.mp3" type="audio/mpeg"> </audio>

	const audio = document.createElement("audio");
	audio.id = "truva";
	audio.controls = true;

	const source = document.createElement("source");
	source.src = "truva.mp3";
	source.type = "audio/mpeg";

	audio.appendChild(source);

	panel.appendChild(audio);

	parent.open('rr.html');

	alert("Bu da neymiş !!");
}

function titleClick() {
	document.getElementById("phototitle").innerHTML = "Senin kadar olamasalar da";
	document.getElementById("phototitle").style.top = "15%";
}

function clickMessage()
{
	clickcounter++;

	switch (clickcounter)
	{
		case 1:alert("Doğum Günün Kutlu Olsun Tatlim ^^")   ;break;

		case 2:alert("Evet Senin Doğum Günün, Kutlu Olsun") ;break;

		case 3:alert("Kutlu Olsun... Doğum Günün Yani")     ;break;

		case 4:alert("Tamam Yeter Bu Kadar Begüm Adam")     ;break;

		case 5:alert("AAAAAAAAAAAA BIRAK BENİ")             ;break;

		case 6:alert("Basma Artık Begüm Adam")              ;break;

		case 7:alert("Tamam Sakin...")                      ;break;

		case 8:alert("Yapma Ya Valla Kutlu Olsun")          ;break;

		case 9:alert("Komikti Tamam BIRAK ARTIK")           ;break;

		case 31:alert("TAMAM İŞTE BU KOMİK")                ;break;

		default:
			alert("YEDER BEGUM ADAM")
		break;
	}
}