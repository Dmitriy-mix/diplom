"use strict";(self.webpackChunkdiplom=self.webpackChunkdiplom||[]).push([[452],{5452:(V,l,c)=>{c.r(l),c.d(l,{UsersModule:()=>O});var o=c(4182),m=c(9808),d=c(9556),t=c(2096);let A=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(u,s){1&u&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},directives:[d.lC],encapsulation:2}),e})();var p=c(7224),a=c(5072);function v(e,r){1&e&&t._UZ(0,"span",11)}function C(e,r){1&e&&(t.TgZ(0,"span"),t._uU(1,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),t.qZA())}function h(e,r){if(1&e){const u=t.EpF();t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",6),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",7)(10,"a",8),t._uU(11,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),t.qZA(),t.TgZ(12,"button",9),t.NdJ("click",function(){const n=t.CHM(u).$implicit;return t.oxw().deleteUser(n)}),t.YNc(13,v,1,0,"span",10),t.YNc(14,C,2,0,"span",5),t.qZA()()()}if(2&e){const u=r.$implicit;t.xp6(2),t.Q6J("src",u.photo,t.LSH),t.xp6(2),t.Oqu(u.firstName),t.xp6(2),t.Oqu(u.lastName),t.xp6(2),t.Oqu(u.username),t.xp6(2),t.MGl("routerLink","edit/",u.id,""),t.xp6(2),t.Q6J("disabled",u.isDeleting),t.xp6(1),t.Q6J("ngIf",u.isDeleting),t.xp6(1),t.Q6J("ngIf",!u.isDeleting)}}function Z(e,r){1&e&&(t.TgZ(0,"tr")(1,"td",12),t._UZ(2,"span",13),t.qZA()())}let x=(()=>{class e{constructor(u,s,i){this.accountService=u,this.alertService=s,this.method=i,this.users=null}ngOnInit(){this.getUsers()}getUsers(){this.accountService.getUsers().subscribe(u=>{this.users=u.results})}deleteUser(u){this.users.find(i=>i.id===u.id).isDeleting=!0,this.method.requestUpdateUser(u.id,u),this.accountService.deleteUser(u.id,u).pipe((0,p.P)()).subscribe({next:()=>{this.users=this.users.filter(i=>i.id!==u.id),this.alertService.success("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e",{keepAfterRouteChange:!0})},error:i=>{this.alertService.error(i)}})}}return e.\u0275fac=function(u){return new(u||e)(t.Y36(a.BR),t.Y36(a.c9),t.Y36(a.r8))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:19,vars:2,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"table","table-striped"],[2,"width","30%"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],["id","image",3,"src"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","mr-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(u,s){1&u&&(t.TgZ(0,"h1"),t._uU(1,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),t.qZA(),t.TgZ(2,"a",0),t._uU(3,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),t.qZA(),t.TgZ(4,"table",1)(5,"thead")(6,"tr")(7,"th",2),t._uU(8,"\u0424\u043e\u0442\u043e"),t.qZA(),t.TgZ(9,"th",2),t._uU(10,"\u0418\u043c\u044f"),t.qZA(),t.TgZ(11,"th",2),t._uU(12,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"),t.qZA(),t.TgZ(13,"th",2),t._uU(14,"\u041b\u043e\u0433\u0438\u043d"),t.qZA(),t._UZ(15,"th",3),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,h,15,8,"tr",4),t.YNc(18,Z,3,0,"tr",5),t.qZA()()),2&u&&(t.xp6(17),t.Q6J("ngForOf",s.users),t.xp6(1),t.Q6J("ngIf",!s.users))},directives:[d.yS,m.sg,m.O5],encapsulation:2}),e})();function T(e,r){1&e&&(t.TgZ(0,"h1"),t._uU(1,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),t.qZA())}function E(e,r){1&e&&(t.TgZ(0,"h1"),t._uU(1,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),t.qZA())}function b(e,r){if(1&e&&t._UZ(0,"img",25),2&e){const u=t.oxw();t.Q6J("src",u.form.value.photo,t.LSH)}}function k(e,r){1&e&&t._UZ(0,"img",26)}function q(e,r){if(1&e){const u=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){return t.CHM(u),t.oxw().buttonEditAvatarOpen()}),t._uU(1,"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"),t.qZA()}}function U(e,r){if(1&e){const u=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){return t.CHM(u),t.oxw().buttonEditAvatarClosed()}),t._uU(1,"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"),t.qZA()}}function N(e,r){if(1&e){const u=t.EpF();t.TgZ(0,"div",28)(1,"img",29),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/1.png")}),t.qZA(),t.TgZ(2,"img",30),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/2.png")}),t.qZA(),t.TgZ(3,"img",31),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/3.png")}),t.qZA(),t.TgZ(4,"img",32),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/4.png")}),t.qZA(),t.TgZ(5,"img",33),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/5.png")}),t.qZA(),t.TgZ(6,"img",34),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/6.png")}),t.qZA(),t.TgZ(7,"img",35),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/7.png")}),t.qZA(),t.TgZ(8,"img",36),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/8.png")}),t.qZA(),t.TgZ(9,"img",37),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/9.png")}),t.qZA(),t.TgZ(10,"img",38),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/10.png")}),t.qZA(),t.TgZ(11,"img",39),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/11.png")}),t.qZA(),t.TgZ(12,"img",40),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/12.png")}),t.qZA(),t.TgZ(13,"img",41),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/13.png")}),t.qZA(),t.TgZ(14,"img",42),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/14.png")}),t.qZA(),t.TgZ(15,"img",43),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/15.png")}),t.qZA(),t.TgZ(16,"img",44),t.NdJ("click",function(i){return t.CHM(u),t.oxw().editAvatar(i,"./assets/images/users/16.png")}),t.qZA()()}}function J(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1,"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c."),t.qZA())}function B(e,r){if(1&e&&(t.TgZ(0,"div",45),t.YNc(1,J,2,0,"div",0),t.qZA()),2&e){const u=t.oxw();t.xp6(1),t.Q6J("ngIf",u.f.firstName.errors.required)}}function F(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1,"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c."),t.qZA())}function w(e,r){if(1&e&&(t.TgZ(0,"div",45),t.YNc(1,F,2,0,"div",0),t.qZA()),2&e){const u=t.oxw();t.xp6(1),t.Q6J("ngIf",u.f.lastName.errors.required)}}function I(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1,"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c."),t.qZA())}function M(e,r){if(1&e&&(t.TgZ(0,"div",45),t.YNc(1,I,2,0,"div",0),t.qZA()),2&e){const u=t.oxw();t.xp6(1),t.Q6J("ngIf",u.f.username.errors.required)}}function Y(e,r){1&e&&(t.TgZ(0,"em"),t._uU(1,"(\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u044b\u043c, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0442\u043e\u0442 \u0436\u0435 \u043f\u0430\u0440\u043e\u043b\u044c)"),t.qZA())}function Q(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1,"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c."),t.qZA())}function S(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0447\u0435\u043c \u0438\u0437 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),t.qZA())}function y(e,r){if(1&e&&(t.TgZ(0,"div",45),t.YNc(1,Q,2,0,"div",0),t.YNc(2,S,2,0,"div",0),t.qZA()),2&e){const u=t.oxw();t.xp6(1),t.Q6J("ngIf",u.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",u.f.password.errors.minlength)}}function D(e,r){1&e&&t._UZ(0,"span",46)}const _=function(e){return{"is-invalid":e}};let g=(()=>{class e{constructor(u,s,i,n,f,R){this.formBuilder=u,this.route=s,this.method=i,this.router=n,this.accountService=f,this.alertService=R,this.loading=!1,this.submitted=!1,this.photo="",this.checkedAvatar=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id;const u=[o.kI.minLength(6)];this.isAddMode&&u.push(o.kI.required),this.form=this.formBuilder.group({firstName:["",o.kI.required],lastName:["",o.kI.required],username:["",o.kI.required],password:["",u],photo:""}),this.isAddMode||this.accountService.getUser(this.id).pipe((0,p.P)()).subscribe(s=>this.form.patchValue(s))}get f(){return this.form.controls}editAvatar(u,s){this.form.get("photo").setValue(s),this.photo=s,this.checkedAvatar=!1}buttonEditAvatarOpen(){this.checkedAvatar=!0}buttonEditAvatarClosed(){this.checkedAvatar=!1}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())}createUser(){this.accountService.createUser(this.form.value).pipe((0,p.P)()).subscribe({next:()=>{this.alertService.success("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d",{keepAfterRouteChange:!0}),this.router.navigate(["../"],{relativeTo:this.route})},error:u=>{this.alertService.error(u),this.loading=!1}})}updateUser(){this.reqUpdate(),this.accountService.updateUser(this.id,this.form.value).pipe((0,p.P)()).subscribe({next:()=>{this.alertService.success("\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e",{keepAfterRouteChange:!0}),this.router.navigate(["../../"],{relativeTo:this.route})},error:u=>{this.alertService.error(u),this.loading=!1}})}reqUpdate(){this.method.requestUpdateUser(this.id,this.form.value).pipe((0,p.P)()).subscribe({next:()=>{this.alertService.success("\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e",{keepAfterRouteChange:!0}),this.router.navigate(["../../"],{relativeTo:this.route})},error:u=>{this.alertService.error(u),this.loading=!1}})}}return e.\u0275fac=function(u){return new(u||e)(t.Y36(o.qu),t.Y36(d.gz),t.Y36(a.r8),t.Y36(d.F0),t.Y36(a.BR),t.Y36(a.c9))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:40,vars:27,consts:[[4,"ngIf"],[3,"formGroup"],[1,"form-row","form-avatar"],[1,"selected-avatar"],["id","image",3,"src",4,"ngIf"],["class","no_photo","src","./assets/images/users/no_user.png","id","image",4,"ngIf"],[1,"button-photo"],["class","buttons",3,"click",4,"ngIf"],["class","avatar",4,"ngIf"],[1,"form-row",2,"margin-top","40px"],[1,"form-group","col"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"form-row"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled","click"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link","border-btn"],["id","image",3,"src"],["src","./assets/images/users/no_user.png","id","image",1,"no_photo"],[1,"buttons",3,"click"],[1,"avatar"],["src","./assets/images/users/1.png","id","image",3,"click"],["src","./assets/images/users/2.png","id","image",3,"click"],["src","./assets/images/users/3.png","id","image",3,"click"],["src","./assets/images/users/4.png","id","image",3,"click"],["src","./assets/images/users/5.png","id","image",3,"click"],["src","./assets/images/users/6.png","id","image",3,"click"],["src","./assets/images/users/7.png","id","image",3,"click"],["src","./assets/images/users/8.png","id","image",3,"click"],["src","./assets/images/users/9.png","id","image",3,"click"],["src","./assets/images/users/10.png","id","image",3,"click"],["src","./assets/images/users/11.png","id","image",3,"click"],["src","./assets/images/users/12.png","id","image",3,"click"],["src","./assets/images/users/13.png","id","image",3,"click"],["src","./assets/images/users/14.png","id","image",3,"click"],["src","./assets/images/users/15.png","id","image",3,"click"],["src","./assets/images/users/16.png","id","image",3,"click"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(u,s){1&u&&(t.YNc(0,T,2,0,"h1",0),t.YNc(1,E,2,0,"h1",0),t.TgZ(2,"form",1)(3,"div",2)(4,"div",3),t.YNc(5,b,1,1,"img",4),t.YNc(6,k,1,0,"img",5),t.TgZ(7,"div",6),t.YNc(8,q,2,0,"button",7),t.YNc(9,U,2,0,"button",7),t.qZA()(),t.YNc(10,N,17,0,"div",8),t.qZA(),t.TgZ(11,"div",9)(12,"div",10)(13,"label",11),t._uU(14,"\u0418\u043c\u044f"),t.qZA(),t._UZ(15,"input",12),t.YNc(16,B,2,1,"div",13),t.qZA(),t.TgZ(17,"div",10)(18,"label",14),t._uU(19,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"),t.qZA(),t._UZ(20,"input",15),t.YNc(21,w,2,1,"div",13),t.qZA()(),t.TgZ(22,"div",16)(23,"div",10)(24,"label",17),t._uU(25,"\u041b\u043e\u0433\u0438\u043d"),t.qZA(),t._UZ(26,"input",18),t.YNc(27,M,2,1,"div",13),t.qZA(),t.TgZ(28,"div",10)(29,"label",19),t._uU(30," \u041f\u0430\u0440\u043e\u043b\u044c "),t.YNc(31,Y,2,0,"em",0),t.qZA(),t._UZ(32,"input",20),t.YNc(33,y,3,2,"div",13),t.qZA()(),t.TgZ(34,"div",21)(35,"button",22),t.NdJ("click",function(){return s.onSubmit()}),t.YNc(36,D,1,0,"span",23),t._uU(37," \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c "),t.qZA(),t.TgZ(38,"a",24),t._uU(39,"\u0412\u044b\u0439\u0442\u0438"),t.qZA()()()),2&u&&(t.Q6J("ngIf",s.isAddMode),t.xp6(1),t.Q6J("ngIf",!s.isAddMode),t.xp6(1),t.Q6J("formGroup",s.form),t.xp6(3),t.Q6J("ngIf",s.form.value.photo),t.xp6(1),t.Q6J("ngIf",!s.form.value.photo),t.xp6(2),t.Q6J("ngIf",!s.checkedAvatar),t.xp6(1),t.Q6J("ngIf",s.checkedAvatar),t.xp6(1),t.Q6J("ngIf",s.checkedAvatar),t.xp6(5),t.Q6J("ngClass",t.VKq(19,_,s.submitted&&s.f.firstName.errors)),t.xp6(1),t.Q6J("ngIf",s.submitted&&s.f.firstName.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(21,_,s.submitted&&s.f.lastName.errors)),t.xp6(1),t.Q6J("ngIf",s.submitted&&s.f.lastName.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(23,_,s.submitted&&s.f.username.errors)),t.xp6(1),t.Q6J("ngIf",s.submitted&&s.f.username.errors),t.xp6(4),t.Q6J("ngIf",!s.isAddMode),t.xp6(1),t.Q6J("ngClass",t.VKq(25,_,s.submitted&&s.f.password.errors)),t.xp6(1),t.Q6J("ngIf",s.submitted&&s.f.password.errors),t.xp6(2),t.Q6J("disabled",s.loading),t.xp6(1),t.Q6J("ngIf",s.loading))},directives:[m.O5,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,m.mk,d.yS],encapsulation:2}),e})();const H=[{path:"",component:A,children:[{path:"",component:x},{path:"add",component:g},{path:"edit/:id",component:g}]}];let L=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(H)],d.Bz]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.ez,o.UX,L]]}),e})()}}]);