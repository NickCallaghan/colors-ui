(this["webpackJsonpcolors-ui"]=this["webpackJsonpcolors-ui"]||[]).push([[0],{120:function(e,a,o){e.exports=o(195)},125:function(e,a,o){},129:function(e,a,o){},188:function(e,a,o){},192:function(e,a,o){},193:function(e,a,o){},195:function(e,a,o){"use strict";o.r(a);var r=o(0),n=o.n(r),t=o(8),l=o.n(t),c=(o(125),o(30)),i=o(22),m=o(16),s=o(28),u=o(29),d=o(31),p=o(107),h=(o(129),function(e){function a(){var e,o;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return(o=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={showCopyOverlay:!1},o.changeCopyState=function(){o.setState({showCopyOverlay:!0},(function(){setTimeout((function(){o.setState({showCopyOverlay:!1})}),1500)}))},o}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.name,o=e.background;return n.a.createElement(p.CopyToClipboard,{text:this.props.background,onCopy:this.changeCopyState},n.a.createElement("div",{className:"ColorBox",style:{background:o}},n.a.createElement("div",{className:"copy-overlay ".concat(this.state.showCopyOverlay&&"show"),style:{background:o}}),n.a.createElement("div",{className:"copy-msg ".concat(this.state.showCopyOverlay&&"show")},n.a.createElement("h1",null,this.props.name),n.a.createElement("p",null,this.props.background)),n.a.createElement("div",{className:"copy-container"},n.a.createElement("div",{className:"box-content"},n.a.createElement("span",null,a)),n.a.createElement("button",{className:"copy-button"},"Copy")),n.a.createElement("span",{className:"see-more"},"more")))}}]),a}(r.Component)),f=o(113),b=o(228),g=o(231),y=o(230),C=o(227),v=o(111),E=o.n(v),F=(o(187),o(188),function(e){function a(){var e,o;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return(o=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={format:"hex",showSnackBar:!1},o.handleChangeFormat=function(e){o.setState({format:e.target.value,showSnackBar:!0}),o.props.changeFormat(e.target.value)},o.dismissSnackBar=function(){o.setState({showSnackBar:!1})},o}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state.format;return n.a.createElement("div",{className:"NavBar"},n.a.createElement("div",{className:"logo"},n.a.createElement("a",{href:"/colors-ui"},"React Color Picker")),n.a.createElement("div",{className:"slider-wrapper"},n.a.createElement(f.a,{step:100,min:100,max:900,onChange:this.props.handleSliderChange,value:this.props.colorValue})),n.a.createElement("div",{className:"color-format"},n.a.createElement(b.a,{value:this.state.format,onChange:this.handleChangeFormat},n.a.createElement(g.a,{value:"hex"},"HEX #FFFFFF"),n.a.createElement(g.a,{value:"rgb"},"RGB rgb(255,255,255)"),n.a.createElement(g.a,{value:"rgba"},"RGBA rgba(255,255,255,1)"))),n.a.createElement(y.a,{open:this.state.showSnackBar,anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:2e3,onClose:this.dismissSnackBar,message:n.a.createElement("span",{id:"message-id"},"Format Changed to ",e,"!"),ContentProps:{"aria-describedby":"message-id"},action:[n.a.createElement(C.a,{color:"inherit",key:"close","aria-label":"close"},n.a.createElement(E.a,{onClick:this.dismissSnackBar}))]}))}}]),a}(r.Component)),B=(o(192),function(e){function a(){var e,o;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return(o=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={colorValue:500,format:"hex"},o.handleSliderChange=function(e){o.setState({colorValue:e})},o.changeFormat=function(e){o.setState({format:e})},o}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.palette,a=e.paletteName,o=e.emoji,r=this.props.palette.colors[this.state.colorValue].map((function(e){return n.a.createElement(h,{name:e.name,background:e.hex,key:e.hex})}));return n.a.createElement("div",{className:"Palette"},n.a.createElement(F,{title:this.props.palette.paletteName,handleSliderChange:this.handleSliderChange,colorValue:this.state.colorValue,changeFormat:this.changeFormat}),n.a.createElement("div",{className:"Palette-colors"},r),n.a.createElement("footer",{className:"palette-footer"},a,n.a.createElement("span",{className:"emoji"},o)))}}]),a}(r.Component)),S=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],k=o(62),N=o.n(k),O=[50,100,200,300,400,500,600,700,800,900];function j(e){var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=!0,r=!1,n=void 0;try{for(var t,l=O[Symbol.iterator]();!(o=(t=l.next()).done);o=!0){var c=t.value;a.colors[c]=[]}}catch(b){r=!0,n=b}finally{try{o||null==l.return||l.return()}finally{if(r)throw n}}var i=!0,m=!1,s=void 0;try{for(var u,d=e.colors[Symbol.iterator]();!(i=(u=d.next()).done);i=!0){var p=u.value,h=w(p.color,10).reverse();for(var f in h)a.colors[O[f]].push({name:"".concat(p.name," ").concat(O[f]),id:p.name.toLowerCase().replace(/ /g,"-"),hex:h[f],rgb:N()(h[f]).css(),rgba:N()(h[f]).css().replace(")",",1.0)")})}}catch(b){m=!0,s=b}finally{try{i||null==d.return||d.return()}finally{if(m)throw s}}return a}function w(e,a){return N.a.scale(function(e){return[N()(e).darken(1.4).hex(),e,"#FFF"]}(e)).mode("lab").colors(a)}var P=o(41),A=o(196);var x=Object(A.a)({root:{backgroundColor:"white",borderRadius:"5px",padding:"0.5rem",postion:"relative",overflow:"hidden",border:"1px solid black",display:"flex",flexDirection:"column",alignItems:"center","&:hover":{cursor:"pointer"}},colors:{height:"150px",width:"100%"},title:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",margin:"5px"},emoji:{marginLeft:"auto"},miniColor:{width:"20%",height:"25%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"}})((function(e){var a=e.classes,o=e.paletteName,r=e.emoji,t=e.colors.map((function(e){return n.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}));return n.a.createElement("div",{className:a.root,onClick:e.handleClick},n.a.createElement("div",{className:a.colors},t),n.a.createElement("h5",{className:a.title},o," ",n.a.createElement("span",{className:a.emoji},r)))})),D=(o(193),function(e){function a(){var e,o;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return(o=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).goToPalette=function(e){o.props.history.push("".concat("/colors-ui","/palette/").concat(e))},o}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,o=this.props.palettes.map((function(a){return n.a.createElement(x,Object.assign({},a,{key:a.paletteName,handleClick:function(){return e.goToPalette(a.id)}}))}));return n.a.createElement("div",{className:a.root},n.a.createElement("div",{className:a.container},n.a.createElement("nav",{className:a.nav},n.a.createElement("h1",null,"React Colors")),n.a.createElement("div",{className:a.palettes},o)))}}]),a}(r.Component)),G=Object(A.a)({root:{backgroundColor:"blue",height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center"},container:{width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},nav:{display:"flex",width:"100%",color:"white"},palettes:{boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3,30%)",gridGap:"5%"},links:{textDecoration:"none"}})(D),R=function(e){function a(){var e,o;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return(o=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={palettes:Object(c.a)(S)},o.findPalette=function(e){return j(o.state.palettes.find((function(a){return a.id===e})))},o}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=n.a.createElement(P.c,null,n.a.createElement(P.a,{exact:!0,path:"".concat("/colors-ui","/"),render:function(a){return n.a.createElement(G,Object.assign({palettes:e.state.palettes},a))}}),n.a.createElement(P.a,{exact:!0,path:"".concat("/colors-ui","/palette/:id"),render:function(a){return n.a.createElement(B,{palette:e.findPalette(a.match.params.id)})}}),n.a.createElement(P.a,{render:function(){return n.a.createElement("h1",null,"Not Found")}}));return n.a.createElement("div",{className:"App"},a)}}]),a}(r.Component),M=o(87);l.a.render(n.a.createElement(M.a,{basename:"/colors-ui"},n.a.createElement(R,null)),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.04629c6f.chunk.js.map