"use strict";(self.webpackChunkcountry_app=self.webpackChunkcountry_app||[]).push([[157],{9157:(P,Z,a)=>{a.r(Z),a.d(Z,{CountriesModule:()=>F});var i=a(6814),u=a(3760),t=a(4946),f=a(7398),l=a(6306),h=a(2096),_=a(9862);let m=(()=>{class e{constructor(n){this.http=n,this.apiURL="https://restcountries.com/v3.1"}searchCountryByAlphaCode(n){return this.http.get(`${this.apiURL}/alpha/${n}`).pipe((0,f.U)(o=>o.length>0?o[0]:null),(0,l.K)(()=>(0,h.of)(null)))}searchCapital(n){return this.http.get(`${this.apiURL}/capital/${n}`).pipe((0,l.K)(()=>(0,h.of)([])))}searchCountry(n){return this.http.get(`${this.apiURL}/name/${n}`).pipe((0,l.K)(()=>(0,h.of)([])))}searchRegion(n){return this.http.get(`${this.apiURL}/region/${n}`).pipe((0,l.K)(()=>(0,h.of)([])))}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(_.eN))};static#n=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();const T=["inputTxt"];let g=(()=>{class e{constructor(){this.placeholder="",this.onValue=new t.vpe}searchInput(){this.onValue.emit(this.input.nativeElement.value)}static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["shared-search-box"]],viewQuery:function(o,r){if(1&o&&t.Gf(T,5),2&o){let c;t.iGM(c=t.CRH())&&(r.input=c.first)}},inputs:{placeholder:"placeholder"},outputs:{onValue:"onValue"},decls:2,vars:1,consts:[["type","text",1,"form-control",3,"placeholder","keyup.enter"],["inputTxt",""]],template:function(o,r){1&o&&(t.TgZ(0,"input",0,1),t.NdJ("keyup.enter",function(){return r.searchInput()}),t.qZA()),2&o&&t.Q6J("placeholder",r.placeholder)},encapsulation:2})}return e})();function v(e,s){1&e&&(t.TgZ(0,"div",2),t._uU(1," There are no countries to show\n"),t.qZA())}const C=function(e){return["/countries/by/",e]};function A(e,s){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td")(15,"a",6),t._uU(16,"Info"),t.qZA()()()),2&e){const n=s.$implicit,o=s.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.hij(" ",n.flag," "),t.xp6(2),t.Q6J("src",n.flags.svg,t.LSH)("alt",n.name.common),t.xp6(2),t.Oqu(n.name.common),t.xp6(2),t.Oqu(n.capital),t.xp6(2),t.Oqu(t.lcZ(13,8,n.population)),t.xp6(3),t.Q6J("routerLink",t.VKq(10,C,n.cca3))}}function q(e,s){if(1&e&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Icon"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Bandera"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Nombre"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Capital"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Poblaci\xf3n"),t.qZA(),t._UZ(15,"th"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,A,17,12,"tr",4),t.qZA()()),2&e){const n=t.oxw();t.xp6(17),t.Q6J("ngForOf",n.countries)}}let y=(()=>{class e{constructor(){this.countries=[]}static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["country-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(o,r){if(1&o&&(t.YNc(0,v,2,0,"div",0),t.YNc(1,q,18,1,"ng-template",null,1,t.W1O)),2&o){const c=t.MAs(2);t.Q6J("ngIf",0===r.countries.length)("ngIfElse",c)}},dependencies:[i.sg,i.O5,u.rH,i.JJ],styles:["img[_ngcontent-%COMP%]{width:35px}"]})}return e})(),d=(()=>{class e{constructor(n){this.countriesService=n,this.countries=[]}searchByCapital(n){this.countriesService.searchCapital(n).subscribe(o=>{this.countries=o})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(m))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-capital-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Search by capital",3,"onValue"],[3,"countries"]],template:function(o,r){1&o&&(t.TgZ(0,"h2"),t._uU(1,"By capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(p){return r.searchByCapital(p)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr")(9,"country-table",3),t.qZA()()),2&o&&(t.xp6(9),t.Q6J("countries",r.countries))},dependencies:[g,y],encapsulation:2})}return e})(),U=(()=>{class e{constructor(n){this.countriesService=n,this.countries=[]}searchByCountry(n){this.countriesService.searchCountry(n).subscribe(o=>{this.countries=o})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(m))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-country-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Search by country",3,"onValue"],[3,"countries"]],template:function(o,r){1&o&&(t.TgZ(0,"h2"),t._uU(1,"By country"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(p){return r.searchByCountry(p)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr")(9,"country-table",3),t.qZA()()),2&o&&(t.xp6(9),t.Q6J("countries",r.countries))},dependencies:[g,y],encapsulation:2})}return e})(),x=(()=>{class e{constructor(n){this.countriesService=n,this.countries=[]}searchByRegion(n){this.countriesService.searchRegion(n).subscribe(o=>{this.countries=o})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(m))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-region-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Search by region",3,"onValue"],[3,"countries"]],template:function(o,r){1&o&&(t.TgZ(0,"h2"),t._uU(1,"By region"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(p){return r.searchByRegion(p)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr")(9,"country-table",3),t.qZA()()),2&o&&(t.xp6(9),t.Q6J("countries",r.countries))},dependencies:[g,y],encapsulation:2})}return e})();var b=a(4664);function B(e,s){1&e&&(t.TgZ(0,"div",2),t._uU(1," Espere por favor "),t.qZA())}function O(e,s){if(1&e&&(t.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),t._uU(4,"Country: "),t.TgZ(5,"strong"),t._uU(6),t.qZA()()()(),t.TgZ(7,"div",3)(8,"div",5)(9,"h3"),t._uU(10,"Flag"),t.qZA(),t._UZ(11,"img",6),t.qZA(),t.TgZ(12,"div",7)(13,"h3"),t._uU(14,"Data"),t.qZA(),t.TgZ(15,"ul",8)(16,"li",9)(17,"strong"),t._uU(18,"Population:"),t.qZA(),t._uU(19),t.ALo(20,"number"),t.qZA(),t.TgZ(21,"li",9)(22,"strong"),t._uU(23,"C\xf3digo:"),t.qZA(),t._uU(24),t.qZA()()()(),t.TgZ(25,"div",10)(26,"div",7)(27,"h3"),t._uU(28,"Translations"),t.qZA(),t.TgZ(29,"div",11)(30,"span",12),t._uU(31),t.qZA(),t.TgZ(32,"span",12),t._uU(33),t.qZA(),t.TgZ(34,"span",12),t._uU(35),t.qZA(),t.TgZ(36,"span",12),t._uU(37),t.qZA(),t.TgZ(38,"span",12),t._uU(39),t.qZA(),t.TgZ(40,"span",12),t._uU(41),t.qZA(),t.TgZ(42,"span",12),t._uU(43),t.qZA(),t.TgZ(44,"span",12),t._uU(45),t.qZA(),t.TgZ(46,"span",12),t._uU(47),t.qZA(),t.TgZ(48,"span",12),t._uU(49),t.qZA()()()()()),2&e){const n=t.oxw();t.xp6(6),t.Oqu(n.country.name.common),t.xp6(5),t.Q6J("src",n.country.flags.svg,t.LSH)("alt",n.country.name.common),t.xp6(8),t.hij(" ",t.lcZ(20,15,n.country.population)," "),t.xp6(5),t.hij(" ",n.country.cca3," "),t.xp6(7),t.Oqu(n.country.translations.ara.common),t.xp6(2),t.Oqu(n.country.translations.bre.common),t.xp6(2),t.Oqu(n.country.translations.ces.common),t.xp6(2),t.Oqu(n.country.translations.cym.common),t.xp6(2),t.Oqu(n.country.translations.deu.common),t.xp6(2),t.Oqu(n.country.translations.est.common),t.xp6(2),t.Oqu(n.country.translations.fin.common),t.xp6(2),t.Oqu(n.country.translations.ita.common),t.xp6(2),t.Oqu(n.country.translations.kor.common),t.xp6(2),t.Oqu(n.country.translations.per.common)}}const J=[{path:"by-capital",component:d},{path:"by-country",component:U},{path:"by-region",component:x},{path:"by/:id",component:(()=>{class e{constructor(n,o,r){this.activatedRoute=n,this.router=o,this.countriesService=r}ngOnInit(){this.activatedRoute.params.pipe((0,b.w)(({id:n})=>this.countriesService.searchCountryByAlphaCode(n))).subscribe(n=>n?this.country=n:this.router.navigateByUrl(""))}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(u.gz),t.Y36(u.F0),t.Y36(m))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"clo-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(o,r){if(1&o&&(t.YNc(0,B,2,0,"ng-template",null,0,t.W1O),t.YNc(2,O,50,17,"div",1)),2&o){const c=t.MAs(1);t.xp6(2),t.Q6J("ngIf",r.country)("ngIfElse",c)}},dependencies:[i.O5,i.JJ],encapsulation:2})}return e})()},{path:"**",component:d}];let S=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(J),u.Bz]})}return e})();var w=a(6208);let F=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[i.ez,S,w.m]})}return e})()}}]);