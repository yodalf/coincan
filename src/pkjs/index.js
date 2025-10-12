//{{{  Globals
var geoLocality="";
var geoArea1="";
var geoArea2="";
var geoString="";
var geoLatitude=0.0;
var geoLongitude=0.0;
var gpsError=0;

var cnfExchange = "Kraken-USD";
var cnfService = "";
var cnfOWMid = "";
var cnfOWMkey = "";
var cnfOWMloc = "";
var cnfCelsius = "1";
var cnfHealth = "1";

var locationOptions = { "timeout": 15000, "maximumAge": 60000 };

var btcVx = [];

var geoBase = //{{{
{
"Athabasca":"001" ,
"Clearwater":"002" ,
"Valemount":"003" ,
"Grand Forks":"004" ,
"JMcBride":"005" ,
"Merritt":"006" ,
"Masset":"007" ,
"Invermere":"008" ,
"Dome Creek":"009" ,
"Little Grand Rapids":"010" ,
"Oxford House":"011" ,
"Bissett":"012" ,
"Shamattawa":"013" ,
"York Factory":"014" ,
"Flin Flon":"015" ,
"Musgrave Harbour":"016" ,
"New-Wes-Valley":"017" ,
"Bay Roberts":"018" ,
"St. Alban's":"019" ,
"Fourchu Head":"020" ,
"North Mountain (Cape Breton)":"021" ,
"Marathon":"022" ,
"Terrace Bay":"023" ,
"Attawapiskat":"024" ,
"Gogama":"025" ,
"Maple Plains":"026" ,
"Murdochville":"027" ,
"Escoumins":"028" ,
"Saint-Michel-des-Saints":"029" ,
"Rancheria":"030" ,
"Dempster (Highway)":"031" ,
"Burgeo":"032" ,
"Bouctouche":"033" ,
"Richibucto":"034" ,
"Rogersville":"035" ,
"Miramichi":"036" ,
"Point Escuminac":"037" ,
"Kouchibouguac":"038" ,
"St. Lawrence":"039" ,
"Parrsboro":"040" ,
"Bonavista":"041" ,
"Wreckhouse":"042" ,
"Edmundston":"043" ,
"Beauharnois":"044" ,
"Edmonton":"045" ,
"Candiac":"046" ,
"Calgary":"047" ,
"La Prairie":"048" ,
"Saint-Constant":"049" ,
"Sainte-Catherine":"050" ,
"Saint-Rémi":"051" ,
"Granby":"052" ,
"Cowansville":"053" ,
"Victoriaville":"054" ,
"Prévost":"055" ,
"Sainte-Sophie":"056" ,
"Saint-Lin-Laurentides":"057" ,
"Saint-Sauveur":"058" ,
"Saint-Hyacinthe":"059" ,
"Marieville":"060" ,
"Rigaud":"061" ,
"Saint-Lazare":"062" ,
"Farnham":"063" ,
"Thetford Mines":"064" ,
"Kugaaruk":"065" ,
"Highvale":"066" ,
"Pelican Narrows":"067" ,
"Strathmore":"068" ,
"Hawkesbury":"069" ,
"Alexandria":"070" ,
"Cornwall":"071" ,
"Morrisburg":"072" ,
"Algonquin Park (Brent)":"073" ,
"Algonquin Park (Lake of Two Rivers)":"074" ,
"Oxtongue Lake":"075" ,
"Welland":"076" ,
"Winchester":"077" ,
"Whistler":"078" ,
"La Scie":"079" ,
"Rondeau (Provincial Park)":"080" ,
"Coronach":"081" ,
"Placentia":"082" ,
"Sundre":"083" ,
"Halifax (Shearwater)":"084" ,
"Témiscamingue":"085" ,
"Indian Head":"086" ,
"Fort Qu'Appelle":"087" ,
"Killarney":"088" ,
"New Glasgow":"089" ,
"Caribou":"090" ,
"Bachelors Island":"091" ,
"Beaverlodge":"092" ,
"Brooks":"093" ,
"Mingan":"094" ,
"Nipawin":"095" ,
"Beaver Island":"096" ,
"Port-Menier":"097" ,
"Salaberry-de-Valleyfield":"098" ,
"Huntingdon":"099" ,
"Cartwright":"100" ,
"Bloodvein":"101" ,
"Berens River":"102" ,
"Atikokan":"103" ,
"Fort Frances":"104" ,
"Mine Centre":"105" ,
"100 Mile House":"106" ,
"Clinton":"107" ,
"Collingwood":"108" ,
"Shelburne":"109" ,
"Baccaro Point":"110" ,
"Coronation":"111" ,
"Englee":"112" ,
"Uranium City":"113" ,
"Port au Choix":"114" ,
"Daniel's Harbour":"115" ,
"Badger":"116" ,
"Buchans":"117" ,
"Grand Falls-Windsor":"118" ,
"Willow Creek (Provincial Park)":"119" ,
"Claresholm":"120" ,
"Chevery":"121" ,
"Twillingate":"122" ,
"Manicouagan":"123" ,
"La Tuque":"124" ,
"Mauricie":"125" ,
"Calgary (Olympic Park)":"126" ,
"Upsala":"127" ,
"St. Anthony":"128" ,
"Drumheller":"129" ,
"Pinawa":"130" ,
"Whiteshell":"131" ,
"Estevan Point":"132" ,
"Shaunavon":"133" ,
"Eastend":"134" ,
"Virden":"135" ,
"Melita":"136" ,
"Turtle Mountain (Provincial Park)":"137" ,
"East Point":"138" ,
"Swan River":"139" ,
"Eureka":"140" ,
"Vancouver":"141" ,
"L'Assomption":"142" ,
"Berthierville":"143" ,
"Contrecoeur":"144" ,
"Mascouche":"145" ,
"Prince George":"146" ,
"Sorel-Tracy":"147" ,
"Tracy":"148" ,
"Le Gardeur":"149" ,
"Morris":"150" ,
"Steinbach":"151" ,
"Dominion City":"152" ,
"Emerson":"153" ,
"Vita":"154" ,
"Gulf Islands (Southern)":"155" ,
"Elk Island (National Park)":"156" ,
"Tisdale":"157" ,
"Melfort":"158" ,
"Cardston":"159" ,
"Snow Lake":"160" ,
"Pukatawagan":"161" ,
"Nain":"162" ,
"Sutton":"163" ,
"Colville Lake":"164" ,
"Goderich":"165" ,
"Kincardine":"166" ,
"Garden Creek":"167" ,
"Brockville":"168" ,
"Gananoque":"169" ,
"Waterton Park":"170" ,
"Altona":"171" ,
"Gretna":"172" ,
"Pemberton":"173" ,
"Iles-de-la-Madeleine":"174" ,
"Sparwood":"175" ,
"Esther":"176" ,
"Grise Fiord":"177" ,
"Hunters Point":"178" ,
"Three Hills":"179" ,
"Varennes":"180" ,
"Hopedale":"181" ,
"Donnacona":"182" ,
"Haines Junction":"183" ,
"Beauceville":"185" ,
"Lac-Mégantic":"186" ,
"Saint-Georges":"187" ,
"Fort Providence":"188" ,
"Pine Falls":"189" ,
"Victoria Beach":"190" ,
"Grand Beach":"191" ,
"Broadview":"192" ,
"Winnipeg":"193" ,
"Charlevoix":"194" ,
"Watrous":"195" ,
"Humboldt":"196" ,
"Alma":"197" ,
"Mount Carleton (Provincial Park)":"198" ,
"Saint-Quentin":"199" ,
"St. Leonard":"200" ,
"Grand Falls":"201" ,
"Saint-Jean-sur-Richelieu":"202" ,
"Saint-Luc":"203" ,
"Vanier":"204" ,
"Bernières":"205" ,
"Ennadai":"206" ,
"Grand Rapids":"207" ,
"Southend Reindeer":"208" ,
"Assiniboia":"209" ,
"Fort Liard":"210" ,
"Saguenay":"211" ,
"Creston":"212" ,
"Mont-Tremblant":"213" ,
"Sainte-Agathe":"214" ,
"Vernon":"216" ,
"Hinton":"217" ,
"Jasper":"218" ,
"Leader":"219" ,
"Marble Mountain":"220" ,
"Corner Brook":"221" ,
"Lillooet":"222" ,
"Kejimkujik (National Park)":"223" ,
"Malahat":"224" ,
"Rockglen":"225" ,
"Hope Slide":"226" ,
"Dease Lake":"227" ,
"Cassiar":"228" ,
"Lac La Biche":"229" ,
"Lucky Lake":"230" ,
"Ogoki":"231" ,
"Webequie":"232" ,
"Lansdowne House":"233" ,
"Gonzales Point":"234" ,
"Wingham":"235" ,
"Walkerton":"236" ,
"Dundalk":"237" ,
"North Perth":"238" ,
"Shelburne":"239" ,
"Mount Forest":"240" ,
"Waskesiu Lake":"241" ,
"Lytton":"242" ,
"Miscou Island":"243" ,
"Maniwaki":"244" ,
"La Vérendrye (Réserve faunique)":"245" ,
"Mont-Laurier":"246" ,
"Pitt Meadows":"247" ,
"Maple Creek":"248" ,
"Whati":"249" ,
"Fredericton":"250" ,
"Cobourg":"251" ,
"North Cape":"252" ,
"Rivière-du-Loup":"253" ,
"Trois-Pistoles":"254" ,
"Temiscouata":"255" ,
"Deerwood":"256" ,
"Carman":"257" ,
"Nelson":"258" ,
"Nakusp":"259" ,
"Nicolet":"260" ,
"Drummondville":"261" ,
"Saint-Nicéphore":"262" ,
"Kananaskis (Nakiska Ridgetop)":"263" ,
"North East Margaree":"264" ,
"Baddeck":"265" ,
"Hearst":"266" ,
"Hornepayne":"267" ,
"New Carlisle":"268" ,
"Bonaventure":"269" ,
"Dolbeau-Mistassini":"270" ,
"Onefour":"272" ,
"Oak Point":"273" ,
"Elbow":"274" ,
"Dawson":"275" ,
"McCreary":"276" ,
"Breton":"277" ,
"Wynyard":"278" ,
"Hendrickson Creek":"279" ,
"St. John's":"280" ,
"Midland":"281" ,
"Fort Erie":"282" ,
"Port Colborne":"283" ,
"Laurentides (Réserve faunique)":"284" ,
"Point Lepreau":"285" ,
"Esquimalt":"286" ,
"Parent":"287" ,
"Gouin (Réservoir)":"288" ,
"Pilot Mound":"289" ,
"Terrebonne":"290" ,
"Princeton":"291" ,
"Puntzi Mountain":"292" ,
"Burns Lake":"293" ,
"Port Alberni":"294" ,
"Tadoussac":"295" ,
"Coaticook":"296" ,
"Lacombe":"297" ,
"Cape Race":"298" ,
"Red Earth Creek":"299" ,
"Rosetown":"300" ,
"Bancroft":"301" ,
"Barry's Bay":"302" ,
"Haliburton":"303" ,
"Apsley":"304" ,
"Kaladar":"305" ,
"Rocky Mountain House":"306" ,
"St. Peter's":"307" ,
"Hart Island":"308" ,
"Rock River":"309" ,
"Crowsnest":"310" ,
"Camrose":"311" ,
"Wetaskiwin":"312" ,
"Milk River":"313" ,
"Percé":"314" ,
"Chandler":"315" ,
"Gibsons":"316" ,
"Sechelt":"317" ,
"Halifax":"318" ,
"Grande-Vallée":"319" ,
"Cap Chat":"320" ,
"Gaspésie (Parc national)":"321" ,
"Sainte-Anne-Des-Monts":"322" ,
"Squamish":"323" ,
"Salmon Arm":"324" ,
"Stratford":"325" ,
"London":"326" ,
"Woodstock":"327" ,
"Strathroy":"328" ,
"St. Thomas":"329" ,
"Spiritwood":"330" ,
"Saint Andrews":"331" ,
"St. Stephen":"332" ,
"La Malbaie":"333" ,
"Montmagny":"334" ,
"Kamouraska":"335" ,
"L'Islet":"336" ,
"Sprague":"337" ,
"Sachs Harbour":"338" ,
"Fisher Branch":"339" ,
"Trout Lake":"340" ,
"Tetsa River (Provincial Park)":"341" ,
"Baie-Saint-Paul":"342" ,
"Biggar":"343" ,
"Scott":"344" ,
"Magog":"345" ,
"Trois-Rivières":"346" ,
"Bécancour":"347" ,
"Louiseville":"348" ,
"Faro":"349" ,
"Ross River":"350" ,
"Summerland":"351" ,
"Shoal Lake":"352" ,
"Rouyn-Noranda":"353" ,
"La Sarre":"354" ,
"Swift Current":"355" ,
"Vegreville":"356" ,
"Val Marie":"357" ,
"Vauxhall":"358" ,
"Taber":"359" ,
"Cypress Hills (Provincial Park)":"360" ,
"Deux-Montagnes":"361" ,
"Vaudreuil-Dorion":"362" ,
"Pincourt":"363" ,
"Digby":"364" ,
"Brier Island":"365" ,
"Yellowknife":"366" ,
"Oakville":"367" ,
"Burlington":"368" ,
"Collins Bay":"369" ,
"Western Head":"370" ,
"Liverpool":"371" ,
"Weyburn":"372" ,
"White Rock":"373" ,
"Peawanuck":"374" ,
"Wasagaming":"375" ,
"Muncho Lake":"376" ,
"Liard River":"377" ,
"Poplar River":"378" ,
"Bow Valley (Provincial Park)":"379" ,
"Roblin":"380" ,
"Last Mountain Lake (Sanctuary)":"381" ,
"Bow Island":"382" ,
"High River":"383" ,
"Stavely":"384" ,
"Tracadie-Sheila":"385" ,
"Bas-Caraquet":"386" ,
"Outlook":"387" ,
"Gameti":"388" ,
"Indin River":"389" ,
"Victoria (University of)":"390" ,
"Kootenay (National Park)":"391" ,
"Yoho (National Park)":"392" ,
"Rimouski":"393" ,
"Iqaluit":"394" ,
"Gull Bay":"395" ,
"Rock Creek":"396" ,
"Osoyoos":"397" ,
"Chilliwack":"398" ,
"Agassiz":"399" ,
"Channel-Port aux Basques":"400" ,
"Carberry":"401" ,
"Shilo":"402" ,
"Canmore":"403" ,
"Banff":"404" ,
"Grand Etang":"405" ,
"Amqui":"406" ,
"Matapedia":"407" ,
"Vallée de la Matapédia":"408" ,
"Atlin":"409" ,
"Teslin":"410" ,
"Thunder Bay":"411" ,
"Arctic Bay":"412" ,
"Barrhead":"413" ,
"Orillia":"414" ,
"Barrie":"415" ,
"Lévis":"416" ,
"Tadoule Lake":"417" ,
"Greenstone (Beardmore)":"418" ,
"Nipigon":"419" ,
"Chéticamp":"420" ,
"Carmacks":"421" ,
"Tobermory":"422" ,
"Deline":"423" ,
"Simcoe":"424" ,
"Tillsonburg":"425" ,
"Norfolk":"426" ,
"Westlock":"427" ,
"Ear Falls":"428" ,
"New Tecumseth":"429" ,
"Ottawa (Kanata - Orléans)":"430" ,
"Leamington":"431" ,
"Ulukhaktok":"432" ,
"Ingonish":"433" ,
"Smiths Falls":"434" ,
"Sharbot Lake":"435" ,
"Kemptville":"436" ,
"Kirkland Lake":"437" ,
"Windsor":"438" ,
"Kentville":"439" ,
"Lunenburg":"440" ,
"Bridgewater":"441" ,
"Wekweeti":"442" ,
"Lutselke":"443" ,
"Morden":"444" ,
"Winkler":"445" ,
"Sheet Harbour":"446" ,
"Malay Falls":"447" ,
"Nordegg":"448" ,
"Sackville":"449" ,
"Amherst":"450" ,
"Parry Sound":"451" ,
"Dunchurch":"452" ,
"Stony Plain":"453" ,
"Chatham-Kent":"454" ,
"Rodney":"455" ,
"Rocky Harbour":"456" ,
"Gros Morne":"457" ,
"Toronto":"458" ,
"Lanaudière":"459" ,
"Port Hawkesbury":"460" ,
"Tracadie":"461" ,
"Antigonish":"462" ,
"Cape George":"463" ,
"Guysborough":"464" ,
"Tatlayoko Lake":"465" ,
"Clarenville":"466" ,
"Terra Nova (National Park)":"467" ,
"Drayton Valley":"468" ,
"Vineland":"469" ,
"Lincoln":"470" ,
"Trail":"471" ,
"Winnipeg (The Forks)":"472" ,
"Winterland":"473" ,
"Marystown":"474" ,
"Grand Bank":"475" ,
"Nahanni Butte":"476" ,
"Whitecourt":"477" ,
"La Grande-Quatre":"478" ,
"Sault Ste. Marie":"479" ,
"Kangirsuk":"480" ,
"Tofino":"481" ,
"Ucluelet":"482" ,
"Baie-Comeau":"483" ,
"Forestville":"484" ,
"Bella Coola":"485" ,
"Bagotville":"486" ,
"Baker Lake":"487" ,
"Campbell River":"488" ,
"Alliston":"489" ,
"Minnedosa":"490" ,
"Souris":"491" ,
"Brandon":"492" ,
"Cochrane":"493" ,
"Blanc-Sablon":"494" ,
"Cambridge Bay":"495" ,
"Nanaimo":"496" ,
"Castlegar":"497" ,
"Kugluktuk":"498" ,
"Blue River":"499" ,
"Chetwynd":"500" ,
"Chesterfield":"501" ,
"Chipman":"502" ,
"Doaktown":"503" ,
"Clyde River":"504" ,
"Kluane Lake":"505" ,
"Burwash Landing":"506" ,
"Deer Lake":"507" ,
"Dauphin":"508" ,
"Dawson Creek":"509" ,
"Edmonton (Int'l Aprt)":"510" ,
"Arviat":"511" ,
"Elliot Lake":"512" ,
"Blind River":"513" ,
"Oxbow":"514" ,
"Carlyle":"515" ,
"Estevan":"516" ,
"Fort Severn":"517" ,
"Edson":"518" ,
"Inuvik":"519" ,
"Armstrong":"520" ,
"Oromocto":"521" ,
"Woodstock":"522" ,
"Mildred Lake":"523" ,
"Fort Resolution":"524" ,
"Fort Simpson":"525" ,
"Makkovik":"526" ,
"Golden":"527" ,
"Greater Napanee":"528" ,
"Sydenham":"529" ,
"Westport":"530" ,
"Kingston":"531" ,
"La Grande Rivière":"532" ,
"Arnes":"533" ,
"Gimli":"534" ,
"Gaspé":"535" ,
"Forillon":"536" ,
"Forillon (National Park)":"537" ,
"Greenstone (Geraldton)":"538" ,
"Greenstone (Nakina)":"539" ,
"Igloolik":"540" ,
"Havre St-Pierre":"541" ,
"Kuujjuarapik":"542" ,
"Gillam":"543" ,
"Quaqtaq":"544" ,
"Hudson Bay":"545" ,
"Dryden":"546" ,
"Hope":"547" ,
"Haldimand County":"548" ,
"Hamilton":"549" ,
"Brantford":"550" ,
"Longueuil":"551" ,
"Richelieu":"552" ,
"Carignan":"553" ,
"Chambly":"554" ,
"Mont Saint-Hilaire":"555" ,
"Otterburn Park":"556" ,
"Saint-Amable":"557" ,
"Saint-Basile Le Grand":"558" ,
"Sainte-Julie":"559" ,
"Enterprise":"560" ,
"Hay River":"561" ,
"Summerside":"562" ,
"Ivujivik":"563" ,
"Pond Inlet":"564" ,
"Island Lake":"565" ,
"Gods Lake":"566" ,
"Stephenville":"567" ,
"Kamloops":"568" ,
"Cache Creek":"569" ,
"Aklavik":"570" ,
"Guelph":"571" ,
"Cambridge":"572" ,
"Kitchener-Waterloo":"573" ,
"Kangiqsujuaq":"574" ,
"Lac Raglan":"575" ,
"Key Lake":"576" ,
"Schefferville":"577" ,
"Akulivik":"578" ,
"Waskaganish":"579" ,
"Baie-James":"580" ,
"Kindersley":"581" ,
"Newmarket":"582" ,
"Charlottetown":"583" ,
"Vaughan":"584" ,
"Markham":"585" ,
"Aupaluk":"586" ,
"Kimmirut":"587" ,
"Chapleau":"588" ,
"Meadow Lake":"589" ,
"Lloydminster":"590" ,
"Kangiqsualujjuaq":"591" ,
"Kelowna":"592" ,
"Mayo":"593" ,
"Mary's Harbour":"594" ,
"Fort McMurray":"595" ,
"Moosonee":"596" ,
"Fort Albany":"597" ,
"Chibougamau":"598" ,
"Umiujaq":"599" ,
"Mirabel":"600" ,
"Saint-Jérôme":"601" ,
"Lachute":"602" ,
"Blainville":"603" ,
"Boisbriand":"604" ,
"Lorraine":"605" ,
"Rosemère":"606" ,
"Sainte-Anne-Des-Plaines":"607" ,
"Sainte-Thérèse":"608" ,
"Saint-Eustache":"609" ,
"Natashquan":"610" ,
"Gatineau":"611" ,
"Papineau":"612" ,
"Pontiac":"613" ,
"Val-des-Monts":"614" ,
"Chelsea":"615" ,
"Norway House":"616" ,
"Matagami":"617" ,
"Ekati (Lac de Gras)":"618" ,
"Cold Lake":"619" ,
"Québec":"620" ,
"High Level":"621" ,
"Grand Manan":"622" ,
"Ottawa (Richmond - Metcalfe)":"623" ,
"Prince Albert":"624" ,
"Peace River":"625" ,
"Portage la Prairie":"626" ,
"Inukjuak":"627" ,
"Pickle Lake":"628" ,
"Peterborough":"629" ,
"Port Perry":"630" ,
"Kawartha Lakes (Lindsay)":"631" ,
"Kawartha Lakes (Fenelon Falls)":"632" ,
"Prince Rupert":"633" ,
"Powell River":"634" ,
"Montréal":"635" ,
"Fort Chipewyan":"636" ,
"Burk's Falls":"637" ,
"Gravenhurst":"638" ,
"Port Carling":"639" ,
"Huntsville":"640" ,
"Bracebridge":"641" ,
"Muskoka":"642" ,
"Rainbow Lake":"643" ,
"The Pas":"644" ,
"Red Deer":"645" ,
"Windsor":"646" ,
"Good Hope Lake":"647" ,
"Watson Lake":"648" ,
"Yarmouth":"649" ,
"Sioux Narrows":"650" ,
"Kenora":"651" ,
"Lethbridge":"652" ,
"Shediac":"653" ,
"Moncton":"654" ,
"Hopewell":"655" ,
"Comox":"656" ,
"Courtenay":"657" ,
"Brampton":"658" ,
"Kakabeka Falls":"659" ,
"Dorion":"660" ,
"Grande Prairie":"661" ,
"Canora":"662" ,
"Yorkton":"663" ,
"Kamsack":"664" ,
"Melville":"665" ,
"North Battleford":"666" ,
"Gander":"667" ,
"Campbellton":"668" ,
"Lewisporte":"669" ,
"Sydney":"670" ,
"Quesnel":"671" ,
"Resolute":"672" ,
"Roberval":"673" ,
"Lac-Saint-Jean":"674" ,
"Saint-Félicien":"675" ,
"Red Lake":"676" ,
"Pikangikum":"677" ,
"Rankin Inlet":"678" ,
"Revelstoke":"679" ,
"Greater Sudbury":"680" ,
"Sherbrooke":"681" ,
"Asbestos":"682" ,
"Suffield":"683" ,
"Stony Rapids":"684" ,
"Quispamsis":"685" ,
"Sussex":"686" ,
"Saint John":"687" ,
"Fundy (National Park)":"688" ,
"Sanikiluaq":"689" ,
"Fort Smith":"690" ,
"St. Catharines":"691" ,
"Niagara Falls":"692" ,
"Nanisivik":"693" ,
"Cape Dorset":"694" ,
"Thompson":"695" ,
"Sachigo Lake":"696" ,
"Big Trout Lake":"697" ,
"Wunnummin Lake":"698" ,
"Tasiujaq":"699" ,
"Stirling":"700" ,
"Trenton":"701" ,
"Prince Edward (Picton)":"702" ,
"Belleville":"703" ,
"Quinte West":"704" ,
"Timmins":"705" ,
"Cochrane":"706" ,
"Oshawa":"707" ,
"Whitby":"708" ,
"Shawinigan":"709" ,
"Pickering":"710" ,
"Puvirnituq":"711" ,
"Laval":"712" ,
"Repulse Bay":"713" ,
"Hall Beach":"714" ,
"La Ronge":"715" ,
"Qikiqtarjuaq":"716" ,
"Val-d'Or":"717" ,
"Amos":"718" ,
"Kuujjuaq":"719" ,
"Norman Wells":"720" ,
"Joliette":"721" ,
"La Loche":"722" ,
"Buffalo Narrows":"723" ,
"Wiarton":"724" ,
"Port Elgin":"725" ,
"Saugeen Shores":"726" ,
"South Bruce Peninsula":"727" ,
"Owen Sound":"728" ,
"Petawawa":"729" ,
"Pembroke":"730" ,
"Renfrew":"731" ,
"Deep River":"732" ,
"Moosomin":"733" ,
"Richer":"734" ,
"Victoria Harbour":"735" ,
"Wabush Lake":"736" ,
"Labrador City":"737" ,
"Fermont":"738" ,
"Williams Lake":"739" ,
"Wrigley":"740" ,
"Cranbrook":"741" ,
"Saint-Timothée":"742" ,
"Rosthern":"743" ,
"Lambton Shores":"744" ,
"Medicine Hat":"745" ,
"Fort St. John":"746" ,
"Savant Lake":"747" ,
"Sioux Lookout":"748" ,
"Whale Cove":"749" ,
"Pangnirtung":"750" ,
"Beaver Creek":"751" ,
"Earlton":"752" ,
"Temiskaming Shores":"753" ,
"Vanderhoof":"754" ,
"Repentigny":"755" ,
"Kitimat":"756" ,
"Terrace":"757" ,
"Abbotsford":"758" ,
"Paulatuk":"759" ,
"Carcross":"760" ,
"Wawa":"761" ,
"Lake Superior (Provincial Park)":"763" ,
"White River":"764" ,
"North Bay":"765" ,
"West Nipissing":"766" ,
"Okotoks":"767" ,
"Airdrie":"768" ,
"Delson":"769" ,
"Smithers":"770" ,
"Fort Nelson":"771" ,
"Penticton":"772" ,
"Richmond Hill":"773" ,
"Taloyoak":"774" ,
"Victoria":"775" ,
"Leaf Rapids":"776" ,
"Lynn Lake":"777" ,
"Brochet":"778" ,
"Churchill":"779" ,
"Happy Valley-Goose Bay":"780" ,
"Grande Cache":"781" ,
"Kapuskasing":"782" ,
"Mont-Joli":"783" ,
"Matane":"784" ,
"Toronto Island":"785" ,
"Mississauga":"786" ,
"Caledon":"787" ,
"Regina":"788" ,
"Halton Hills":"789" ,
"Gore Bay":"790" ,
"Detah":"791" ,
"Victoria (Hartland)":"792" ,
"Salluit":"793" ,
"Slave Lake":"794" ,
"Sandspit":"795" ,
"Sarnia":"796"
    ,
"Saskatoon":"797"
    ,
"Coral Harbour":"798"
    ,
"Port Hardy":"799"
    ,
"Sept-Iles":"800"
    ,
"Port-Cartier":"801"
    ,
"Annapolis Royal":"802"
    ,
"Greenwood":"803"
    ,
"Bridgetown":"804"
    ,
"Mackenzie":"805"
    ,
"Bathurst":"806"
    ,
"Campbellton":"807"
    ,
"Dalhousie":"808" ,
"Charlo":"809" ,
"Pointe-à-la-Croix":"810" ,
"Carleton-sur-Mer":"811" ,
"Tatamagouche":"812" ,
"Truro":"813" ,
"Economy":"814" ,
"Orangeville":"815" ,
"Fort McPherson":"816" ,
"Tulita":"817" ,
"Fort Good Hope":"818" ,
"Ignace":"819" ,
"Gjoa Haven":"820" ,
"Alert":"821" ,
"Moose Jaw":"822" ,
"Old Crow":"823" ,
"Pincher Creek":"824" ,
"Whitehorse":"825" ,
"Sandy Lake":"826" ,
"St. Peters Bay":"827" ,
"Stewart":"828" ,
"Stettler":"829" ,
"Tuktoyaktuk":"830" ,
"Delta":"831" ,
"Churchill Falls":"832" ,
"Wainwright":"833" ,
"Bella Bella":"834" ,
"Lloydminster":"835"
}
//}}}
var geoBaseArea1= //{{{
{
// Simulator
"VA":"620" ,
//Canada
"AB":"045" ,
"BC":"141" ,
"MB":"193" ,
"NB":"250" ,
"NL":"280" ,
"NS":"318" ,
"NT":"366" ,
"NU":"394" ,
"ON":"458" ,
"PE":"583" ,
"QC":"620" ,
"SK":"788" ,
"YT":"825" };
//}}}
//}}}

function toFarenheight(temperature) //{{{
{
    if (0 === temperature.length) return "";
    
    if (cnfCelsius[0]!='1')
        {
        return (Math.round(32.0 + 1.8 * parseFloat(temperature)).toString());
        }
    else
        {
        return (temperature);
        }
}
//}}}
function toMPH(speed) //{{{
{
    if (0 === speed.length) return "";
    
    if (cnfCelsius[0]!='1')
        {
        return (Math.round(0.6214 * parseFloat(speed)).toString());
        }
    else
        {
        return (speed);
        }
}
//}}}
function fetch_Location(latitude, longitude) //{{{
{
    var req = new XMLHttpRequest();

    req.ontimeout = function(e) //{{{
        {
        console.log("****** TIMEOUT!!!! ******")
        Pebble.sendAppMessage( { "18":  "2" } );
        };
    //}}}
    
    req.onload = function(e) //{{{
        {
        if (req.readyState == 4)
            {
            if(req.status == 200)
                {
                var response = JSON.parse(req.responseText);

                // Check if we have valid response from Nominatim
                if (!response || !response.address) {
                    console.log("Nominatim API returned no address data - skipping location name lookup");
                    return;
                }

                // Extract location components from Nominatim response
                var address = response.address;

                // Get locality (city/town)
                geoLocality = address.city || address.town || address.village || address.municipality || "";

                // Get area2 (county/region)
                geoArea2 = address.county || "";

                // Get area1 (state/province)
                geoArea1 = address.state || "";

                geoString = geoBase[geoLocality];
                if ( geoString === undefined )
                    {
                    geoString = geoBase[geoArea2];
                    }
                if ( geoString === undefined )
                    {
                    geoString = geoBaseArea1[geoArea1];
                    }

                var displayAddress = response.display_name;

                console.log("geoLatitude: "+geoLatitude);
                console.log("geoLongitude: "+geoLongitude);
                console.log("geoString: "+geoString);
                console.log("geoLocality: " + geoLocality);
                console.log("geoArea1: " + geoArea1);
                console.log("geoArea2: " + geoArea2);
                console.log("ADDRESS: " + displayAddress);

                // Send locality update to watch now that we have it
                var localityCode = geoLocality.substring(0, 3);
                console.log("Sending locality update: " + localityCode);
                Pebble.sendAppMessage({"14": localityCode});
                }
            else
                {
                console.log("Error");
                }
            }
        };
    //}}}

    // Use OpenStreetMap Nominatim for free reverse geocoding (no API key required)
    req.open('GET', "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + latitude + "&lon=" + longitude + "&zoom=10");
    req.setRequestHeader('User-Agent', 'PebbleBitcoinWeatherApp/1.0');

    req.timeout = 3000;
    req.send(null);
}
//}}}
function fetch_BTC () //{{{
{
    var req = new XMLHttpRequest();

    console.log("  -> fetch_BTC");

    req.ontimeout = function(e) //{{{
        {
        console.log("****** TIMEOUT!!!! ******")
        Pebble.sendAppMessage( { "18":  "2" } );
        };
    //}}}

    req.onload = function(e) //{{{
        {
        if (req.readyState == 4)
            {
            if(req.status == 200) //{{{
                {
                var response = JSON.parse(req.responseText);

                btcH = btcL = btcV = 0.0;

                // Kraken API response handling
                if (typeof response.result != 'undefined') //{{{
                    {
                    if (typeof response.result.XXBTZCAD != 'undefined') {{{
                        {
                        console.log("BTC: Kraken CAD - raw h=" + response.result.XXBTZCAD.h[0] + " l=" + response.result.XXBTZCAD.l[0] + " c=" + response.result.XXBTZCAD.c[0]);
                        var btcH = Math.round(response.result.XXBTZCAD.h[0]);
                        var btcL = Math.round(response.result.XXBTZCAD.l[0]);
                        var btcV = Math.round(response.result.XXBTZCAD.c[0]);
                        console.log("BTC: Kraken CAD - sending btcH=" + btcH + " btcL=" + btcL + " btcV=" + btcV);
                        }
                    }}}
                    if (typeof response.result.XXBTZEUR != 'undefined') {{{
                        {
                        console.log("BTC: Kraken EUR - raw h=" + response.result.XXBTZEUR.h[0] + " l=" + response.result.XXBTZEUR.l[0] + " c=" + response.result.XXBTZEUR.c[0]);
                        var btcH = Math.round(response.result.XXBTZEUR.h[0]);
                        var btcL = Math.round(response.result.XXBTZEUR.l[0]);
                        var btcV = Math.round(response.result.XXBTZEUR.c[0]);
                        console.log("BTC: Kraken EUR - sending btcH=" + btcH + " btcL=" + btcL + " btcV=" + btcV);
                        }
                    }}}
                    if (typeof response.result.XXBTZUSD != 'undefined') {{{
                        {
                        console.log("BTC: Kraken USD - raw h=" + response.result.XXBTZUSD.h[0] + " l=" + response.result.XXBTZUSD.l[0] + " c=" + response.result.XXBTZUSD.c[0]);
                        var btcH = Math.round(response.result.XXBTZUSD.h[0]);
                        var btcL = Math.round(response.result.XXBTZUSD.l[0]);
                        var btcV = Math.round(response.result.XXBTZUSD.c[0]);
                        console.log("BTC: Kraken USD - sending btcH=" + btcH + " btcL=" + btcL + " btcV=" + btcV);
                        }
                    }}}
                    }
                //}}}



                req.onload = function(e) //{{{
                    {
                    if (req.readyState == 4)
                        {
                        if(req.status == 200)
                            {
                            if (cnfService === 'Open-Meteo')
                                {
                                // Parse Open-Meteo API
                                console.log("Open-Meteo API: Parsing response");
                                try {
                                    var res = JSON.parse(req.responseText);
                                    console.log("Open-Meteo API: Parsed JSON successfully");

                                    if (res.current)
                                        {
                                        console.log("Open-Meteo API: Found current weather data");

                                        // Map Open-Meteo weather codes to EC icon codes
                                        function weatherCodeToEC(code) {
                                            // WMO Weather interpretation codes
                                            if (code === 0) return "00"; // Clear sky
                                            if (code === 1) return "01"; // Mainly clear
                                            if (code === 2) return "02"; // Partly cloudy
                                            if (code === 3) return "10"; // Overcast
                                            if (code >= 45 && code <= 48) return "24"; // Fog
                                            if (code >= 51 && code <= 55) return "09"; // Drizzle
                                            if (code >= 61 && code <= 65) return "12"; // Rain
                                            if (code >= 71 && code <= 77) return "16"; // Snow
                                            if (code >= 80 && code <= 82) return "11"; // Rain showers
                                            if (code >= 85 && code <= 86) return "15"; // Snow showers
                                            if (code >= 95 && code <= 99) return "19"; // Thunderstorm
                                            return "00"; // Default
                                        }

                                        // Extract current weather
                                        var obTemperature = toFarenheight(res.current.temperature_2m.toFixed(0));
                                        var obWindSpeed = toMPH(res.current.wind_speed_10m.toFixed(0));
                                        var obWindDir = degToCard(res.current.wind_direction_10m);
                                        var obWindGust = toMPH(res.current.wind_gusts_10m.toFixed(0));
                                        var obIconCode = weatherCodeToEC(res.current.weather_code);
                                        var obWindChill = "!";
                                        var obHumidex = "!";

                                        // Extract daily forecast
                                        var forecastHigh = res.daily && res.daily.temperature_2m_max ? toFarenheight(res.daily.temperature_2m_max[0].toFixed(0)) : "!";
                                        var forecastLow = res.daily && res.daily.temperature_2m_min ? toFarenheight(res.daily.temperature_2m_min[0].toFixed(0)) : "!";
                                        var forecastIconCode = res.daily && res.daily.weather_code ? weatherCodeToEC(res.daily.weather_code[0]) : "00";
                                        var forecastPeriod = "Today";

                                        console.log("Open-Meteo API: Location - Lat: " + geoLatitude.toFixed(2) + " Lon: " + geoLongitude.toFixed(2));
                                        console.log("Open-Meteo API: temp=" + obTemperature + ", wind=" + obWindSpeed + ", icon=" + obIconCode);
                                        console.log("Open-Meteo API: Sending message to watch");

                                        Pebble.sendAppMessage(
                                            {
                                            "0":  btcV.toString(),
                                            "1":  btcL.toString(),
                                            "2":  btcH.toString(),
                                            "3":  obIconCode,
                                            "4":  obTemperature,
                                            "5":  obWindDir,
                                            "6":  obWindGust,
                                            "7":  obWindSpeed,
                                            "8":  obWindChill,
                                            "9":  obHumidex,
                                            "10": forecastIconCode,
                                            "11": forecastHigh,
                                            "12": forecastLow,
                                            "13": forecastPeriod,
                                            "14": geoLocality.substring(0, 3)
                                            });
                                        console.log("Open-Meteo API: Sending locality=" + geoLocality.substring(0, 3));
                                        console.log("Open-Meteo API: Message sent");
                                        }
                                    else
                                        {
                                        console.log("** ERROR: No weather data in Open-Meteo API response");
                                        Pebble.sendAppMessage( { "18":  "5" } );
                                        }
                                } catch (err) {
                                    console.log("** ERROR parsing Open-Meteo API response: " + err.message);
                                    Pebble.sendAppMessage( { "18":  "5" } );
                                }
                                }
                            else if (cnfService[0] !== 'O')
                                {
                                // Parse new Environment Canada JSON API
                                console.log("EC API: Parsing response");
                                try {
                                    var res = JSON.parse(req.responseText);
                                    console.log("EC API: Parsed JSON successfully");

                                    if (res.features && res.features.length > 0)
                                        {
                                        console.log("EC API: Found " + res.features.length + " weather station(s)");

                                        // Log all available stations
                                        for (var i = 0; i < res.features.length; i++) {
                                            console.log("EC API: Station " + i + ": " + res.features[i].id);
                                        }

                                        // Find the best station - prefer certain stations, or use closest to center of bbox
                                        var selectedIndex = 0;

                                        // Calculate center point of our search
                                        var centerLat = geoLatitude;
                                        var centerLon = geoLongitude;

                                        // Find station closest to GPS coordinates
                                        var minDistance = 999999;
                                        for (var i = 0; i < res.features.length; i++) {
                                            var stationLat = res.features[i].geometry.coordinates[1];
                                            var stationLon = res.features[i].geometry.coordinates[0];
                                            // Simple distance calculation (not perfect but good enough)
                                            var distance = Math.sqrt(Math.pow(stationLat - centerLat, 2) + Math.pow(stationLon - centerLon, 2));
                                            console.log("EC API: Station " + res.features[i].id + " distance=" + distance.toFixed(4));
                                            if (distance < minDistance) {
                                                minDistance = distance;
                                                selectedIndex = i;
                                            }
                                        }

                                        console.log("EC API: Selected station " + selectedIndex + ": " + res.features[selectedIndex].id);
                                        var weatherData = res.features[selectedIndex].properties;
                                        var currentConditions = weatherData.currentConditions;
                                        var forecasts = weatherData.forecastGroup.forecasts;

                                        // Debug logging
                                        console.log("EC API: RAW temperature=" + JSON.stringify(currentConditions.temperature));
                                        console.log("EC API: RAW wind=" + JSON.stringify(currentConditions.wind));
                                        console.log("EC API: iconCode=" + (currentConditions.iconCode ? currentConditions.iconCode.value : "NULL"));
                                        console.log("EC API: forecast icon=" + (forecasts[0] && forecasts[0].abbreviatedForecast && forecasts[0].abbreviatedForecast.icon ? forecasts[0].abbreviatedForecast.icon.value : "NULL"));

                                        // Helper function to pad icon codes
                                        function pad2(num) {
                                            if (num === null || num === undefined) {
                                                console.log("WARNING: pad2 received null/undefined, returning '00'");
                                                return '00';
                                            }
                                            var s = num.toString();
                                            return s.length < 2 ? '0' + s : s;
                                        }

                                        // Current conditions with null checks - use forecast icon as fallback
                                        var obIconCode = pad2(currentConditions.iconCode ? currentConditions.iconCode.value :
                                                             (forecasts[0] && forecasts[0].abbreviatedForecast && forecasts[0].abbreviatedForecast.icon ? forecasts[0].abbreviatedForecast.icon.value : null));

                                        // Temperature - use most precise value available
                                        var tempValue = currentConditions.temperature && currentConditions.temperature.value ? currentConditions.temperature.value.en : null;
                                        console.log("EC API: Temperature value=" + tempValue);
                                        var obTemperature = tempValue !== null ? toFarenheight(tempValue.toFixed(0)) : "!";

                                        // Wind direction - prefer text direction from API, fall back to bearing conversion
                                        var windDir = "!";
                                        if (currentConditions.wind) {
                                            // First try text direction (e.g., "ENE") - this is most accurate
                                            if (currentConditions.wind.direction && currentConditions.wind.direction.value) {
                                                windDir = currentConditions.wind.direction.value.en;
                                                console.log("EC API: Using text direction=" + windDir);
                                            }
                                            // Fall back to converting bearing if no text direction available
                                            else if (currentConditions.wind.bearing && currentConditions.wind.bearing.value) {
                                                var bearing = currentConditions.wind.bearing.value.en;
                                                console.log("EC API: Wind bearing=" + bearing);
                                                windDir = degToCard(bearing);
                                                console.log("EC API: Converted bearing to direction=" + windDir);
                                            }
                                        }
                                        var obWindDir = windDir;

                                        var obWindSpeed = currentConditions.wind && currentConditions.wind.speed ? toMPH(currentConditions.wind.speed.value.en.toString()) : "!";
                                        var obWindGust = currentConditions.wind && currentConditions.wind.gust ? toMPH(currentConditions.wind.gust.value.en.toString()) : "!";

                                        // Only show wind chill if current temperature is 0°C or below
                                        var obWindChill = "!";
                                        if (currentConditions.windChill && tempValue !== null && tempValue <= 0) {
                                            obWindChill = toFarenheight(currentConditions.windChill.value.en.toString());
                                            console.log("EC API: Wind chill=" + obWindChill + " (temp=" + tempValue + "C)");
                                        } else if (tempValue !== null && tempValue > 0) {
                                            console.log("EC API: Suppressing wind chill (temp=" + tempValue + "C is above 0)");
                                        }

                                        var obHumidex = "!"; // Not provided in new API

                                        // Forecast (first forecast period - usually today) with null checks
                                        var forecastIconCode = pad2(forecasts[0] && forecasts[0].abbreviatedForecast && forecasts[0].abbreviatedForecast.icon ? forecasts[0].abbreviatedForecast.icon.value : null);
                                        var forecastPeriod = forecasts[0] && forecasts[0].period ? forecasts[0].period.textForecastName.en : "!";

                                        // Get today's high and tonight's low
                                        var forecastHigh = "!";
                                        var forecastLow = "!";

                                        for (var i = 0; i < Math.min(2, forecasts.length); i++) {
                                            if (forecasts[i].temperatures && forecasts[i].temperatures.temperature) {
                                                var tempClass = forecasts[i].temperatures.temperature[0].class.en;
                                                var tempValue = forecasts[i].temperatures.temperature[0].value.en;
                                                if (tempClass === "high") {
                                                    forecastHigh = toFarenheight(tempValue.toString());
                                                } else if (tempClass === "low") {
                                                    forecastLow = toFarenheight(tempValue.toString());
                                                }
                                            }
                                        }

                                        console.log("EC API: temp=" + obTemperature + ", wind=" + obWindSpeed + ", icon=" + obIconCode);
                                        console.log("EC API: forecastHigh=" + forecastHigh + ", forecastLow=" + forecastLow);
                                        console.log("EC API: Sending message to watch");

                                        Pebble.sendAppMessage( //{{{
                                            {
                                            "0":  btcV.toString(),
                                            "1":  btcL.toString(),
                                            "2":  btcH.toString(),
                                            "3":  obIconCode,
                                            "4":  obTemperature,
                                            "5":  obWindDir,
                                            "6":  obWindGust,
                                            "7":  obWindSpeed,
                                            "8":  obWindChill,
                                            "9":  obHumidex,
                                            "10": forecastIconCode,
                                            "11": forecastHigh,
                                            "12": forecastLow,
                                            "13": forecastPeriod,
                                            "14": geoLocality.substring(0, 3)
                                            });
                                        console.log("EC API: Sending locality=" + geoLocality.substring(0, 3));
                                        console.log("EC API: Message sent");
                                        //}}}
                                        }
                                    else
                                        {
                                        console.log("** ERROR: No weather data in EC API response");
                                        Pebble.sendAppMessage( { "18":  "5" } );
                                        }
                                } catch (err) {
                                    console.log("** ERROR parsing EC API response: " + err.message);
                                    Pebble.sendAppMessage( { "18":  "5" } );
                                }
                                }
                            else
                                {
                                console.log(" -> OWM!");
                                console.log(req.responseText);
                                var res = JSON.parse(req.responseText);

                                if (res["cod"] === "404")
                                    {
                                    console.log("** Unknown city");
                                    Pebble.sendAppMessage( { "18":  "4" } );
                                    }
                                else
                                    {
                                    if (res["main"]["temp"] !== undefined)
                                        obTemperature = toFarenheight(res["main"]["temp"].toFixed(0));
                                    else 
                                        obTemperature = "?";

                                    obWindSpeed = toMPH((res["wind"]["speed"] * 3.6).toFixed(0));
                                    if (res["wind"]["gust"] !== undefined)
                                        obWindGust = toMPH((res["wind"]["gust"] * 3.6).toFixed(0));
                                    obWindDir = degToCard(res["wind"]["deg"]);
                                    obWindChill = "!";
                                    obHumidex = "!";
                                    obIconCode = owmToEC(res["weather"][0]["icon"]);
                                    forecastPeriod = res["weather"][0]["icon"];

                                    req.onload = function(e) //{{{
                                        {
                                        if (req.readyState == 4)
                                            {
                                            if(req.status == 200)
                                                {
                                                    console.log(req.responseText);
                                                    var res = JSON.parse(req.responseText);
                                                    //forecastLow = res["list"][0]["temp"]["night"].toFixed(0);
                                                    //forecastHigh = res["list"][0]["temp"]["day"].toFixed(0);
                                                    forecastIconCode = owmToEC(res["list"][0]["weather"][0]["icon"]);

                                                    req.onload = function(e) //{{{
                                                        {
                                                        if (req.readyState == 4)
                                                            {
                                                            if(req.status == 200)
                                                                {
                                                                console.log(req.responseText);
                                                                var res = JSON.parse(req.responseText);
                                                                forecastLow = toFarenheight(res["list"][0]["temp"]["night"].toFixed(0));
                                                                forecastHigh = toFarenheight(res["list"][0]["temp"]["day"].toFixed(0));

                                                                Pebble.sendAppMessage( //{{{
                                                                    {
                                                                    "0":  btcV.toString(),
                                                                    "1":  btcL.toString(),
                                                                    "2":  btcH.toString(),
                                                                    "3":  obIconCode,
                                                                    "4":  obTemperature,
                                                                    "5":  obWindDir,
                                                                    "6":  obWindGust,
                                                                    "7":  obWindSpeed,
                                                                    "8":  obWindChill,
                                                                    "9":  obHumidex,
                                                                    "10": forecastIconCode,
                                                                    "11": forecastHigh,
                                                                    "12": forecastLow,
                                                                    "13": forecastPeriod,
                                                                    "14": res["city"]["country"]
                                                                    });
                                                                //}}}
                                                                }
                                                            else
                                                                {
                                                                console.log("** ERROR in weather");
                                                                Pebble.sendAppMessage( { "18":  "3" } );
                                                                }
                                                            }
                                                        }

                                                    //}}}

                                                    req.open('GET', "http://api.openweathermap.org/data/2.5/forecast/daily?appid=" + encodeURIComponent(cnfOWMkey) + "&q=%7B" + encodeURIComponent(cnfOWMloc) + "%7D&cnt=1&units=metric&mode=json", true);

                                                    req.timeout = 5000;
                                                    req.send(null);
                                                }
                                            else
                                                {
                                                console.log("** ERROR in weather");
                                                Pebble.sendAppMessage( { "18":  "3" } );
                                                }
                                            }
                                        }
                                    //}}}

                                    req.open('GET', "http://api.openweathermap.org/data/2.5/forecast/hourly?appid=" + encodeURIComponent(cnfOWMkey) + "&q=%7B" + encodeURIComponent(cnfOWMloc) + "%7D&cnt=1&units=metric&mode=json", true);

                                    req.timeout = 5000;
                                    req.send(null);
                                    }
                                }
                            }
                        else
                            {
                            console.log("** ERROR in weather");
                            Pebble.sendAppMessage( { "18":  "5" } );
                            }
                        }
                    };
                //}}}
                
                    if (cnfService === 'Open-Meteo')
                    {
                    // Open-Meteo API - uses GPS coordinates
                    var url = "https://api.open-meteo.com/v1/forecast?" +
                              "latitude=" + geoLatitude +
                              "&longitude=" + geoLongitude +
                              "&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m" +
                              "&daily=temperature_2m_max,temperature_2m_min,weather_code" +
                              "&timezone=auto";
                    req.open('GET', url, true);
                    }
                else if (cnfService[0] === 'O')
                    {
                    req.open('GET', "http://api.openweathermap.org/data/2.5/weather?appid=" + encodeURIComponent(cnfOWMkey) + "&q=%7B" + encodeURIComponent(cnfOWMloc) + "%7D&cnt=2&units=metric&mode=json", true);
                    }
                else
                    {
                    // New Environment Canada API - use GPS coordinates with a small bounding box
                    var lonMin = (geoLongitude - 0.1).toFixed(1);
                    var latMin = (geoLatitude - 0.1).toFixed(1);
                    var lonMax = (geoLongitude + 0.1).toFixed(1);
                    var latMax = (geoLatitude + 0.1).toFixed(1);
                    var url = "https://api.weather.gc.ca/collections/citypageweather-realtime/items?bbox=" +
                              lonMin + "," + latMin + "," + lonMax + "," + latMax + "&f=json&lang=en";
                    console.log("EC API: Using GPS coordinates - bbox=" + lonMin + "," + latMin + "," + lonMax + "," + latMax);
                    req.open('GET', url, true);
                    }
                req.timeout = 10000;  // 10 second timeout
                req.send(null);
                }
            else
                {
                console.log("** ERROR in btc");
                Pebble.sendAppMessage( { "18":  "2" } );
                }
            //}}}
            }
        else
            {
            console.log("State "+req.readyState);
            }
        };
    //}}}

    switch (cnfExchange) //{{{
        {
        case "Kraken-CAD":
            req.open('GET', "https://api.kraken.com/0/public/Ticker?pair=XBTCAD", true);
            break;
        case "Kraken-EUR":
            req.open('GET', "https://api.kraken.com/0/public/Ticker?pair=XBTEUR", true);
            break;
        case "Kraken-USD":
            req.open('GET', "https://api.kraken.com/0/public/Ticker?pair=XBTUSD", true);
            break;
        default:
            req.open('GET', "https://api.kraken.com/0/public/Ticker?pair=XBTUSD", true);
            break;
        }
    //}}}
    
    req.timeout = 3000;
    req.send(null);
}
//}}}
function degToCard (deg) //{{{
{
  if (deg>11.25 && deg<33.75){
    return "NNE";
  }else if (deg>33.75 && deg<56.25){
    return "ENE";
  }else if (deg>56.25 && deg<78.75){
    return "E";
  }else if (deg>78.75 && deg<101.25){
    return "ESE";
  }else if (deg>101.25 && deg<123.75){
    return "ESE";
  }else if (deg>123.75 && deg<146.25){
    return "SE";
  }else if (deg>146.25 && deg<168.75){
    return "SSE";
  }else if (deg>168.75 && deg<191.25){
    return "S";
  }else if (deg>191.25 && deg<213.75){
    return "SSW";
  }else if (deg>213.75 && deg<236.25){
    return "SW";
  }else if (deg>236.25 && deg<258.75){
    return "WSW";
  }else if (deg>258.75 && deg<281.25){
    return "W";
  }else if (deg>281.25 && deg<303.75){
    return "WNW";
  }else if (deg>303.75 && deg<326.25){
    return "NW";
  }else if (deg>326.25 && deg<348.75){
    return "NNW";
  }else{
    return "N"; 
  }
}
//}}}
function owmToEC (obIconCode) //{{{
{
    switch (obIconCode)
        {
        case "01d":
            obIconCode = "0";
            break;
        case "02d":
            obIconCode = "2";
            break;
        case "03d":
            obIconCode = "3";
            break;
        case "04d":
            obIconCode = "10";
            break;
        case "09d":
            obIconCode = "11";
            break;
        case "10d":
            obIconCode = "6";
            break;
        case "11d":
            obIconCode = "19";
            break;
        case "13d":
            obIconCode = "16";
            break;
        case "50d":
            obIconCode = "24";
            break;
        case "01n":
            obIconCode = "30";
            break;
        case "02n":
            obIconCode = "31";
            break;
        case "03n":
            obIconCode = "32";
            break;
        case "04n":
            obIconCode = "33";
            break;
        case "09n":
            obIconCode = "36";
            break;
        case "10n":
            obIconCode = "36";
            break;
        case "11n":
            obIconCode = "39";
            break;
        case "13n":
            obIconCode = "38";
            break;
        case "50n":
            obIconCode = "24";
            break;
        default:
            obIconCode = "0";
            break;
        }
    return(obIconCode);
}
//}}}

function locationSuccess(pos) //{{{
{
    var coordinates = pos.coords;

    geoLatitude = coordinates.latitude;
    geoLongitude = coordinates.longitude;

    console.log ("*** GPS LOCATION SUCCESS! **: LAT=" + geoLatitude + " LON=" + geoLongitude);
    console.log ("GPS accuracy: " + coordinates.accuracy + " meters");
    gpsError = 0;
    fetch_Location(geoLatitude, geoLongitude);
    fetch_BTC();
}
//}}}
function locationError(err) //{{{
{
    console.log ("*** GPS LOCATION ERROR! **: ");
    /* Use Quebec City area as default when GPS is off */
    geoLongitude = -71.2;
    geoLatitude  = 47.0;
    console.log ("Using Quebec City area as default location (47.0, -71.2).");

    gpsError = 1;

    fetch_Location(geoLatitude, geoLongitude);
    fetch_BTC();
}
//}}}

//{{{ Listeners 
Pebble.addEventListener("ready", function(e) //{{{
{
    console.log("connect!: " + e.ready);
    console.log(e.type);
    Pebble.sendAppMessage( { "18":  "1" } );
});
//}}}
Pebble.addEventListener("appmessage", function(e) //{{{
{
    console.log('vvvvvvvvvvvvv APPMESSAGE RECEIVED vvvvvvvvvvvvv');
    console.log('Full payload: ' + JSON.stringify(e.payload));
    console.log('10003 (exchange): ' + e.payload['10003']);
    console.log('10005 (location): ' + e.payload['10005']);
    console.log('10004 (service): ' + e.payload['10004']);
    console.log('20 (OWM ID): ' + e.payload['20']);
    console.log('21 (OWM key): ' + e.payload['21']);
    console.log('22 (OWM loc): ' + e.payload['22']);
    console.log('10001 (celsius): ' + e.payload['10001']);
    console.log('10002 (health): ' + e.payload['10002']);
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    cnfExchange = e.payload.exchange || e.payload['10003']; // MESSAGE_KEY_exchange
    cnfService  = e.payload.service || e.payload['10004']; // MESSAGE_KEY_service
    cnfOWMid    = e.payload['20'];
    cnfOWMkey   = e.payload['21'];
    cnfOWMloc   = e.payload['22'];
    cnfCelsius  = e.payload.celsius || e.payload['10001']; // MESSAGE_KEY_celsius
    cnfHealth    = e.payload.health || e.payload['10002']; // MESSAGE_KEY_health

    // Always use GPS
    console.log("** Using GPS!");
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
});
//}}}
// Initialize Clay configuration
var Clay = require('pebble-clay');
var clayConfig = require('./config');
var clay = new Clay(clayConfig);
//}}}

