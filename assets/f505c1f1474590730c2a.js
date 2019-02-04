(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{6054:function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(2),i=(r=o)&&r.__esModule?r:{default:r},u=n(0);t.default={trigger:function(e){i.default.dirtyDispatch({type:u.ActionTypes.EXPERIMENT_TRIGGER,experimentDescriptor:e})},register:function(e,t){i.default.dispatch({type:u.ActionTypes.EXPERIMENT_REGISTER,store:e,renderFunctions:t})},registerSurveys:function(e){i.default.dispatch({type:u.ActionTypes.EXPERIMENT_REGISTER_SURVEY,surveys:e})},overrideType:function(e,t){i.default.dispatch({type:u.ActionTypes.EXPERIMENT_OVERRIDE_TYPE,experimentId:e,experimentType:t})},overrideBucket:function(e,t){i.default.dispatch({type:u.ActionTypes.EXPERIMENT_OVERRIDE_BUCKET,experimentId:e,experimentBucket:t})}},e.exports=t.default},6063:function(e,t,n){"use strict";t.__esModule=!0;var r,o,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var i=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===u)t.children=o;else if(u>1){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+3];t.children=c}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),c=S(n(9)),s=n(226),l=n(106),f=S(n(94)),p=S(n(75)),d=S(n(81)),E=S(n(6)),_=n(0),I=S(n(5581));function S(e){return e&&e.__esModule?e:{default:e}}var h={MINI:"Mini",SMALL:"Small",MEDIUM:"Medium",LARGE:"Large",XLARGE:"XLarge"},v=((o={})[h.MINI]=[12,12,10,10,8,6,4],o[h.SMALL]=[14,14,12,12,10,8,6],o[h.MEDIUM]=[16,16,14,14,12,10,8],o[h.LARGE]=[18,18,16,16,14,12,10],o[h.XLARGE]=[20,20,18,18,16,14,12],o),y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.renderAcronym=function(){var e=this.props.guild;return null!=e.icon?null:e.acronym},t.prototype.renderVerifiedIcon=function(){var e=this.props,t=e.showVerified,n=e.guild,r=e.verifiedIconOuterColor;return!t||!n.hasFeature||n.hasFeature&&!n.hasFeature(_.GuildFeatures.VERIFIED)?null:u(f.default,{color:f.default.Colors.BRAND,text:E.default.Messages.GUILD_VERIFIED},void 0,u(p.default,{className:I.default.verifiedIcon,name:p.default.Names.VERIFIED,outer:r,inner:_.Colors.BRAND,checkmark:_.Colors.WHITE}))},t.prototype.renderIcon=function(){var e,t=this.props,n=t.guild,r=t.iconSrc,o=t.className,u=(t.showVerified,t.active),s=t.size,f=t.style,p=t.textScale,E=(t.showTooltip,t.tooltipPosition,t.onClick),_=t.to,S=(t.verifiedIconOuterColor,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["guild","iconSrc","className","showVerified","active","size","style","textScale","showTooltip","tooltipPosition","onClick","to","verifiedIconOuterColor"])),h=v[s],y=null==n.icon?{fontSize:(h[n.acronym.length]||h[h.length-1])*p}:{backgroundImage:"url('"+(r||n.getIconURL&&n.getIconURL()||"")+"')"};return a.createElement(d.default,i({className:(0,c.default)(I.default.icon,o,(0,l.getClass)(I.default,"iconSize",s),(e={},e[(0,l.getClass)(I.default,"iconActive",s)]=u,e[I.default.iconInactive]=!u,e[I.default.noIcon]=null==n.icon,e)),style:i({},y,f),onClick:null!=_||null==E?null:E},S),this.renderAcronym(),this.renderVerifiedIcon())},t.prototype.renderTooltip=function(){var e=this.props,t=e.guild,n=e.showTooltip,r=e.tooltipPosition;return n?u(f.default,{text:t.name,position:r},void 0,this.renderIcon()):this.renderIcon()},t.prototype.render=function(){var e=this.props,t=e.to,n=e.guild;return null!=t?u(s.Link,{to:t,"aria-label":n.toString()},void 0,this.renderTooltip()):this.renderTooltip()},t}(a.PureComponent);y.Sizes=h,y.defaultProps={size:h.LARGE,textScale:1,showVerified:!1,showTooltip:!1,active:!1,tooltipPosition:f.default.Positions.TOP,verifiedIconOuterColor:_.Colors.WHITE},y.displayName="GuildIcon",t.default=y,e.exports=t.default},6109:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n(3)),i=s(n(2)),u=s(n(6750)),a=n(0),c=n(286);function s(e){return e&&e.__esModule?e:{default:e}}var l={},f=new Set;function p(e,t){var n=r({code:e,state:a.InviteStates.RESOLVING},l[e]);t(n),l[e]=r({},n)}function d(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!f.has(e.channel_id))return!1;var t=(0,c.findInvites)(e.content);if(null==t||0===t.length)return!1;t.forEach(function(e){null==l[e]&&(E({code:e}),(0,c.resolveInvite)(e).then(function(e){var t=e.invite,n=e.code;null!=t?i.default.dispatch({type:a.ActionTypes.INVITE_RESOLVE_SUCCESS,invite:t,code:n}):i.default.dispatch({type:a.ActionTypes.INVITE_RESOLVE_FAILURE,code:n})}))})}function E(e){l[e.code]={code:e.code,state:a.InviteStates.RESOLVING}}function _(e){return p(e.code,function(e){e.state=a.InviteStates.EXPIRED})}function I(e){return d(e.message,!0)}function S(e){var t=e.channelId,n=e.messages;f.add(t),n.forEach(function(e){return d(e,!0)})}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getInvite=function(e){return l[e]},t.prototype.getInvites=function(e){return null!=e?(0,u.default)(l).filter(function(t){return null!=t.guild&&t.guild.id===e}):(0,u.default)(l)},t}(o.default.Store);t.default=new h(i.default,{CONNECTION_OPEN:function(e){return f.clear(),!1},CHANNEL_SELECT:function(e){var t=e.channelId;return null!=t&&f.add(t),!1},INVITE_RESOLVE:E,INVITE_RESOLVE_SUCCESS:function(e){return p(e.code,function(t){t.state=a.InviteStates.RESOLVED,t.guild=e.invite.guild,t.channel=e.invite.channel,t.inviter=e.invite.inviter,t.approximate_member_count=null!=e.invite.approximate_member_count?e.invite.approximate_member_count:null,t.approximate_presence_count=null!=e.invite.approximate_presence_count?e.invite.approximate_presence_count:null})},INVITE_RESOLVE_FAILURE:_,INSTANT_INVITE_REVOKE_SUCCESS:_,INVITE_ACCEPT:function(e){return p(e.code,function(e){e.state=a.InviteStates.ACCEPTED})},INVITE_ACCEPT_SUCCESS:function(e){return p(e.code,function(t){t.state=a.InviteStates.ACCEPTED,t.guild=e.invite.guild,t.channel=r({},t.channel,e.invite.channel)})},INVITE_ACCEPT_FAILURE:function(e){return p(e.code,function(e){e.state=a.InviteStates.EXPIRED})},INVITE_APP_OPENING:function(e){return p(e.code,function(e){e.state=a.InviteStates.APP_OPENING})},INVITE_APP_OPENED:function(e){return p(e.code,function(e){e.state=a.InviteStates.APP_OPENED})},INVITE_NATIVE_APP_MODAL_OPENING:function(e){return p(e.code,function(e){e.nativeAppState=a.NativeAppStates.OPENING})},INVITE_NATIVE_APP_MODAL_OPENED:function(e){return p(e.code,function(e){e.nativeAppState=a.NativeAppStates.OPEN})},INVITE_NATIVE_APP_MODAL_OPEN_FAILED:function(e){return p(e.code,function(e){e.nativeAppState=a.NativeAppStates.OPEN_FAIL})},INVITE_APP_NOT_OPENED:function(e){return p(e.code,function(e){e.state=a.InviteStates.APP_NOT_OPENED})},MESSAGE_CREATE:I,MESSAGE_UPDATE:I,LOAD_MESSAGES_SUCCESS:S,LOAD_MESSAGES_AROUND_SUCCESS:S,LOAD_RECENT_MENTIONS_SUCCESS:function(e){e.messages.forEach(function(e){return d(e)})},LOAD_PINNED_MESSAGES_SUCCESS:function(e){e.messages.forEach(function(e){return d(e)})},SEARCH_FINISH:function(e){e.messages.forEach(function(e){e.forEach(function(e){return d(e)})})}}),e.exports=t.default},6130:function(e,t,n){"use strict";t.__esModule=!0;var r=l(n(3)),o=l(n(2)),i=l(n(7)),u=n(387),a=n(953),c=l(n(6749)),s=n(0);function l(e){return e&&e.__esModule?e:{default:e}}var f={},p=new Set,d=new Set,E=new Set,_={},I=new Set,S={},h={},v=null,y=null,C=new Set;function O(e){var t=c.default.createFromServer(e),n=t.code;null!=f[n]?f[n]=f[n].merge(t):f[n]=t}function m(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!C.has(e.channel_id))return!1;var t=(0,u.findGiftCodes)(e.content);return 0!==t.length&&(t.forEach(function(e){p.has(e)||E.has(e)||(A({code:e}),o.default.wait(function(){return(0,a.resolveGiftCode)(e,!1,!0).catch(s.NOOP_NULL)}))}),!1)}function A(e){var t=e.code;p.add(t)}function T(e){return m(e.message,!0)}function b(e){var t=e.channelId,n=e.messages;C.add(t),n.forEach(function(e){return m(e,!0)})}var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.isOpen=function(){return null!=v},t.prototype.getProps=function(){return{giftCode:null!=v?f[v]:null,channelContext:y}},t.prototype.get=function(e){return f[e]},t.prototype.getError=function(e){return null!=e?h[e]:null},t.prototype.getForGifterSKUAndPlan=function(e,t,n){return i.default.values(f).filter(function(r){return r.userId===e&&r.skuId===t&&(null==n||r.subscriptionPlanId===n)})},t.prototype.getIsResolved=function(e){return E.has(e)},t.prototype.getIsAccepting=function(e){return d.has(e)},t.prototype.getNativeAppState=function(e){return _[e]},t.prototype.getUserGiftCodesFetchingForSKUAndPlan=function(e,t){return I.has((0,u.makeComboId)(e,t))},t.prototype.getUserGiftCodesLoadedAtForSKUAndPlan=function(e,t){return S[(0,u.makeComboId)(e,t)]},t.prototype.getResolvingCodes=function(){return Array.from(p)},t.prototype.getResolvedCodes=function(){return Array.from(E)},t.prototype.getAcceptingCodes=function(){return Array.from(d)},t.prototype.getChannelContext=function(){return y},t}(r.default.Store);t.default=new N(o.default,{CONNECTION_OPEN:function(e){return C.clear(),!1},CHANNEL_SELECT:function(e){var t=e.channelId;return null!=t&&C.add(t),!1},GIFT_CODE_RESOLVE:A,GIFT_CODE_RESOLVE_SUCCESS:function(e){var t=e.giftCode;return p.delete(t.code),E.add(t.code),O(t)},GIFT_CODE_RESOLVE_FAILURE:function(e){var t=e.code;p.delete(t),E.add(t)},GIFT_CODE_REDEEM:function(e){var t=e.code;d.add(t)},GIFT_CODE_REDEEM_SUCCESS:function(e){var t=e.code;d.delete(t);var n=f[t];null!=n&&(f[t]=n.merge({redeemed:!0,uses:n.uses+1}))},GIFT_CODE_REDEEM_FAILURE:function(e){var t=e.code,n=e.error;d.delete(t);var r=f[t];if(h[t]=n,null!=r)switch(n.code){case s.AbortCodes.UNKNOWN_GIFT_CODE:f[t]=r.set("revoked",!0);break;case s.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:f[t]=r.set("uses",r.maxUses)}},GIFT_CODE_REVOKE_SUCCESS:function(e){var t=e.code;delete f[t],E.add(t)},GIFT_CODE_CREATE_SUCCESS:function(e){O(e.giftCode)},GIFT_CODES_FETCH:function(e){var t=e.skuId,n=e.subscriptionPlanId;I.add((0,u.makeComboId)(t,n))},GIFT_CODES_FETCH_SUCCESS:function(e){var t=e.giftCodes,n=e.skuId,r=e.subscriptionPlanId;t.forEach(O);var o=(0,u.makeComboId)(n,r);S[o]=Date.now(),I.delete(o)},GIFT_CODES_FETCH_FAILURE:function(e){var t=e.skuId,n=e.subscriptionPlanId;I.delete((0,u.makeComboId)(t,n))},GIFT_CODE_NATIVE_APP_MODAL_OPEN:function(e){var t=e.code;_[t]=s.NativeAppStates.OPENING},GIFT_CODE_NATIVE_APP_MODAL_OPEN_SUCCESS:function(e){var t=e.code;_[t]=s.NativeAppStates.OPEN},GIFT_CODE_NATIVE_APP_MODAL_OPEN_FAILURE:function(e){var t=e.code;_[t]=s.NativeAppStates.OPEN_FAIL},MESSAGE_CREATE:T,MESSAGE_UPDATE:T,LOAD_MESSAGES_SUCCESS:b,LOAD_MESSAGES_AROUND_SUCCESS:b,LOAD_RECENT_MENTIONS_SUCCESS:function(e){e.messages.forEach(function(e){return m(e)})},LOAD_PINNED_MESSAGES_SUCCESS:function(e){e.messages.forEach(function(e){return m(e)})},SEARCH_FINISH:function(e){e.messages.forEach(function(e){e.forEach(function(e){return m(e)})})},GIFT_CODE_MODAL_OPEN:function(e){var t=e.code,n=e.channelId;v=t,y=n},GIFT_CODE_MODAL_CLOSE:function(e){return v=null,void(y=null)},GIFT_CODE_UPDATE:function(e){var t=e.uses,n=e.code,r=f[n];null!=r&&(f[n]=r.set("uses",Math.max(r.uses,t)))}}),e.exports=t.default},6162:function(e,t,n){"use strict";t.__esModule=!0;var r=u(n(3)),o=u(n(2)),i=(n(0),u(n(7628)));function u(e){return e&&e.__esModule?e:{default:e}}var a={},c={},s=new Set;function l(e){var t=i.default.createFromServer(e),n=t.skuId;a[t.id]=t;var r=c[n];null!=r?r.add(t.id):c[n]=new Set([t.id])}[{currency:"usd",id:"511651880837840896",interval:1,interval_count:1,name:"Nitro Monthly",price:999,sku_id:"521847234246082599",tax_inclusive:!0},{sku_id:"521847234246082599",name:"Nitro Annually",currency:"usd",price:9999,interval:2,interval_count:1,tax_inclusive:!0,id:"511651885459963904"},{sku_id:"521846918637420545",name:"Nitro Classic Monthly",currency:"usd",price:499,interval:1,interval_count:1,tax_inclusive:!0,id:"511651871736201216"},{sku_id:"521846918637420545",name:"Nitro Classic Annually",currency:"usd",price:4999,interval:2,interval_count:1,tax_inclusive:!0,id:"511651876987469824"}].forEach(l);var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getForSKU=function(e){return Array.from(c[e]||[]).map(function(e){return a[e]})},t.prototype.get=function(e){return a[e]},t.prototype.isFetchingForSKU=function(e){return s.has(e)},t}(r.default.Store);t.default=new f(o.default,{SUBSCRIPTION_PLANS_FETCH:function(e){var t=e.skuId;s.add(t)},SUBSCRIPTION_PLANS_FETCH_SUCCESS:function(e){var t=e.skuId,n=e.subscriptionPlans;c[t]=new Set,n.forEach(l),s.delete(t)},SUBSCRIPTION_PLANS_FETCH_FAILURE:function(e){var t=e.skuId;s.delete(t)},GIFT_CODE_RESOLVE_SUCCESS:function(e){var t=e.giftCode;null!=t.subscription_plan&&l(t.subscription_plan)},ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS:function(e){var t=e.entitlements,n=Array.isArray(t),r=0;for(t=n?t:t[Symbol.iterator]();;){var o;if(n){if(r>=t.length)break;o=t[r++]}else{if((r=t.next()).done)break;o=r.value}var i=o;null!=i.subscription_plan&&l(i.subscription_plan)}}}),e.exports=t.default},6749:function(e,t,n){"use strict";t.__esModule=!0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(5)),i=a(n(59)),u=n(0);function a(e){return e&&e.__esModule?e:{default:e}}n(197);var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.createFromServer=function(e){return new t({userId:null!=e.user?e.user.id:null,code:e.code,skuId:e.sku_id,uses:e.uses,maxUses:e.max_uses,storeListingId:null!=e.store_listing?e.store_listing.id:null,expiresAt:null!=e.expires_at?(0,o.default)(e.expires_at):null,redeemed:e.redeemed,subscriptionPlanId:null!=e.subscription_plan?e.subscription_plan.id:e.subscription_plan_id,revoked:!1})},t.prototype.initialize=function(e){this.userId=e.userId,this.code=e.code,this.skuId=e.skuId,this.uses=e.uses,this.maxUses=e.maxUses,this.expiresAt=e.expiresAt,this.redeemed=e.redeemed,this.storeListingId=e.storeListingId,this.subscriptionPlanId=e.subscriptionPlanId,this.revoked=e.revoked},t.prototype.toString=function(){return this.code},r(t,[{key:"isExpired",get:function(){var e=this.expiresAt;return null!=e&&(0,o.default)().isAfter(e)}},{key:"hasMultipleCopies",get:function(){return this.maxUses>1}},{key:"isClaimed",get:function(){return this.uses>=this.maxUses}},{key:"remainingUses",get:function(){return this.maxUses-this.uses}},{key:"isSubscription",get:function(){return null!=this.subscriptionPlanId}},{key:"premiumSubscriptionType",get:function(){return this.isSubscription&&u.PremiumSubscriptionSKUToPremiumType[this.skuId]||null}},{key:"analyticsData",get:function(){return{gift_code:this.code,gift_code_max_uses:this.maxUses}}}]),t}(i.default);t.default=c,e.exports=t.default},7628:function(e,t,n){"use strict";t.__esModule=!0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(59),u=(r=i)&&r.__esModule?r:{default:r},a=n(0);var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.createFromServer=function(e){return new t({id:e.id,name:e.name,interval:e.interval,intervalCount:e.interval_count,taxInclusive:e.tax_inclusive,skuId:e.sku_id,currency:e.currency,price:e.price})},t.prototype.initialize=function(e){this.id=e.id,this.name=e.name,this.interval=e.interval,this.intervalCount=e.intervalCount,this.taxInclusive=e.taxInclusive,this.skuId=e.skuId,this.currency=e.currency,this.price=e.price},o(t,[{key:"premiumSubscriptionType",get:function(){switch(this.skuId){case a.PremiumSubscriptionSKUs.LEGACY:case a.PremiumSubscriptionSKUs.TIER_2:return a.PremiumTypes.TIER_2;case a.PremiumSubscriptionSKUs.TIER_1:return a.PremiumTypes.TIER_1;default:return null}}}]),t}(u.default);t.default=c,e.exports=t.default}}]);
//# sourceMappingURL=f505c1f1474590730c2a.js.map