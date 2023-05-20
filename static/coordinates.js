const RIVERS = [
    [[100.4696902630451, 13.79474321338163], [100.4680252318087, 13.79537402631812], [100.4660467349538, 13.79639782224329], [100.4641873505311, 13.79712193058501], [100.4615470446389, 13.79774183737715], [100.4592868579631, 13.79810960598199], [100.4567413842355, 13.79837556961782], [100.4542648838427, 13.79852441106281], [100.4524186798366, 13.79868147276209], [100.4487371703945, 13.7989947334592], [100.4455947147956, 13.79920134874884], [100.4416825152014, 13.7994715006256], [100.427800329377, 13.80039197980455], [100.3956810549406, 13.80191455268111], [100.3897313066165, 13.80211898229148], [100.3722966799861, 13.80264725386787], [100.3533595133324, 13.80323910104318], [100.3160000871992, 13.80477557930752], [100.3129047209427, 13.80499214323275], [100.3087689612884, 13.80512805936007], [100.3037036213004, 13.80543841054285], [100.2979126361894, 13.80599876085319], [100.2858877101585, 13.80672968880063], [100.2768155244099, 13.80752752432132], [100.2650072739518, 13.80830841380252], [100.2527909241101, 13.80925671711594], [100.239694515052, 13.81030592851601], [100.2293512941584, 13.81108207272857], [100.2244141393265, 13.81145246483494]], 
    [[100.4921810425604, 13.74270435642473], [100.4910290976449, 13.74155820502579], [100.4904139376016, 13.74082063070832], [100.4897051546403, 13.73999816161667], [100.4891650248144, 13.73930229387445], [100.4889233917634, 13.73879628467938], [100.4886150442052, 13.73830064328556], [100.4884720096391, 13.73776298161268], [100.488066739919, 13.73676551616478], [100.4875670117421, 13.73580664222085], [100.4873033066367, 13.73519170542469], [100.4870017765394, 13.73440616344529], [100.4865787288823, 13.73339886568702], [100.4863599278327, 13.73256548472228], [100.4862077110544, 13.73180349290971], [100.4859130001853, 13.72931565812276], [100.4855538756927, 13.72796882400922], [100.4849217429477, 13.72624890859], [100.4844991507001, 13.72515821059187], [100.4832824891745, 13.72419559059737], [100.4814735636837, 13.72360323443001], [100.4783728262274, 13.72274967308688], [100.4758101855212, 13.72233355911851], [100.4741905658961, 13.72238573634404], [100.4720320998157, 13.72258354345399], [100.4713654065291, 13.72257664241415], [100.4700497267076, 13.7233240356333], [100.4680642351175, 13.7244283737057], [100.4669271094202, 13.72546504412547], [100.4660549610301, 13.72683487383902], [100.4652015798533, 13.72804590045487], [100.4645050970555, 13.72938970199724]],
    [[100.4894716366597, 13.75954353333166], [100.4866193279727, 13.76103076862115], [100.4842606309579, 13.76107152132967], [100.4824441978878, 13.76115830052431], [100.4814669682854, 13.76152835471089], [100.4795363870666, 13.76227343820867], [100.4783829817391, 13.76304390442931], [100.4755982733564, 13.76530141991782], [100.4740765254382, 13.76702733520245], [100.4727771537308, 13.76880256812373], [100.4720193859804, 13.77051052112993], [100.4709564815648, 13.77348765561638], [100.4708464476997, 13.77512969656673], [100.4694576416689, 13.77823666119957], [100.4675119206295, 13.77983223453706], [100.4670429013373, 13.78070813181278], [100.4665718957464, 13.78314926476916], [100.4663169142528, 13.78473158504387], [100.4661384041082, 13.7865611713613], [100.4659348301959, 13.78749300300389], [100.4660748494753, 13.78808505265897], [100.466484793689, 13.7897452141365], [100.4669177332649, 13.79048167778181], [100.468027941153, 13.79233161846381], [100.4686149540975, 13.79319452688897], [100.4697222762796, 13.79486540270274], [100.4699916282842, 13.79562251527993], [100.4711519344267, 13.79790032326024], [100.4720198656561, 13.80083930369993], [100.4741905043064, 13.80496800042739], [100.4750750002352, 13.80611994171963], [100.4762901997019, 13.8073842686767], [100.4766066292542, 13.80774530475789], [100.4760496406146, 13.80882470134304], [100.4752622797214, 13.80981415433979], [100.4747830901481, 13.81068024151321], [100.4740513365172, 13.81162330577706], [100.4734871919337, 13.81230152492016], [100.4725205247286, 13.8141039733177], [100.4713268354672, 13.81628009867442], [100.4690110874609, 13.82144776998568], [100.4675210478455, 13.8239204031396], [100.4661246897987, 13.82527076100704], [100.464960108858, 13.82617725925589], [100.4631326565501, 13.82745803701767], [100.461453485097, 13.82864808663523], [100.4595531771658, 13.82982535109661], [100.4577179231656, 13.83060253264406], [100.4563449932574, 13.83101101723603], [100.4536807738348, 13.83097131677819], [100.4514525846844, 13.83056439586791]]
    ]
const BASE_RIVER = [
    [100.5995884906648, 13.5321604836276], [100.5874413057319, 13.54368597086624], [100.5815652337652, 13.55087836110108], [100.5769172244557, 13.5597916922903], [100.5761275680181, 13.56549560555062], [100.5775314950103, 13.57191558236769], [100.5831170160138, 13.57787418788374], [100.5890404756021, 13.58423426016894], [100.5916377048953, 13.58904464889607], [100.5925176431165, 13.60020960424683], [100.5908056675016, 13.6060366756178], [100.5885298197092, 13.60817788318708], [100.5763903011199, 13.60887638409812], [100.5610517549649, 13.61279588108317], [100.5481621161673, 13.62077378048206], [100.5422723608734, 13.6276927421791], [100.5382247352037, 13.63491005364435], [100.535293396146, 13.64562554199444], [100.5352021100758, 13.65417397268665], [100.5381545323123, 13.65847096442093], [100.5429477322272, 13.66046193095148], [100.5480030070287, 13.65861687051827], [100.5564263779665, 13.65599206317786], [100.5638223221467, 13.65644330411501], [100.573639060236, 13.66177420785577], [100.5800378208474, 13.6689358043417], [100.585740513204, 13.67714740435256], [100.5894069991216, 13.68522627802258], [100.5876364151, 13.692361878382], [100.5807149871626, 13.69829335848398], [100.5722013751737, 13.7033434398448], [100.5658297860349, 13.70474862224484], [100.5607658860136, 13.70568239290833], [100.5563578678947, 13.70582552965533], [100.5526152502276, 13.70264143720076], [100.5523077342559, 13.69756712557253], [100.5533183850256, 13.68916862445564], [100.5526886831798, 13.68298401748108], [100.5512343278038, 13.67578460609017], [100.5444808558249, 13.67000022637077], [100.5372889703205, 13.6691528563595], [100.5313567689765, 13.67098202271671], [100.5263271865217, 13.67553613890041], [100.5199179121614, 13.68091176552906], [100.5095586932928, 13.68513576231218], [100.5001882767579, 13.68667675034144], [100.4936054063172, 13.68994360023962], [100.4909448206476, 13.69322861398484], [100.4897840325908, 13.69758109142684], [100.4937172503802, 13.7021682358718], [100.5061343386701, 13.70993283538165], [100.5117628482805, 13.71765230384602], [100.5124781297664, 13.72866760489913], [100.5102231670204, 13.73499009694125], [100.5011563012751, 13.7381325539007], [100.4944989781823, 13.74009658560709], [100.4897920575765, 13.7454620527748], [100.4876747491906, 13.75185997018088], [100.4883869607977, 13.75789373306896], [100.4965672382448, 13.76643440891246], [100.5013016199842, 13.77789167120902], [100.5067590632368, 13.78759733350713], [100.5137244735496, 13.79582776953071], [100.5173917192916, 13.80465791884117], [100.5168948885043, 13.81077132993441], [100.5116524858348, 13.81473162114658], [100.5078370239188, 13.81574822664461], [100.5032147348932, 13.81844496270335], [100.5003994950308, 13.82389676193949], [100.4987724981106, 13.82782034796816], [100.4939017998528, 13.83453674463725], [100.4917062208474, 13.83852245032155], [100.4893042936446, 13.84603393059971], [100.4873651106252, 13.84900461032578], [100.4816177021887, 13.85251982398377], [100.4780588235131, 13.85909217615658], [100.4773338050414, 13.86583896690366], [100.4773824265294, 13.87662623065947], [100.4832957886016, 13.88321968987547], [100.4901995050665, 13.89414569144024], [100.4901013960246, 13.89785229022177], [100.4867014954639, 13.9002576744765], [100.4794414673756, 13.90078088516302], [100.4736876288007, 13.90253007872473], [100.4700972123885, 13.9050781883785], [100.466710850587, 13.91126530447925], [100.4665104356213, 13.91434678951201], [100.468120762316, 13.9169990116409], [100.4714658624549, 13.91828420258874], [100.4745109879994, 13.91806453912255], [100.4819661112505, 13.91509601298257], [100.4928428229672, 13.91502441077169], [100.4973713524078, 13.9185027728347], [100.4997548817511, 13.92812402321026], [100.5014446705277, 13.93628800158203], [100.5059863047365, 13.94171024409303], [100.5151012324907, 13.94321465229524], [100.5273422982209, 13.94347212231867], [100.5364186774629, 13.94795374236256], [100.5383545185229, 13.95321951349712], [100.5377843862885, 13.96108464115803], [100.5331230460419, 13.96674319170938], [100.530130100931, 13.97079184105726], [100.5268809525697, 13.97984808064301], [100.5270707388042, 13.98656075914785], [100.5290583132541, 13.98930848989186], [100.5313902576587, 13.99203148143935], [100.5385184723066, 13.99703703751179], [100.5399046449564, 14.00031472409801], [100.5393498893912, 14.00437747775663], [100.5375821798387, 14.01032106431581], [100.5373417346712, 14.01480998240365], [100.5367067386817, 14.02298404143312], [100.5378375199695, 14.02516372676181], [100.5422647425119, 14.02853460514314], [100.5442005177937, 14.0319384818078], [100.5472644878721, 14.03550868423336], [100.549407193399, 14.0369531489955], [100.5542726211611, 14.04083906538588], [100.5552500182587, 14.04724590289083], [100.5519913420741, 14.0518809753886], [100.5460564448356, 14.05440321339472], [100.5426483833166, 14.05825008731657], [100.5373106672041, 14.06372272464055], [100.5274708239389, 14.07063479324825], [100.5241241962695, 14.07847852583723], [100.5265026012635, 14.08467357603178], [100.530811022659, 14.08736596536064], [100.5399230384916, 14.09265276842421], [100.5460293380919, 14.09788674688995], [100.5496508052807, 14.106520859281], [100.5489290991929, 14.11072027914684], [100.5465601775061, 14.11461583838467], [100.5375813054846, 14.11805900439558], [100.5309329076024, 14.12034261593744], [100.5212547709073, 14.13148631451913], [100.5168935162053, 14.14551142424676], [100.5124789609793, 14.15618381700671], [100.5079952335035, 14.16363637662728], [100.5052770293859, 14.16910606648974], [100.5038261699353, 14.1827480310233], [100.5045466767376, 14.18874267006399], [100.5068828990498, 14.19843316551789], [100.510667577154, 14.20170367474818], [100.519982470183, 14.20079462087451], [100.5325901215831, 14.19509788961077], [100.5426711733366, 14.19226424250378], [100.5599835993626, 14.19656067527621], [100.5650260550442, 14.20325646345882], [100.5684635413972, 14.20953979797518], [100.5703383842513, 14.21500982358306], [100.5727799425234, 14.22417231999058], [100.5759033590766, 14.23450780161654], [100.5777860597067, 14.24077368873212], [100.580556188764, 14.24813194787854], [100.5820786848806, 14.25651318099262], [100.5834530587425, 14.26051896361718], [100.5857393462166, 14.2651537540122], [100.5859283979297, 14.26954704503006], [100.5844485925699, 14.27385535607832], [100.5779556665591, 14.27766232616948], [100.5680295316484, 14.28505279708227], [100.5643101650069, 14.29068238053364], [100.5646909306545, 14.29726403883158], [100.5658247607151, 14.30235044650229], [100.5667170004865, 14.30752419938457], 
]