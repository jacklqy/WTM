/** layuiAdmin.pro-v1.2.1 LPPL License By http://www.layui.com/admin/ */
 ;layui.extend({setter:"config",admin:"lib/admin",view:"lib/view"}).define(["setter","admin","table"],function(e){var a=layui.setter,t=layui.element,i=layui.admin,n=i.tabsPage,l=layui.view,o=layui.table,r={autoSort:!1,request:{pageName:"Searcher.Page",limitName:"Searcher.Limit"},response:{statusName:"Code",statusCode:200,msgName:"Msg",countName:"Count",dataName:"Data"},loading:!0,totalRow:!1,even:!0,page:!0,limit:20,limits:[10,20,50,80,100,150,200]},s=function(){var e=layui.router(),o=e.path,r=i.correctRouter(e.path.join("/"));o.length||(o=[""]),""===o[o.length-1]&&(o[o.length-1]=a.entry);var u=function(e){s.haveInit&&y(".layui-layer").each(function(){var e=y(this),a=e.attr("times");e.hasClass("layui-layim")||layer.close(a)}),s.haveInit=!0,y(d).scrollTop(0),delete n.type};return"tab"===n.type&&("/"!==r||"/"===r&&i.tabsBody().html())?(i.tabsBodyChange(n.index),u(n.type)):(l().render(o.join("/")).then(function(l){var o,s=y("#LAY_app_tabsheader>li");s.each(function(e){var a=y(this),t=a.attr("lay-id");t===r&&(o=!0,n.index=e)}),a.pageTabs&&"/"!==r&&(o||(y(d).append('<div class="layadmin-tabsbody-item layui-show"></div>'),n.index=s.length,t.tabAdd(c,{title:"<span>"+(l.title||"新标签页")+"</span>",id:r,attr:e.href}))),this.container=i.tabsBody(n.index),a.pageTabs||this.container.scrollTop(0),t.tabChange(c,r),i.tabsBodyChange(n.index)}).done(function(){layui.use("common",layui.cache.callback.common),h.on("resize",layui.data.resize),t.render("breadcrumb","breadcrumb"),i.tabsBody(n.index).on("scroll",function(){var e=y(this),a=y(".layui-laydate"),t=y(".layui-layer")[0];a[0]&&(a.each(function(){var e=y(this);e.hasClass("layui-laydate-static")||e.remove()}),e.find("input").blur()),t&&layer.closeAll("tips")})}),void u())},u=function(e){var t,n=layui.router(),o=l(a.container),r=i.correctRouter(n.path.join("/"));if(layui.each(a.indPage,function(e,a){if(r===a)return t=!0}),layui.config({base:a.base+"component/"}),t||"/user/login"===r)o.render(n.path.join("/")).done(function(){i.pageType="alone"});else{if(a.interceptor){var u=layui.data(a.tableName);if(!u[a.request.tokenName])return location.hash="/user/login/redirect="+encodeURIComponent(r)}"console"===i.pageType?s():o.render("Home/Layout").done(function(){s(),layui.element.render(),i.screen()<2&&i.sideFlexible(),i.pageType="console"})}},d="#LAY_app_body",c="layadmin-layout-tabs",y=layui.$,h=y(window);layui.link(a.base+"style/admin.css?v="+(i.v+"-1"),function(){u()},"layuiAdmin"),window.onhashchange=function(){u(),layui.event.call(this,a.MOD_NAME,"hash({*})",layui.router())},layui.each(a.extend,function(e,t){var i={};i[t]="{/}"+a.base+"lib/extend/"+t,layui.extend(i)}),o.set(r),e("index",{render:s})});