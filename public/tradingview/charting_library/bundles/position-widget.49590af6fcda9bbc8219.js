(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[8751],{4270:e=>{e.exports={"close-button":"close-button-1X92xTLv","close-icon":"close-icon-1X92xTLv","button-l":"button-l-1X92xTLv","button-m":"button-m-1X92xTLv","button-s":"button-s-1X92xTLv","button-xs":"button-xs-1X92xTLv","button-xxs":"button-xxs-1X92xTLv"}},47822:e=>{e.exports={container:"container-2EQh-XLR","container-danger":"container-danger-2EQh-XLR",icon:"icon-2EQh-XLR",header:"header-2EQh-XLR","container-warning":"container-warning-2EQh-XLR","container-success":"container-success-2EQh-XLR","container-default":"container-default-2EQh-XLR","text-wrap":"text-wrap-2EQh-XLR","close-button":"close-button-2EQh-XLR"}},41750:e=>{e.exports={dialog:"dialog-j5USH1y6",dialogBody:"dialogBody-j5USH1y6"}},74299:e=>{e.exports={positionInfo:"positionInfo-gdwULvBb",title:"title-gdwULvBb"}},27827:e=>{e.exports={positionPanel:"positionPanel-JKJMXNzQ"}},55179:e=>{e.exports={positionWidget:"positionWidget-1lIcWKyL",separator:"separator-1lIcWKyL",brackets:"brackets-1lIcWKyL",customFieldsWrapper:"customFieldsWrapper-1lIcWKyL",warning:"warning-1lIcWKyL",button:"button-1lIcWKyL"}},47967:(e,t,o)=>{"use strict";o.d(t,{CloseButton:()=>h});var s=o(67294),n=o(94184),l=o(21659),i=o(27214),r=o(43101),a=o(42998),c=o(83448),d=o(42782),u=o(4270),m=o.n(u);function p(e="l"){switch(e){case"l":return i;case"m":return r;case"s":return a;case"xs":return c;case"xxs":return d;default:return r}}const h=s.forwardRef((e,t)=>{const{className:o,size:i,...r}=e,a=n(m()["close-button"],m()["button-"+i],o);return s.createElement("button",{...r,type:"button",className:a,ref:t},s.createElement(l.Icon,{icon:p(i),className:m()["close-icon"]}))})},22458:(e,t,o)=>{"use strict";o.d(t,{Informer:()=>p});var s=o(67294),n=o(94184),l=o(21659),i=o(47967),r=o(90641),a=o(22890),c=o(69192),d=o(47822),u=o.n(d);const m={danger:r,warning:r,success:c,default:a};function p(e){const{informerIntent:t,content:o,className:r,header:a,isIconShown:c=!0,isCloseButtonShown:d,icon:p,onCloseClick:h,closeButtonLabel:b="Close"}=e;return s.createElement("div",{className:n(u().container,u()["container-"+t],r)},c&&s.createElement(l.Icon,{className:u().icon,icon:null!=p?p:m[t]}),s.createElement("div",{className:u()["text-wrap"]},s.createElement("span",{className:u().header},a)," ",o),d&&s.createElement(i.CloseButton,{"aria-label":b,onClick:h,className:u()["close-button"],size:"xs"}))}},95937:(e,t,o)=>{"use strict";o.r(t),o.d(t,{closePositionDialog:()=>X,mountPositionPanel:()=>R,showPositionDialog:()=>P,unmountPositionPanel:()=>W});var s=o(67294),n=o(73935),l=o(63184),i=o(23593),r=o(46403),a=o(85452),c=o(69397),d=o(22458),u=o(14071),m=o(47412),p=o(36624),h=o(41078),b=o(46055),g=o(80113),v=o(74299);function w(e){return s.createElement("div",{className:v.positionInfo},s.createElement("div",{className:v.title},e.title),s.createElement(g.InfoTable,{rows:e.infoTableData.rows,header:e.infoTableData.header,disabled:!1,rightAlignedValues:!0}))}class f extends s.PureComponent{constructor(e){super(e),this._updateInfoTableData=e=>{
this.setState({infoTableData:e})},this.state={title:e.model.title(),infoTableData:e.model.infoTableData().value()}}componentDidMount(){this._subscribeToModel(this.props.model)}componentWillUnmount(){this._unsubscribeFromModel(this.props.model)}render(){return s.createElement(w,{title:this.state.title,infoTableData:this.state.infoTableData})}_subscribeToModel(e){e.infoTableData().subscribe(this._updateInfoTableData)}_unsubscribeFromModel(e){e.infoTableData().unsubscribe(this._updateInfoTableData)}}var C=o(43384),x=o(37016),E=o(55179);const k=(0,u.getLogger)("Trading.OrderPanel");class M extends s.PureComponent{constructor(e){super(e),this._block=null,this._setRef=e=>{this._block=e},this._onEnter=e=>{const t=(0,c.hashFromEvent)(e);if(!(13!==t&&t!==c.hashShiftPlusEnter||this.props.model.disabled.value()))return a.CheckMobile.any()?this._blur():void this.props.model.doneButtonClick()},this._blur=()=>{document.activeElement instanceof HTMLElement?document.activeElement.blur():k.logWarn("Failed to deselect: active element is not HTMLElement")},this._callback=()=>this.forceUpdate()}componentDidMount(){this._subscribeToModel(this.props.model),this.props.settings.subscribe(this._callback),null!==this._block&&void 0===this.props.focus&&this._block.focus()}componentWillUnmount(){this._unsubscribeFromModel(this.props.model),this.props.settings.unsubscribe(this._callback)}render(){const{model:e,settings:t,focus:o}=this.props,n={value:t.value(),setValue:t.setValue.bind(t)},l=e.warning.value();return s.createElement(x.SettingsContext.Provider,{value:n},s.createElement("div",{className:E.positionWidget,onKeyDown:this._onEnter,tabIndex:-1,ref:this._setRef},s.createElement(m.HeaderContainer,{model:e.headerModel,supportBrackets:!0,currency:e.currency,mode:e.mode.value(),showRiskControls:e.showRiskControls}),s.createElement("div",{className:E.brackets},s.createElement(p.BracketControlGroup,{model:e,focus:o})),Array.isArray(e.customFieldModels.value())&&e.customFieldModels.value().length>0&&s.createElement("div",{className:E.customFieldsWrapper},s.createElement("div",{className:E.separator}),s.createElement(C.CustomFields,{customFieldModels:e.customFieldModels.value(),status:e.status,alwaysShowAttachedErrors:e.isEmptyRequiredCustomFieldsHighlighted})),l&&s.createElement(d.Informer,{className:E.warning,content:l,informerIntent:"default"}),s.createElement("div",{className:E.button},s.createElement(h.PlaceAndModifyButtonContainer,{model:e})),e.mode.value()===b.OrderEditorDisplayMode.Panel&&null!==e.positionInfoModel&&e.positionInfoModel.infoTableData().value().rows.length>0&&s.createElement(s.Fragment,null,s.createElement("div",{className:E.separator}),s.createElement(f,{"data-name":"position-info",model:e.positionInfoModel}))))}_subscribeToModel(e){this.props.model.disabled.subscribe(this._callback),this.props.model.loading.subscribe(this._callback),this.props.model.mode.subscribe(this._callback),this.props.model.warning.subscribe(this._callback)}_unsubscribeFromModel(e){this.props.model.disabled.unsubscribe(this._callback),
this.props.model.loading.unsubscribe(this._callback),this.props.model.mode.unsubscribe(this._callback),this.props.model.warning.unsubscribe(this._callback)}}var B=o(4311),_=o(91673),y=o(41750);const T=s.memo(e=>{const{model:t,isOpened:o,settings:n,focus:a,onOpen:c,onClose:d}=e;return(0,_.useCommonDialogHandlers)({isOpened:o,onOpen:c,onClose:d}),s.createElement(r.MatchMedia,{rule:B.DialogBreakpoints.TabletSmall},e=>s.createElement(i.PopupDialog,{className:y.dialog,isOpened:o,onKeyDown:u,width:414,fullscreen:e},s.createElement(l.Body,{className:y.dialogBody},t&&n&&s.createElement(M,{settings:n,model:t,key:t.id,focus:a}))));function u(e){27===e.keyCode&&d&&d()}});var L=o(27827);class D extends s.PureComponent{constructor(e){super(e),this._onKeyDown=e=>{27===e.keyCode&&this.props.onCancel&&this.props.onCancel()}}render(){return s.createElement("div",{className:L.positionPanel,onKeyDown:this._onKeyDown},s.createElement(M,{settings:this.props.settings,model:this.props.model,focus:this.props.focus,key:this.props.model.id}))}}let I=null,N=!1;function P(e){const{viewModel:t,settings:o,focus:s,onClose:l,onOpen:i}=e;X(l);const r={model:t,settings:o,isOpened:!0,focus:s,onOpen:i,onClose:()=>{X(l),t.onDoneButtonClicked.reject(),void 0!==r.onClose&&(t.headerModel.pinButtonClicked().unsubscribe(null,r.onClose),t.headerModel.closeButtonClicked().unsubscribe(null,r.onClose)),I&&(n.unmountComponentAtNode(I),N=!1)}};F(r),N=!0,void 0!==r.onClose&&(t.headerModel.pinButtonClicked().subscribe(null,r.onClose),t.headerModel.closeButtonClicked().subscribe(null,r.onClose))}function X(e){N&&(F({model:null,isOpened:!1}),null==e||e())}function F(e){I||(I=document.createElement("div"),document.body.appendChild(I));const t=s.createElement(b.Context.Provider,{value:{mode:e.model&&e.model.mode.value()||b.OrderEditorDisplayMode.Panel,supportTrailingStop:Boolean(e.model&&e.model.supportTrailingStop)}},s.createElement(T,{...e}));n.render(t,I)}function R(e,t,o,l){W(e,o);const i={model:e,settings:t,focus:l,onClose:()=>{W(e,o),i.model.headerModel.pinButtonClicked().unsubscribe(null,i.onClose),i.model.headerModel.closeButtonClicked().unsubscribe(null,i.onClose)},onCancel:()=>{i.model.headerModel&&i.model.headerModel.back()}};i.model.headerModel.pinButtonClicked().subscribe(null,i.onClose),i.model.headerModel.closeButtonClicked().subscribe(null,i.onClose),function(e,t){const o=s.createElement(b.Context.Provider,{value:{mode:e.model.mode.value(),supportTrailingStop:Boolean(e.model.supportTrailingStop)}},s.createElement(D,{...e}));n.render(o,t)}(i,o)}function W(e,t){n.unmountComponentAtNode(t)}},69192:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0zm4.15 5.87a.75.75 0 0 0-1.3-.74l-3.51 6.15-2.31-2.31a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.18-.16l4-7z"/></svg>'},90641:e=>{
e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0zM7.75 5.48a1.27 1.27 0 1 1 2.5 0l-.67 4.03a.59.59 0 0 1-1.16 0l-.67-4.03zM8 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/></svg>'},22890:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1z"/></svg>'},27214:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="23" height="23"><path stroke="currentColor" stroke-width="1.2" d="M1 1l21 21m0-21L1 22"/></svg>'},43101:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>'},42998:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path stroke="currentColor" stroke-width="1.2" d="M1 1l11 11m0-11L1 12"/></svg>'},83448:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11" width="11" height="11"><path stroke="currentColor" stroke-width="1.2" d="M1 1l9 9m0-9l-9 9"/></svg>'},42782:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="9" height="9"><path stroke="currentColor" stroke-width="1.2" d="M1 1l7 7m0-7L1 8"/></svg>'}}]);