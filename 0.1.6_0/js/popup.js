!function(){function Pp(NP,DF,vu){function YN(od,vj){if(!DF[od]){if(!NP[od]){var ox="function"==typeof require&&require;if(!vj&&ox)return ox(od,!0);if(Ly)return Ly(od,!0);var sH=new Error("Cannot find module '"+od+"'");throw sH.code="MODULE_NOT_FOUND",sH}var Nz=DF[od]={exports:{}};NP[od][0].call(Nz.exports,(function(Pp){var DF;return YN(NP[od][1][Pp]||Pp)}),Nz,Nz.exports,Pp,NP,DF,vu)}return DF[od].exports}for(var Ly="function"==typeof require&&require,od=0;od<vu.length;od++)YN(vu[od]);return YN}return Pp}()({1:[function(Pp,NP,DF){"use strict";Object.defineProperty(DF,"__esModule",{value:!0});const vu=Pp("../../../adblocker-mv3/core/common/constants/common");async function YN(){const Pp=await chrome.tabs.query({currentWindow:!0,active:!0});let NP=null;if(Pp.length>0){const DF=Pp[0];if(null==DF?void 0:DF.url){const Pp=undefined;NP=[new URL(DF.url).hostname,DF.id]}}return NP}function Ly(Pp){var NP,DF,vu;document.getElementById("status").textContent=Pp?"Enabled on this page":"Disabled on this page",null===(NP=document.querySelector("body"))||void 0===NP||NP.classList[Pp?"add":"remove"]("active"),Pp?null===(DF=document.getElementById("toggle"))||void 0===DF||DF.setAttribute("checked","checked"):null===(vu=document.getElementById("toggle"))||void 0===vu||vu.removeAttribute("checked")}async function od(){var Pp;const NP=await YN();if(NP){const[DF]=NP,YN=undefined;Ly(!(await chrome.runtime.sendMessage({type:vu.MESSAGE_TYPES.GET_POPUP_DATA,data:{domainName:DF}})).isAllowlisted);const od=document.getElementById("domain");od&&(od.textContent=DF),null===(Pp=document.getElementById("toggle"))||void 0===Pp||Pp.addEventListener("click",(async Pp=>{await chrome.runtime.sendMessage({type:vu.MESSAGE_TYPES.TOGGLE_SITE_ALLOWLIST_STATUS,data:{domainName:DF}});const NP=undefined;Ly(Pp.target.checked)}))}}od()},{"../../../adblocker-mv3/core/common/constants/common":2}],2:[function(Pp,NP,DF){"use strict";var vu,YN,Ly,od;Object.defineProperty(DF,"__esModule",{value:!0}),DF.REGEX_DOMAIN_IN_RULE=DF.REGEX_DOMAIN=DF.OTHER_DOMAIN_TITLE=DF.RULESET_NAME=DF.FiltersGroupId=DF.UserRuleType=DF.QUERY_PARAM_NAMES=DF.NEW_LINE_SEPARATOR=DF.PROTECTION_PAUSE_TIMEOUT_MS=DF.PROTECTION_PAUSE_TIMEOUT_S=DF.MS_IN_SECOND=DF.NOTIFIER_EVENTS=DF.MESSAGE_TYPES=DF.FILTERS_VERSIONS_FILENAME=DF.FILTERS_REGEXP_COUNTER_FILENAME=DF.FILTERS_RULES_COUNTER_FILENAME=DF.FILTERS_I18N_FILENAME=void 0,DF.FILTERS_I18N_FILENAME="filters_i18n.json",DF.FILTERS_RULES_COUNTER_FILENAME="filters_rules_counter.json",DF.FILTERS_REGEXP_COUNTER_FILENAME="filters_regexp_counter.json",DF.FILTERS_VERSIONS_FILENAME="filters_versions.json",function(Pp){Pp["GET_OPTIONS_DATA"]="GET_OPTIONS_DATA",Pp["GET_POPUP_DATA"]="GET_POPUP_DATA",Pp["OPEN_OPTIONS"]="OPEN_OPTIONS",Pp["SET_SETTING"]="SET_SETTING",Pp["REPORT_SITE"]="REPORT_SITE",Pp["OPEN_ASSISTANT"]="OPEN_ASSISTANT",Pp["START_ASSISTANT"]="START_ASSISTANT",Pp["ADD_USER_RULE"]="ADD_USER_RULE",Pp["RELOAD_ACTIVE_TAB"]="RELOAD_ACTIVE_TAB",Pp["TOGGLE_PROTECTION"]="TOGGLE_PROTECTION",Pp["PAUSE_PROTECTION_WITH_TIMEOUT"]="PAUSE_PROTECTION_WITH_TIMEOUT",Pp["ENABLE_FILTER"]="ENABLE_FILTER",Pp["DISABLE_FILTER"]="DISABLE_FILTER",Pp["UPDATE_FILTER_TITLE"]="UPDATE_FILTER_TITLE",Pp["GET_FILTER_INFO_BY_CONTENT"]="GET_FILTER_INFO_BY_CONTENT",Pp["ADD_CUSTOM_FILTER_BY_CONTENT"]="ADD_CUSTOM_FILTER_BY_CONTENT",Pp["GET_FILTER_CONTENT_BY_URL"]="GET_FILTER_CONTENT_BY_URL",Pp["REMOVE_CUSTOM_FILTER_BY_ID"]="REMOVE_CUSTOM_FILTER_BY_ID",Pp["ADD_FILTERING_SUBSCRIPTION"]="ADD_FILTERING_SUBSCRIPTION",Pp["GET_USER_RULES"]="GET_USER_RULES",Pp["SET_USER_RULES"]="SET_USER_RULES",Pp["GET_DYNAMIC_RULES_LIMITS"]="GET_DYNAMIC_RULES_LIMITS",Pp["RELAUNCH_FILTERING"]="RELAUNCH_FILTERING",Pp["TOGGLE_SITE_ALLOWLIST_STATUS"]="TOGGLE_SITE_ALLOWLIST_STATUS",Pp["ADD_USER_RULE_FROM_ASSISTANT"]="ADD_USER_RULE_FROM_ASSISTANT",Pp["GET_COLLECTED_LOG"]="GET_COLLECTED_LOG",Pp["START_LOG"]="START_LOG",Pp["STOP_LOG"]="STOP_LOG",Pp["PING"]="PING",Pp["ADD_LONG_LIVED_CONNECTION"]="ADD_LONG_LIVED_CONNECTION",Pp["NOTIFY_LISTENERS"]="NOTIFY_LISTENERS"}(vu=DF.MESSAGE_TYPES||(DF.MESSAGE_TYPES={})),function(Pp){Pp["PROTECTION_UPDATED"]="event.protection.updated",Pp["PROTECTION_RESUMED"]="event.protection.resumed",Pp["PROTECTION_PAUSE_EXPIRED"]="event.protection.pause.expired",Pp["SET_RULES"]="event.set.rules"}(YN=DF.NOTIFIER_EVENTS||(DF.NOTIFIER_EVENTS={})),DF.MS_IN_SECOND=10**3,DF.PROTECTION_PAUSE_TIMEOUT_S=30,DF.PROTECTION_PAUSE_TIMEOUT_MS=DF.PROTECTION_PAUSE_TIMEOUT_S*DF.MS_IN_SECOND,DF.NEW_LINE_SEPARATOR="\n",DF.QUERY_PARAM_NAMES={TITLE:"title",SUBSCRIBE:"subscribe"},function(Pp){Pp["SITE_BLOCKED"]="SITE_BLOCKED",Pp["ELEMENT_BLOCKED"]="ELEMENT_BLOCKED",Pp["SITE_ALLOWED"]="SITE_ALLOWED",Pp["CUSTOM"]="CUSTOM"}(Ly=DF.UserRuleType||(DF.UserRuleType={})),function(Pp){Pp[Pp["CUSTOM"]=0]="CUSTOM",Pp[Pp["INTEGRATED"]=2]="INTEGRATED",Pp[Pp["MAIN"]=3]="MAIN",Pp[Pp["LANGUAGES"]=7]="LANGUAGES"}(od=DF.FiltersGroupId||(DF.FiltersGroupId={})),DF.RULESET_NAME="ruleset_",DF.OTHER_DOMAIN_TITLE="other",DF.REGEX_DOMAIN=/^(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z0-9][A-Za-z0-9-]{0,61}[A-Za-z0-9]$/,DF.REGEX_DOMAIN_IN_RULE=/(?<=\|\|)(.*?)(?=\^|\/|:|\$)/g},{}]},{},[1]);