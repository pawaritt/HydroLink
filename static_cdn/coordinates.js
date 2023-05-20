const RIVERS = [
    [[100.4696902630451, 13.79474321338163], [100.4680252318087, 13.79537402631812], [100.4660467349538, 13.79639782224329], [100.4641873505311, 13.79712193058501], [100.4615470446389, 13.79774183737715], [100.4592868579631, 13.79810960598199], [100.4567413842355, 13.79837556961782], [100.4542648838427, 13.79852441106281], [100.4524186798366, 13.79868147276209], [100.4487371703945, 13.7989947334592], [100.4455947147956, 13.79920134874884], [100.4416825152014, 13.7994715006256], [100.427800329377, 13.80039197980455], [100.3956810549406, 13.80191455268111], [100.3897313066165, 13.80211898229148], [100.3722966799861, 13.80264725386787], [100.3533595133324, 13.80323910104318], [100.3160000871992, 13.80477557930752], [100.3129047209427, 13.80499214323275], [100.3087689612884, 13.80512805936007], [100.3037036213004, 13.80543841054285], [100.2979126361894, 13.80599876085319], [100.2858877101585, 13.80672968880063], [100.2768155244099, 13.80752752432132], [100.2650072739518, 13.80830841380252], [100.2527909241101, 13.80925671711594], [100.239694515052, 13.81030592851601], [100.2293512941584, 13.81108207272857], [100.2244141393265, 13.81145246483494]], 
    [[100.4921810425604, 13.74270435642473], [100.4910290976449, 13.74155820502579], [100.4904139376016, 13.74082063070832], [100.4897051546403, 13.73999816161667], [100.4891650248144, 13.73930229387445], [100.4889233917634, 13.73879628467938], [100.4886150442052, 13.73830064328556], [100.4884720096391, 13.73776298161268], [100.488066739919, 13.73676551616478], [100.4875670117421, 13.73580664222085], [100.4873033066367, 13.73519170542469], [100.4870017765394, 13.73440616344529], [100.4865787288823, 13.73339886568702], [100.4863599278327, 13.73256548472228], [100.4862077110544, 13.73180349290971], [100.4859130001853, 13.72931565812276], [100.4855538756927, 13.72796882400922], [100.4849217429477, 13.72624890859], [100.4844991507001, 13.72515821059187], [100.4832824891745, 13.72419559059737], [100.4814735636837, 13.72360323443001], [100.4783728262274, 13.72274967308688], [100.4758101855212, 13.72233355911851], [100.4741905658961, 13.72238573634404], [100.4720320998157, 13.72258354345399], [100.4713654065291, 13.72257664241415], [100.4700497267076, 13.7233240356333], [100.4680642351175, 13.7244283737057], [100.4669271094202, 13.72546504412547], [100.4660549610301, 13.72683487383902], [100.4652015798533, 13.72804590045487], [100.4645050970555, 13.72938970199724]],
    [[100.4894716366597, 13.75954353333166], [100.4866193279727, 13.76103076862115], [100.4842606309579, 13.76107152132967], [100.4824441978878, 13.76115830052431], [100.4814669682854, 13.76152835471089], [100.4795363870666, 13.76227343820867], [100.4783829817391, 13.76304390442931], [100.4755982733564, 13.76530141991782], [100.4740765254382, 13.76702733520245], [100.4727771537308, 13.76880256812373], [100.4720193859804, 13.77051052112993], [100.4709564815648, 13.77348765561638], [100.4708464476997, 13.77512969656673], [100.4694576416689, 13.77823666119957], [100.4675119206295, 13.77983223453706], [100.4670429013373, 13.78070813181278], [100.4665718957464, 13.78314926476916], [100.4663169142528, 13.78473158504387], [100.4661384041082, 13.7865611713613], [100.4659348301959, 13.78749300300389], [100.4660748494753, 13.78808505265897], [100.466484793689, 13.7897452141365], [100.4669177332649, 13.79048167778181], [100.468027941153, 13.79233161846381], [100.4686149540975, 13.79319452688897], [100.4697222762796, 13.79486540270274], [100.4699916282842, 13.79562251527993], [100.4711519344267, 13.79790032326024], [100.4720198656561, 13.80083930369993], [100.4741905043064, 13.80496800042739], [100.4750750002352, 13.80611994171963], [100.4762901997019, 13.8073842686767], [100.4766066292542, 13.80774530475789], [100.4760496406146, 13.80882470134304], [100.4752622797214, 13.80981415433979], [100.4747830901481, 13.81068024151321], [100.4740513365172, 13.81162330577706], [100.4734871919337, 13.81230152492016], [100.4725205247286, 13.8141039733177], [100.4713268354672, 13.81628009867442], [100.4690110874609, 13.82144776998568], [100.4675210478455, 13.8239204031396], [100.4661246897987, 13.82527076100704], [100.464960108858, 13.82617725925589], [100.4631326565501, 13.82745803701767], [100.461453485097, 13.82864808663523], [100.4595531771658, 13.82982535109661], [100.4577179231656, 13.83060253264406], [100.4563449932574, 13.83101101723603], [100.4536807738348, 13.83097131677819], [100.4514525846844, 13.83056439586791]]
    ]
const BASE_RIVER = [
    [100.5995884906648, 13.5321604836276], [100.5874413057319, 13.54368597086624], [100.5815652337652, 13.55087836110108], [100.5769172244557, 13.5597916922903], [100.5761275680181, 13.56549560555062], [100.5775314950103, 13.57191558236769], [100.5831170160138, 13.57787418788374], [100.5890404756021, 13.58423426016894], [100.5916377048953, 13.58904464889607], [100.5925176431165, 13.60020960424683], [100.5908056675016, 13.6060366756178], [100.5885298197092, 13.60817788318708], [100.5763903011199, 13.60887638409812], [100.5610517549649, 13.61279588108317], [100.5481621161673, 13.62077378048206], [100.5422723608734, 13.6276927421791], [100.5382247352037, 13.63491005364435], [100.535293396146, 13.64562554199444], [100.5352021100758, 13.65417397268665], [100.5381545323123, 13.65847096442093], [100.5429477322272, 13.66046193095148], [100.5480030070287, 13.65861687051827], [100.5564263779665, 13.65599206317786], [100.5638223221467, 13.65644330411501], [100.573639060236, 13.66177420785577], [100.5800378208474, 13.6689358043417], [100.585740513204, 13.67714740435256], [100.5894069991216, 13.68522627802258], [100.5876364151, 13.692361878382], [100.5807149871626, 13.69829335848398], [100.5722013751737, 13.7033434398448], [100.5658297860349, 13.70474862224484], [100.5607658860136, 13.70568239290833], [100.5563578678947, 13.70582552965533], [100.5526152502276, 13.70264143720076], [100.5523077342559, 13.69756712557253], [100.5533183850256, 13.68916862445564], [100.5526886831798, 13.68298401748108], [100.5512343278038, 13.67578460609017], [100.5444808558249, 13.67000022637077], [100.5372889703205, 13.6691528563595], [100.5313567689765, 13.67098202271671], [100.5263271865217, 13.67553613890041], [100.5199179121614, 13.68091176552906], [100.5095586932928, 13.68513576231218], [100.5001882767579, 13.68667675034144], [100.4936054063172, 13.68994360023962], [100.4909448206476, 13.69322861398484], [100.4897840325908, 13.69758109142684], [100.4937172503802, 13.7021682358718], [100.5061343386701, 13.70993283538165], [100.5117628482805, 13.71765230384602], [100.5124781297664, 13.72866760489913], [100.5102231670204, 13.73499009694125], [100.5011563012751, 13.7381325539007], [100.4944989781823, 13.74009658560709], [100.4897920575765, 13.7454620527748], [100.4876747491906, 13.75185997018088], [100.4883869607977, 13.75789373306896], [100.4965672382448, 13.76643440891246], [100.5013016199842, 13.77789167120902], [100.5067590632368, 13.78759733350713], [100.5137244735496, 13.79582776953071], [100.5173917192916, 13.80465791884117], [100.5168948885043, 13.81077132993441], [100.5116524858348, 13.81473162114658], [100.5078370239188, 13.81574822664461], [100.5032147348932, 13.81844496270335], [100.5003994950308, 13.82389676193949], [100.4987724981106, 13.82782034796816], [100.4939017998528, 13.83453674463725], [100.4917062208474, 13.83852245032155], [100.4893042936446, 13.84603393059971], [100.4873651106252, 13.84900461032578], [100.4816177021887, 13.85251982398377], [100.4780588235131, 13.85909217615658], [100.4773338050414, 13.86583896690366], [100.4773824265294, 13.87662623065947], [100.4832957886016, 13.88321968987547], [100.4901995050665, 13.89414569144024], [100.4901013960246, 13.89785229022177], [100.4867014954639, 13.9002576744765], [100.4794414673756, 13.90078088516302], [100.4736876288007, 13.90253007872473], [100.4700972123885, 13.9050781883785], [100.466710850587, 13.91126530447925], [100.4665104356213, 13.91434678951201], [100.468120762316, 13.9169990116409], [100.4714658624549, 13.91828420258874], [100.4745109879994, 13.91806453912255], [100.4819661112505, 13.91509601298257], [100.4928428229672, 13.91502441077169], [100.4973713524078, 13.9185027728347], [100.4997548817511, 13.92812402321026], [100.5014446705277, 13.93628800158203], [100.5059863047365, 13.94171024409303], [100.5151012324907, 13.94321465229524], [100.5273422982209, 13.94347212231867], [100.5364186774629, 13.94795374236256], [100.5383545185229, 13.95321951349712], [100.5377843862885, 13.96108464115803], [100.5331230460419, 13.96674319170938], [100.530130100931, 13.97079184105726], [100.5268809525697, 13.97984808064301], [100.5270707388042, 13.98656075914785], [100.5290583132541, 13.98930848989186], [100.5313902576587, 13.99203148143935], [100.5385184723066, 13.99703703751179], [100.5399046449564, 14.00031472409801], [100.5393498893912, 14.00437747775663], [100.5375821798387, 14.01032106431581], [100.5373417346712, 14.01480998240365], [100.5367067386817, 14.02298404143312], [100.5378375199695, 14.02516372676181], [100.5422647425119, 14.02853460514314], [100.5442005177937, 14.0319384818078], [100.5472644878721, 14.03550868423336], [100.549407193399, 14.0369531489955], [100.5542726211611, 14.04083906538588], [100.5552500182587, 14.04724590289083], [100.5519913420741, 14.0518809753886], [100.5460564448356, 14.05440321339472], [100.5426483833166, 14.05825008731657], [100.5373106672041, 14.06372272464055], [100.5274708239389, 14.07063479324825], [100.5241241962695, 14.07847852583723], [100.5265026012635, 14.08467357603178], [100.530811022659, 14.08736596536064], [100.5399230384916, 14.09265276842421], [100.5460293380919, 14.09788674688995], [100.5496508052807, 14.106520859281], [100.5489290991929, 14.11072027914684], [100.5465601775061, 14.11461583838467], [100.5375813054846, 14.11805900439558], [100.5309329076024, 14.12034261593744], [100.5212547709073, 14.13148631451913], [100.5168935162053, 14.14551142424676], [100.5124789609793, 14.15618381700671], [100.5079952335035, 14.16363637662728], [100.5052770293859, 14.16910606648974], [100.5038261699353, 14.1827480310233], [100.5045466767376, 14.18874267006399], [100.5068828990498, 14.19843316551789], [100.510667577154, 14.20170367474818], [100.519982470183, 14.20079462087451], [100.5325901215831, 14.19509788961077], [100.5426711733366, 14.19226424250378], [100.5599835993626, 14.19656067527621], [100.5650260550442, 14.20325646345882], [100.5684635413972, 14.20953979797518], [100.5703383842513, 14.21500982358306], [100.5727799425234, 14.22417231999058], [100.5759033590766, 14.23450780161654], [100.5777860597067, 14.24077368873212], [100.580556188764, 14.24813194787854], [100.5820786848806, 14.25651318099262], [100.5834530587425, 14.26051896361718], [100.5857393462166, 14.2651537540122], [100.5859283979297, 14.26954704503006], [100.5844485925699, 14.27385535607832], [100.5779556665591, 14.27766232616948], [100.5680295316484, 14.28505279708227], [100.5643101650069, 14.29068238053364], [100.5646909306545, 14.29726403883158], [100.5658247607151, 14.30235044650229], [100.5667170004865, 14.30752419938457], [100.5683935577096, 14.31484222234203], [100.5759109011121, 14.32984101012125], [100.5768092137242, 14.33978770173398], [100.5765304943925, 14.34419746781408], [100.5763402198475, 14.34506639207858], [100.5753707308113, 14.34666849647131], [100.5727514172431, 14.34766451687274], [100.5712912522673, 14.34758938414937], [100.5690665758266, 14.34681193521931], [100.5660029092803, 14.34489107983334], [100.5634852523889, 14.34328780773757], [100.5608072749196, 14.34183632313182], [100.5543592301381, 14.33934739599595], [100.5489008244285, 14.33959747809869], [100.5454948110561, 14.34027455546607], [100.5429301566615, 14.34442548832805], [100.5432610087941, 14.34607129369409], [100.5460060361359, 14.3514728264825], [100.5472617541786, 14.35381449223398], [100.5477616102739, 14.35515067789801], [100.5474599669296, 14.35608538979181], [100.5447380469661, 14.35822268879958], [100.5409432438119, 14.36083002785639], [100.538027717267, 14.36240114228251], [100.5318859518488, 14.3668735635171], [100.5299512514744, 14.36855771194748], [100.5275416606318, 14.3695932343995], [100.5254549467575, 14.37133244091297], [100.5254180531135, 14.3728720509187], [100.5251766383581, 14.37623850950214], [100.5235472738153, 14.37895822840408], [100.5213616362153, 14.38250103664207], [100.5204763940281, 14.3860002281132], [100.5180091825183, 14.38873560642586], [100.5178962942763, 14.39108392423662], [100.5147055658457, 14.39294173565876], [100.5138097751555, 14.39338151841087], [100.5115793838863, 14.39506603012283], [100.5099614099028, 14.39747530178702], [100.5081665732843, 14.39897472821261], [100.507203513024, 14.40046477952257], [100.5064450353797, 14.40187448122287], [100.5044707663565, 14.40373786509798], [100.5025476879206, 14.40600302489663], [100.5018116751531, 14.4078849364416], [100.5003041854083, 14.41102045291143], [100.4985740915542, 14.41353541901445], [100.4967409362106, 14.41560496606594], [100.4967193000602, 14.41727429037987], [100.4947216631057, 14.4183754686295], [100.4921247577304, 14.42125537915449], [100.4903938088109, 14.42138718862759], [100.4873068766347, 14.42502819784921], [100.4846810213725, 14.42590125746859], [100.4816026234187, 14.42974332483033], [100.4779463813235, 14.42965051855095], [100.4763725204482, 14.42900602764977], [100.4752731679426, 14.42816032901374], [100.4748771988831, 14.42755768544412], [100.4735401251377, 14.42674997737494], [100.4707711744418, 14.42653729788119], [100.4685877343426, 14.42737008880367], [100.4669762654907, 14.42831637114856], [100.4666553098382, 14.42948443224862], [100.4664524881536, 14.4315224403032], [100.4676399327405, 14.43424054984254], [100.4687290735436, 14.43626053476717], [100.4699041544673, 14.43829858702569], [100.4693466571682, 14.44090432195453], [100.4669366553497, 14.44237228219118], [100.4642300242037, 14.44349387711807], [100.4614718029033, 14.44538119651961], [100.4598470951651, 14.44790087602506], [100.4595051849741, 14.45160972975546], [100.4581176173035, 14.46589531777588], [100.457208926609, 14.47287252540313], [100.4541671078734, 14.47817148345179], [100.4526177735661, 14.48056916097259], [100.4484532523154, 14.48457815749699], [100.4468103398724, 14.48744019191996], [100.4478292066325, 14.49169861499918], [100.4492272318725, 14.49479928778871], [100.44983058579, 14.49760614559393], [100.4505660708037, 14.50127036787287], [100.4540699758322, 14.50240687126759], [100.4562150586166, 14.50256358777323], [100.4589797942826, 14.50499448100296], [100.4588738640888, 14.51041118052985], [100.4586265783222, 14.5124535225736], [100.4605225773536, 14.51403537285519], [100.4617188978306, 14.51574066700151], [100.4627114726557, 14.51790858187346], [100.4637362161902, 14.5217446400879], [100.4629469959278, 14.5247475896174], [100.4598195193041, 14.52677151450507], [100.4556508047711, 14.52728940340049], [100.453045377143, 14.5273401123911], [100.4511783255753, 14.52889148722178], [100.4508878454317, 14.53084779495978], [100.4513074216766, 14.53253518524668], [100.4520372811158, 14.53693688096869], [100.4509354477644, 14.54017533159553], [100.4488777169835, 14.54330590055798], [100.4472465361803, 14.54583718048321], [100.4466599001383, 14.54740852238398], [100.4465934237907, 14.54992314735473], [100.447685115731, 14.55260575926986], [100.4464408911074, 14.55570219351562], [100.4452260701317, 14.55754681560307], [100.4446671262407, 14.56047198124014], [100.4457811233381, 14.5624503987285], [100.4487214842793, 14.56582288054453], [100.4515406838712, 14.56892939768186], [100.4519629983121, 14.57151119136663], [100.4509624538929, 14.57299218332234], [100.4486620175508, 14.57688830600936], [100.4476811618908, 14.57875672174867], [100.4476332126853, 14.58111337601823], [100.4483247042534, 14.58395306730924], [100.4497102282472, 14.58615845163271], [100.4512427902351, 14.58843995691402], [100.4519733206422, 14.58964802518869], [100.4565807714065, 14.59141386766127], [100.4580972924366, 14.5908565570022], [100.4593473221009, 14.58916637798732], [100.4610581441233, 14.58881166950917], [100.4618578051766, 14.59035226401547], [100.462040146046, 14.59201217246771], [100.4616079215003, 14.59405982027456], [100.460767947342, 14.59583616765676], [100.4603107668398, 14.5995608958311], [100.4619191037266, 14.60207127193568], [100.4645749960634, 14.60489195400513], [100.4634449570737, 14.60796364359315], [100.460226725016, 14.61214558870988], [100.4591010257229, 14.61353839960599], [100.4558293181418, 14.61892671858452], [100.454563206461, 14.62145584976955], [100.4550734100686, 14.62396855903374], [100.456821317219, 14.62559382103525], [100.4589247132714, 14.6267687815912], [100.460455756222, 14.63005084163146], [100.4613579900365, 14.63465979648648], [100.4610540916773, 14.63799533359578], [100.4607254127588, 14.64281793258566], [100.4595184843024, 14.64609179374399], [100.4591480788881, 14.64797186559153], [100.459933256236, 14.65171968253861], [100.46116635725, 14.6529070809206], [100.4647693388544, 14.65523846006503], [100.4659639775302, 14.65684966718621], [100.4660389398905, 14.66009032064718], [100.4646200482071, 14.66284170183996], [100.4629060907091, 14.66612110140117], [100.4625511318732, 14.67019082944602], [100.4623520498713, 14.67299505067517], [100.4617150887453, 14.67722309924084], [100.4586697229599, 14.68086871506324], [100.4551654908771, 14.68295494144272], [100.4520259371576, 14.68878184117973], [100.4515071352658, 14.69452469021557], [100.4497479382214, 14.70027312902008], [100.4491718521445, 14.7048781181622], [100.4462709314334, 14.70850435634761], [100.4425851617859, 14.7127363044805], [100.4411364631089, 14.7154034022071], [100.4372012892149, 14.71997801608396], [100.4351750344147, 14.72210131394528], [100.4335351611687, 14.72496615182191], [100.4332069967983, 14.72714350051191], [100.4345451309182, 14.72830268442724], [100.4360779660524, 14.7300013426487], [100.4397786331798, 14.73602413767597], [100.4410567992, 14.74047750534958], [100.4427825103568, 14.74361492459809], [100.4462550624461, 14.74606616384917], [100.4484315739161, 14.74794613658034], [100.448390466741, 14.75017717080434], [100.4460703516441, 14.75275043879227], [100.443256090797, 14.75386721343665], [100.4423443439074, 14.7549654614569], [100.4419483231039, 14.75746656944751], [100.4428707662158, 14.75894476918515], [100.4444021784014, 14.76077130203422], [100.445589753683, 14.76299517571774], [100.4453443965245, 14.76498876870839], [100.4443910616445, 14.76783393123452], [100.4418436775988, 14.77132915569359], [100.4398586263216, 14.77383703584754], [100.4381468551799, 14.77622205437216], [100.4371953747433, 14.77843223630942], [100.4372275179864, 14.77992304652255], [100.4398378641044, 14.78285521339126], [100.441707615056, 14.78402130433421], [100.4452816837447, 14.7854937457898], [100.4476319513752, 14.78693833653429], [100.451782432022, 14.79034946884979], [100.4538707849572, 14.79479155334708], [100.452966124093, 14.7983799591764], [100.4510862637055, 14.799405647972], [100.4488003931031, 14.80008816208385], [100.442704141738, 14.80161716176101], [100.4390621526272, 14.80367873165802], [100.4379866340855, 14.80716650521588], [100.4383357072587, 14.80927379556001], [100.4401662576012, 14.81245525898041], [100.4414473145476, 14.81546177801439], [100.4421213086566, 14.8184686873719], [100.4404440412277, 14.82064240664118], [100.4381003380629, 14.82215132551547], 
    [100.4364092438712, 14.82453033737944], [100.436730576572, 14.82788637332993], [100.4378667799129, 14.83140381294269], [100.4390895994995, 14.83440759733541], [100.4408438180717, 14.83822937705073], [100.4427129658041, 14.84347556133276], [100.44169434804, 14.84606546797929], [100.4392651042263, 14.84693781649407], [100.4339649831168, 14.84708313086035], [100.4301129455816, 14.8470544455479], [100.4245485056392, 14.84880593044622], [100.4164192698595, 14.85271989114434], [100.4113669722252, 14.85892704693347], [100.4085498423791, 14.86223739396307], [100.4087104380231, 14.86944732992995], [100.4095440183551, 14.87739434836435], [100.4090818295051, 14.88212900369283], [100.4064957745894, 14.88892454000639], [100.4028487173073, 14.89241243084515], [100.4020903951525, 14.89512226650628], [100.4020234794336, 14.89758880727836], [100.4031735396347, 14.90083001983508], [100.4034838369138, 14.90473312263211], [100.401616407537, 14.90751370814608], [100.3975090606147, 14.90863725392501], [100.395055758256, 14.90762229016172], [100.3921684086816, 14.90505967185101], [100.3887009576934, 14.9035637330793], [100.3859758525895, 14.90652878918124], [100.3846674115294, 14.91034528451605], [100.3812620215179, 14.91243926544547]
]