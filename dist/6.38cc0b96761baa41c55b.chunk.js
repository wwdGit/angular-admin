webpackJsonp([6],{1215:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),common_1=__webpack_require__(14),forms_1=__webpack_require__(12),ng2_bootstrap_1=__webpack_require__(300),nga_module_1=__webpack_require__(299),announcement_routing_1=__webpack_require__(1385),announcement_component_1=__webpack_require__(1246),announcement_service_1=__webpack_require__(1247),AnnouncementModule=function(){function AnnouncementModule(){}return AnnouncementModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.ReactiveFormsModule,ng2_bootstrap_1.PaginationModule,ng2_bootstrap_1.DropdownModule,ng2_bootstrap_1.ModalModule,forms_1.FormsModule,nga_module_1.NgaModule,announcement_routing_1.routing],providers:[announcement_service_1.AnnouncementService],declarations:[announcement_component_1.Announcement]}),__metadata("design:paramtypes",[])],AnnouncementModule)}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=AnnouncementModule},1246:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),forms_1=__webpack_require__(12),ng2_bootstrap_1=__webpack_require__(300),announcement_service_1=__webpack_require__(1247),Announcement=function(){function Announcement(_fb,_announcementService){this._fb=_fb,this._announcementService=_announcementService,this.searchState="all",this.announcements={data:[],pagination:{current_page:1,total_page:0,per_page:10,total:0}},this.announcementsSelectAll=!1,this.selectedAnnouncements=[],this.editForm=_fb.group({content:["",forms_1.Validators.compose([forms_1.Validators.required])],state:["1",forms_1.Validators.compose([forms_1.Validators.required])]}),this.searchForm=_fb.group({keyword:["",forms_1.Validators.compose([forms_1.Validators.required])]}),this.state=this.editForm.controls.state,this.content=this.editForm.controls.content,this.keyword=this.searchForm.controls.keyword}return Announcement.prototype.ngOnInit=function(){this.getAnnouncements()},Announcement.prototype.batchSelectChange=function(is_select){var _this=this;this.announcements.data.length&&(this.selectedAnnouncements=[],this.announcements.data.forEach(function(item){item.selected=is_select,is_select&&_this.selectedAnnouncements.push(item._id)}))},Announcement.prototype.itemSelectChange=function(){var _this=this;this.selectedAnnouncements=[];var announcements=this.announcements.data;announcements.forEach(function(item){item.selected&&_this.selectedAnnouncements.push(item._id)}),this.selectedAnnouncements.length||(this.announcementsSelectAll=!1),this.selectedAnnouncements.length&&this.selectedAnnouncements.length==announcements.length&&(this.announcementsSelectAll=!0)},Announcement.prototype.switchState=function(state){void 0==state||Object.is(state,this.searchState)||(this.searchState=state,this.getAnnouncements())},Announcement.prototype.resetForm=function(){this.editForm.reset({content:"",state:"1"}),this.edit_announcement=null},Announcement.prototype.resetSearchForm=function(){this.searchForm.reset({keyword:""})},Announcement.prototype.submitAnnouncement=function(values){this.editForm.valid&&(this.edit_announcement?this.doPutAnnouncement(values):this.addAnnouncement(values))},Announcement.prototype.searchAnnouncements=function(values){this.searchForm.valid&&this.getAnnouncements()},Announcement.prototype.refreshAnnouncements=function(){this.getAnnouncements({page:this.announcements.pagination.current_page})},Announcement.prototype.pageChanged=function(event){this.getAnnouncements({page:event.page})},Announcement.prototype.getAnnouncements=function(params){var _this=this;void 0===params&&(params={}),this.keyword.value&&(params.keyword=this.keyword.value),Object.is(this.searchState,"all")||(params.state=this.searchState),params.page&&!Object.is(params.page,1)||(this.announcements.pagination.current_page=1),this._announcementService.getAnnouncements(params).then(function(announcements){_this.announcements=announcements.result,_this.selectedAnnouncements=[],_this.announcementsSelectAll=!1}).catch(function(error){})},Announcement.prototype.addAnnouncement=function(announcement){var _this=this;this._announcementService.addAnnouncement(announcement).then(function(_announcement){_this.resetForm(),_this.getAnnouncements()}).catch(function(error){})},Announcement.prototype.putAnnouncement=function(announcement){this.edit_announcement=announcement,this.editForm.reset(announcement)},Announcement.prototype.doPutAnnouncement=function(announcement){var _this=this;this._announcementService.putAnnouncement(Object.assign(this.edit_announcement,announcement)).then(function(_announcement){_this.getAnnouncements({page:_this.announcements.pagination.current_page}),_this.edit_announcement=null,_this.resetForm()}).catch(function(error){})},Announcement.prototype.delAnnouncementModal=function(announcement){this.del_announcement=announcement,this.delModal.show()},Announcement.prototype.canceldDelAnnouncementModal=function(announcement){this.delModal.hide(),this.del_announcement=null},Announcement.prototype.doDelAnnouncement=function(){var _this=this;this._announcementService.delAnnouncement(this.del_announcement._id).then(function(announcement){_this.delModal.hide(),_this.del_announcement=null,_this.getAnnouncements({page:_this.announcements.pagination.current_page})}).catch(function(err){_this.delModal.hide()})},Announcement.prototype.delAnnouncementsModal=function(announcements){this.del_announcement=null,this.delModal.show()},Announcement.prototype.doDelAnnouncements=function(){var _this=this;this._announcementService.delAnnouncements(this.selectedAnnouncements).then(function(announcements){_this.delModal.hide(),_this.getAnnouncements({page:_this.announcements.pagination.current_page})}).catch(function(err){_this.delModal.hide()})},__decorate([core_1.ViewChild("delModal"),__metadata("design:type","function"==typeof(_a="undefined"!=typeof ng2_bootstrap_1.ModalDirective&&ng2_bootstrap_1.ModalDirective)&&_a||Object)],Announcement.prototype,"delModal",void 0),Announcement=__decorate([core_1.Component({selector:"announcement",encapsulation:core_1.ViewEncapsulation.None,styles:[__webpack_require__(1311)],template:__webpack_require__(1332)}),__metadata("design:paramtypes",["function"==typeof(_b="undefined"!=typeof forms_1.FormBuilder&&forms_1.FormBuilder)&&_b||Object,"function"==typeof(_c="undefined"!=typeof announcement_service_1.AnnouncementService&&announcement_service_1.AnnouncementService)&&_c||Object])],Announcement);var _a,_b,_c}();exports.Announcement=Announcement},1247:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),http_1=__webpack_require__(125),angular2_jwt_1=__webpack_require__(181),angular2_notifications_1=__webpack_require__(124);__webpack_require__(587);var config_1=__webpack_require__(302),AnnouncementService=function(){function AnnouncementService(http,_notificationsService){var _this=this;this.http=http,this._notificationsService=_notificationsService,this._apiUrl=config_1.API_ROOT+"/announcement",this.handleResponse=function(response){var data=response.json();return data.code?(_this._notificationsService.success(data.message,"数据请求成功"),Promise.resolve(data)):(_this._notificationsService.error(data.message,data.debug?data.debug.message:data.message),Promise.reject(data))},this.handleError=function(error){var errmsg=[500,504].indexOf(error.status)>-1?error._body:JSON.parse(error._body).message;return _this._notificationsService.error("请求失败",errmsg),Promise.reject(error)}}return AnnouncementService.prototype.getAnnouncements=function(get_params){var params=new http_1.URLSearchParams;return get_params&&Object.keys(get_params).forEach(function(k){params.set(k,get_params[k])}),this.http.get(this._apiUrl,{search:params}).toPromise().then(this.handleResponse).catch(this.handleError)},AnnouncementService.prototype.addAnnouncement=function(announcement){return this.http.post(this._apiUrl,announcement).toPromise().then(this.handleResponse).catch(this.handleError)},AnnouncementService.prototype.putAnnouncement=function(announcement){return this.http.put(this._apiUrl+"/"+announcement._id,announcement).toPromise().then(this.handleResponse).catch(this.handleError)},AnnouncementService.prototype.delAnnouncement=function(announcement_id){return this.http.delete(this._apiUrl+"/"+announcement_id).toPromise().then(this.handleResponse).catch(this.handleError)},AnnouncementService.prototype.delAnnouncements=function(announcements){return this.http.delete(this._apiUrl,new http_1.RequestOptions({body:{announcements:announcements}})).toPromise().then(this.handleResponse).catch(this.handleError)},AnnouncementService=__decorate([core_1.Injectable(),__metadata("design:paramtypes",["function"==typeof(_a="undefined"!=typeof angular2_jwt_1.AuthHttp&&angular2_jwt_1.AuthHttp)&&_a||Object,"function"==typeof(_b="undefined"!=typeof angular2_notifications_1.NotificationsService&&angular2_notifications_1.NotificationsService)&&_b||Object])],AnnouncementService);var _a,_b}();exports.AnnouncementService=AnnouncementService},1311:function(module,exports){module.exports=".announcement-form .announcement-content {\n  padding: 0; }\n  .announcement-form .announcement-content > .markdown-editor > .editor-toolbar > .menus .quote,\n  .announcement-form .announcement-content > .markdown-editor > .editor-toolbar > .menus .code,\n  .announcement-form .announcement-content > .markdown-editor > .editor-toolbar > .menus .-h3,\n  .announcement-form .announcement-content > .markdown-editor > .editor-toolbar > .menus .image,\n  .announcement-form .announcement-content > .markdown-editor > .editor-toolbar > .menus .save {\n    display: none; }\n\n.announcement-search-form {\n  float: right;\n  width: 20em; }\n\n.announcement-list .batch-checkbox {\n  text-align: left;\n  padding-left: 2em; }\n\n.announcement-list .announcement-err-msg {\n  margin: 1em 0; }\n\n.announcement-list tbody tr td {\n  line-height: 5em; }\n  .announcement-list tbody tr td .content {\n    line-height: 2; }\n    .announcement-list tbody tr td .content p {\n      margin: 0; }\n    .announcement-list tbody tr td .content img {\n      max-width: 4em;\n      margin: 0 1em; }\n"},1332:function(module,exports){module.exports='<div class="row">\n  <div class="col-md-4 col-xs-12">\n    <ba-card title="添加公告">\n      <form class="announcement-form"\n            [formGroup]="editForm" \n            (ngSubmit)="submitAnnouncement(editForm.value)">\n        <div class="form-group"\n              [ngClass]="{ \n                \'has-error\': (!state.valid && state.touched), \n                \'has-success\': (state.valid && state.touched)\n              }">\n          <label for="announcementType">\n            <h5>公告状态</h5>\n          </label>\n          <select class="form-control c-select" \n                  id="announcementType" \n                  [formControl]="state">\n            <option value="1">已发布</option>\n            <option value="0">草稿</option>\n          </select>\n        </div>\n        <div  class="form-group"\n              [ngClass]="{ \n                \'has-error\': (!content.valid && content.touched), \n                \'has-success\': (content.valid && content.touched)\n              }">\n          <label for="announcementContent">\n            <h5>公告内容</h5>\n          </label>\n          <markdown-editor class="form-control announcement-content" \n                           title="文章内容"\n                           [config]="{ lineWrapping: true }"\n                           [formControl]="content">\n          </markdown-editor>\n        </div>\n        <button type="submit"\n                class="btn btn-success"\n                [disabled]="!editForm.valid">{{ edit_announcement ? \'修改\' : \'添加\' }}公告</button>\n        <span>&nbsp;</span>\n        <button class="btn btn-default" (click)="resetForm()">重置</button>\n      </form>\n    </ba-card>\n  </div>\n  <div class="col-md-8 col-xs-12">\n    <ba-card title="全部公告" baCardClass="with-scroll">\n      <div class="clearfix">\n        <div class="pull-left">\n          <div class="btn-group">\n            <button type="button"\n                    class="btn btn-default active"\n                    [ngClass]="{ \'active\': searchState == \'all\'}"\n                    (click)="switchState(\'all\')">\n              <span>全部</span>\n              <span *ngIf="searchState == \'all\'">({{ announcements.pagination.total }})</span>\n            </button>\n            <button type="button"\n                    class="btn btn-default"\n                    [ngClass]="{ \'active\': searchState == 1 }"\n                    (click)="switchState(1)">\n              <span>已发布</span>\n              <span *ngIf="searchState == 1">（{{ announcements.pagination.total }}）</span>\n            </button>\n            <button type="button"\n                    class="btn btn-default"\n                    [ngClass]="{ \'active\': searchState == 0 }"\n                    (click)="switchState(0)">\n              <span>草稿</span>\n              <span *ngIf="searchState == 0">（{{ announcements.pagination.total }}）</span>\n            </button>\n          </div>\n          <span>&nbsp;</span>\n          <div class="btn-group" role="group">\n            <button type="button" \n                    class="btn btn-default btn-with-icon" \n                    (click)="refreshAnnouncements()">\n              <i class="ion-refresh"></i>\n              <span>刷新</span>\n            </button>\n            <button type="button" \n                    class="btn btn-default btn-with-icon"\n                    (click)="resetSearchForm()">\n              <i class="ion-trash-b"></i>\n              <span>清空关键词</span>\n            </button>\n            <div class="btn-group" dropdown>\n              <button type="button"\n                      class="btn btn-default"\n                      dropdownToggle\n                      addToggleClass="true"\n                      [disabled]="!selectedAnnouncements.length">\n                <i class="ion-ios-list"></i>\n                <span>批量操作</span>\n              </button>\n              <ul class="dropdown-menu" dropdownMenu>\n                <li class="dropdown-item">\n                  <a [href]="" (click)="delAnnouncementsModal()">批量删除</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <form class="pull-right form-inline navbar-form announcement-search-form" \n              [formGroup]="searchForm" \n              (ngSubmit)="searchAnnouncements(searchForm.value)">\n          <div class="input-group" style="margin: 0">\n            <input type="text"\n                   placeholder="公告内容"\n                   [formControl]="keyword"\n                   class="form-control with-default-addon">\n            <span class="input-group-btn">\n              <button class="btn btn-default" \n                      type="submit"\n                      [disabled]="!searchForm.valid">搜索</button>\n            </span>\n          </div>\n        </form>\n      </div>\n      <div class="table-responsive">\n        <div class="announcement-list">\n          <table class="table table-striped table-no-borders black-muted-bg table-enrich">\n            <thead class="thead-inverse">\n              <tr>\n                <th class="batch-checkbox">\n                  <ba-checkbox [(ngModel)]="announcementsSelectAll" (ngModelChange)="batchSelectChange($event)">\n                    <span ba-checkbox-label>\n                      <span>&nbsp;</span>\n                      <strong>ID</strong>\n                    </span>\n                  </ba-checkbox>\n                </th>\n                <th width="50%">内容</th>\n                <th class="text-center">状态</th>\n                <th class="text-center">操作</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngIf="!announcements || !announcements.data.length">\n                <td colspan="7">\n                  <p class="text-muted text-center announcement-err-msg" \n                     *ngIf="announcements && announcements.data.length == 0">暂无数据<p>\n                  <p class="text-muted text-center announcement-err-msg" \n                     *ngIf="announcements && announcements.data.length == undefined">加载中<p>\n                </td>\n              </tr>\n              <template [ngIf]="announcements && announcements.data.length">\n                <tr *ngFor="let announcement of announcements.data">\n                  <td class="batch-checkbox">\n                    <ba-checkbox [(ngModel)]="announcement.selected" (ngModelChange)="itemSelectChange()">\n                      <span ba-checkbox-label>\n                        <span>&nbsp;</span>\n                        <strong>{{ announcement.id }}</strong>\n                      </span>\n                    </ba-checkbox>\n                  </td>\n                  <td>\n                    <div class="content ql-editor" [innerHTML]="announcement.content"></div>\n                  </td>\n                  <td align="center">\n                    <span>{{ announcement.state == 1 ? \'已发布\' : \'草稿\' }}</span>\n                    <span *ngIf="announcement.state == 0">&nbsp;</span>\n                    <i class="ion-checkmark text-success" *ngIf="announcement.state == 1"></i>\n                    <i class="ion-edit text-warning" *ngIf="announcement.state == 0"></i>\n                  </td>\n                  <td>\n                    <div class="text-center">\n                      <div class="btn-group" role="group">\n                        <button type="button"\n                                class="btn btn-sm btn-warning"\n                                (click)="putAnnouncement(announcement)">编辑公告</button>\n                        <button type="button"\n                                class="btn btn-sm btn-danger"\n                                (click)="delAnnouncementModal(announcement)">删除公告</button>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n              </template>\n            </tbody>\n          </table>\n          <br>\n          <div class="text-center">\n            <pagination class="pagination-xs"\n                        firstText="首页"\n                        lastText="末页"\n                        nextText="下一页"\n                        previousText="上一页"\n                        pageBtnClass="btn-primary"\n                        [totalItems]="announcements.pagination.total"\n                        [itemsPerPage]="announcements.pagination.per_page"\n                        [(ngModel)]="announcements.pagination.current_page"\n                        [maxSize]="7"\n                        [boundaryLinks]="true"\n                        [rotate]="false"\n                        (pageChanged)="pageChanged($event)">\n            </pagination>\n          </div>\n        </div>\n      </div>\n    </ba-card>\n  </div>\n  <!-- 删除确认弹窗 -->\n  <div bsModal #delModal="bs-modal" class="modal fade" tabindex="1" role="dialog">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button class="close" aria-label="Close" (click)="canceldDelAnnouncementModal()">\n            <span aria-hidden="true">&times;</span>\n          </button>\n          <h4 class="modal-title">确认操作</h4>\n        </div>\n        <div class="modal-body">\n          <div class="message">\n            <span class="icon text-warning">\n              <i class="ion-ios-information-outline"></i>\n            </span>\n            <span>确定要删除{{ del_announcement ? \'这条\' : \'选中\' }}公告吗？</span>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <button class="btn btn-primary confirm-btn" (click)="(del_announcement ? doDelAnnouncement() : doDelAnnouncements())">确认删除</button>\n          <span>&nbsp;</span>\n          <button class="btn btn-default confirm-btn" (click)="canceldDelAnnouncementModal()">取消</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'},1385:function(module,exports,__webpack_require__){"use strict";var router_1=__webpack_require__(41),announcement_component_1=__webpack_require__(1246),routes=[{path:"",component:announcement_component_1.Announcement}];exports.routing=router_1.RouterModule.forChild(routes)}});