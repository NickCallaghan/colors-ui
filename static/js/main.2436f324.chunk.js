(this["webpackJsonpcolors-ui"]=this["webpackJsonpcolors-ui"]||[]).push([[0],{262:function(e,a,t){e.exports=t(504)},267:function(e,a,t){},271:function(e,a,t){},331:function(e,a,t){},504:function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),n=t(11),l=t.n(n),c=(t(267),t(30)),i=t(15),s=t(26),m=t(20),u=t(34),d=t(35),p=t(37),h=t(231),f=t(58),g=t(79),b=t.n(g),E=t(505),v=(t(271),{ColorBox:{height:function(e){return e.tall?"50%":"25%"}},dynamicTextColor:{color:function(e){return function(e){return b()(e.background).luminance()<.37?"white":"black"}(e)}}}),C=function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={showCopyOverlay:!1},t.changeCopyState=function(){t.setState({showCopyOverlay:!0},(function(){setTimeout((function(){t.setState({showCopyOverlay:!1})}),1500)}))},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,n=e.classes,l=r.a.createElement(f.b,{to:o,onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:"see-more ".concat(n.dynamicTextColor)},"more"));return r.a.createElement(h.CopyToClipboard,{text:this.props.background,onCopy:this.changeCopyState},r.a.createElement("div",{className:"ColorBox ".concat(n.ColorBox),style:{background:t}},r.a.createElement("div",{className:"copy-overlay ".concat(this.state.showCopyOverlay&&"show"),style:{background:t}}),r.a.createElement("div",{className:"copy-msg ".concat(this.state.showCopyOverlay&&"show")},r.a.createElement("h1",null,this.props.name),r.a.createElement("p",{className:n.dynamicTextColor},this.props.background)),r.a.createElement("div",{className:"copy-container"},r.a.createElement("div",{className:"box-content"},r.a.createElement("span",{className:n.dynamicTextColor},a)),r.a.createElement("button",{className:"copy-button ".concat(n.dynamicTextColor)},"Copy")),this.props.showLink&&l))}}]),a}(o.Component);C.defaultProps={showLink:!0,tall:!1};var y=Object(E.a)(v)(C),j=t(244),O=t(560),x=t(563),F=t(561),w=t(547),S=t(236),N=t.n(S),k=t(565),B=(t(330),function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={format:t.props.format,showSnackBar:!1},t.handleChangeFormat=function(e){t.setState({format:e.target.value,showSnackBar:!0}),t.props.changeFormat(e.target.value)},t.dismissSnackBar=function(){t.setState({showSnackBar:!1})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state.format;return r.a.createElement("div",{className:e.NavBar},r.a.createElement("div",{className:e.logo},r.a.createElement("a",{href:"/colors-ui"},"React Colors")),this.props.showSlider&&r.a.createElement("div",{className:e.slider},r.a.createElement(k.a,{className:"slider-label"},"Level ".concat(this.props.colorValue)),r.a.createElement(j.a,{step:100,min:100,max:900,onChange:this.props.handleSliderChange,value:this.props.colorValue})),this.props.allowChangeFormat&&r.a.createElement("div",{className:e.formatPicker},r.a.createElement(O.a,{value:this.state.format,onChange:this.handleChangeFormat},r.a.createElement(x.a,{value:"hex"},"HEX #FFFFFF"),r.a.createElement(x.a,{value:"rgb"},"RGB rgb(255,255,255)"),r.a.createElement(x.a,{value:"rgba"},"RGBA rgba(255,255,255,1)"))),r.a.createElement(F.a,{open:this.state.showSnackBar,anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:2e3,onClose:this.dismissSnackBar,message:r.a.createElement("span",{id:"message-id"},"Format Changed to ",a,"!"),ContentProps:{"aria-describedby":"message-id"},action:[r.a.createElement(w.a,{color:"inherit",key:"close","aria-label":"close"},r.a.createElement(N.a,{onClick:this.dismissSnackBar}))]}),this.useSnackBar)}}]),a}(o.Component));B.defaultProps={showSlider:!0,allowChangeFormat:!0};var P=Object(E.a)({NavBar:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:{fontFamily:"Roboto",fontSize:"1.2em",backgroundColor:"#eceff1",height:"100%",padding:"0 1em",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},slider:{width:"340px",margin:"0 30px",display:"flex","& .rc-slider-rail ":{height:"8px"},"& .slider-label":{marginRight:20},"& .rc-slider":{width:"70%"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",height:15,width:15,marginLeft:"-7px",marginTop:"-3px"},"& .rc-slider-track":{backgroundColor:"transparent",outline:"none"}},formatPicker:{marginLeft:"auto",marginRight:"12px"}})(B);t(331);var A=Object(E.a)({Footer:{display:"flex",justifyContent:"flex-end",alignItems:"center",height:"4vh",fontWeight:"bold",marginRight:15,"& .emoji":{display:"inline-block",marginLeft:5}}})((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return r.a.createElement("footer",{className:o.Footer},a,r.a.createElement("span",{className:"emoji"},t))})),R=function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={colorValue:500},t.handleSliderChange=function(e){t.setState({colorValue:e})},t.changeFormat=function(e){t.setState({format:e})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.props.palette,t=a.paletteName,o=a.emoji,n=this.props.palette.colors[this.state.colorValue].map((function(a){return r.a.createElement(y,{name:a.name,background:a[e.props.format],moreUrl:"/palette/".concat(e.props.palette.id,"/").concat(a.id),key:a.id})})),l=this.props.classes;return r.a.createElement("div",{className:l.Palette},r.a.createElement(P,{handleSliderChange:this.handleSliderChange,colorValue:this.state.colorValue,changeFormat:this.props.updateFormat,format:this.props.format}),r.a.createElement("div",{className:l.PaletteColors},n),r.a.createElement(A,{paletteName:t,emoji:o}))}}]),a}(o.Component),D=Object(E.a)({Palette:{height:"100vh",textAlign:"center"},PaletteColors:{height:"90vh",display:"flex",flexWrap:"wrap",marginBottom:"0",flexDirection:"row"}})(R),T=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],G=[50,100,200,300,400,500,600,700,800,900];function I(e,a){return b.a.scale(function(e){return[b()(e).darken(1.4).hex(),e,"#FFF"]}(e)).mode("lab").colors(a)}var L=t(68);var M=Object(E.a)({root:{backgroundColor:"white",borderRadius:"5px",padding:"0.5rem",postion:"relative",overflow:"hidden",border:"1px solid black",display:"flex",flexDirection:"column",alignItems:"center","&:hover":{cursor:"pointer"}},colors:{height:"150px",width:"100%"},title:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",margin:"5px"},emoji:{marginLeft:"auto"},miniColor:{width:"20%",height:"25%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"}})((function(e){var a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map((function(e){return r.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}));return r.a.createElement("div",{className:a.root,onClick:e.handleClick},r.a.createElement("div",{className:a.colors},n),r.a.createElement("h5",{className:a.title},t," ",r.a.createElement("span",{className:a.emoji},o)))})),V=function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).goToPalette=function(e){t.props.history.push("/palette/".concat(e))},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,t=this.props.palettes.map((function(a){return r.a.createElement(M,Object.assign({},a,{key:a.paletteName,handleClick:function(){return e.goToPalette(a.id)}}))}));return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.container},r.a.createElement("nav",{className:a.nav},r.a.createElement("h1",null,"React Colors"),r.a.createElement(f.b,{to:"/palette/new"},"Create New Palette")),r.a.createElement("div",{className:a.palettes},t)))}}]),a}(o.Component),U=Object(E.a)({root:{backgroundColor:"#131b70",padding:"2em 0 4em"},container:{maxWidth:"60%",margin:"0 auto"},nav:{display:"flex",width:"100%",color:"white",flexDirection:"row",alignItems:"center","& a":{color:"#fff",marginLeft:"auto"}},palettes:{width:"100%",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px, 1fr))",gridTemplateRows:"repeat(auto-fit, minmax(200px, 1fr))",gridGap:"5px"},links:{textDecoration:"none"}})(V);function H(e){var a,t=[];return e.forEach((function(e){e.colors.forEach((function(e){t.push(e)}))})),(a=t)[Math.floor(Math.random()*a.length)]}var W=function(e){function a(e){var t;Object(s.a)(this,a);var o=(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).props.match.params.colorId,r=t.props.palette;return t._shades=function(e,a){for(var t=a.colors,o=[],r=0,n=Object.keys(t);r<n.length;r++){var l=t[n[r]].find((function(a){return a.id===e}));o.push(l)}return o.slice(1)}(o,r),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this._shades.map((function(a){return r.a.createElement(y,{tall:!0,name:a.name,background:a[e.props.format],key:a.name,showLink:!1})})),t=this.props.palette,o=t.paletteName,n=t.emoji,l=t.id,c=this.props.classes;return r.a.createElement("div",{className:c.Palette},r.a.createElement(P,{showSlider:!1,allowChangeFormat:!0,changeFormat:this.props.updateFormat,format:this.props.format}),r.a.createElement("div",{className:c.SinglePaletteColors},a,r.a.createElement("div",{className:"ColorBox go-back tall"},r.a.createElement(f.b,{to:"/palette/".concat(l),className:"go-back-button"},"Go Back"))),r.a.createElement(A,{paletteName:o,emoji:n}))}}]),a}(o.Component),q=Object(E.a)({SingleColorPalette:{height:"100vh",textAlign:"center"},SinglePaletteColors:{height:"90vh",display:"flex",flexWrap:"wrap",marginBottom:"0",flexDirection:"row"}})(W),z=t(6),J=t(4),Y=t(556),_=t(557),K=t(558),Q=t(248),X=t(243),Z=t.n(X),$=t(554),ee=t(559),ae=t(237),te=t.n(ae),oe=t(53),re=t(105),ne={paletteName:null,emoji:null,colors:[],id:Object(re.v4)()},le=function(e,a){switch(a.type){case"ADD":return Object(oe.a)({},e,{colors:[].concat(Object(c.a)(e.colors),[{id:Object(re.v4)(),name:a.name,color:a.color}])});case"REMOVE":return Object(oe.a)({},e,{colors:e.colors.filter((function(e){return e.color!==a.color}))});case"SORT":return Object(oe.a)({},e,{colors:a.newOrder});case"SETNAME":return Object(oe.a)({},e,{paletteName:a.paletteName});case"SETEMOJI":return Object(oe.a)({},e,{emoji:a.emoji});case"CLEAR":return Object(oe.a)({},e,{colors:[]});case"RESET":return ne;default:return e}},ce=[{color:"#00FF56",name:"hot frog"},{color:"#FF0022",name:"wild red"}];var ie=Object(o.createContext)(),se=Object(o.createContext)();var me=t(548),ue=Object(me.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(350,"px)"),marginLeft:350,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:350,flexShrink:0},drawerPaper:{width:350},drawerHeader:Object(oe.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"100vh",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-350},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},headerTitle:{marginTop:"0.5em"},buttonRow:{margin:"1em 0 1em 0 "},addButton:{marginTop:"1em"},AppBarButtons:{marginLeft:"auto","& Button":{marginRight:"0.5em"}}}})),de=t(125),pe=t(238),he=t.n(pe);var fe=Object(o.memo)(Object(de.b)(Object(E.a)({root:{width:"20%",height:"calc(25vh - (69px/4))",display:"inline-block",position:"relative",cursor:"pointer",margin:0,padding:0},deleteIcon:{position:"absolute",bottom:"0.2em",right:"0.2em"},colorName:{position:"absolute",top:"0.5em",left:"0.4em",margin:0,padding:0,textTransform:"uppercase",color:"#FFF",fontWeight:"bold"}})((function(e){var a=Object(o.useContext)(se);return r.a.createElement("div",{className:e.classes.root,style:{backgroundColor:e.color}},r.a.createElement("p",{className:e.classes.colorName},e.name),r.a.createElement(w.a,{onClick:function(){a({type:"REMOVE",color:e.color})},className:e.classes.deleteIcon},r.a.createElement(he.a,null)))}))));var ge=Object(o.memo)(Object(de.a)((function(){var e=Object(o.useContext)(ie).colors;return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"flex-start",alignItems:"flex-start",height:"auto",margin:0,padding:0}},e.map((function(e,a){return r.a.createElement(fe,{index:a,color:e.color,name:e.name,key:e.color})})))}))),be=t(549),Ee=t(245);t(335);function ve(e){var a=Object(o.useState)(!0),t=Object(i.a)(a,1)[0],n=Object(o.useContext)(se);return r.a.createElement("div",null,r.a.createElement(be.a,{onClose:function(){e.hideForm()},"aria-labelledby":"simple-dialog-title",open:t},r.a.createElement(Ee.a,{title:"Pick palette emoji",emoji:"point_up",defaultSkin:"2",onSelect:function(a,t){return function(a,t){console.log(a),n({type:"SETEMOJI",emoji:a.native}),e.hideForm()}(a)}})))}var Ce=t(553),ye=t(551),je=t(552),Oe=t(550),xe=t(59);function Fe(e){var a=e.open,t=e.toggle,n=Object(o.useContext)(ie),l=n.newPaletteName,c=Object(o.useContext)(se),s=Object(o.useState)(""),m=Object(i.a)(s,2),u=m[0],d=m[1],p=function(){e.hideForm()};return Object(o.useEffect)((function(){null!==n.paletteName&&e.savePalette()}),[n,e]),Object(o.useEffect)((function(){var a=e.palettes;xe.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(e){return a.every((function(a){return a.paletteName.toLowerCase()!==e.toLowerCase()}))}),[l,e])})),r.a.createElement("div",null,r.a.createElement(be.a,{open:a,onClose:p,"aria-labelledby":"form-dialog-title"},r.a.createElement(xe.ValidatorForm,{onSubmit:function(){u&&(c({type:"SETNAME",paletteName:u}),t())}},r.a.createElement(Oe.a,{id:"form-dialog-title"},"Save New Palette"),r.a.createElement(ye.a,null,r.a.createElement(je.a,null,"Enter a palette name to save this palette to you collection"),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(xe.TextValidator,{label:"Palette Name",value:u,onChange:function(e){return d(e.target.value)},validators:["required","isPaletteNameUnique"],errorMessages:["this field is required","Palette name already exists"],fullWidth:!0}))),r.a.createElement(Ce.a,null,r.a.createElement($.a,{onClick:p,color:"primary"},"Cancel"),r.a.createElement($.a,{color:"primary",type:"submit"},"Save")))))}function we(e){var a=Object(o.useState)(!1),t=Object(i.a)(a,2),n=t[0],l=t[1],c=Object(o.useState)(!1),s=Object(i.a)(c,2),m=s[0],u=s[1],d=Object(o.useContext)(ie),p=d.paletteName,h=d.emoji;return Object(o.useEffect)((function(){p||l(!0),p&&!h&&u(!0)}),[m,n,p,h]),r.a.createElement("div",null,r.a.createElement(Fe,{open:n,toggle:function(){l(!n)},palettes:e.palettes,savePalette:e.savePalette,hideForm:e.hideForm}),m&&r.a.createElement(ve,{hideForm:e.hideForm}))}var Se=t(555),Ne=t(241),ke=t.n(Ne),Be=t(242),Pe=t.n(Be),Ae=t(562),Re=t(240);function De(e){return r.a.createElement("div",{style:{width:"90%",margin:"0 auto",textAlign:"center"}},e.children)}var Te=t(48);var Ge=Object(me.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:350,flexShrink:0},drawerPaper:{width:350},drawerHeader:Object(oe.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),headerTitle:{marginTop:"0.5em"},buttonRow:{margin:"1em 0 1em 0 "},addButton:{marginTop:"1em"}}}));var Ie=Object(o.memo)((function(e){var a=Ge(),t=Object(Te.a)(),n=r.a.useState("#CC25E0"),l=Object(i.a)(n,2),c=l[0],s=l[1],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=Object(o.useState)(e),t=Object(i.a)(a,2),r=t[0],n=t[1],l=function(){n("")};return[r,n,l]}(),u=Object(i.a)(m,3),d=u[0],p=u[1],h=u[2],f=Object(o.useContext)(ie).colors,g=Object(o.useContext)(se),b=e.open,E=e.toggle,v=function(){d&&(g({type:"ADD",color:c,name:d}),h())};return Object(o.useEffect)((function(){xe.ValidatorForm.addValidationRule("isUniqueColorName",(function(e){return f.every((function(a){return a.name.toLowerCase()!==e.toLowerCase()}))})),xe.ValidatorForm.addValidationRule("isUniqueColor",(function(){return f.every((function(e){return e.hex!==c}))}))}),[f,c]),r.a.createElement(Ae.a,{className:a.drawer,variant:"persistent",anchor:"left",open:b,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(w.a,{onClick:function(){E(!1)}},"ltr"===t.direction?r.a.createElement(ke.a,null):r.a.createElement(Pe.a,null))),r.a.createElement(Se.a,null),r.a.createElement(De,null,r.a.createElement(Q.a,{variant:"h4",className:a.headerTitle},"Design your palette"),r.a.createElement("div",{className:a.buttonRow},r.a.createElement($.a,{color:"default",onClick:function(){g({type:"CLEAR"})},style:{marginRight:".5em"}},"Clear Pallette"),r.a.createElement($.a,{color:"default",onClick:function(){var a=H(e.palettes);g({type:"ADD",color:a.color,name:a.name})},disabled:!(f.length<20)},"Random Color")),r.a.createElement(Re.ChromePicker,{color:c,onChange:function(e){return s(e.hex)},width:"100%",style:{margin:"0 auto"}}),r.a.createElement(xe.ValidatorForm,{onSubmit:v},r.a.createElement(xe.TextValidator,{label:"Color Name",value:d,onChange:function(e){return p(e.target.value)},validators:["required","isUniqueColorName","isUniqueColor"],errorMessages:["this field is required","Color name must be unique","Color already in palette"],fullWidth:!0}),r.a.createElement($.a,{className:a.addButton,variant:"contained",color:"primary",type:"submit",onClick:v,disabled:!(f.length<20),fullWidth:!0},f.length<20?"Add To Palette":"Palette Full"))))}));function Le(e){var a=ue(),t=Object(o.useState)(!0),n=Object(i.a)(t,2),l=n[0],c=n[1],s=Object(o.useState)(!1),m=Object(i.a)(s,2),u=m[0],d=m[1],p=e.palettes,h=Object(o.useContext)(ie),f=h.colors,g=Object(o.useContext)(se),b=Object(o.useCallback)((function(){h.paletteName&&h.emoji&&h.colors.length>0&&(e.addPalette(h),e.history.push("/"),g({type:"RESET"}))}),[h,e,g]);return Object(o.useEffect)((function(){null!==h.name&&h.colors.length>0&&h.emoji&&(b(),g({type:"RESET"}))}),[h,b,g]),r.a.createElement("div",{className:a.root},r.a.createElement(Y.a,null),r.a.createElement(_.a,{position:"fixed",className:Object(J.a)(a.appBar,Object(z.a)({},a.appBarShift,l)),color:"default"},r.a.createElement(K.a,null,r.a.createElement(ee.a,{color:"secondary",size:"small","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:Object(J.a)(a.menuButton,l&&a.hide)},r.a.createElement(Z.a,null)),r.a.createElement(Q.a,{variant:"h6",className:a.sidebarHeading,noWrap:!0},"Create a new palette"),r.a.createElement("div",{className:a.AppBarButtons},r.a.createElement($.a,{variant:"contained",color:"secondary",onClick:function(){return g({type:"RESET"}),void e.history.push("/")}},"Go Back")),r.a.createElement($.a,{variant:"contained",color:"primary",onClick:function(){return d(!0)},disabled:f.length<2},"Save Palette"))),r.a.createElement(Ie,{open:l,toggle:c,palettes:p}),r.a.createElement("main",{className:Object(J.a)(a.content,Object(z.a)({},a.contentShift,l))},r.a.createElement("div",{className:a.drawerHeader}),u&&r.a.createElement(we,{setShowMetaForm:d,palettes:p,savePalette:b,hideForm:function(){d(!1)}}),r.a.createElement(ge,{onSortEnd:function(e){var a=e.oldIndex,t=e.newIndex,o=te()(f,a,t);g({type:"SORT",newOrder:o})},axis:"xy",distance:1})))}l.a.render(r.a.createElement(f.a,{basename:"/colors-ui"},r.a.createElement((function(e){var a=function(){var e={paletteName:null,emoji:null,colors:[].concat(ce),id:Object(re.v4)()},a=Object(o.useReducer)(le,e),t=Object(i.a)(a,2);return{newPalette:t[0],dispatch:t[1]}}(),t=a.newPalette,n=a.dispatch;return r.a.createElement(ie.Provider,{value:t},r.a.createElement(se.Provider,{value:n},e.children))}),null,r.a.createElement((function(){var e=Object(o.useState)(Object(c.a)(T)),a=Object(i.a)(e,2),t=a[0],n=a[1],l=Object(o.useState)("hex"),s=Object(i.a)(l,2),m=s[0],u=s[1],d=function(e){return function(e){var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=!0,o=!1,r=void 0;try{for(var n,l=G[Symbol.iterator]();!(t=(n=l.next()).done);t=!0){var c=n.value;a.colors[c]=[]}}catch(g){o=!0,r=g}finally{try{t||null==l.return||l.return()}finally{if(o)throw r}}var i=!0,s=!1,m=void 0;try{for(var u,d=e.colors[Symbol.iterator]();!(i=(u=d.next()).done);i=!0){var p=u.value,h=I(p.color,10).reverse();for(var f in h)a.colors[G[f]].push({name:"".concat(p.name," ").concat(G[f]),id:p.name.toLowerCase().replace(/ /g,"-"),hex:h[f],rgb:b()(h[f]).css(),rgba:b()(h[f]).css().replace(")",",1.0)").replace("rgb","rgba")})}}catch(g){s=!0,m=g}finally{try{i||null==d.return||d.return()}finally{if(s)throw m}}return a}(t.find((function(a){return a.id===e})))},p=function(e){u(e)},h=function(e){return n([].concat(Object(c.a)(t),[e]))},f=r.a.createElement(L.c,null,r.a.createElement(L.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(U,Object.assign({palettes:t},e))}}),r.a.createElement(L.a,{exact:!0,path:"/palette/new",render:function(e){return r.a.createElement(Le,Object.assign({},e,{palettes:t,addPalette:h}))}}),r.a.createElement(L.a,{exact:!0,path:"/palette/:id",render:function(e){return r.a.createElement(D,{palette:d(e.match.params.id),format:m,updateFormat:p})}}),r.a.createElement(L.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(e){return r.a.createElement(q,Object.assign({},e,{palette:d(e.match.params.paletteId),format:m,updateFormat:p}))}}),r.a.createElement(L.a,{render:function(){return r.a.createElement("h1",null,"Sorry Not Found")}}));return r.a.createElement("div",{className:"App"},f)}),null))),document.getElementById("root"))}},[[262,1,2]]]);
//# sourceMappingURL=main.2436f324.chunk.js.map